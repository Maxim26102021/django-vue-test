from django.urls import include, path
from app.views import main

urlpatterns = [
    path('', main),
    path('form', main)
]