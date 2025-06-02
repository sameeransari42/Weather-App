const apiKey = "dd8b41177161da5bedc79a48d3027fb0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherCondition = document.querySelector(".weather-icon");

async function weather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if (data.cod != 200) return;

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
        weatherCondition.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
        weatherCondition.src = "images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherCondition.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
        weatherCondition.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
        weatherCondition.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
        weatherCondition.src = "images/mist.png";
    }
}

// Default
weather("Delhi");

searchBtn.addEventListener("click", () => {
    let city = searchInput.value;
    weather(searchInput.value);
});
