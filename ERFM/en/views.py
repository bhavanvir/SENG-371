from django.shortcuts import render
from django.http import HttpResponse

# Create a function to make a request to access html

def display(request):
    return render(request, 'en.html')

# Create a function that displays a list of possible hospitals that can be visited.

# Create a function that, when a hospital has been selected, shows the estimated wait time and the number of people in queue.

# Create a function that allows a user to update the number of people in queue.

# Currently, when the user goes to our website, they will be asked to share their location, and if they allow their location to be shared, then the map will appear 
# and their location will be pinged on the map. Next step is to, show all the hospitals that are close to the users' location. 
