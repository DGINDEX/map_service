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

L.tileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
	attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
}).addTo(map);

//L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',{
//    attribution: 'Map data c <a href="http://openstreetmap.org">OpenStreetMap</a>',
//}).addTo(map);


function groupClick(e) {

    const number = e;

var menu = $('#slide_menu'), // スライドインするメニューを指定
    menuBtn = $('#button'), // メニューボタンを指定
    body = $(document.body),     
    menuWidth = menu.outerWidth();

    var open_check = body.attr("class");

    //body.toggleClass('open');

    var info_no = $('.info_no').val();

	$(".info_text").text("情報ナンバー"+number.no+"");

	$(".name").text(""+number.title+"");

		if(number !=""){

		    	if(info_no == number.no){

			    $("#testwrap2").slideUp();

	                    $('.info_no').val('');

			    body.removeClass();
			    $("#map").animate({'top' : 0 }, 200);

			}else{

	                    $('.info_no').val(number.no);

			    body.addClass("open");

			    $("#map").animate({'top' : '-150px'}, 200);


				$("#testwrap2").slideDown();
	    			$('#inner').scrollTop(0);
			}


		}else{

	    $("#testwrap2").slideUp();

		    body.removeClass();
		    $("#map").animate({'top' : 0 }, 200);


		}

}

var quad_x_Icon     = L.icon({ iconUrl: 'quad_x-90.png', iconRetinaUrl: 'quad_x-90.png', iconSize: [50, 50], iconAnchor: [25, 25], popupAnchor: [0, -50]});


	//マーカー生成
	const mapData = [
		{ lat : '35.052828539467384', lng : '135.9928089212755', no : '15', title:'カフェ　イエロー'}, 
		{ lat : '35.0460587074825', lng : '135.9796371027813', no : '10', title:'カレーハウス　ムスリム'}, 
	];
	for( key in mapData ){
		makeMarker(mapData[key]);
	}

	function makeMarker( mapData ){

		L.marker([mapData.lat, mapData.lng],{icon: quad_x_Icon})
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
			$("#testwrap2").slideDown();
			groupClick(mapData);
		});
	}

map.on('click', onMapClick);

function onMapClick(e) {

var menu = $('#slide_menu'), // スライドインするメニューを指定
    menuBtn = $('#button'), // メニューボタンを指定
    body = $(document.body),     
    menuWidth = menu.outerWidth();

    var open_check = body.attr("class");

    if(open_check == "open"){

	    body.removeClass();
	    $('.info_no').val('');

	    $("#testwrap2").slideUp();

	    $("#map").animate({'top' : 0 }, 200);

    }

}
