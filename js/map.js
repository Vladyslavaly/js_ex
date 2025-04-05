'use scrict'
function myMap() {            
    var coordinates = { lat: 51.5074, lng: -0.1278 };            
    var styles = [
        {
          "elementType": "geometry",
          "stylers": [{ "color": "#f0f0f0" }]
        },
        {
          "elementType": "labels.icon",
          "stylers": [{ "visibility": "on" }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{ "color": "#5f5f5f" }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{ "color": "#ffffff" }]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{ "color": "#dcdcdc" }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{ "color": "#eaeaea" }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{ "color": "#d6f5d6" }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{ "color": "#ffffff" }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{ "color": "#f7f7f7" }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{ "color": "#e6e6e6" }]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{ "color": "#f2f2f2" }]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{ "color": "#cbe7f9" }]
        }
      ],
  map = new google.maps.Map(document.getElementById('googleMap'), {
  center: coordinates,
  zoom:10,
  }),            
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: {
      url: './assets/img/marker-modern-blue.svg',
      scaledSize: new google.maps.Size(40, 40), 
      anchor: new google.maps.Point(20, 40)     
    }
  });
  map.setOptions({styles: styles});
}

myMap()