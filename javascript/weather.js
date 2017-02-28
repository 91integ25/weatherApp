// Waits until DOM is ready before executing this javascript
$(document).ready(function() {
	// API ID KEY
    var appID = "e92faff31540aac5f3bd95c3910fafd9";
    // querys the JSON object for data when the search button is clicked
    $(".query_btn").click(function(){

        var query_param = $(this).prev().val();
        // Checks if the City or the ZIP field are filled out
        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
        } else if ($(this).prev().attr("placeholder") == "Zip Code") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + query_param + "&APPID=" + appID;
        }
        // Inputs the values from the object into the appropriate ID's by accesing the properties
        $.getJSON(weather,function(json){
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
            kelvin = true;
        });
    })

    // conversion formulas for Celcius, Fahrenheit, Kelvin
    // K to F = 9/5(° K - 273) + 32;
    // F to K = 5/9 (° F - 32) + 273;
    // F to C = 5/9 (° F) - 32;
    // C to F = 9/5 × ( ° C) + 32;
    // C to K = ° C + 273;
   	// K to C = ° K - 273;
   
    

    // Optional Code for temperature conversion
    var kelvin = true;
    var fahrenheit = false;
    var celcius = false;
   		
   		console.log("C:" + celcius);
    	console.log("F:" + fahrenheit);
    	console.log("K:" + kelvin);



    	//converts original value to celcius with button
    $("#convertToCelsius").click( function () {
        if (kelvin === true) {
            $("#temperature").text(Math.round($("#temperature").text() - 273));

        }
        else if(fahrenheit === true){
        	 $("#temperature").text(Math.round(((($("#temperature").text() - 32) * 5) / 9) ));
        }
        fahrenheit = false;
        kelvin = false;
        celcius = true;

        console.log("C:" + celcius);
    	console.log("F:" + fahrenheit);
    	console.log("K:" + kelvin);
    });
    	// converts original value to fahrenheit with button
    $("#convertToFahrenheit").click( function () {
        if (kelvin === true) {
            $("#temperature").text(Math.round(($("#temperature").text() -273) *(9/5) + 32));
        }
        else if(celcius === true){
        	$("#temperature").text(((Math.round($("#temperature").text() * (9/5)) + 32  )));
        }
        celcius = false; 
        kelvin = false;
        fahrenheit = true;

        console.log("C:" + celcius);
    	console.log("F:" + fahrenheit);
    	console.log("K:" + kelvin);

    });
    
});
