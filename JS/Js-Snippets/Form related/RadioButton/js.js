//Getting my button
const btn = document.querySelector('#btn');

//Handle click button
btn.onclick = function () {
    //Selecting all input with name of Choice
    const rbs = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    //Creating a loop and dividing up rbs into single elements
    for (const rb of rbs) {
        //Checking if any of the elements is checked
        if (rb.checked) {
            //Giving the Value of the radiobutton if its checked to selectedValue
            selectedValue = rb.value;
            break;
        } else {
            //Else give it a default value
            selectedValue = "You haven't checked a button off"
        }
    }
    alert(selectedValue);
};