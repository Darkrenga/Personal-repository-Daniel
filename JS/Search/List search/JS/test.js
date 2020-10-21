function myFunction(value) {
    let p = document.getElementsByTagName("p")[value]
    console.log(p.innerHTML);
}

function searchName(value) {
    let input, filter, section, article, p, i, txtValue;
    //Assigning values to the variables related to my dom and making the input not case sensitive
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    section = document.getElementById("information");
    article = section.getElementsByTagName("article");

    for (i = 0; i < article.length; i++) {
        //Declaring my search params.
        p = article[i].getElementsByTagName("p")[value];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            article[i].style.display = "";
        } else {
            article[i].style.display = "none";
        }
    }
}


function searchBy(value) {
    let input, filter, section, article, p, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    section = document.getElementById("wrapper");
    article = section.getElementsByTagName("article");

    for (i = 0; i < article.length; i++) {
        p = article[i].getElementsByTagName("p")[value];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            article[i].style.display = "";
        } else {
            article[i].style.display = "none";
        }
    }
}

