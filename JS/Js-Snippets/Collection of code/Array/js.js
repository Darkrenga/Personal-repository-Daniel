createDom("Arrays");


//When creating an array, it's not important how the content is displayed inside, as long as it follows the proper syntax and ordering
//const cars = ["Volvo", "BMW", "Skoda"];
const cars = [
              "Volvo", 
              "BMW", 
              "Skoda"
            ];

const html = document.getElementById('Output');
html.innerHTML += cars;


html.innerHTML += "<br><br>" + cars[1];
html.innerHTML += "<hr><br>"


const carsEdited = ["Volvo", "BMW", "Skoda"];
carsEdited[0] = "Opel";
html.innerHTML += carsEdited + "<br>";


//arrays uses numbers to access information from themself
const person = ["John", "Doe", 46];
html.innerHTML += "<br><hr><br>" + person[0];


//Javascript Objects
const personObject = {firstName:"John", lastName:"Doe", age:46};
html.innerHTML += "<br><hr><br>" + personObject["firstName"];