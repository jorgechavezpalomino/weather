from django.urls import path
from .views import test_weather

urlpatterns = [
    path('test-weather/', test_weather),
]