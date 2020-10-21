/*===================================     IM DONE JUST NEED TO MOVE IT INTO JS.JS     ===================================================================*/
/*===================================     I make some variable imma use in both functions     ===========================================================*/
let Thunder = `<img src="SVG/Thunder.svg" />`; 
let Rain = `<img src="SVG/Raining.svg"/>`;
let Snow = `<img src="SVG/Snow.svg" />`;
let Fog = `<img src="SVG/Fog.svg" />`;
let Cloudy = `<img src="SVG/Cloudy.svg" />`;
let Sunny = `
            <div class="DivRotate">
                <img src="SVG/Sunny.svg" />
            </div>`;



/*===================================      I start creating my dom      ========================================*/
//Adding stylesheet to the head
link = document.createElement('link');//Saying what tag its going to be
link.href='css/main.css';//Adding the href
link.rel="Stylesheet";//adding the relation
document.getElementsByTagName('head')[0].appendChild(link);//appending it


//Connecting to my output
const div = document.getElementById('Output');

//Creating my form and setting attributes
const form = document.createElement('form');
form.setAttribute('id', 'form');
form.setAttribute('onsubmit', 'return false;')

//Creating my search and adding attributes to it
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'userInput');
input.setAttribute('placeholder', 'Søg efter en by')

//Creating the send and adding its attributes
const input2 = document.createElement('input');
input2.setAttribute('type', 'submit');
input2.setAttribute('id', 'sendForm')
input2.setAttribute('onclick', 'cityName()');

const information = document.createElement('div');
information.setAttribute('id', 'information');



//All of these are the text saying what it is                       adding id's to all of them                                                          giving the all the same class
const cityNameOutputdesc = document.createElement('div');           cityNameOutputdesc.setAttribute('id', 'cityNameOutputdesc');                        cityNameOutputdesc.setAttribute('class', 'information')
const tempOutputdesc = document.createElement('div');               tempOutputdesc.setAttribute('id', 'tempOutputdesc');                                tempOutputdesc.setAttribute('class', 'information');
const appTempOutputdesc = document.createElement('div');            appTempOutputdesc.setAttribute('id', 'appTempOutputdesc');                          appTempOutputdesc.setAttribute('class', 'information');
const weatherDescriptionOutputdesc = document.createElement('div'); weatherDescriptionOutputdesc.setAttribute('id', 'weatherDescriptionOutputdesc');    weatherDescriptionOutputdesc.setAttribute('class', 'information');

//Creating the output of the city name and adding attributes to it
const cityNameOutput = document.createElement('div');
cityNameOutput.setAttribute('id', 'CityName');
cityNameOutput.setAttribute('class', 'information');

//Create the output for temp and give it an id
const tempOutput = document.createElement('div');
tempOutput.setAttribute('id', 'temp');
tempOutput.setAttribute('class', 'information')

//Create the output for Feels like and give it an id
const appTempOutput = document.createElement('div');
appTempOutput.setAttribute('id', 'appTemp');
appTempOutput.setAttribute('class', 'information')

//Crete my weather description and give it an id
const weatherDescriptionOutput = document.createElement('div');
weatherDescriptionOutput.setAttribute('id', 'weatherDescription');
weatherDescriptionOutput.setAttribute('class', 'information')


//Creating an output for the animation and giving it an id
const weatherAnimationOutput = document.createElement('div');
weatherAnimationOutput.setAttribute('id', 'weatherAnimation');



//Building my Dom
form.appendChild(input); //This one along side
form.appendChild(input2);//This
div.appendChild(form);// And this all go together to create my form
div.appendChild(information); //appending the information output

//Appending my city name and the text that says Bynavn: 
information.appendChild(cityNameOutputdesc);                cityNameOutputdesc.innerHTML = 'Bynavn: ';
information.appendChild(cityNameOutput);

//Appending my temp and the text that says Temperature:
information.appendChild(tempOutputdesc);                    tempOutputdesc.innerHTML = 'Temperature: ';
information.appendChild(tempOutput);

//Appending my appTemp and the text that says Føltes som:
information.appendChild(appTempOutputdesc);                 appTempOutputdesc.innerHTML = 'Føltes som: ';
information.appendChild(appTempOutput);

//Appending my weatherdesc and the text that says Vejr Beskrivelse:
information.appendChild(weatherDescriptionOutputdesc);      weatherDescriptionOutputdesc.innerHTML = 'Vejr beskrivelse: ';
information.appendChild(weatherDescriptionOutput);

//appending my animation
information.appendChild(weatherAnimationOutput);


/*======================================================     Where my geolocation fetch begins     ======================================================================= */

//Creting a function that will get my geodata and send it to a new function called currentLocation
function fetchLocation() { //Creating my function
    if (navigator.geolocation) { //asking if navigator.geolocation is a thing
        navigator.geolocation.getCurrentPosition(currentLocation); //getting the current location of the user and sending it off to currentLocation
    }
}

//Takes the information from fetchLocation and assigns 2 varriables to their value
function currentLocation(position) {
    lat = position.coords.latitude; //Assigning my latitude to lat
    lon = position.coords.longitude;//assigning my longitutde to lon
    geoFetch();//I call the next function
}


//I make the function that creates everything when I load the page, the one that process my information from geolocation and displays it
function geoFetch() { //I create the function
    //I fetch use with my geodata thats save in Lat and lon and get my information back
    fetch(`https://api.weatherbit.io/v2.0/current?key=e26df03d468b4b82a1630c5eb9b468a5&lang=da&lat=${lat}&lon=${lon}`)
    .then(res => res.json())//I ask that my response comes back in json
    .then(data => { //I tell what to do with the data that comes back 
    console.log(data); //I log my data so It's easier to check my information if something goes wrong somewhere
	//I create the variable Path here so i can easier access get my information with less code
    let path = data.data[0];

    //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
    let tempData = path.temp;
    document.getElementById('temp').innerHTML =  tempData + '&degC';

    //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
    let appTempData = path.app_temp;
    document.getElementById('appTemp').innerHTML = appTempData + '&degC';

    //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
    let cityData = path.city_name;
    document.getElementById('CityName').innerHTML = cityData;
    input.setAttribute('value', cityData);

    //I get weather description and shoot it out into my HTML on the line after
    let weatherData = path.weather.description;
    document.getElementById('weatherDescription').innerHTML = weatherData;
    //const weatherDataOut = document.getElementById('weatherDescription');
    //weatherDataOut.innerHTML = weatherData
    
        
    //Create a variable for my weahter numb so i can check it in my switch
    let forecastNumb = path.weather.code
    console.log(forecastNumb);//I log the number so i can double check it

    //I make a switch that check my weather code and display animations depending on the weather
    switch (forecastNumb) {

        //Check if the code is equal to thunder and then displays thunder if it is
        case 200: 
        case 201: 
        case 202: 
        case 230: 
        case 231: 
        case 232: 
        case 233: 
            console.log("It's thundering");
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Thunder;
            break;

        //Check if the code is equal to rain and then displays rain if it is
        case 300:
        case 301:
        case 302:
        case 500:
        case 501:
        case 502:
        case 511:
        case 520:
        case 521:
        case 522:
			console.log("It's raining");
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Rain;
            break;

        //Check if the code is equal to snow and then displays snow if it is
        case 600:
        case 601:
        case 602:
        case 610: 
        case 611: 
        case 612:
        case 621:
        case 622: 
        case 623:
            console.log('This is snow')
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Snow;
            break;
            
        //Check if the code is equal to fog and then displays fog if it is
        case 700:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
            console.log("It's foggy outside");
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Fog;
			break;
        
        //Check if the code is equal to sun and then displays sun if it is
        case 800:
            console.log('The sun is out');
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Sunny;
            break;
        
        //Check if the code is equal to cloudy and then displays cloudy if it is
        case 801:
        case 802:
        case 803:
        case 804:
			console.log("It's kinda cloudy outside ain't it");
            document.getElementById('weatherAnimation').innerHTML = Cloudy;
            break;
            
        //If it can't get anything else it says so
        default:
            document.getElementById('weatherAnimation').innerHTML = '<br> Couldn\'t get information about the weather';
            break;
    }
    })
    //It wont ever call if it can't get geolocation so there will never be a error from geolocation
    .catch( error => 
        alert('Kunne ikke få din geolocation')
    )
}
//Calling my function
fetchLocation();



//The function that will get information from the search bar
function cityName() {//I create the search function

    //Creating the variable that gets the city i searched for
    let location = document.getElementById("userInput").value;
    
    //Fetching but this time it's based of the city search
    fetch(`https://api.weatherbit.io/v2.0/current?key=e26df03d468b4b82a1630c5eb9b468a5&city=${location}&lang=da`)

    //I ask for my response to be in json
    .then(res => res.json())

    //Here i say that im gonna do something with my data
    .then(data => {
        //Logging all the data so I can view it in the console and doublecheck
        console.log(data)

        //I create the variable Path here so i can easier access get my information
        let path = data.data[0];

        //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
        let tempData = path.temp;
        document.getElementById('temp').innerHTML = tempData + '&degC';

        //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
        let appTempData = path.app_temp;
        document.getElementById('appTemp').innerHTML = appTempData + '&degC';

        //Creating a variable i can store my informtion from the data array in so I can shoot it out on the line after
        let cityData = path.city_name;
        document.getElementById('CityName').innerHTML = cityData;

        //Weather description
        let weatherData = path.weather.description;
        document.getElementById('weatherDescription').innerHTML = weatherData;

        //Create a variable for my weahter numb so i can check it in my switch
    let forecastNumb = path.weather.code
    console.log(forecastNumb);//I log the number so i can double check it

    //I make a switch that check my weather code and display animations depending on the weather
    switch (forecastNumb) {

        //Check if the code is equal to thunder and then displays thunder if it is
        case 200: 
        case 201: 
        case 202: 
        case 230: 
        case 231: 
        case 232: 
        case 233: 
            console.log("It's thundering");
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Thunder;
            break;

        //Check if the code is equal to rain and then displays rain if it is
        case 300:
        case 301:
        case 302:
        case 500:
        case 501:
        case 502:
        case 511:
        case 520:
        case 521:
        case 522:
			console.log("It's raining");
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Rain;
            break;

        //Check if the code is equal to snow and then displays snow if it is
        case 600:
        case 601:
        case 602:
        case 610: 
        case 611: 
        case 612:
        case 621:
        case 622: 
        case 623:
            console.log('This is snow')
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Snow;
            break;
            
        //Check if the code is equal to fog and then displays fog if it is
        case 700:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
            console.log("It's foggy outside");
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Fog;
			break;
        
        //Check if the code is equal to sun and then displays sun if it is
        case 800:
            console.log('The sun is out');
            document.getElementById('weatherAnimation').innerHTML = '<br>' + Sunny;
            break;
        
        //Check if the code is equal to cloudy and then displays cloudy if it is
        case 801:
        case 802:
        case 803:
        case 804:			console.log("It's kinda cloudy outside ain't it");
            document.getElementById('weatherAnimation').innerHTML = Cloudy;
            break;
            
        //If it can't get anything else it says so
        default:
            document.getElementById('weatherAnimation').innerHTML = '<br> Couldn\'t get information about the weather';
            break;
    }
    })
    
    //If it send a city name or something that totally doesn't make sense and it cant get the information back it will alert whats in the error 
    .catch( error => 
        alert('Kunne ikke finde en by med det navn')
    )
}