from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    # path('', views.index),
    # path('about', views.start),
    path('user/', views.getData),
    path('post/', views.postData),
]