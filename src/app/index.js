const { Weather } = require("./weather");
const { UI } = require("./ui");
const { Storage } = require("./storage");

const storage = new Storage();
const { city, countryCode } = storage.getLocationData();

const ui = new UI();
const weather = new Weather(city, countryCode);
require("./index.css");

async function fetchWeather(){
    const data = await weather.getweather();
    console.log(data)
    ui.render(data)
}
document.getElementById("w-change-btn").addEventListener("click", (e) =>{
    const city = document.getElementById("city").value;
    const countryCode = document.getElementById("countryCode").value
    weather.changeLocation(city, countryCode);
    storage.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
})
document.addEventListener("DOMContentLoaded", fetchWeather)