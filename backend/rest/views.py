from django.shortcuts import render
from django.http import HttpResponse
from .models import Articles

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Data
from .serializer import DataSerializer



def index(request):

    data = {
        'varTitle': 'главная страница',
        'varDays': ['mon', 'wed', 'thur'],
        'varNews': Articles.objects.all()
    }

    return render(request, 'rest/index.html', data)

def start(request):
    return HttpResponse("<h1>About</h1>")



@api_view(['GET'])
def getData(request):
    app = Data.objects.all()
    serializer = DataSerializer(app, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def postData(request):
    serializer = DataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
