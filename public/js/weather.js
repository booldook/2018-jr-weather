//02efdd64bdc14b279bc91d9247db4722
//api.openweathermap.org/data/2.5/weather?id=2172797
//api.openweathermap.org/data/2.5/forecast?id=524901

var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if(isMobile) {
		$(".wrap").css({"background":"none"});
		$(".tabs").css({
				"position":"static",
				"top":0, 
				"left":0, 
				"width":"100%"
		});
		$(".wrap > div").css({
			"position":"relative",
			"width":"100%",
			"top":0,  
			"height":"calc(100% - 3rem)", 
			"left":0
		});
}
else {
	$(".wrap").css({
		"background":"url(../img/iphone.png) no-repeat", 
		"background-size":"auto 100%"
	});
	$(".tabs").css({
		"position":"absolute",
		"top":"11.2%", 
		"left":"7.13%", 
		"width":"86%"
	});
	$(".wrap > div").css({
		"position":"absolute",
		"width":"86%",
		"top":"calc(11.2% + 3rem)",  
		"height":"calc(77.4% - 3rem)", 
		"left":"7.13%"
	});
	$(window).resize(function(){
		var wid = $(this).height() * 0.495;
		$(".wrap").css({"max-width":wid+"px"});
	}).trigger("resize");
}


var log = console.log;
var urlBase = "https://api.openweathermap.org/data/2.5/";

$(".tabs > li").click(function(){
	var n = $(this).index();
	$(".tabs > li").css({
		"background-color":"#f8f8f8",
		"border-bottom":"none",
		"color":"#333",
		"font-weight":"normal"
	});
	$(this).css({
		"background-color":"#f60",
		"border-bottom":"3px solid #390",
		"color":"#fff",
		"font-weight":"bold"
	});
	$(".conts").hide(0);
	$(".conts").eq(n).show(0, function(){
		if(n == 0) url = urlBase + "weather";
		else url = urlBase + "forecast";
		$.ajax({
			url: url,
			type: "get",
			dataType: "json",
			//https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=02efdd64bdc14b279bc91d9247db4722&units=metric    	//daily
			//https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=02efdd64bdc14b279bc91d9247db4722&units=metric 		//weekly
			data: {
				id: "1835848",
				appid: "02efdd64bdc14b279bc91d9247db4722",
				units: "metric"
			},
			success: function(data){
				if(n == 0) dailyFn(data);
				else weeklyFn(data);
			},
			error: function(xhr){
				log(xhr);
			}
		});
	});
});
$(".tabs > li").eq(0).trigger("click");

function dailyFn(data) {
	console.log(data);
	$("#wt_icon").attr("src", "../img/icon/"+data.weather[0].icon+".png");
	$("#wt_main").html(data.weather[0].main+" / "+data.weather[0].description);
	$("#wt_temp").html(data.main.temp+"("+data.main.temp_max+"/"+data.main.temp_min+")");
	$("#wt_wind").html(data.wind.speed+"/ms ("+data.wind.deg+"deg)");
	$("#wt_coord").html("위도: "+data.coord.lat+" / 경도: "+data.coord.lon);
}

function weeklyFn(data) {
	var html = '';
	var v = '';
	$(".weekly").empty();
	for(var i in data.list) {
		v = data.list[i];
		html = `
		<ul class="clear">
			<li><img src="../img/icon/${v.weather[0].icon}.png" class="img"></li>
			<li class="wk_time"><span>${v.dt_txt}</span></li>
			<li class="wk_main">
				<span>날씨:</span> ${v.weather[0].main}(${v.weather[0].description}) 
			</li>
			<li class="wk_temp">
				<span>온도:</span> ${v.main.temp}도 (${v.main.temp_min} / ${v.main.temp_max})</li>
			<li class="wk_wind"><span>바람:</span> ${v.wind.speed}ms(${v.wind.deg}deg)</li>
		</ul>
		`;
		$(".weekly").append(html);
	}
}

