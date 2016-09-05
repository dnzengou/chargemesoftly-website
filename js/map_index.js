(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
		};

})(Array.prototype);

var
	mapObject,
	markers = [],
		markersData = {
			'Coach': [
			{
				name: 'Bondi Beach',
				location_latitude: 50.672445, 
				location_longitude: 4.381006,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Coogee Beach',
				location_latitude: 50.620338, 
				location_longitude: 4.367002,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.683884, 
				location_longitude: 4.382723,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.618834, 
				location_longitude: 4.389718,
				map_image_url: 'img/img4.png',
				name_point: 'Themeforest',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.620573, 
				location_longitude: 4.385705,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],
			'Buddy': [
			{
				name: 'Bondi Beach',
				location_latitude: 50.624034, 
				location_longitude: 4.375517,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Coogee Beach',
				location_latitude: 50.626117, 
				location_longitude: 4.377423,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 50.616657, 
				location_longitude: 4.391992,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.616031, 
				location_longitude: 4.399481,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.617519,
				location_longitude: 131.903665,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],
			'Nutrition': [
			{
				name: 'Cronulla Beach',
				location_latitude: 50.614527, 
				location_longitude: 4.379354,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 50.612428, 
				location_longitude: 4.382980,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 50.617393, 
				location_longitude: 4.3561242,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],
			'Gym': [
			{
				name: 'Sporthal De Spuikom',
				location_latitude: 51.225930,
				location_longitude: 2.941889,
				map_image_url: 'img/img.png',
				name_point: 'Oostende',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Sporthal De Veiling',
				location_latitude: 51.210749,
				location_longitude: 2.889447,
				map_image_url: 'img/img2.png',
				name_point: 'Oostende',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Sportpark De Schorre',
				location_latitude: 51.202979,
				location_longitude: 2.923221,
				map_image_url: 'img/img3.png',
				name_point: 'Oostende',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Sportcentrum De Koninklijke Stallingen',
				location_latitude: 51.222953,
				location_longitude: 2.911419,
				map_image_url: 'img/img.png',
				name_point: 'Oostende',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'sportcentrum Mr. V-Arena',
				location_latitude: 51.203086,
				location_longitude: 2.923522,
				map_image_url: 'img/img.png',
				name_point: 'Oostende',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			]
		};

function initialize () {
	var mapOptions = {
		zoom: 9,
		center: new google.maps.LatLng(50.665656, 4.37906), // 50.619, 131.8
		mapTypeId: google.maps.MapTypeId.ROADMAP,

		mapTypeControl: false,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.LEFT_CENTER
		},
		panControl: false,
		panControlOptions: {
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		zoomControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		scaleControl: false,
		scaleControlOptions: {
			position: google.maps.ControlPosition.TOP_LEFT
		},
		streetViewControl: false,
		streetViewControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
		scrollwheel: false
	};
	var
		marker;
	mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
	for (var key in markersData)
		markersData[key].forEach(function (item) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
				map: mapObject,
				icon: 'img/icon/' + key + '.png',
			});

			if ('undefined' === typeof markers[key])
				markers[key] = [];
			markers[key].push(marker);
			google.maps.event.addListener(marker, 'mouseover', (function () {
				closeInfoBox();
				getInfoBox(item).open(mapObject, this);
				
			}));

			
		});
};

function hideAllMarkers () {
	for (var key in markers)
		markers[key].forEach(function (marker) {
			marker.setMap(null);
		});
};

function toggleMarkers (category) {
	hideAllMarkers();
	closeInfoBox();

	if ('undefined' === typeof markers[category])
		return false;
	markers[category].forEach(function (marker) {
		marker.setMap(mapObject);
		marker.setAnimation(google.maps.Animation.DROP);

	});
};

function closeInfoBox() {
	$('div.infoBox').remove();
};

function getInfoBox(item) {
	return new InfoBox({
		content:
			'<div class="marker_visit" id="marker_info">' +
			'<div class="info" id="info">'+
			'<a href="'+ item.url_point + '" class="">'+ item.name_point +'</a>' +
			'<span></span>' +
			'</div>' +
			'</div>',
		disableAutoPan: true,
		maxWidth: 0,
		pixelOffset: new google.maps.Size(40, -50),
		closeBoxMargin: '50px 0px',
		closeBoxURL: '',
		isHidden: false,
		pane: 'floatPane',
		enableEventPropagation: true
	});


};




