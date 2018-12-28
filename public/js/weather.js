//02efdd64bdc14b279bc91d9247db4722
//api.openweathermap.org/data/2.5/weather?id=2172797
var log = console.log;
$.ajax({
	url: "https://api.openweathermap.org/data/2.5/weather",
	type: "get",
	dataType: "json",
	data: {
		id: "1835848",
		appid: "02efdd64bdc14b279bc91d9247db4722",
		units: "metric"
	},
	success: function(data){
		log(data);
	},
	error: function(xhr){
		log(xhr);
	}
});

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
	$(".conts").eq(n).show();
});
$(".tabs > li").eq(0).trigger("click");