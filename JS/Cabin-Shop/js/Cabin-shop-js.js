const arrImage = [
    ["first-image.jpg", "Lille", "Fantastisk hytte, dog lille men med masser af plads indenfor. Der er indbygget Kamin", "500.000kr,-"],
    ["second-image.jpg", "Medium", "Hytten ligger dejligt afsides så du kan nyde en tur i fred, i skovens harmoniske stilhed", "750.000kr,-"],
    ["third-image.jpg", "Medium", "Hytten har et kæmpe ude areal lige ude foran døren, Arealet er omringet af et hegn så du kan nemt slippe hunden løs", "900.000kr,-"],
    ["fourth-image.jpg", "Stor", "Denne moderne hytte ligger i nærheden af andre hytter men har alt hvad du for brug for", "1.500.000kr,-"],
    ["first-image.jpg", "Lille", "Fantastisk hytte, dog lille men med masser af plads indenfor. Der er indbygget Kamin", "500.000kr,-"],
    ["second-image.jpg", "Medium", "Hytten ligger dejligt afsides så du kan nyde en tur i fred, i skovens harmoniske stilhed", "750.000kr,-"],
    ["third-image.jpg", "Medium", "Hytten har et kæmpe ude areal lige ude foran døren, Arealet er omringet af et hegn så du kan nemt slippe hunden løs", "900.000kr,-"],
    ["fourth-image.jpg", "Stor", "Denne moderne hytte ligger i nærheden af andre hytter men har alt hvad du for brug for", "1.500.000kr,-"],
    ["first-image.jpg", "Lille", "Fantastisk hytte, dog lille men med masser af plads indenfor. Der er indbygget Kamin", "500.000kr,-"],
    ["second-image.jpg", "Medium", "Hytten ligger dejligt afsides så du kan nyde en tur i fred, i skovens harmoniske stilhed", "750.000kr,-"],
    ["third-image.jpg", "Medium", "Hytten har et kæmpe ude areal lige ude foran døren, Arealet er omringet af et hegn så du kan nemt slippe hunden løs", "900.000kr,-"],
    ["fourth-image.jpg", "Stor", "Denne moderne hytte ligger i nærheden af andre hytter men har alt hvad du for brug for", "1.500.000kr,-"],
    
];
console.log(arrImage);

let html = "";

arrImage.forEach(function(value) {
    console.log(value);
    html += `<div class="wrapper" >
                <img class="image" src="images/${value[0]}"> 
                <p class="size">Størrelse: ${value[1]}</p>
                <p class="desc">${value[2]}</p>
                <p class="prize">Pris: ${value[3]}</p>
            </div>`;
});

wrapper.insertAdjacentHTML("afterbegin", html);