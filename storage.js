class Storageweather{
    constructor(){
        this.city;
        this.state;
        this.defaultcity;
        this.defaultstate;
    }
    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultcity;
        }else{
            this.city = localStorage.getItem('city');
        }
        if(localStorage.getItem('state') === null){
            this.state = this.defaultstate;
        }else{
            this.state = localStorage.getItem('state');
        }
        return{
            city : this.city,
            state : this.state
        }

    }

    removeitem(){
        localStorage.removeItem('city');
        localStorage.removeItem('state');
    }
    setCurrentLocation(){ 
        return new Promise((resolve,reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}%2C${position.coords.longitude}&key=41b087f03d3a486ba7c4323919bc8fcc&pretty=1`)
                .then( res => res.json())
                .then(data => {
            this.defaultcity = data.results[0].components.town;

            this.defaultstate = data.results[0].components.state_district;

            resolve();
              });
              });
              
        })
        
    }

    setDistrict(){ 
        return new Promise((resolve,reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}%2C${position.coords.longitude}&key=41b087f03d3a486ba7c4323919bc8fcc&pretty=1`)
                .then( res => res.json())
                .then(data => {
            this.defaultcity = data.results[0].components.state_district;

            this.defaultstate = data.results[0].components.state;
            resolve();
              });
              });
              
        })
        
    }
}