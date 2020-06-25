class Weather{
    constructor(city,state){
        this.api_key = 'ba79c129748f78434f739a8aaa7a915c';
        this.city = city;
        this.state = state;
    }
    //get weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api_key}`);
        const responseData = await response.json();
        return responseData;
    }

    //change Location
    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }

}