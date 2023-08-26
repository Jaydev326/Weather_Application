// if ("geolocation" in navigator) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;

//       // Display the latitude and longitude in the HTML
//       document.getElementById("latitude").textContent = latitude;
//       document.getElementById("longitude").textContent = longitude;
//     }
//   )}
//   else{
//     console.log("Geolocation is not suppported by this browser");
//   };

// function startWeather(){
//   const lat=scvd;
//   const lon= zsfd;
//   const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}`;
// };



function getWeather() {
    const apiKey = '2a1700c6afff6d1697e718282947e338'; // Replace this with your API key
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // const cityName = document.getElementById('city-name');
        // cityName.innerText='';
        // cityName.innerHTML=`<h2>${data.name}<h2>`;
        document.getElementById('city-name').innerHTML=`${data.name}`;
        
        const Time = new Date();
        const currTime = Time.toString().slice(0,25);
        document.getElementById('curr-time').innerText=`${currTime}`;
        
        // Shorter then 3-step process ,single Line
        document.getElementById("temp").innerHTML=`${Math.round(data.main.temp)}°c`;
        document.getElementById("max-temp").innerHTML=`${Math.round(data.main.temp_max)}° /`;
        document.getElementById("min-temp").innerHTML=`${Math.round(data.main.temp_min)}°`;
        
        // for the last row ,wind,humidity,clouds
        document.getElementById("wind").innerHTML=`${data.wind.speed}K/h`;
        document.getElementById("humidity").innerHTML=`${data.main.humidity}%`;
        document.getElementById("clouds").innerHTML=`${data.clouds.all}%`;
        
        
        

        const weather = document.getElementById('weather');
        weather.innerText='';
        weather.innerHTML=`<h2>${data.weather[0].description}<h2>`;
        // const weatherInfo = document.getElementById('weather-info');
        // weatherInfo.innerHTML = `
        //   <h2>${data.name}</h2>
        //   <p>Temperature: ${data.main.temp}°C</p>
        //   <h1>Temperature Feel: ${data.main.feels_like}°C</h1>
        //   <p>Weather: ${data.weather[0].main}</p>
        // `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
      });
  };