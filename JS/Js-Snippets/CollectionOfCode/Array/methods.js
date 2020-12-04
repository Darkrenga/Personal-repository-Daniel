createDom("Array Methods");

const html = document.getElementById('Output');

let cars = ["Volvo", "Opel", "BMW"];

html.innerText += "cars.length = ";
html.innerHTML +=  cars.length + "<br><br>";
html.innerHTML += "Array as of now = " + cars + " Compared to: cars.sort() " + cars.sort();

html.innerHTML += "<br><br> Here's the array: " + cars + "<br>To get the last element you do cars[cars.length - 1]" + cars[cars.length - 1];


html.innerHTML += "<br><br><hr>"

//Looping through the array
let fruits, fText, i, fLen
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

fText = "<ul>";
for (i = 0; i < fLen; i++) {
    fText += "<li>" + fruits[i] + "</li>";
}
fText += "</ul>";

html.innerHTML += fText + "<hr>";

let juice, jText;
juice = ["Banana Juice", "Orange Juice", "Apple Juice"];

jText = "<ul>";
juice.forEach(juiceFunction);
jText += "</ul>";

function juiceFunction(value) {
    jText += "<li>" + value + "</li>";
}

html.innerHTML += jText;



