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

// displays forcast result & color & set api for local time
function showForcast(response) {
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

  let currentTemp = Math.round(response.data.current.temp);
  if (currentTemp >= 45) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f66c61`;
  } else if (currentTemp >= 40) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f67d5f`;
  } else if (currentTemp >= 35) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f78a5e`;
  } else if (currentTemp >= 30) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f7955c`;
  } else if (currentTemp >= 25) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f8a35a`;
  } else if (currentTemp >= 20) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f8af58`;
  } else if (currentTemp >= 15) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f9bb56`;
  } else if (currentTemp >= 10) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f8cc70`;
  } else if (currentTemp >= 5) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#f3dda7`;
  } else if (currentTemp >= 0) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#e7f0f4`;
  } else if (currentTemp >= -5) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#dbe9ff`;
  } else if (currentTemp >= -10) {
    document.querySelector(`main-circle`).style.backgroundColor = `#bacfff`;
  } else if (currentTemp >= -15) {
    document.querySelector(`main-circle`).style.backgroundColor = `#9bb6ff`;
  } else if (currentTemp >= -20) {
    document.querySelector(`main-circle`).style.backgroundColor = `#889dff`;
  } else if (currentTemp >= -25) {
    document.querySelector(`main-circle`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`main-circle`).style.backgroundColor = `#7c60ff`;
  }

  let upcommingTempOne = Math.round(response.data.daily[0].temp.max);
  if (upcommingTempOne >= 45) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f66c61`;
  } else if (upcommingTempOne >= 40) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f67d5f`;
  } else if (upcommingTempOne >= 35) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f78a5e`;
  } else if (upcommingTempOne >= 30) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f7955c`;
  } else if (upcommingTempOne >= 25) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f8a35a`;
  } else if (upcommingTempOne >= 20) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f8af58`;
  } else if (upcommingTempOne >= 15) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f9bb56`;
  } else if (upcommingTempOne >= 10) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f8cc70`;
  } else if (upcommingTempOne >= 5) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#f3dda7`;
  } else if (upcommingTempOne >= 0) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#e7f0f4`;
  } else if (upcommingTempOne >= -5) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#dbe9ff`;
  } else if (upcommingTempOne >= -10) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#bacfff`;
  } else if (upcommingTempOne >= -15) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#9bb6ff`;
  } else if (upcommingTempOne >= -20) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#889dff`;
  } else if (upcommingTempOne >= -25) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`#circle-one`).style.backgroundColor = `#7c60ff`;
  }

  let upcommingTempTwo = Math.round(response.data.daily[1].temp.max);
  if (upcommingTempTwo >= 45) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f66c61`;
  } else if (upcommingTempTwo >= 40) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f67d5f`;
  } else if (upcommingTempTwo >= 35) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f78a5e`;
  } else if (upcommingTempTwo >= 30) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f7955c`;
  } else if (upcommingTempTwo >= 25) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f8a35a`;
  } else if (upcommingTempTwo >= 20) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f8af58`;
  } else if (upcommingTempTwo >= 15) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f9bb56`;
  } else if (upcommingTempTwo >= 10) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f8cc70`;
  } else if (upcommingTempTwo >= 5) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#f3dda7`;
  } else if (upcommingTempTwo >= 0) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#e7f0f4`;
  } else if (upcommingTempTwo >= -5) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#dbe9ff`;
  } else if (upcommingTempTwo >= -10) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#bacfff`;
  } else if (upcommingTempTwo >= -15) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#9bb6ff`;
  } else if (upcommingTempTwo >= -20) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#889dff`;
  } else if (upcommingTempTwo >= -25) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`#circle-two`).style.backgroundColor = `#7c60ff`;
  }

  let upcommingTempThree = Math.round(response.data.daily[2].temp.max);
  if (upcommingTempThree >= 45) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f66c61`;
  } else if (upcommingTempThree >= 40) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f67d5f`;
  } else if (upcommingTempThree >= 35) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f78a5e`;
  } else if (upcommingTempThree >= 30) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f7955c`;
  } else if (upcommingTempThree >= 25) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f8a35a`;
  } else if (upcommingTempThree >= 20) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f8af58`;
  } else if (upcommingTempThree >= 15) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f9bb56`;
  } else if (upcommingTempThree >= 10) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f8cc70`;
  } else if (upcommingTempThree >= 5) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#f3dda7`;
  } else if (upcommingTempThree >= 0) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#e7f0f4`;
  } else if (upcommingTempThree >= -5) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#dbe9ff`;
  } else if (upcommingTempThree >= -10) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#bacfff`;
  } else if (upcommingTempThree >= -15) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#9bb6ff`;
  } else if (upcommingTempThree >= -20) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#889dff`;
  } else if (upcommingTempThree >= -25) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`#circle-three`).style.backgroundColor = `#7c60ff`;
  }

  let upcommingTempFour = Math.round(response.data.daily[3].temp.max);
  if (upcommingTempFour >= 45) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f66c61`;
  } else if (upcommingTempFour >= 40) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f67d5f`;
  } else if (upcommingTempFour >= 35) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f78a5e`;
  } else if (upcommingTempFour >= 30) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f7955c`;
  } else if (upcommingTempFour >= 25) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f8a35a`;
  } else if (upcommingTempFour >= 20) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f8af58`;
  } else if (upcommingTempFour >= 15) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f9bb56`;
  } else if (upcommingTempFour >= 10) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f8cc70`;
  } else if (upcommingTempFour >= 5) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#f3dda7`;
  } else if (upcommingTempFour >= 0) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#e7f0f4`;
  } else if (upcommingTempFour >= -5) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#dbe9ff`;
  } else if (upcommingTempFour >= -10) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#bacfff`;
  } else if (upcommingTempFour >= -15) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#9bb6ff`;
  } else if (upcommingTempFour >= -20) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#889dff`;
  } else if (upcommingTempFour >= -25) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`#circle-four`).style.backgroundColor = `#7c60ff`;
  }

  let upcommingTempFive = Math.round(response.data.daily[4].temp.max);
  if (upcommingTempFive >= 45) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f66c61`;
  } else if (upcommingTempFive >= 40) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f67d5f`;
  } else if (upcommingTempFive >= 35) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f78a5e`;
  } else if (upcommingTempFive >= 30) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f7955c`;
  } else if (upcommingTempFive >= 25) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f8a35a`;
  } else if (upcommingTempFive >= 20) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f8af58`;
  } else if (upcommingTempFive >= 15) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f9bb56`;
  } else if (upcommingTempFive >= 10) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f8cc70`;
  } else if (upcommingTempFive >= 5) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#f3dda7`;
  } else if (upcommingTempFive >= 0) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#e7f0f4`;
  } else if (upcommingTempFive >= -5) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#dbe9ff`;
  } else if (upcommingTempFive >= -10) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#bacfff`;
  } else if (upcommingTempFive >= -15) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#9bb6ff`;
  } else if (upcommingTempFive >= -20) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#889dff`;
  } else if (upcommingTempFive >= -25) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`#circle-five`).style.backgroundColor = `#7c60ff`;
  }

  let upcommingTempSix = Math.round(response.data.daily[5].temp.max);
  if (upcommingTempSix >= 45) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f66c61`;
  } else if (upcommingTempSix >= 40) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f67d5f`;
  } else if (upcommingTempSix >= 35) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f78a5e`;
  } else if (upcommingTempSix >= 30) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f7955c`;
  } else if (upcommingTempSix >= 25) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f8a35a`;
  } else if (upcommingTempSix >= 20) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f8af58`;
  } else if (upcommingTempSix >= 15) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f9bb56`;
  } else if (upcommingTempSix >= 10) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f8cc70`;
  } else if (upcommingTempSix >= 5) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#f3dda7`;
  } else if (upcommingTempSix >= 0) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#e7f0f4`;
  } else if (upcommingTempSix >= -5) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#dbe9ff`;
  } else if (upcommingTempSix >= -10) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#bacfff`;
  } else if (upcommingTempSix >= -15) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#9bb6ff`;
  } else if (upcommingTempSix >= -20) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#889dff`;
  } else if (upcommingTempSix >= -25) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`#circle-six`).style.backgroundColor = `#7c60ff`;
  }

  let upcommingTempSeven = Math.round(response.data.daily[6].temp.max);
  if (upcommingTempSeven >= 45) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f66c61`;
  } else if (upcommingTempSeven >= 40) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f67d5f`;
  } else if (upcommingTempSeven >= 35) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f78a5e`;
  } else if (upcommingTempSeven >= 30) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f7955c`;
  } else if (upcommingTempSeven >= 25) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f8a35a`;
  } else if (upcommingTempSeven >= 20) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f8af58`;
  } else if (upcommingTempSeven >= 15) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f9bb56`;
  } else if (upcommingTempSeven >= 10) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f8cc70`;
  } else if (upcommingTempSeven >= 5) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#f3dda7`;
  } else if (upcommingTempSeven >= 0) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#e7f0f4`;
  } else if (upcommingTempSeven >= -5) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#dbe9ff`;
  } else if (upcommingTempSeven >= -10) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#bacfff`;
  } else if (upcommingTempSeven >= -15) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#9bb6ff`;
  } else if (upcommingTempSeven >= -20) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#889dff`;
  } else if (upcommingTempSeven >= -25) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#8281ff`;
  } else {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#7c60ff`;
  }
}

// Makes the api call on load & on search -> function show Temp
function search(city) {
  let apiKeyWeather = `e4d700d9f2e204bb797d9166314fc0ba`;
  let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather`;
  axios
    .get(`${openWeatherUrl}?q=${city}&appid=${apiKeyWeather}&units=metric`)
    .then(showTemp);
}

//storing the value of the search -> function search
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector(`#city-search`).value;
  search(city);
}

// when searching for a city -> function searchCity
document.querySelector(`#search`).addEventListener(`submit`, searchCity);

// city on load -> function search
search(`Berlin`);
