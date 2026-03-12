let map;
let markers;

function initMap(){

 map = L.map('map').setView([48.85,2.35],12);

 L.tileLayer(
   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
   { maxZoom:19 }
 ).addTo(map);

 markers = L.markerClusterGroup();

 map.addLayer(markers);

}

function loadTerrains(){

 GEOJSON_DATA.forEach(t => {

   const lat = t[0];
   const lng = t[1];
   const name = t[3];

   const marker = L.marker([lat,lng]);

   marker.bindPopup(name);

   markers.addLayer(marker);

 });

}

function startApp(){

 initMap();
 loadTerrains();

}
