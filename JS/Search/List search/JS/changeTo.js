//ct stands for ChangeTo
//Each RadioButton Calls For A Different Function That Changes The Search function
function ctName() {
    const search = document.querySelector('#myInput');
    search.setAttribute("onkeyup", "searchName()");
    console.log("Now Searching By Name");
  }
  
  function ctCountry() {
    const search = document.querySelector('#myInput');
    search.setAttribute("onkeyup", "searchCountry()");
    console.log("Now Searching By Country");
  }
  
  function ctTags() {
    const search = document.querySelector('#myInput');
    search.setAttribute("onkeyup", "searchTags()");
    console.log("Now Searching By Tags");
  }
  
  function ctAll() {
    const search = document.querySelector('#myInput');
    search.setAttribute("onkeyup", "searchAll()");
    console.log("Now Searching By All");
  }