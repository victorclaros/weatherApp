export class Storage {
    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = "london";
        this.defaultCountry = "uk"
    }
    getLocationData(){
        localStorage.getItem("city") === null ? this.city = this.defaultCity : this.city = localStorage.getItem("city")
       
        localStorage.getItem("countryCode") === null ? this.countryCode = this.defaultCountry : this.countryCode = localStorage.getItem("countryCode")

        return{
            city: this.city,
            countryCode: this.countryCode
        }
    }
    setLocationData(city, countryCode){
        localStorage.setItem("city", city);
        localStorage.setItem("countryCode", countryCode)
    }
}