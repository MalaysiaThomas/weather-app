function search(event) {
  event.preventDefault();

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  let searchValue = searchInputElement.value;
  cityElement.innerHTML =
    searchValue.charAt(0).toUpperCase() + searchValue.slice(1).toLowerCase();

  let currentTemp = Math.round(response.data.temperature.current);
  let currentTempContainer = document.querySelector(
    ".current-temperature-value"
  );
  currentTempContainer.innerHTML = currentTemp;

  if (apiUrl.includes("imperial")) {
    temperatureUnit.innerHTML = "&deg;F";
  } else {
    temperatureUnit.innerHTML = "$deg;C";
  }
}

//Time Date Formatter Function
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

//API Key
let apiKey = "34a0b3608792f91t1oc6463e450b7ab0";

//Search Input and city cityElement declarations
let searchInputElement = document.querySelector("#search-input");
let cityElement = document.querySelector("#current-city");
let temperatureUnit = document.querySelector(".current-temperature-unit");

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=imperial`;

//Search event listener
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
//Current Time/Date Update Formatter
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
