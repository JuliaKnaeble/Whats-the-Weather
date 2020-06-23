// displaying the value of the search and calls forcast api -> function show forcast
function showTemp(response) {
  let city = document.querySelector(`#city`);
  city.innerHTML = response.data.name;
  celciusTemp = Math.round(response.data.main.temp);
  document.querySelector(`#current-temp`).innerHTML = celciusTemp;
  document.querySelector(`#weather-condition`).innerHTML =
    response.data.weather[0].description;
  document.querySelector(`#current-wind`).innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector(`#current-humidity`).innerHTML = Math.round(
    response.data.main.humidity
  );

  let mainConditionIcon = response.data.weather[0].icon;
  document
    .querySelector(`#condiotion-i-main`)
    .setAttribute("src", `asset/${mainConditionIcon}.png`);

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
  let future = futureDays[response.data.day_of_week + 1];
  let futurePlusOne = futureDays[response.data.day_of_week + 2];
  let futurePlusTwo = futureDays[response.data.day_of_week + 3];
  let futurePlusThree = futureDays[response.data.day_of_week + 4];
  let futurePlusFour = futureDays[response.data.day_of_week + 5];
  let futurePlusFive = futureDays[response.data.day_of_week + 6];
  let futurePlusSix = futureDays[response.data.day_of_week + 7];
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

  let smallIconOne = response.data.daily[1].weather[0].icon;
  document
    .querySelector(`#cond-i-s-one`)
    .setAttribute("src", `asset/${smallIconOne}.png`);

  let smallIconTwo = response.data.daily[2].weather[0].icon;
  document
    .querySelector(`#cond-i-s-two`)
    .setAttribute("src", `asset/${smallIconTwo}.png`);

  let smallIconThree = response.data.daily[3].weather[0].icon;
  document
    .querySelector(`#cond-i-s-three`)
    .setAttribute("src", `asset/${smallIconThree}.png`);

  let smallIconFour = response.data.daily[4].weather[0].icon;
  document
    .querySelector(`#cond-i-s-four`)
    .setAttribute("src", `asset/${smallIconFour}.png`);

  let smallIconFive = response.data.daily[5].weather[0].icon;
  document
    .querySelector(`#cond-i-s-five`)
    .setAttribute("src", `asset/${smallIconFive}.png`);

  let smallIconSix = response.data.daily[6].weather[0].icon;
  document
    .querySelector(`#cond-i-s-six`)
    .setAttribute("src", `asset/${smallIconSix}.png`);

  let smallIconSeven = response.data.daily[7].weather[0].icon;
  document
    .querySelector(`#cond-i-s-seven`)
    .setAttribute("src", `asset/${smallIconSeven}.png`);

  let currentTemp = Math.round(response.data.current.temp);
  if (currentTemp >= 44) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#801109`;
  } else if (currentTemp >= 40) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#D64338`;
  } else if (currentTemp >= 36) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FF694B`;
  } else if (currentTemp >= 32) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FF8744`;
  } else if (currentTemp >= 28) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FF9F48`;
  } else if (currentTemp >= 24) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FFB15A`;
  } else if (currentTemp >= 20) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FFC06A`;
  } else if (currentTemp >= 16) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FFD07B`;
  } else if (currentTemp >= 12) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FFE18F`;
  } else if (currentTemp >= 8) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FBE8B6`;
  } else if (currentTemp >= 4) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#FDF5DD`;
  } else if (currentTemp >= 0) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#ECF5FE`;
  } else if (currentTemp >= -4) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#DCE7FE`;
  } else if (currentTemp >= -8) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#B9CDFF`;
  } else if (currentTemp >= -12) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#93B0FF`;
  } else if (currentTemp >= -16) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#7398FF`;
  } else if (currentTemp >= -20) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#5B73F5`;
  } else if (currentTemp >= -24) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#4952D9`;
  } else if (currentTemp >= -28) {
    document.querySelector(`#main-circle`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#main-circle`).style.backgroundColor = `#2306AA`;
  }

  let upcommingTempOne = Math.round(response.data.daily[1].temp.max);
  if (upcommingTempOne >= 44) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#801109`;
  } else if (upcommingTempOne >= 40) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#D64338`;
  } else if (upcommingTempOne >= 36) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FF694B`;
  } else if (upcommingTempOne >= 32) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FF8744`;
  } else if (upcommingTempOne >= 28) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FF9F48`;
  } else if (upcommingTempOne >= 24) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FFB15A`;
  } else if (upcommingTempOne >= 20) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FFC06A`;
  } else if (upcommingTempOne >= 16) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FFD07B`;
  } else if (upcommingTempOne >= 12) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FFE18F`;
  } else if (upcommingTempOne >= 8) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FBE8B6`;
  } else if (upcommingTempOne >= 4) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#FDF5DD`;
  } else if (upcommingTempOne >= 0) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#ECF5FE`;
  } else if (upcommingTempOne >= -4) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#DCE7FE`;
  } else if (upcommingTempOne >= -8) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#B9CDFF`;
  } else if (upcommingTempOne >= -12) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#93B0FF`;
  } else if (upcommingTempOne >= -16) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#7398FF`;
  } else if (upcommingTempOne >= -20) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#5B73F5`;
  } else if (upcommingTempOne >= -24) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#4952D9`;
  } else if (upcommingTempOne >= -28) {
    document.querySelector(`#circle-one`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#circle-one`).style.backgroundColor = `#2306AA`;
  }

  let upcommingTempTwo = Math.round(response.data.daily[2].temp.max);
  if (upcommingTempTwo >= 44) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#801109`;
  } else if (upcommingTempTwo >= 40) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#D64338`;
  } else if (upcommingTempTwo >= 36) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FF694B`;
  } else if (upcommingTempTwo >= 32) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FF8744`;
  } else if (upcommingTempTwo >= 28) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FF9F48`;
  } else if (upcommingTempTwo >= 24) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FFB15A`;
  } else if (upcommingTempTwo >= 20) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FFC06A`;
  } else if (upcommingTempTwo >= 16) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FFD07B`;
  } else if (upcommingTempTwo >= 12) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FFE18F`;
  } else if (upcommingTempTwo >= 8) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FBE8B6`;
  } else if (upcommingTempTwo >= 4) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#FDF5DD`;
  } else if (upcommingTempTwo >= 0) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#ECF5FE`;
  } else if (upcommingTempTwo >= -4) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#DCE7FE`;
  } else if (upcommingTempTwo >= -8) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#B9CDFF`;
  } else if (upcommingTempTwo >= -12) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#93B0FF`;
  } else if (upcommingTempTwo >= -16) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#7398FF`;
  } else if (upcommingTempTwo >= -20) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#5B73F5`;
  } else if (upcommingTempTwo >= -24) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#4952D9`;
  } else if (upcommingTempTwo >= -28) {
    document.querySelector(`#circle-two`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#circle-two`).style.backgroundColor = `#2306AA`;
  }

  let upcommingTempThree = Math.round(response.data.daily[3].temp.max);
  if (upcommingTempThree >= 44) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#801109`;
  } else if (upcommingTempThree >= 40) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#D64338`;
  } else if (upcommingTempThree >= 36) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FF694B`;
  } else if (upcommingTempThree >= 32) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FF8744`;
  } else if (upcommingTempThree >= 28) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FF9F48`;
  } else if (upcommingTempThree >= 24) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FFB15A`;
  } else if (upcommingTempThree >= 20) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FFC06A`;
  } else if (upcommingTempThree >= 16) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FFD07B`;
  } else if (upcommingTempThree >= 12) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FFE18F`;
  } else if (upcommingTempThree >= 8) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FBE8B6`;
  } else if (upcommingTempThree >= 4) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#FDF5DD`;
  } else if (upcommingTempThree >= 0) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#ECF5FE`;
  } else if (upcommingTempThree >= -4) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#DCE7FE`;
  } else if (upcommingTempThree >= -8) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#B9CDFF`;
  } else if (upcommingTempThree >= -12) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#93B0FF`;
  } else if (upcommingTempThree >= -16) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#7398FF`;
  } else if (upcommingTempThree >= -20) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#5B73F5`;
  } else if (upcommingTempThree >= -24) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#4952D9`;
  } else if (upcommingTempThree >= -28) {
    document.querySelector(`#circle-three`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#circle-three`).style.backgroundColor = `#2306AA`;
  }

  let upcommingTempFour = Math.round(response.data.daily[4].temp.max);
  if (upcommingTempFour >= 44) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#801109`;
  } else if (upcommingTempFour >= 40) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#D64338`;
  } else if (upcommingTempFour >= 36) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FF694B`;
  } else if (upcommingTempFour >= 32) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FF8744`;
  } else if (upcommingTempFour >= 28) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FF9F48`;
  } else if (upcommingTempFour >= 24) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FFB15A`;
  } else if (upcommingTempFour >= 20) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FFC06A`;
  } else if (upcommingTempFour >= 16) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FFD07B`;
  } else if (upcommingTempFour >= 12) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FFE18F`;
  } else if (upcommingTempFour >= 8) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FBE8B6`;
  } else if (upcommingTempFour >= 4) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#FDF5DD`;
  } else if (upcommingTempFour >= 0) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#ECF5FE`;
  } else if (upcommingTempFour >= -4) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#DCE7FE`;
  } else if (upcommingTempFour >= -8) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#B9CDFF`;
  } else if (upcommingTempFour >= -12) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#93B0FF`;
  } else if (upcommingTempFour >= -16) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#7398FF`;
  } else if (upcommingTempFour >= -20) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#5B73F5`;
  } else if (upcommingTempFour >= -24) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#4952D9`;
  } else if (upcommingTempFour >= -28) {
    document.querySelector(`#circle-four`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#circle-four`).style.backgroundColor = `#2306AA`;
  }

  let upcommingTempFive = Math.round(response.data.daily[5].temp.max);
  if (upcommingTempFive >= 44) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#801109`;
  } else if (upcommingTempFive >= 40) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#D64338`;
  } else if (upcommingTempFive >= 36) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FF694B`;
  } else if (upcommingTempFive >= 32) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FF8744`;
  } else if (upcommingTempFive >= 28) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FF9F48`;
  } else if (upcommingTempFive >= 24) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FFB15A`;
  } else if (upcommingTempFive >= 20) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FFC06A`;
  } else if (upcommingTempFive >= 16) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FFD07B`;
  } else if (upcommingTempFive >= 12) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FFE18F`;
  } else if (upcommingTempFive >= 8) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FBE8B6`;
  } else if (upcommingTempFive >= 4) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#FDF5DD`;
  } else if (upcommingTempFive >= 0) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#ECF5FE`;
  } else if (upcommingTempFive >= -4) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#DCE7FE`;
  } else if (upcommingTempFive >= -8) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#B9CDFF`;
  } else if (upcommingTempFive >= -12) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#93B0FF`;
  } else if (upcommingTempFive >= -16) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#7398FF`;
  } else if (upcommingTempFive >= -20) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#5B73F5`;
  } else if (upcommingTempFive >= -24) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#4952D9`;
  } else if (upcommingTempFive >= -28) {
    document.querySelector(`#circle-five`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#circle-five`).style.backgroundColor = `#2306AA`;
  }

  let upcommingTempSix = Math.round(response.data.daily[6].temp.max);
  if (upcommingTempSix >= 44) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#801109`;
  } else if (upcommingTempSix >= 40) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#D64338`;
  } else if (upcommingTempSix >= 36) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FF694B`;
  } else if (upcommingTempSix >= 32) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FF8744`;
  } else if (upcommingTempSix >= 28) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FF9F48`;
  } else if (upcommingTempSix >= 24) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FFB15A`;
  } else if (upcommingTempSix >= 20) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FFC06A`;
  } else if (upcommingTempSix >= 16) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FFD07B`;
  } else if (upcommingTempSix >= 12) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FFE18F`;
  } else if (upcommingTempSix >= 8) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FBE8B6`;
  } else if (upcommingTempSix >= 4) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#FDF5DD`;
  } else if (upcommingTempSix >= 0) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#ECF5FE`;
  } else if (upcommingTempSix >= -4) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#DCE7FE`;
  } else if (upcommingTempSix >= -8) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#B9CDFF`;
  } else if (upcommingTempSix >= -12) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#93B0FF`;
  } else if (upcommingTempSix >= -16) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#7398FF`;
  } else if (upcommingTempSix >= -20) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#5B73F5`;
  } else if (upcommingTempSix >= -24) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#4952D9`;
  } else if (upcommingTempSix >= -28) {
    document.querySelector(`#circle-six`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#circle-six`).style.backgroundColor = `#2306AA`;
  }

  let upcommingTempSeven = Math.round(response.data.daily[7].temp.max);
  if (upcommingTempSeven >= 44) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#801109`;
  } else if (upcommingTempSeven >= 40) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#D64338`;
  } else if (upcommingTempSeven >= 36) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FF694B`;
  } else if (upcommingTempSeven >= 32) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FF8744`;
  } else if (upcommingTempSeven >= 28) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FF9F48`;
  } else if (upcommingTempSeven >= 24) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FFB15A`;
  } else if (upcommingTempSeven >= 20) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FFC06A`;
  } else if (upcommingTempSeven >= 16) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FFD07B`;
  } else if (upcommingTempSeven >= 12) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FFE18F`;
  } else if (upcommingTempSeven >= 8) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FBE8B6`;
  } else if (upcommingTempSeven >= 4) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#FDF5DD`;
  } else if (upcommingTempSeven >= 0) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#ECF5FE`;
  } else if (upcommingTempSeven >= -4) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#DCE7FE`;
  } else if (upcommingTempSeven >= -8) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#B9CDFF`;
  } else if (upcommingTempSeven >= -12) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#93B0FF`;
  } else if (upcommingTempSeven >= -16) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#7398FF`;
  } else if (upcommingTempSeven >= -20) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#5B73F5`;
  } else if (upcommingTempSeven >= -24) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#4952D9`;
  } else if (upcommingTempSeven >= -28) {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#372FC3`;
  } else {
    document.querySelector(`#circle-seven`).style.backgroundColor = `#2306AA`;
  }
}

// Makes the api call on load & on search mainPage-> function show Temp
function search(city) {
  let apiKeyWeather = `e4d700d9f2e204bb797d9166314fc0ba`;
  let openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather`;
  let url = `${openWeatherUrl}?q=${city}&appid=${apiKeyWeather}&units=metric`;
  axios.get(url).then(showTemp);
}

//storing the value of the search on mainPage-> function search
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector(`#city-search`).value;
  search(city);
}

// when searching for a city on mainPage-> function searchCity
let mainSearch = document.querySelector(`#search`);
if (mainSearch) {
  mainSearch.addEventListener(`submit`, searchCity);
}

// city from local storrage -> function search
search(sessionStorage.city);

//value for first entry on welcoming page -> function searchStoredCity
function firstSearchCity(event) {
  event.preventDefault();
  let firstCityValue = document.querySelector(`#first-city-search`).value;
  sessionStorage.setItem("city", firstCityValue);
  window.location.href = "mainPage.html";
}

// when searching for a city on welcomingPage-> function searchCity
let initalSearch = document.querySelector(`#first-search`);
if (initalSearch) {
  initalSearch.addEventListener(`submit`, firstSearchCity);
}

//
let celciusTemp = null;

//Convert to Fahrenheit
function convertUnitFahrenheit(event) {
  event.preventDefault();
  if (document.querySelector(`#unitCelcius`).classList.contains("c-selected")) {
    document
      .querySelector(`#unitCelcius`)
      .classList.replace("c-selected", "celcius");
  }
  document
    .querySelector(`#unitFahrenheit`)
    .classList.replace("fahrenheit", "f-selected");
  let convertUnit = Math.round((celciusTemp * 9) / 5 + 32);
  document.querySelector(`#current-temp`).innerHTML = convertUnit;
  let unit = document.querySelectorAll(".unit");
  unit.forEach(function (change) {
    change.innerHTML = `°F`;
  });
}

//Convert to Celcius
function convertUnitCelcius(event) {
  event.preventDefault();
  if (
    document.querySelector(`#unitFahrenheit`).classList.contains("f-selected")
  ) {
    document
      .querySelector(`#unitFahrenheit`)
      .classList.replace("f-selected", "fahrenheit");
  }
  document
    .querySelector(`#unitCelcius`)
    .classList.replace("celcius", "c-selected");
  document.querySelector(`#current-temp`).innerHTML = celciusTemp;
  let unit = document.querySelectorAll(".unit");
  unit.forEach(function (change) {
    change.innerHTML = `°C`;
  });
}

// Select Fahrenheit
document
  .querySelector(`#unitFahrenheit`)
  .addEventListener(`click`, convertUnitFahrenheit);

// Select Celcius
document
  .querySelector(`#unitCelcius`)
  .addEventListener(`click`, convertUnitCelcius);
