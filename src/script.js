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
  let weatherIcon = response.data.weather[0].icon;
  console.log(weatherIcon);
  document
    .querySelector(`#main-icon`)
    .setAttribute("src", `asset/${weatherIcon}.png`);
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

// presenting local time
function showTime(response) {
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[response.data.day_of_week];
  let date = new Date();
  let hour = date.getUTCHours();
  let inte = parseInt(hour);
  let offset = parseInt(response.data.utc_offset);
  let totalHour = inte + offset;
  if (totalHour >= 24) {
    totalHour = totalHour - 24;
  } else if (totalHour < 0) {
    totalHour += 24;
  } else if (totalHour === 0) {
    totalHour = `00`;
  } else if (totalHour < 10) {
    totalHour = `0${totalHour}`;
  } else totalHour = totalHour;
  let minute = date.getMinutes();
  if (minute === 0) {
    minute = `00`;
  } else if (minute < 10) {
    minute = `0${minute}`;
  } else minute = minute;
  let localTimeStamp = document.querySelector(`#date`);
  localTimeStamp.innerHTML = `${day} ${totalHour}:${minute}`;
  let futureDays = [
    `Sun`,
    `Mon`,
    `Tue`,
    `Wed`,
    `Thu`,
    `Fri`,
    `Sat`,
    `Sun`,
    `Mon`,
    `Tue`,
    `Wed`,
    `Thu`,
    `Fri`,
    `Sat`,
  ];
  let future = futureDays[response.data.day_of_week];
  let futurePlusOne = futureDays[response.data.day_of_week + 1];
  let futurePlusTwo = futureDays[response.data.day_of_week + 2];
  let futurePlusThree = futureDays[response.data.day_of_week + 3];
  let futurePlusFour = futureDays[response.data.day_of_week + 4];
  let futurePlusFive = futureDays[response.data.day_of_week + 5];
  let futurePlusSix = futureDays[response.data.day_of_week + 6];
  document.querySelector(`#today`).innerHTML = `${future}`;
  document.querySelector(`#tomorrow`).innerHTML = `${futurePlusOne}`;
  document.querySelector(`#day-three`).innerHTML = `${futurePlusTwo}`;
  document.querySelector(`#day-four`).innerHTML = `${futurePlusThree}`;
  document.querySelector(`#day-five`).innerHTML = `${futurePlusFour}`;
  document.querySelector(`#day-six`).innerHTML = `${futurePlusFive}`;
  document.querySelector(`#day-seven`).innerHTML = `${futurePlusSix}`;
}

// displays forcast result & set api for local time
function showForcast(response) {
  console.log(response.data);
  let timezone = response.data.timezone;
  let timeUrl = `https://worldtimeapi.org/api/timezone/`;
  axios.get(`${timeUrl}${timezone}`).then(showTime);
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
  let weatherIconOne = response.data.daily[0].weather[0].icon;
  console.log(weatherIconOne);
  document
    .querySelector(`#icon-one`)
    .setAttribute("src", `asset/${weatherIconOne}.png`);
  let weatherIconTwo = response.data.daily[1].weather[0].icon;
  console.log(weatherIconTwo);
  document
    .querySelector(`#icon-two`)
    .setAttribute("src", `asset/${weatherIconTwo}.png`);
  let weatherIconThree = response.data.daily[2].weather[0].icon;
  console.log(weatherIconThree);
  document
    .querySelector(`#icon-three`)
    .setAttribute("src", `asset/${weatherIconThree}.png`);
  let weatherIconFour = response.data.daily[3].weather[0].icon;
  console.log(weatherIconFour);
  document
    .querySelector(`#icon-four`)
    .setAttribute("src", `asset/${weatherIconFour}.png`);
  let weatherIconFive = response.data.daily[4].weather[0].icon;
  console.log(weatherIconFive);
  document
    .querySelector(`#icon-five`)
    .setAttribute("src", `asset/${weatherIconFive}.png`);
  let weatherIconSix = response.data.daily[5].weather[0].icon;
  console.log(weatherIconSix);
  document
    .querySelector(`#icon-six`)
    .setAttribute("src", `asset/${weatherIconSix}.png`);
  let weatherIconSeven = response.data.daily[6].weather[0].icon;
  console.log(weatherIconSeven);
  document
    .querySelector(`#icon-seven`)
    .setAttribute("src", `asset/${weatherIconSeven}.png`);
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
