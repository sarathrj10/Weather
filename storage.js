class Storageweather{
    constructor(){
        this.city;
        this.state;
        this.defaultcity = 'kochi';
        this.defaultstate = 'kerala';
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

    setLocationData(city,state){
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
    }
    removeitem(city){
        localStorage.removeItem('city');
        localStorage.removeItem('state');
    }
}