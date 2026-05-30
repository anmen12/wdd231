const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const tempHigh = document.querySelector("#temp-high");
const tempLow = document.querySelector("#temp-low");
const humidity = document.querySelector("#humidity");

const todayTemp = document.querySelector("#today-temp");
const tommorowTemp = document.querySelector("#tommorow-temp");
const afterTommorowTemp = document.querySelector("#after-tommorow-temp");

const lat = 40.49;
const lon = -111.94;
const appid = "4d1a636520aab01bb812e773ae171cee";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;

async function weatherFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const weatherData = await response.json();
            //console.log(weatherData);
            displayWeather(weatherData);
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
function displayWeather(weatherData) {
    let desc = weatherData.weather[0].description;

    currentTemp.innerHTML = `<span class="bold">${weatherData.main.temp}</span>&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

    weatherDesc.textContent = desc;

    tempHigh.innerHTML = `High: <span class="bold">${weatherData.main.temp_max}</span>&deg;F`;

    tempLow.innerHTML = `Low: <span class="bold">${weatherData.main.temp_min}</span>&deg;F`;

    humidity.innerHTML = `Humidity: <span class="bold">${weatherData.main.humidity}<span>%`;
}
weatherFetch();

async function forecastFetch() {
   try {
       const response = await fetch(forecastUrl);
       if(response.ok) {
           const forecastData = await response.json();
           //console.log(forecastData);
           displayForecast(forecastData);
       } else {
           throw Error(await response.text());
       }
   }
   catch (error) {
       console.log(error);
   }
}
function displayForecast(forecastData) {
   todayTemp.innerHTML = `Today: <span class="bold">${forecastData.list[0].main.temp}</span>&deg;F`;
   tommorowTemp.innerHTML = `Tommorow: <span class="bold">${forecastData.list[7].main.temp}</span>&deg;F`;
   afterTommorowTemp.innerHTML = `Day After Tommorow: <span class="bold">${forecastData.list[15].main.temp}</span>&deg;F`;
}
forecastFetch();
