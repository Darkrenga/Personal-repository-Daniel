
const nestedArr = [[1], [2, 3]];
document.getElementById('Array').innerHTML = nestedArr;
console.log(nestedArr[1][1]);



document.getElementById('Array2').innerHTML = nestedArr[0];
console.log(nestedArr[0]);



document.getElementById('Array3').innerHTML = nestedArr[1];    //Output: 2, 3
console.log(nestedArr[1]);



document.getElementById('Array4').innerHTML = nestedArr[1][0]; //Output: 2
console.log(nestedArr[1][0]);




let sodas = [["Coca Cola", "Pepsi"], ["Jolly Cola", "Diet Cola"], ["Pepsi Max", "Coca Cola Light"]];
document.getElementById('sodas').innerHTML = sodas[1][0];
console.log(sodas);    



let numbers = [ ["0", "1", "2", "3"], 
                ["4", "5", "6", "7"], 
                ["8", "9", "10", "11"],  
                ["12", "13", "14", "15"]];

document.getElementById('numbers').innerHTML = numbers[2][1];

console.log(numbers[2][0]);


/*
Arrays kan holde på andre arrays.

Når et Array holder enndu et array, kaldes det et nested array, multidimensionelt, osv.

For at få adgang til et nested array skal man bruge brackets med værdien. Ligesom vi normalt ville gøre.


console.log(nestedArr[1]); // Output: [2, 3]
Bemærk at nestedArr[1] vil tage fat i index hvilket er [2, 3]
Så hvis vi har lyst til at få de elementer indeni det nested array. Så kan vi kæde dem sammen, tilføje [] efter det første med det ønskede værdi


console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
I det andet console.log() har vi to brackets linket sammen med nestedArr
Vi ved at nestedArr[1] giver [2, 3]
Så for at få fat i det første element tilføjede vi bare [0] og vi får værdien 2
*/