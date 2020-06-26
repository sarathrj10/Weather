class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-descrip');
        this.temp = document.getElementById('temp');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('humidity');
        this.pressure = document.getElementById('pressure');
        this.windspeed = document.getElementById('windspeed');
        this.feellike = document.getElementById('feelslike');
        this.maxtemp = document.getElementById('temp-max');
        this.mintemp = document.getElementById('temp-min');
    }
    paint(weather){
        this.location.textContent = weather.name;
        this.description.textContent = weather.weather[0].description;
        this.temp.textContent = `Temperature : ${((weather.main.temp)-273.15).toFixed(2)} °C`;
        this.humidity.textContent = `Humidity : ${weather.main.humidity} %`
        this.pressure.textContent = `Pressure : ${weather.main.pressure} mb`
        this.windspeed.textContent = `Wind Speed : ${weather.wind.speed} km/h`
        this.feellike.textContent = `Feel Like : ${((weather.main.feels_like)-273.15).toFixed(2)} °C`;
        this.maxtemp.textContent = `Max temp : ${((weather.main.temp_max)-273.15).toFixed(2)} °C`;
        this.mintemp.textContent = `Min temp : ${((weather.main.temp_min)-273.15).toFixed(2)} °C`;
    }
    showAlert(){
        const parentclass = document.querySelector('.col-md-6');
        const div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.appendChild(document.createTextNode('Sorry ! Please check the City or State you have entered'));
        parentclass.insertBefore(div,this.location);
        setTimeout(() => {
        div.remove();
        },2000)
    }
}