var map = L.map(
    'map',
    {
        center: [35.07110022113081, 135.975439601935],
        crs: L.CRS.EPSG3857,
        zoom: 13,
  	minZoom: 12,
  	maxZoom: 17,
        zoomControl: false,
        preferCanvas: false,
        doubleClickZoom: false
    }
).on('click', ()=>L.Marker.stopAllBouncingMarkers());

//L.tileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
//	attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
//}).addTo(map);

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',{
    attribution: 'Map data c <a href="http://openstreetmap.org">OpenStreetMap</a>',
}).addTo(map);


function groupClick(e) {

    const number = e;

	$(".modal-content").html("<div><p>"+number.title+"</p></div>");

	$('.modal-container').addClass('active');

	$('.modal-close').on('click',function(){  
		$('.modal-container').removeClass('active');
		L.Marker.stopAllBouncingMarkers()
	  });


}


//var quad_x_Icon     = L.icon({className: 'modal-open'});

//var quad_x_Icon = L.divIcon({className: 'modal-open'});
	//マーカー生成
	const mapData = [
		{ lat : '35.052828539467384', lng : '135.9928089212755', no : '15', title:'カフェ　イエロー'}, 
		{ lat : '35.0460587074825', lng : '135.9796371027813', no : '10', title:'カレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリムカレーハウス　ムスリム'}, 
	];
	for( key in mapData ){
		makeMarker(mapData[key]);
	}

	function makeMarker( mapData ){

		L.marker([mapData.lat, mapData.lng])
		.addTo(map)
		.setBouncingOptions({
			bounceHeight : 10, //バウンドする高さ
			bounceSpeed : 60, //バウンドするスピード(値が低いほど速く動く)
			elastic : true,
			exclusive : true, //バウンドする際、他のマーカーは停止
		})
		.on('click', function() {
			this.toggleBouncing();
			map.setView([mapData.lat, mapData.lng]);
			groupClick(mapData);
		});
	}

map.on('click', onMapClick);

function onMapClick(e) {

	$('.modal-container').removeClass('active');

}
