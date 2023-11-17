from django.shortcuts import render
from django.http import HttpResponse

def main(requests):
    print(requests)
    print('HELLO')
    return HttpResponse("main page")
