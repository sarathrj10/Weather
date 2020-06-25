//init storage class
const storage = new Storageweather();
//get stored location data
const storedLocation = storage.getLocationData();
//init weather class
const weather = new Weather(storedLocation.city,storedLocation.state);
//init UI class
const ui = new UI();

//add eventlistner when DOM Loads
document.addEventListener('DOMContentLoaded', getWeather);

//Change location Event
document.getElementById('w-changebtn').addEventListener('click',() => {
    const city =document.getElementById('city').value;
    const state =document.getElementById('state').value;

    weather.changeLocation(city,state);

    //change loaction in ls

    storage.setLocationData(city,state);

    getWeather();

    //hide model
    $('#locModal').modal('hide');
})

function getWeather(){
weather.getWeather()
.then((results) => {
    console.log(results)
   ui.paint(results);
})
.catch((err) => {
    ui.showAlert();
    storage.removeitem(city);
    storage.removeitem(state);
    setTimeout(() => {
        location.reload(false);
        },2000)
})
}