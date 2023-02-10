from django.shortcuts import render
from django.http import HttpResponse

# make a function to make a requst to access html

def display(request):
    return render(request, 'en.html')
