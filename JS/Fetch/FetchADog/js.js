//=========================   Controller   =========================//
let myData = fetchData('https://dog.ceo/api/breeds/image/random');


function fetchData(apiUrl) {
    console.log("Starting To Fetch");

    fetch(apiUrl)
    .then((res) => {  return res.json();  })
    .then((data) => {  createView(data.message);  })
    .catch(  );
}


//===========================    View   =============================//
let cssLink = 'main.css'; //Where the css is located

function createView(imgUrl) {
    let output = document.getElementById('hund');
    let html = `
                <div class="imgWrapper">
                    <img alt="En god hund" src="${imgUrl}"/>
                <div>
                <h3 id="defenietlyGoodDog">En God Hund</h3>
                `
        output.innerHTML = html;

        let width = output.offsetWidth;
        console.log(width);
        width = width/8 + "px";
        document.getElementById('defenietlyGoodDog').style.fontSize = width;
}

let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = cssLink;
head.appendChild(link);