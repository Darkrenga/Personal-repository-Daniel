function createDom(title, ) {

    const div = document.createElement('div');
    div.setAttribute('id', 'wrapping');

    const divText = document.createElement('div');
    divText.innerHTML = title;

    const divCode = document.createElement('div');
    divCode.setAttribute('id', 'Output');

    document.body.prepend(div);
    div.appendChild(divText);
    div.appendChild(divCode);

}

createDom("hejsa");