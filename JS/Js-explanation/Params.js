function doSomething(name, age = 20) {
    console.log(name + ' er ' + age + ' år gammel');
}

doSomething("Stig");



function doSomethingElse(name, age) {
    let text = name + ' er ' + age + ' år gammel' ;
    return text;
}

let elm = doSomethingElse("Stig", 30);

console.log(elm)