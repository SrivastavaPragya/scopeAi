from rest_framework.decorators import api_view
from django.conf import settings
from pathlib import Path
from rest_framework.response import Response
from rest_framework import status

from .models import Job, Source, Result
from .serializers import StartupRequestSerializer, JobSerializer
from services.pipeline import run_startup_pipeline

MAX_LINKS = 4


@api_view(["POST"])
def startup_analysis(request):
    # 1) validate request body
    serializer = StartupRequestSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    data = serializer.validated_data

    prompt = data["prompt"]
    include_pptx = data.get("include_pptx", False)   
    urls = data.get("urls")

    # 2) create a job entry
    job = Job.objects.create(
        prompt=prompt,
        include_pptx=include_pptx,
        status=Job.Status.RUNNING,
        input_urls=urls or None
    )

    try:
        # 3) pipeline call
        result = run_startup_pipeline(prompt=prompt, urls=urls, include_pptx=include_pptx)

        # 4) save sources
        for src in result.get("sources", []):
            Source.objects.create(
                job=job,
                url=src.get("url"),
                title=src.get("title"),
                snippet=src.get("snippet")
            )

        # 5) save result
        Result.objects.create(
            job=job,
            summary=result.get("summary", ""),
            facts=result.get("facts", []),
            competitors=result.get("competitors", []),
            market=result.get("market", {}),
            report_md_path=result.get("artifacts", {}).get("report_md_path"),
            pptx_path=result.get("artifacts", {}).get("pptx_path"),
            model_name=result.get("model", {}).get("name")
        )

        # 6) update job
        job.status = Job.Status.DONE
        job.save(update_fields=["status", "updated_at"])

        # return job with pptx_path also
        return Response(JobSerializer(job).data, status=status.HTTP_200_OK)

    except Exception as e:
        job.status = Job.Status.ERROR
        job.error = str(e)
        job.save(update_fields=["status", "error", "updated_at"])
        return Response({"job_id": str(job.id), "detail": str(e)}, status=500)
