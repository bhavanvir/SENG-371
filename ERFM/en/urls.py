from django.urls import path
from . import views

# URLConf
urlpatterns = [
    path('', views.hospital_list)
]