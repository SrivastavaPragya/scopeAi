from django.urls import path
from .views import health_check, startup_analysis

urlpatterns = [
    path("startup-analysis", startup_analysis),
    path("health", health_check)
]
