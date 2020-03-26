class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this),
            this.errorLocation.bind(this)
        );
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
        this.changeBackground();
        this.changeFooter();
        sum;
        temp;
    }

    changeBackground(sum) {
        let url = "";
        let background = document.querySelector(".background");
        switch(sum) {
            case "clear":
                url = "../images/plants.jpg";
                break;
            case "Drizzle": 
                url = "../images/plants.jpg";
                break;
            default:
                url = "../images/plants.jpg";
          }
        
          background.style.backgroundImage = url;
    }

    changeFooter(sum, temp) {
        document.querySelector(".weatherSummary").innerHTML = sum;
        document.querySelector(".weatherTemp").innerHTML = temp + " C°";
    }
}