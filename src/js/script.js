L.Icon.Default.imagePath = 'img/icon/';

const mymap = L.map("mapid").setView([46.9, 2.9], 6);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
  }
).addTo(mymap);

// how to add a marker
L.marker([48.9, 2.9]).addTo(mymap);


// how to add a cicle
L.circle([48.9, 2.9], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);
