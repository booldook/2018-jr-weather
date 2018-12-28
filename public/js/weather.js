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