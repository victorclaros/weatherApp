export class UI{
    constructor(){
        this.loc = document.getElementById("weather-location")
        this.desc = document.getElementById("weather-description")
        this.string = document.getElementById("weather-string")
        this.humi = document.getElementById("weather-humidity")
        this.wind = document.getElementById("weather-wind")
    }
    render(weather){
        this.loc.textContent = weather.name + " / " + weather.sys.country;
        this.desc.textContent = weather.weather[0]["description"];
        this.string.textContent = weather.main.temp + "°C";
        this.humi.textContent = "Humidity: " + weather.main.humidity + "%";
        this.wind.textContent = "Wind: " + weather.wind.speed + "m/s"
    }
}