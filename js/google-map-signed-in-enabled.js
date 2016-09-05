
    //<p><button onclick="geoFindMe()">Show my location</button></p>
    //<div id="out"></div>


    <script>

// This example enables Sign In by loading the Maps API with the signed_in
// parameter set to true. For example:
// https://maps.googleapis.com/maps/api/js?signed_in=true&callback=initMap


function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var mylat  = position.coords.latitude;
    var mylong = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + mylat + '° <br>Longitude is ' + mylong + '°</p>';

    var map = new google.maps.Latlng(mylat, mylong)

    //var img = new Image();
    //img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    //output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 50.665656, lng: 4.37906} 
    //lat: 50.665656, lng: 4.37906
  });
}