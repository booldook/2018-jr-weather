//02efdd64bdc14b279bc91d9247db4722
//api.openweathermap.org/data/2.5/weather?id=2172797
//api.openweathermap.org/data/2.5/forecast?id=524901

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
	$(".conts").hide();
	$(".conts").eq(n).show(function(){
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

