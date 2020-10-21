function myFunction(){
    let x = document.getElementById("dropdown");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

fetch('https://api.weatherbit.io/v2.0/current?key=e26df03d468b4b82a1630c5eb9b468a5&lang=da&city=Aalborg')
.then(res => res.json())
.then(data => {
    document.getElementById('time').innerHTML = data.data[0].temp;
})