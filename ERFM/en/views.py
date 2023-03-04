from django.shortcuts import render
from django.http import HttpResponse

import overpy
import numpy as np

"""
This function queries for hospitals in the Vancouver Island area using the Overpass API, 
and then processes the results to obtain the name, longitude and latitude of each hospital. 
It then creates a list of dictionaries with this information, and passes it as a context variable
to the hospital_list.html template, which will display the hospital names and their locations on a map.
"""
def hospital_list(request):
    api = overpy.Overpass()
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
        output.append({"name": k, "lon": mean[0], "lat": mean[1]})
        
    context = {"hospitals": output}

    return render(request, 'hospital_list.html', context)

# Create a function that, when a hospital has been selected, shows the estimated wait time and the number of people in queue.

# Create a function that allows a user to update the number of people in queue.

# Currently, when the user goes to our website, they will be asked to share their location, and if they allow their location to be shared, then the map will appear 
# and their location will be pinged on the map. Next step is to, show all the hospitals that are close to the users' location. 
