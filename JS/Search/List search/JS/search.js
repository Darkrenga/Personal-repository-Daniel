//Remove .toUpperCase(); If you wanna make it case sensitive. Both places
function searchName() {
  let input, filter, section, article, p1, i, txtValue1;
  //Assigning values to the variables related to my dom and making the input not case sensitive
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  section = document.getElementById("information");
  article = section.getElementsByTagName("article");

  for (i = 0; i < article.length; i++) {
    //Declaring my search params.
    p1 = article[i].getElementsByTagName("p")[0];
    txtValue1 = p1.textContent || p1.innerText;
    if (txtValue1.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
}

//Remove .toUpperCase(); If you wanna make it case sensitive. Both places
function searchCountry() {
  let input, filter, section, article, p1, p2, i, txtValue1, txtValue2;
  //Assigning values to the variables related to my dom and making the input not case sensitive
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  section = document.getElementById("information");
  article = section.getElementsByTagName("article");

  for (i = 0; i < article.length; i++) {
    //Declaring my search params.
    p2 = article[i].getElementsByTagName("p")[1];
    txtValue2 = p2.textContent || p2.innerText;
    if (txtValue2.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
}

//Remove .toUpperCase(); If you wanna make it case sensitive. Both places
function searchAll() {
  //Creating a bunch of variables imma use througout the function
  let input, filter, section, article, p1, p2, i, txtValue1, txtValue2;
  //Assigning values to the variables related to my dom and making the input not case sensitive
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  section = document.getElementById("information");
  article = section.getElementsByTagName("article");

  for (i = 0; i < article.length; i++) {
    //Declaring my search params.
    p1 = article[i].getElementsByTagName("p")[0];
    p2 = article[i].getElementsByTagName("p")[1];
    txtValue1 = p1.textContent || p1.innerText;
    txtValue2 = p2.textContent || p2.innerText;
    if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
}

function searchTags() {
  let input, filter, section, article, p1, p2, p3, i ,txtValue1, txtValue2, txtValue3;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  section = document.getElementById("information");
  article = section.getElementsByTagName("article");

  for (i = 0; i < article.length; i++){
    p1 = article[i].getElementsByTagName("p")[2];
    p2 = article[i].getElementsByTagName("p")[3];
    p3 = article[i].getElementsByTagName("p")[4];
    txtValue1 = p1.textContent || p1.innerText;
    txtValue2 = p2.textContent || p2.innerText;
    txtValue3 = p3.textContent || p3.innerText;
    if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1) {
      article[i].style.display = "";
    } else {
      article[i].style.display = "none";
    }
  }
}

