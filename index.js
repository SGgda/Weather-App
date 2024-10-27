getWeatherButton = document.getElementById("getWeatherBtn");
const apikey = "11ca3f18318b10e30be3fb41a5b3992f";

cityDisplay = document.getElementById("cityName");
temperatureDisplay = document.getElementById("temperature");
descriptionDisplay = document.getElementById("description");

getWeatherButton.addEventListener("click", () => {
  inputCity = document.getElementById("cityInput").value;
  getWeatherData(inputCity);
});

async function getWeatherData(city) {
  const url = `https://api.weatherstack.com/current?access_key=${apikey}&query=${city}`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      console.error("Error in fetch request");
    }

    let data = await response.json();
    cityDisplay.textContent = `${data.location.name}, ${data.location.country}`;
    temperatureDisplay.textContent = `Temperature: ${data.current.temperature} °C`;
    descriptionDisplay.textContent = data.current.weather_descriptions[0];
    let weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.src = data.current.weather_icons[0];
  } catch (error) {
    console.error(error);
  }
}
