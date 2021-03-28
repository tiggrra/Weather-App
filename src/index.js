// day and time display

let now = new Date;
let hour = ("0"+now.getHours()).slice(-2);
let minute = ("0"+now.getMinutes()).slice(-2);

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekday = weekdays[now.getDay()];

let h2 = document.querySelector("h2");
h2.innerHTML = (`${weekday}, ${hour}:${minute}`);

// default location upon page load

let city = "Vienna";
let apiKey = "01bc9da346c1591ec92736f4f11269b6";
let apiEndpointCurrent = "https://api.openweathermap.org/data/2.5/weather";
let units = "metric";
let apiUrlCurrent = `${apiEndpointCurrent}?q=${city}&units=${units}&appid=${apiKey}`;
axios.get(apiUrlCurrent).then(displayWeather);

// WEATHER DISPLAY

function displayWeather(response) {
    
    // main data
    let celsiusTemp = Math.round(response.data.main.temp);
    let celsiusWind = Math.round(response.data.wind.speed*3.6);
    let currentCity = response.data.name;
    let currentCountry = response.data.sys.country;
    let currentCondition = response.data.weather[0].main;
    let currentHumidity = response.data.main.humidity;
    let h1 = document.querySelector("h1");
    h1.innerHTML = (`${currentCity}, ${currentCountry}`);
    let dispTemp = document.querySelector("#current-temp");
    dispTemp.innerHTML = (`${celsiusTemp}`);
    let dispCondition = document.querySelector("#condition");
    dispCondition.innerHTML = (`${currentCondition}`)
    let dispHumidity = document.querySelector("#humidity");
    dispHumidity.innerHTML = (`${currentHumidity}`);
    let dispWind = document.querySelector("#wind");
    dispWind.innerHTML = (`${celsiusWind}`);
}