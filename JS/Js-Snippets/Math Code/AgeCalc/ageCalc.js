let age = [];

function newName() {
    let newAge = document.getElementById("userInput").value;

    age.push(newAge);
    console.log(age);
}


function calcAverage() {
    let sum = age.reduce((previous, current) => current += previous);
    let avg = sum / age.length; 
    console.log(avg);    
    console.log(age.length)
}