document.addEventListener("DOMContentLoaded", function(event) { 

	var map;
	window.initMap = function () {
		var address = " 444 De Haro, San Francisco, CA";
		
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 20,
	    mapTypeId: google.maps.MapTypeId.HYBRID
	  });
    map.addListener('click', showMaxZoom);

    var maxZoomService = new google.maps.MaxZoomService();
    var geocoder = new google.maps.Geocoder();
    var address = "444 De Haro, San Francisco, CA";
    var infoWindow = new google.maps.InfoWindow();

  function showMaxZoom(e) {
    maxZoomService.getMaxZoomAtLatLng(e.latLng, function(response) {
      if (response.status !== google.maps.MaxZoomStatus.OK) {
        infoWindow.setContent('Error in MaxZoomService');
      } else {
        infoWindow.setContent(
            'The maximum zoom at this location is: ' + response.zoom);
      }
      infoWindow.setPosition(e.latLng);
      infoWindow.open(map);
    });
    return response.zoom;
  }
	  function geocodeAddress(geocoder, resultsMap) {
		  // var address = document.getElementById('address').value;
		  geocoder.geocode({'address': address}, function(results, status) {
		    if (status === google.maps.GeocoderStatus.OK) {
		      resultsMap.setCenter(results[0].geometry.location);
		      var marker = new google.maps.Marker({
		        map: resultsMap,
		        position: results[0].geometry.location
		      });
		    } else {
		      alert('Geocode was not successful for the following reason: ' + status);
		    }
		  });
		}
		geocodeAddress(geocoder, map);
	}
});