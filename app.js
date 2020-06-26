//init storage class
const storage = new Storageweather();
//removining stored data to access current location
storage.removeitem();
//set current location to default
storage.setCurrentLocation().then(() =>{
 //get stored location data
const storedLocation = storage.getLocationData();
//init weather class
const weather = new Weather(storedLocation.city,storedLocation.state);
//init UI class
const ui = new UI();

//add eventlistner when DOM Loads
firstAttempt();
//Change location Event
document.getElementById('w-changebtn').addEventListener('click',() => {
    const city =document.getElementById('city').value;
    const state =document.getElementById('state').value;

    weather.changeLocation(city,state);
    getWeather();

    //hide model
    $('#locModal').modal('hide');
})
function firstAttempt(){
    weather.getWeather()
.then((results) => {
   ui.paint(results);
})
.catch((err) => {
    // console.log('not found ...moving to district')
       storage.setDistrict().then(() =>{
        const newLocation = storage.getLocationData();
        weather.changeLocation(newLocation.city,newLocation.state)
       getWeather();
   })
})
}
function getWeather(){
weather.getWeather()
.then((results) => {
   ui.paint(results);
})
.catch((err) => {
    ui.showAlert();
    storage.removeitem();
    setTimeout(() => {
        location.reload(false);
        },2000)
})
}
})
