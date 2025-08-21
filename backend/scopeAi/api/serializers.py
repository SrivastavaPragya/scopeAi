from rest_framework import serializers
from .models import Job, Source, Result

# -------- Request body (input) --------
class StartupRequestSerializer(serializers.Serializer):
    prompt = serializers.CharField()
    # max_links = serializers.IntegerField(required=False, min_value=1, default=6)
    include_pptx = serializers.BooleanField(required=False, default=True)
    urls = serializers.ListField(
        child=serializers.URLField(), required=False, allow_empty=True
    )

# -------- DB → Response --------
class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Source
        fields = ["url", "title", "snippet"]

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = [
            "summary", "facts", "competitors", "market",
            "report_md_path", "pptx_path",
            "model_name", "generated_at",
        ]

class JobSerializer(serializers.ModelSerializer):
    sources = SourceSerializer(many=True, read_only=True)
    result = ResultSerializer(read_only=True)

    class Meta:
        model = Job
        fields = [
            "id", "prompt",  "include_pptx",
            "status", "error", "created_at", "updated_at",
            "sources", "result",
        ]
