from django.shortcuts import render
from django.http import HttpResponse

import overpy
import numpy as np
import time

def Haversine(lon_1, lat_1, lon_2, lat_2):
    """
    This function calculates the distance between two points on the Earth's surface, given their latitude and longitude.
    """
    lon_1, lat_1, lon_2, lat_2 = map(np.radians, [lon_1, lat_1, lon_2, lat_2])
    dlon = lon_2 - lon_1
    dlat = lat_2 - lat_1
    a = np.sin(dlat/2.0)**2 + np.cos(lat_1) * np.cos(lat_2) * np.sin(dlon/2.0)**2
    c = 2 * np.arcsin(np.sqrt(a))
    km = 6367 * c
    return round(km, 1)

"""
This function queries for hospitals in the Vancouver Island area using the Overpass API, 
and then processes the results to obtain the name, longitude and latitude of each hospital. 
It then creates a list of dictionaries with this information, and passes it as a context variable
to the hospital_list.html template, which will display the hospital names and their locations on a map.
"""
def hospital_list(request):
    lon = request.GET.get('lon')
    lat = request.GET.get('lat')


    api = overpy.Overpass()
    try:
        result = api.query("""
                            [out:json];
                            area["name"="Vancouver Island"]->.boundaryarea;
                            (
                                node["amenity"="hospital"](area.boundaryarea);
                                way["amenity"="hospital"](area.boundaryarea);
                                relation["amenity"="hospital"](area.boundaryarea);
                            );
                            out center;
                            """)
    except overpy.exception.OverpassTooManyRequests:
        time.sleep(30)
        return hospital_list(request)
    
    unfiltered = {}
    for way in result.get_ways():
        nodes = way.get_nodes(resolve_missing=True)
        nodelist=[]
        if way.tags.get("name", "n/a") != "n/a":
            for node in nodes:
                nodelist.append([float(node.lon), float(node.lat)])
                unfiltered[way.tags.get("name")] = nodelist

    output = []
    for k, v in unfiltered.items():
        mean = np.mean(v, axis=0)
        if lon != None and lat != None:
            lon = np.float64(lon)
            lat = np.float64(lat)
            distance = Haversine(lon, lat, mean[0], mean[1])
            output.append({"name": k, "dist": distance})

    sorted_output = sorted(output, key=lambda k: k['dist'])
    context = {"hospitals": sorted_output}

    return render(request, 'hospital_list.html', context)

# Create a function that, when a hospital has been selected, shows the estimated wait time and the number of people in queue.

# Create a function that allows a user to update the number of people in queue.

# Currently, when the user goes to our website, they will be asked to share their location, and if they allow their location to be shared, then the map will appear 
# and their location will be pinged on the map. Next step is to, show all the hospitals that are close to the users' location. 
