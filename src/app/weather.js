export class Weather {
    constructor(city, countryCode){

        this.apiKey = "4b8c01663ef23e53d95e0e9e7ea13385"
        this.city = city;
        this.countryCode = countryCode;
    }
    async getweather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json()
        return data
    }
    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}