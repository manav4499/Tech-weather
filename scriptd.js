const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1aea737716msh24751055a31e096p162f0ajsneb172df97232',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`, options)
		.then(response => response.json())
		.then(response => {

			console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		}).catch(err => console.error(err));

        function getweather(city) {
            
            fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
                .then(response => response.json())
                .then(response => {
        
                    console.log(response)
                    // cloud_pct.innerHTML = response.cloud_pct
                    name1.innerHTML =city ;
                    temp.innerHTML = response.temp
                    feels_like.innerHTML = response.feels_like
                    humidity.innerHTML = response.humidity
                    min_temp.innerHTML = response.min_temp
                    max_temp.innerHTML = response.max_temp
                    wind_speed.innerHTML = response.wind_speed
                    wind_degrees.innerHTML = response.wind_degrees
                    sunrise.innerHTML = response.sunrise
                    sunset.innerHTML = response.sunset
        
                }).catch(err => console.error(err));
        
        }
        
        submit1.addEventListener("click", (e) => {
            e.preventDefault()
            city = city1.value
            getweather(city)
        })

        function getNewyork() {

            fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york`, options)
                .then(response => response.json())
                .then(response => {
                    temp1.innerHTML = response.temp
                    feels_like1.innerHTML = response.feels_like
                    humidity1.innerHTML = response.humidity
                    // min_temp1.innerHTML = response.min_temp
                    // max_temp1.innerHTML = response.max_temp
                    // wind_speed1.innerHTML = response.wind_speed
                    // wind_degrees1.innerHTML = response.wind_degrees
                    // sunrise1.innerHTML = response.sunrise
                    // sunset1.innerHTML = response.sunset  
        
                }).catch(err => console.error(err));
        
        }
        function gettoronto() {
        
            fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=toronto`, options)
                .then(response => response.json())
                .then(response => {
                    temp2.innerHTML = response.temp
                    feels_like2.innerHTML = response.feels_like
                    humidity2.innerHTML = response.humidity
                    // cloud_pct2.innerHTML = response.cloud_pct
                    // min_temp2.innerHTML = response.min_temp
                    // max_temp2.innerHTML = response.max_temp
                    // wind_speed2.innerHTML = response.wind_speed
                    // wind_degrees2.innerHTML = response.wind_degrees
                    // sunrise2.innerHTML = response.sunrise
                    // sunset2.innerHTML = response.sunset  
        
                }).catch(err => console.error(err));
        
        }
        function getmumbai() {
        
            fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai`, options)
                .then(response => response.json())
                .then(response => {
                    n
                    temp3.innerHTML = response.temp
                    feels_like3.innerHTML = response.feels_like
                    humidity3.innerHTML = response.humidity
                    // cloud_pct3.innerHTML = response.cloud_pct
                    // min_temp3.innerHTML = response.min_temp
                    // max_temp3.innerHTML = response.max_temp
                    // wind_speed3.innerHTML = response.wind_speed
                    // wind_degrees3.innerHTML = response.wind_degrees
                    // sunrise3.innerHTML = response.sunrise
                    // sunset3.innerHTML = response.sunset  
        
                }).catch(err => console.error(err));
        
        }
        function getberlin() {
        
            fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=berlin`, options)
                .then(response => response.json())
                .then(response => {
                    temp4.innerHTML = response.temp
                    feels_like4.innerHTML = response.feels_like
                    humidity4.innerHTML = response.humidity
                    // cloud_pct4.innerHTML = response.cloud_pct
                    // min_temp4.innerHTML = response.min_temp
                    // max_temp4.innerHTML = response.max_temp
                    // wind_speed4.innerHTML = response.wind_speed
                    // wind_degrees4.innerHTML = response.wind_degrees
                    // sunrise4.innerHTML = response.sunrise
                    // sunset4.innerHTML = response.sunset  
        
                }).catch(err => console.error(err));
        
        }
        // link = document.getElementsByClassName("link")
        // let i= 0;
        // while(i<link.length){
        //     link[i].addEventListener("click" , function manav(){
        //         location.assign("https://www.accuweather.com/en/in/delhi/202396/weather-forecast/202396")
        //         i++

        //     })
 
        // }
        
        
      
        getNewyork()
        gettoronto()
        getmumbai()
        getberlin()