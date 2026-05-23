from django.urls import path
from .views import startup_analysis

urlpatterns = [
    path("startup-analysis", startup_analysis),
]
