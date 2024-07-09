const popupContents = {"features":[
    {
    "latlng": [35.056428598834614, 135.99960148547277],
    "image": ["images/spoon_01.jpg","images/spoon_02.jpg"],
    "txt": ["<h1>スプーン 守山店</h1><p>スリランカ産MlesnA(ムレスナ)TEAと地元契約農家で採れた新鮮な野菜を使った蒸し料理はオススメ!です。ゆったりとした空間で心も身体も癒されるカフェです。</p>","<h1>スプーン 守山店</h1><p>スリランカ産MlesnA(ムレスナ)TEAと地元契約農家で採れた新鮮な野菜を使った蒸し料理はオススメ!です。ゆったりとした空間で心も身体も癒されるカフェです。</p>"]
    },
    {
    "latlng": [35.0460587074825, 135.9796371027813],//マーカーの緯度経度
    "image": ["images/andfcafe_01.jpg","images/andfcafe_02.jpg","images/andfcafe_03.jpg"],//画像へのパスを書く
    "txt": ["<h1>and f cafe</h1><p>美味しいランチと 旬のフルーツにこだわったスイーツが楽しめる</p>","<h1>and f cafe</h1><p>季節のパフェがおススメ！</p>","<h1>and f cafe</h1><p>期間限定のパフェ</p>"]
    },
    {
    "latlng": [35.052828539467384, 135.9928089212755],//マーカーの緯度経度
    "image": ["images/cmh_01.jpg","images/cmh_02.jpg","images/cmh_03.jpg"],//画像へのパスを書く
    "txt": ["<h1>cafe mother house</h1><p>石窯で焼いたピッツァやパフェが人気</p>","<h1>cafe mother house</h1><p>石窯で焼いたピッツァやパフェが人気</p>","<h1>cafe mother house</h1><p>石窯で焼いたピッツァやパフェが人気</p>"]
    }
]}

var map = L.map(
    'map',
    {
        center: [35.07110022113081, 135.975439601935],
        crs: L.CRS.EPSG3857,
        zoom: 13,
  	minZoom: 12,
  	maxZoom: 16,
        zoomControl: false,
        preferCanvas: false,
        doubleClickZoom: false
    }
).on('click', ()=>L.Marker.stopAllBouncingMarkers());

L.tileLayer = L.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
	attribution: "<a href='https://developers.google.com/maps/documentation' target='_blank'>Google Map</a>"
}).addTo(map);

//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
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

	$(".info_text").text("情報ナンバー"+number+"");

		if(number !=""){

		    	if(info_no == number){

	                    $('.info_no').val('');

		            menu.animate({'left' : -menuWidth }, 300);
		            body.animate({'left' : 0 }, 300);

			    body.removeClass();

			}else{

	                    $('.info_no').val(number);

		            body.animate({'left' : menuWidth }, 300);
		            menu.animate({'left' : 0 }, 300);

			    body.addClass("open");

			}


		}else{

	            menu.animate({'left' : -menuWidth }, 300);
	            body.animate({'left' : 0 }, 300);

		    body.removeClass();

		}

}

//var quad_x_Icon     = L.icon({ iconUrl: 'quad_x-90.png', iconRetinaUrl: 'quad_x-90.png', iconSize: [50, 50], iconAnchor: [25, 25], popupAnchor: [0, -50]});


	//マーカー生成
	const mapData = [
		{ lat : '35.052828539467384', lng : '135.9928089212755', no : '15', title:'お店の名前'}, 
		{ lat : '35.0460587074825', lng : '135.9796371027813', no : '10', title:'お店の名前'}, 
	];
	for( key in mapData ){
		makeMarker(mapData[key]);
	}

	function makeMarker( mapData ){

		L.marker([mapData.lat, mapData.lng])
		.addTo(map)
		.bindPopup(""+mapData.title+"")
		.setBouncingOptions({
			bounceHeight : 10, //バウンドする高さ
			bounceSpeed : 60, //バウンドするスピード(値が低いほど速く動く)
			elastic : true,
			exclusive : true, //バウンドする際、他のマーカーは停止
		})
		.on('click', function() {
			this.toggleBouncing();
			groupClick(mapData.no);
			map.setView([mapData.lat, mapData.lng]);
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

            menu.animate({'left' : -menuWidth }, 300);
            body.animate({'left' : 0 }, 300);

	    body.removeClass();
	    $('.info_no').val('');

    }




}