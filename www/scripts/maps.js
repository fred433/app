function myMap() {
  
  var mapCanvas = document.getElementById("map");
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  var mapOptions = {
    center: new google.maps.LatLng(20.0825056,-98.8268188),
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoom: 12
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var request = {
    origin:"Plaza Juarez pachuca Hidalgo",
    destination:"Universidad autonoma del estado de hidalgo",
    travelMode: google.maps.TravelMode.DRIVING
  };
     
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}