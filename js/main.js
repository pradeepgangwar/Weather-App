
	$("#submit").click(function () {
				var cityname=$('#city-name').val();
				$('#result1').html('');
				$('#result1').html(cityname);	
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

			$('#result2').html((data.main.temp).toFixed(2));
			$('#result3').html(data.weather[0].main);
			$('#result4').html(data.weather[0].description);
			$('#result5').html(data.wind.speed);
			$('#result6').html(data.main.humidity);
			$('#result7').html(data.main.pressure);
		}
	}

			/*return 		"<div class='pressure'> <p>Temperature: " + (data.main.temp).toFixed(2) + " C</p></div>"+
		                "<div class='description'> <p>Weather: " + data.weather[0].main + "</p></div>" +
		                "<div class='description'> <p>Weather Description: " + data.weather[0].description + "</p></div>" +
		                "<div class='wind'> <p>Wind Speed: " + data.wind.speed + "</p></div>" +
		                "<div class='humidity'> <p>Humidity: " + data.main.humidity + "%</p></div>" +
		                "<div class='pressure'> <p>Pressure: " + data.main.pressure + " hpa</p></div>";
		}*/

		

