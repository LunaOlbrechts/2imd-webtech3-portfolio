class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.gotLocation.bind(this),
                this.errorLocation.bind(this)
            );
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    gotLocation(result) {
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;

        this.getWeather();
    }

    getWeather() {
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8ec81cb7b4e5a14b12eefbeb0526f793/${this.lat},${this.lng}?units=si`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                let sum = data.currently.summary;
                let temp = data.currently.temperature;
                let adverstisement = new Adverstisement(sum, temp);
                adverstisement.changeBackground();
                adverstisement.changeFooter();

                console.log(sum, temp);
            })
            .catch(err => {
                console.log(err);
            });
    }

    errorLocation(err) {
        console.log(err);
    }
}

let app = new App();

class Adverstisement {
    constructor(sum, temp) {
        this.sum = sum;
        this.temp = temp;
    }

    changeBackground() {
        var background = document.querySelector(".background");
        switch (this.sum) {
            case "Clear":
                background.style.backgroundImage = "url('./images/lounge.jpg')"; 
            
                break;
            case "Drizzle":
                background.style.backgroundImage = "url('./images/lounge.jpg')"; 
                break;
            default:
                background.style.backgroundImage = 'url("./images/plants.jpg")'; 
        }
    }

    changeFooter() {
        document.querySelector(".weatherSummary").innerHTML = this.sum;
        document.querySelector(".weatherTemp").innerHTML = this.temp + " C°";
    }
}