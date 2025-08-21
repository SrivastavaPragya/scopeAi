import uuid
from django.db import models


#job is the prompt that the user provides to the system
class Job(models.Model):
    class Status(models.TextChoices):
        PENDING = "PENDING"
        RUNNING = "RUNNING"
        DONE = "DONE"
        ERROR = "ERROR"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prompt = models.TextField()
    # max_links = models.PositiveIntegerField(default=6)
    include_pptx = models.BooleanField(default=True)
    status = models.CharField(max_length=16, choices=Status.choices, default=Status.PENDING)
    error = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    input_urls = models.JSONField(blank=True, null=True)

    def __str__(self):
        return f"{self.id} | {self.status}"



#keeps the record of every webpage used in the analysis
class Source(models.Model):
    job = models.ForeignKey(Job, related_name="sources", on_delete=models.CASCADE)
    url = models.URLField(max_length=1000)
    title = models.CharField(max_length=500, blank=True, null=True)
    # store tiny preview if you want (not required)
    snippet = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)



#gives the results like summary,facts,competitors,market
class Result(models.Model):
 #Result table me har record exactly ek Job se linked hoga.
#Aur ek Job ke paas sirf ek hi Result ho sakta hai.
    job = models.OneToOneField(Job, related_name="result", on_delete=models.CASCADE)

    summary = models.TextField()
    facts = models.JSONField(default=list)          # list[str]
    competitors = models.JSONField(default=list)    # list[str]
    market = models.JSONField(default=dict)         # dict

    # artifacts (local file paths or URLs)
    report_md_path = models.CharField(max_length=1000, blank=True, null=True)
    pptx_path = models.CharField(max_length=1000, blank=True, null=True)

    model_name = models.CharField(max_length=100, default="gemini-1.5-flash-8b")
    generated_at = models.DateTimeField(auto_now_add=True)
