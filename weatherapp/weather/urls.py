from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('api/weather/', views.get_weather_data, name='weather_api')
]