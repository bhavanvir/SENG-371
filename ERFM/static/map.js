function initializeMap(lon, lat) {
    var map = new ol.Map({
        target: 'map',
        controls: [],
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([lon, lat]),
            zoom: 17
        })
    });

    // Add a marker to the map
    var marker = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([lon, lat])
        )
    });
    
    var markerLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [marker]
        }),
        style: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'https://openlayers.org/en/latest/examples/data/geolocation_marker.png'
            })
        }),
    });
    
    map.addLayer(markerLayer);
}