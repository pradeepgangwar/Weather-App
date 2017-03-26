
	$("#submit").click(function () {
				console.log("hi");	
              	getData();
            });	
	

	function getData(){
		var apikey= '4905e99ced7c4fa6a603bfd61571bf07';
		var cityname=$('#city-name').val();

		$.ajax({
					url: 'http://api.openweathermap.org/data/2.5/weather?q=' + cityname + "&units=metric" + "&APPID=4905e99ced7c4fa6a603bfd61571bf07",
					type: "GET",
					dataType: "jsonp",
					success: function(data){
						var values = show(data);

						$("#show").html(values); 
						$("#city-name").val('');
					}

				});

		function show(data)
		{

			var cityname=$('#city-name').val();

			return 		"<div class='city-name'><p> City name: " + $("#city-name").val() + "</p></div>"+
						"<div class='pressure'> <p>Temperature: " + (data.main.temp).toFixed(2) + " C</p></div>"+
		                "<div class='description'> <p>Weather: " + data.weather[0].main + "</p></div>" +
		                "<div class='description'> <p>Weather Description: " + data.weather[0].description + "</p></div>" +
		                "<div class='wind'> <p>Wind Speed: " + data.wind.speed + "</p></div>" +
		                "<div class='humidity'> <p>Humidity: " + data.main.humidity + "%</p></div>" +
		                "<div class='pressure'> <p>Pressure: " + data.main.pressure + " hpa</p></div>";
		}

		}

