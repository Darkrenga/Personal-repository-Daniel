/*===============================================================================================================
                                
                                    Does everything that has to do with my HTML
                                
================================================================================================================*/


/*===============================   Creating Array with all my Data   ==============================*/
const names = [
    ["Babuska", "Rusland","HTML", "JS", "REACT"],
    ["Mikeal", "Skotland","REACT", "JS", "CSS"],
    ["Otto", "Danmark","HTML", "JS", "ANGULAR"],
    ["Lea", "Finland","ANGULAR", "JS", "CSS"],
    ["Adam", "USA","DB", "JS", "CSS"],
    ["Mohammed", "Norge","HTML", "JS", "CSS"],
    ["Jens", "Afghanistan","HTML", "JS", "FIREBASE"],
    ["Maya", "Serbien","HTML", "SEO", "CSS"],
];


/*===============================   Creating the preset html along with html variable   ==============================*/
let html = `
    
`


/*===============================   Loop my data and add it to html variable   ==============================*/
//
names.forEach(function(value) {
    html += `<article class="articleBlock">
                <p>${value[0]}</p>
                <p>${value[1]}</p>
                <div class="tags">
                    <p>${value[2]}</p>
                    <p>${value[3]}</p>
                    <p>${value[4]}</p>
                </div>
            </article>`
});


/*===============================   Adding it to my html   ==============================*/
let output = document.getElementById("information");
output.innerHTML = html;