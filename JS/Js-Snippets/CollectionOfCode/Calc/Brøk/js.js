let fællesnævner, udregnetTæller1, udregnetTæller2, udregnetTæller, tegn;

function plus(a, b, c, d) {
    fællesnævner = b*d;
    udregnetTæller1 = a*d;
    udregnetTæller2 = b*c;
    udregnetTæller = udregnetTæller1 + udregnetTæller2;
    return fællesnævner, udregnetTæller;
}

function minus(a, b, c, d) {
    fællesnævner = b*d;
    udregnetTæller1 = a*d;
    udregnetTæller2 = b*c;
    udregnetTæller = udregnetTæller1 - udregnetTæller2;
    return fællesnævner, udregnetTæller;
}


function gange(a, b, c, d) {
    fællesnævner = b*d;
    udregnetTæller = a*c;
    return fællesnævner, udregnetTæller;
}


function divider(a, b, c, d) {
    udregnetTæller = a*d;
    fællesnævner = b*c;
    return fællesnævner, udregnetTæller;
}

function broekformering(nævner, tæller) {
    if(nævner < tæller) {
        let modulus = tæller % nævner;
        let wholeNumb = Math.floor(tæller/nævner);
        document.getElementById('tæller').innerHTML = modulus;
        document.getElementById('nævner').innerHTML = nævner;
        document.getElementById('tall').innerHTML =  wholeNumb;
    } else {
        document.getElementById('tæller').innerHTML = tæller;
        document.getElementById('nævner').innerHTML = nævner;
        document.getElementById('tall').innerHTML =  "";
        
    }
}



function myCalc() {
    
    const tællerA = document.getElementById("a").value;
    const tællerC = document.getElementById("c").value;
    const nævnerB = document.getElementById("b").value;
    const nævnerD = document.getElementById("d").value;

    tegn = document.getElementById('tegn').value;

    switch (tegn) {
        case "+":
            plus(tællerA, nævnerB, tællerC, nævnerD);
                broekformering(fællesnævner, udregnetTæller);
            break;

        case "-":
            minus(tællerA, nævnerB, tællerC, nævnerD);
            broekformering(fællesnævner, udregnetTæller);
            break;

        case "*":
            gange(tællerA, nævnerB, tællerC, nævnerD);
            broekformering(fællesnævner, udregnetTæller);
            break;

        case "/":
            divider(tællerA, nævnerB, tællerC, nævnerD);
            broekformering(fællesnævner, udregnetTæller);
            break;

        default:
            alert("Der er et eller andet der er gået forfærdeligt galt")
            break;
    }

}
