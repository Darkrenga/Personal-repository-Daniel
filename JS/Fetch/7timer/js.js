//Commented most of the console.log outs for reasons related to 

//=========================   Global Variables   =========================//
let output = document.getElementById('vejret');


//=========================   adding css - view   =========================//
let cssLink = 'main.css'; //Where the css is located

let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css'
link.href = cssLink;
head.appendChild(link);


//=========================   Loader - View  =========================//
createLoading();

function createLoading() {
    output.innerHTML = "";
    let loader = document.createElement("img");
    loader.src= 'img/loading.svg';
    let title = document.createElement("h3");
    title.innerText = "Loading...";
    output.appendChild(loader);
    output.appendChild(title);
}


//=========================   Controller   =========================//
let myData = fetchData('http://www.7timer.info/bin/api.pl?lon=9.922&lat=57.049&product=civillight&output=json')
function fetchData(apiUrl) {
    // console.log("Starting da fetch");

    fetch(apiUrl)
    .then((res) => { return res.json(); })
    .then((data) => { 
        // console.log(data.dataseries[0]);
        let path = data.dataseries[0];
        let date = path.date;
        let weather = path.weather;
        let tempHigh = path.temp2m.max;
        let tempLow = path.temp2m.min;
        createView(tempHigh, tempLow, weather);
        dateConvertion(date);
    })
    .catch(  );
}


//=========================   View   =========================//
function createView(hightemp, mintemp, weather) {
    //Getting my output and clearing it
    output.innerHTML = "";

    //Creating the image and giving it an id
    let weatherImg = document.createElement("img");
    weatherImg.setAttribute("id", "currentweather");

    //Skaber date og giver den sit id
    let date = document.createElement("p");
    date.setAttribute('id', 'weatherDate');

    //Skaber Temperatur wrapper og de 2 elementer der skal være i den
    let temp = document.createElement("div");
    let min = document.createElement("p");
    min.setAttribute('class', 'weatherP');
    let max = document.createElement("p");
    max.setAttribute('class',' weatherP');

    //Sætter tekst ind i min temperatur elementer
    min.innerHTML = "Laveste temperatur " + mintemp +'&degC';
    max.innerHTML = "Højeste temperatur " + hightemp + '&degC';

    //Appender alt det her
    output.appendChild(weatherImg);
    output.appendChild(date);
    output.appendChild(temp);
    temp.appendChild(min);
    temp.appendChild(max);
    switch (weather) {
        case "clear":
            document.getElementById("currentweather").setAttribute("src", "img/wi-day-sunny.svg");
            break;
        case "mcloudy":
            document.getElementById("currentweather").setAttribute("src", "img/wi-day-cloudy.svg");
            break;
        case "cloudy":
            document.getElementById("currentweather").setAttribute("src", "img/wi-cloudy.svg");
            break;
        case "rain":
        case "lightrain":
            document.getElementById("currentweather").setAttribute("src", "img/wi-rain.svg");
            break;
        case "snow":
            document.getElementById("currentweather").setAttribute("src", "img/wi-snow.svg");
            break;
        case "thunderstorm":
            document.getElementById("currentweather").setAttribute("src", "img/wi-storm-showers");
            break;
        case "windy":
            document.getElementById("currentweather").setAttribute("src", "img/wi-cloudy-gusts.svg");
            break;
        default: 
        console.log("error");
            break;
    }
}


//=========================   Date adder - view   =========================//
function dateConvertion(weirdDateFormat) {
    let num = weirdDateFormat;

    let newNum = num.toString();

    let year = newNum.slice(0, 4);
    let date = newNum.slice(6, 8);
    let month = newNum.slice(4, 6);

    let newDate = new Date(month + "/" + date + "/" + year);
    let dateOfTheWeek = newDate.getUTCDay();
    let arr = [
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
        "Søndag"
    ]

    let dateOut = document.getElementById('weatherDate');
    dateOut.innerHTML = arr[dateOfTheWeek];
    
    // console.log(arr[dateOfTheWeek]);
}