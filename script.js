// displaying the value of the search and calls forcast api -> function show forcast
function showTemp(response) {
  document.querySelector(`#city`).innerHTML = response.data.name;
  document.querySelector(`#current-temp`).innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(`#weather-description`).innerHTML =
    response.data.weather[0].description;
  document.querySelector(`#current-wind`).innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector(`#current-humidity`).innerHTML = Math.round(
    response.data.main.humidity
  );
  let latitude = response.data.coord.lat;
  let longitude = response.data.coord.lon;
  let apiKeyWeather = `e4d700d9f2e204bb797d9166314fc0ba`;
  let weatherForcastUrl = `https://api.openweathermap.org/data/2.5/onecall`;
  axios
    .get(
      `${weatherForcastUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKeyWeather}&units=metric`
    )
    .then(showForcast);
}

// displays forcast result
function showForcast(response) {
  document.querySelector(`#one-max`).innerHTML = Math.round(
    response.data.daily[0].temp.max
  );
  document.querySelector(`#one-min`).innerHTML = Math.round(
    response.data.daily[0].temp.min
  );

  document.querySelector(`#two-max`).innerHTML = Math.round(
    response.data.daily[1].temp.max
  );
  document.querySelector(`#two-min`).innerHTML = Math.round(
    response.data.daily[1].temp.min
  );

  document.querySelector(`#three-max`).innerHTML = Math.round(
    response.data.daily[2].temp.max
  );
  document.querySelector(`#three-min`).innerHTML = Math.round(
    response.data.daily[2].temp.min
  );

  document.querySelector(`#four-max`).innerHTML = Math.round(
    response.data.daily[3].temp.max
  );
  document.querySelector(`#four-min`).innerHTML = Math.round(
    response.data.daily[3].temp.min
  );

  document.querySelector(`#five-max`).innerHTML = Math.round(
    response.data.daily[4].temp.max
  );
  document.querySelector(`#five-min`).innerHTML = Math.round(
    response.data.daily[4].temp.min
  );

  document.querySelector(`#six-max`).innerHTML = Math.round(
    response.data.daily[5].temp.max
  );
  document.querySelector(`#six-min`).innerHTML = Math.round(
    response.data.daily[5].temp.min
  );

  document.querySelector(`#seven-max`).innerHTML = Math.round(
    response.data.daily[6].temp.max
  );
  document.querySelector(`#seven-min`).innerHTML = Math.round(
    response.data.daily[6].temp.min
  );
}

// Makes the api call on load & on search -> function show Temp
function search(city) {
  let apiKeyWeather = `e4d700d9f2e204bb797d9166314fc0ba`;
  let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather`;
  axios
    .get(`${openWeatherUrl}?q=${city}&appid=${apiKeyWeather}&units=metric`)
    .then(showTemp);
}

// storing the value of the search -> function search
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector(`#city-search`).value;
  search(city);
}

// when searching for a city -> function city search
document.querySelector(`#search`).addEventListener(`submit`, searchCity);

// city on load -> function search
search(`Berlin`);

// Time Stamp (not yet connected to the api)
let now = new Date();

let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
if (minute === 0) {
  minute = `00`;
} else if (minute < 10) {
  minute = `0${minute}`;
} else minute = minute;

document.querySelector(`#date`).innerHTML = `${day} ${hour}:${minute}`;
