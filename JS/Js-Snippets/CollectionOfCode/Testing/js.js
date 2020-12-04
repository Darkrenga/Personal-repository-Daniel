//A - K decoder
// const out = document.getElementById('output');
// const demo = document.getElementById('demo');

// function myFunction() {
//     var str = "Hello World!";
//     var n = str.length;
//     document.getElementById("demo").innerHTML = n;
//   }


function Enkrypter() {
    let str = document.getElementById('form').value;
    let strLowerCase = str.toLowerCase();
    let strLength = str.length;

    let text = "";
    for (i = 0; i < strLength; i++) {
         switch (strLowerCase.charAt(i)) {
             case "a":
                 text += "k"
                 break;
                 
            case "b":
                 text += "l"
                 break;
            
            case "c":
                text += "m"
                break;
            
            case "d":
                text += "n"
                break;
            
            case "e":
                text += "o"
                break;
            
            case "f":
                text += "p"
                break;
            
            case "g":
                text += "q"
                break;
            
            case "h":
                text += "r"
                break;
            
            case "i":
                text += "s"
                break;
            
            case "j":
                text += "t"
                break;
            
            case "k":
                text += "u"
                break;
            
            case "l":
                text += "v"
                break;
            
            case "m":
                text += "w"
                break;
            
            case "n":
                text += "x"
                break;
            
            case "o":
                text += "y"
                break;
            
            case "p":
                text += "z"
                break;
            
            case "q":
                text += "æ"
                break;
            
            case "r":
                text += "ø"
                break;
            
            case "s":
                text += "å"
                break;
            
            case "t":
                text += "a"
                break;
            
            case "u":
                text += "b"
                break;
            
            case "v":
                text += "c"
                break;
            
            case "w":
                text += "d"
                break;
            
            case "x":
                text += "e"
                break;
            
            case "y":
                text += "f"
                break;
            
            case "z":
                text += "g"
                break;
            
            case "æ":
                text += "h"
                break;
            
            case "ø":
                text += "i"
                break;
            
            case "å":
                text += "j"
                break;
            
            case " ":
                text += " "
                break;

             default:
                 break;
         }
         toUpper(text)
    }

}


function Dekrypter() {
    let str = document.getElementById('form').value;
    let strLowerCase = str.toLowerCase();
    let strLength = str.length;


    let text = "";
    for (i = 0; i < strLength; i++) {
        switch (strLowerCase.charAt(i)) {
            case "k":
                text += "a"
                break;
                
            case "l":
                text += "b"
                break;
            
            case "m":
                text += "c"
                break;
            
            case "n":
                text += "d"
                break;
            
            case "o":
                text += "e"
                break;
            
            case "p":
                text += "f"
                break;
            
            case "q":
                text += "g"
                break;
            
            case "r":
                text += "h"
                break;
            
            case "s":
                text += "i"
                break;
            
            case "t":
                text += "j"
                break;
            
            case "u":
                text += "k"
                break;
            
            case "v":
                text += "l"
                break;
            
            case "w":
                text += "m"
                break;
            
            case "x":
                text += "n"
                break;
            
            case "y":
                text += "o"
                break;
            
            case "z":
                text += "p"
                break;
            
            case "æ":
                text += "q"
                break;
            
            case "ø":
                text += "r"
                break;
            
            case "å":
                text += "s"
                break;
            
            case "a":
                text += "t"
                break;
            
            case "b":
                text += "u"
                break;
            
            case "c":
                text += "v"
                break;
            
            case "d":
                text += "w"
                break;
            
            case "e":
                text += "x"
                break;
            
            case "f":
                text += "y"
                break;
            
            case "g":
                text += "z"
                break;
            
            case "h":
                text += "æ"
                break;
            
            case "i":
                text += "ø"
                break;
            
            case "j":
                text += "å"
                break;
            
            case " ":
                text += " "
                break;

            default:
                break;
        }
        toUpper(text);
        
    }
}

let upperCased;
function toUpper(string) {
    upperCased = string.charAt(0).toUpperCase() + string.substring(1);
    document.getElementById("demo").innerHTML = upperCased;
}

