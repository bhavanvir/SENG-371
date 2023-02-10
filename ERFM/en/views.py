from django.shortcuts import render
from django.http import HttpResponse

# Create a function to make a request to access html

def display(request):
    return render(request, 'en.html')

# Create a function that displays a list of possible hospitals that can be visited.

# Create a function that, when a hospital has been selected, shows the estimated wait time and the number of people in queue.

# Create a function that allows a user to update the number of people in queue.
