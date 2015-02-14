var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 49.290240,
				lng: 1.008572
			  });
			  
			  var marker = map.addMarker({
				lat: 49.290240,
				lng: 1.008572,
	            title: 'Companie, Inc.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 49.290240,
		        lng : 1.008572
		      });
		    });
		}        

    };
}();