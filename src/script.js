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
  if (currentTemp >= 25) {
    currentTemp = document.querySelector(`#main-icon`).classList.add(`color_a`);
  } else {
    document.querySelector(`#main-icon`).classList.add(`color_pp`);
  }

  let upcommingTempOne = Math.round(response.data.daily[0].temp.max);
  if (upcommingTempOne >= 45) {
    upcommingTempOne = document
      .querySelector(`#circle-one`)
      .classList.add(`color_a`);
  } else if (upcommingTempOne >= 40) {
    document.querySelector(`#circle-one`).classList.add(`color_b`);
  } else if (upcommingTempOne >= 35) {
    document.querySelector(`#circle-one`).classList.add(`color_c`);
  } else if (upcommingTempOne >= 30) {
    document.querySelector(`#circle-one`).classList.add(`color_d`);
  } else if (upcommingTempOne >= 25) {
    document.querySelector(`#circle-one`).classList.add(`color_e`);
  } else if (upcommingTempOne >= 20) {
    document.querySelector(`#circle-one`).classList.add(`color_f`);
  } else if (upcommingTempOne >= 15) {
    document.querySelector(`#circle-one`).classList.add(`color_g`);
  } else if (upcommingTempOne >= 10) {
    document.querySelector(`#circle-one`).classList.add(`color_h`);
  } else if (upcommingTempOne >= 5) {
    document.querySelector(`#circle-one`).classList.add(`color_i`);
  } else if (upcommingTempOne >= 0) {
    document.querySelector(`#circle-one`).classList.add(`color_j`);
  } else if (upcommingTempOne >= -5) {
    document.querySelector(`#circle-one`).classList.add(`color_k`);
  } else if (upcommingTempOne >= -10) {
    document.querySelector(`#circle-one`).classList.add(`color_l`);
  } else if (upcommingTempOne >= -15) {
    document.querySelector(`#circle-one`).classList.add(`color_m`);
  } else if (upcommingTempOne >= -20) {
    document.querySelector(`#circle-one`).classList.add(`color_n`);
  } else if (upcommingTempOne >= -25) {
    document.querySelector(`#circle-one`).classList.add(`color_o`);
  } else {
    document.querySelector(`#circle-one`).classList.add(`color_p`);
  }

  let upcommingTempTwo = Math.round(response.data.daily[1].temp.max);
  if (upcommingTempTwo >= 45) {
    upcommingTempTwo = document
      .querySelector(`#circle-two`)
      .classList.add(`color_a`);
  } else if (upcommingTempTwo >= 40) {
    document.querySelector(`#circle-two`).classList.add(`color_b`);
  } else if (upcommingTempTwo >= 35) {
    document.querySelector(`#circle-two`).classList.add(`color_c`);
  } else if (upcommingTempTwo >= 30) {
    document.querySelector(`#circle-two`).classList.add(`color_d`);
  } else if (upcommingTempTwo >= 25) {
    document.querySelector(`#circle-two`).classList.add(`color_e`);
  } else if (upcommingTempTwo >= 20) {
    document.querySelector(`#circle-two`).classList.add(`color_f`);
  } else if (upcommingTempTwo >= 15) {
    document.querySelector(`#circle-two`).classList.add(`color_g`);
  } else if (upcommingTempTwo >= 10) {
    document.querySelector(`#circle-two`).classList.add(`color_h`);
  } else if (upcommingTempTwo >= 5) {
    document.querySelector(`#circle-two`).classList.add(`color_i`);
  } else if (upcommingTempTwo >= 0) {
    document.querySelector(`#circle-two`).classList.add(`color_j`);
  } else if (upcommingTempTwo >= -5) {
    document.querySelector(`#circle-two`).classList.add(`color_k`);
  } else if (upcommingTempTwo >= -10) {
    document.querySelector(`#circle-two`).classList.add(`color_l`);
  } else if (upcommingTempTwo >= -15) {
    document.querySelector(`#circle-two`).classList.add(`color_m`);
  } else if (upcommingTempTwo >= -20) {
    document.querySelector(`#circle-two`).classList.add(`color_n`);
  } else if (upcommingTempTwo >= -25) {
    document.querySelector(`#circle-two`).classList.add(`color_o`);
  } else {
    document.querySelector(`#circle-two`).classList.add(`color_p`);
  }

  let upcommingTempThree = Math.round(response.data.daily[2].temp.max);
  if (upcommingTempThree >= 45) {
    upcommingTempThree = document
      .querySelector(`#circle-three`)
      .classList.add(`color_a`);
  } else if (upcommingTempThree >= 40) {
    document.querySelector(`#circle-three`).classList.add(`color_b`);
  } else if (upcommingTempThree >= 35) {
    document.querySelector(`#circle-three`).classList.add(`color_c`);
  } else if (upcommingTempThree >= 30) {
    document.querySelector(`#circle-three`).classList.add(`color_d`);
  } else if (upcommingTempThree >= 25) {
    document.querySelector(`#circle-three`).classList.add(`color_e`);
  } else if (upcommingTempThree >= 20) {
    document.querySelector(`#circle-three`).classList.add(`color_f`);
  } else if (upcommingTempThree >= 15) {
    document.querySelector(`#circle-three`).classList.add(`color_g`);
  } else if (upcommingTempThree >= 10) {
    document.querySelector(`#circle-three`).classList.add(`color_h`);
  } else if (upcommingTempThree >= 5) {
    document.querySelector(`#circle-three`).classList.add(`color_i`);
  } else if (upcommingTempThree >= 0) {
    document.querySelector(`#circle-three`).classList.add(`color_j`);
  } else if (upcommingTempThree >= -5) {
    document.querySelector(`#circle-three`).classList.add(`color_k`);
  } else if (upcommingTempThree >= -10) {
    document.querySelector(`#circle-three`).classList.add(`color_l`);
  } else if (upcommingTempThree >= -15) {
    document.querySelector(`#circle-three`).classList.add(`color_m`);
  } else if (upcommingTempThree >= -20) {
    document.querySelector(`#circle-three`).classList.add(`color_n`);
  } else if (upcommingTempThree >= -25) {
    document.querySelector(`#circle-three`).classList.add(`color_o`);
  } else {
    document.querySelector(`#circle-three`).classList.add(`color_p`);
  }

  let upcommingTempFour = Math.round(response.data.daily[3].temp.max);
  if (upcommingTempFour >= 45) {
    upcommingTempFour = document
      .querySelector(`#circle-four`)
      .classList.add(`color_a`);
  } else if (upcommingTempFour >= 40) {
    document.querySelector(`#circle-four`).classList.add(`color_b`);
  } else if (upcommingTempFour >= 35) {
    document.querySelector(`#circle-four`).classList.add(`color_c`);
  } else if (upcommingTempFour >= 30) {
    document.querySelector(`#circle-four`).classList.add(`color_d`);
  } else if (upcommingTempFour >= 25) {
    document.querySelector(`#circle-four`).classList.add(`color_e`);
  } else if (upcommingTempFour >= 20) {
    document.querySelector(`#circle-four`).classList.add(`color_f`);
  } else if (upcommingTempFour >= 15) {
    document.querySelector(`#circle-four`).classList.add(`color_g`);
  } else if (upcommingTempFour >= 10) {
    document.querySelector(`#circle-four`).classList.add(`color_h`);
  } else if (upcommingTempFour >= 5) {
    document.querySelector(`#circle-four`).classList.add(`color_i`);
  } else if (upcommingTempFour >= 0) {
    document.querySelector(`#circle-four`).classList.add(`color_j`);
  } else if (upcommingTempFour >= -5) {
    document.querySelector(`#circle-four`).classList.add(`color_k`);
  } else if (upcommingTempFour >= -10) {
    document.querySelector(`#circle-four`).classList.add(`color_l`);
  } else if (upcommingTempFour >= -15) {
    document.querySelector(`#circle-four`).classList.add(`color_m`);
  } else if (upcommingTempFour >= -20) {
    document.querySelector(`#circle-four`).classList.add(`color_n`);
  } else if (upcommingTempFour >= -25) {
    document.querySelector(`#circle-four`).classList.add(`color_o`);
  } else {
    document.querySelector(`#circle-four`).classList.add(`color_p`);
  }

  let upcommingTempFive = Math.round(response.data.daily[4].temp.max);
  if (upcommingTempFive >= 45) {
    upcommingTempFive = document
      .querySelector(`#circle-five`)
      .classList.add(`color_a`);
  } else if (upcommingTempFive >= 40) {
    document.querySelector(`#circle-five`).classList.add(`color_b`);
  } else if (upcommingTempFive >= 35) {
    document.querySelector(`#circle-five`).classList.add(`color_c`);
  } else if (upcommingTempFive >= 30) {
    document.querySelector(`#circle-five`).classList.add(`color_d`);
  } else if (upcommingTempFive >= 25) {
    document.querySelector(`#circle-five`).classList.add(`color_e`);
  } else if (upcommingTempFive >= 20) {
    document.querySelector(`#circle-five`).classList.add(`color_f`);
  } else if (upcommingTempFive >= 15) {
    document.querySelector(`#circle-five`).classList.add(`color_g`);
  } else if (upcommingTempFive >= 10) {
    document.querySelector(`#circle-five`).classList.add(`color_h`);
  } else if (upcommingTempFive >= 5) {
    document.querySelector(`#circle-five`).classList.add(`color_i`);
  } else if (upcommingTempFive >= 0) {
    document.querySelector(`#circle-five`).classList.add(`color_j`);
  } else if (upcommingTempFive >= -5) {
    document.querySelector(`#circle-five`).classList.add(`color_k`);
  } else if (upcommingTempFive >= -10) {
    document.querySelector(`#circle-five`).classList.add(`color_l`);
  } else if (upcommingTempFive >= -15) {
    document.querySelector(`#circle-five`).classList.add(`color_m`);
  } else if (upcommingTempFive >= -20) {
    document.querySelector(`#circle-five`).classList.add(`color_n`);
  } else if (upcommingTempFive >= -25) {
    document.querySelector(`#circle-five`).classList.add(`color_o`);
  } else {
    document.querySelector(`#circle-five`).classList.add(`color_p`);
  }

  let upcommingTempSix = Math.round(response.data.daily[5].temp.max);
  if (upcommingTempSix >= 45) {
    upcommingTempSix = document
      .querySelector(`#circle-six`)
      .classList.add(`color_a`);
  } else if (upcommingTempSix >= 40) {
    document.querySelector(`#circle-six`).classList.add(`color_b`);
  } else if (upcommingTempSix >= 35) {
    document.querySelector(`#circle-six`).classList.add(`color_c`);
  } else if (upcommingTempSix >= 30) {
    document.querySelector(`#circle-six`).classList.add(`color_d`);
  } else if (upcommingTempSix >= 25) {
    document.querySelector(`#circle-six`).classList.add(`color_e`);
  } else if (upcommingTempSix >= 20) {
    document.querySelector(`#circle-six`).classList.add(`color_f`);
  } else if (upcommingTempSix >= 15) {
    document.querySelector(`#circle-six`).classList.add(`color_g`);
  } else if (upcommingTempSix >= 10) {
    document.querySelector(`#circle-six`).classList.add(`color_h`);
  } else if (upcommingTempSix >= 5) {
    document.querySelector(`#circle-six`).classList.add(`color_i`);
  } else if (upcommingTempSix >= 0) {
    document.querySelector(`#circle-six`).classList.add(`color_j`);
  } else if (upcommingTempSix >= -5) {
    document.querySelector(`#circle-six`).classList.add(`color_k`);
  } else if (upcommingTempSix >= -10) {
    document.querySelector(`#circle-six`).classList.add(`color_l`);
  } else if (upcommingTempSix >= -15) {
    document.querySelector(`#circle-six`).classList.add(`color_m`);
  } else if (upcommingTempSix >= -20) {
    document.querySelector(`#circle-six`).classList.add(`color_n`);
  } else if (upcommingTempSix >= -25) {
    document.querySelector(`#circle-six`).classList.add(`color_o`);
  } else {
    document.querySelector(`#circle-six`).classList.add(`color_p`);
  }

  let upcommingTempSeven = Math.round(response.data.daily[6].temp.max);
  if (upcommingTempSeven >= 45) {
    upcommingTempSeven = document
      .querySelector(`#circle-seven`)
      .classList.add(`color_a`);
  } else if (upcommingTempSeven >= 40) {
    document.querySelector(`#circle-seven`).classList.add(`color_b`);
  } else if (upcommingTempSeven >= 35) {
    document.querySelector(`#circle-seven`).classList.add(`color_c`);
  } else if (upcommingTempSeven >= 30) {
    document.querySelector(`#circle-seven`).classList.add(`color_d`);
  } else if (upcommingTempSeven >= 25) {
    document.querySelector(`#circle-seven`).classList.add(`color_e`);
  } else if (upcommingTempSeven >= 20) {
    document.querySelector(`#circle-seven`).classList.add(`color_f`);
  } else if (upcommingTempSeven >= 15) {
    document.querySelector(`#circle-seven`).classList.add(`color_g`);
  } else if (upcommingTempSeven >= 10) {
    document.querySelector(`#circle-seven`).classList.add(`color_h`);
  } else if (upcommingTempSeven >= 5) {
    document.querySelector(`#circle-seven`).classList.add(`color_i`);
  } else if (upcommingTempSeven >= 0) {
    document.querySelector(`#circle-seven`).classList.add(`color_j`);
  } else if (upcommingTempSeven >= -5) {
    document.querySelector(`#circle-seven`).classList.add(`color_k`);
  } else if (upcommingTempSeven >= -10) {
    document.querySelector(`#circle-seven`).classList.add(`color_l`);
  } else if (upcommingTempSeven >= -15) {
    document.querySelector(`#circle-seven`).classList.add(`color_m`);
  } else if (upcommingTempSeven >= -20) {
    document.querySelector(`#circle-seven`).classList.add(`color_n`);
  } else if (upcommingTempSeven >= -25) {
    document.querySelector(`#circle-seven`).classList.add(`color_o`);
  } else {
    document.querySelector(`#circle-seven`).classList.add(`color_p`);
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
