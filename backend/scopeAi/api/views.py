from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Job, Source, Result
from .serializers import StartupRequestSerializer, JobSerializer

# yahan apne pipeline import kar
# path check kar le, agar services folder app ke andar hai toh:
from services.pipeline import run_startup_pipeline

MAX_LINKS = 4


@api_view(["POST"])
def startup_analysis(request):
    # 1) validate request body
    serializer = StartupRequestSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    data = serializer.validated_data

    prompt = data["prompt"]
    include_pptx = data["include_pptx"]
    urls = data.get("urls")

    # 2) create a job entry
    job = Job.objects.create(
        prompt=prompt,
        include_pptx=include_pptx,
        status=Job.Status.RUNNING,
        input_urls=urls or None
    )

    try:
        # 3) actual pipeline call
        result = run_startup_pipeline(prompt=prompt, urls=urls)

        # 4) sources save karo
        for src in result["sources"]:
            Source.objects.create(
                job=job,
                url=src["url"],
                title=src["title"],
                snippet=src["snippet"]
            )

        # 5) result save karo
        Result.objects.create(
            job=job,
            summary=result["summary"],
             facts=[], 
            competitors=result["competitors"],
            market=result["market"],
            report_md_path=result["artifacts"].get("report_md_path"),
            pptx_path=result["artifacts"].get("pptx_path"),
            model_name=result["model"]["name"]
        )

        # 6) job complete
        job.status = Job.Status.DONE
        job.save(update_fields=["status", "updated_at"])

        return Response(JobSerializer(job).data, status=status.HTTP_200_OK)

    except Exception as e:
        job.status = Job.Status.ERROR
        job.error = str(e)
        job.save(update_fields=["status", "error", "updated_at"])
        return Response({"job_id": str(job.id), "detail": str(e)}, status=500)
