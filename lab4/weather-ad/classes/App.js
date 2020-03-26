class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this), 
            this.errorLocation.bind(this)
            );
    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    getWeather(){
        let url =  `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8ec81cb7b4e5a14b12eefbeb0526f793/${this.lat},${this.lng}?units=si`;
        
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                document.querySelector(".weatherSummary").innerHTML = data.currently.summary;
                document.querySelector(".weatherTemp").innerHTML = data.currently.temperature + " C°";
            })
            .catch(err => {
                console.log(err);
            });
    }

    errorLocation(err){
        console.log(err);
    }

    
}

let app = new App();

