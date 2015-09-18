document.addEventListener("DOMContentLoaded", function(event) { 

	var map;
	window.initMap = function () {
		var address = " 444 De Haro, San Francisco, CA";
		
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 20,
	    MapTypeControlOptions:{mapTypeIds:["SATELLITE"]}
	  });
	  var geocoder = new google.maps.Geocoder();
	  var address = "444 De Haro, San Francisco, CA";
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