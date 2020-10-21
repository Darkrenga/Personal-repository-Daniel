function createDom(title, ) {

    const div = document.createElement('div');
    div.setAttribute('id', 'wrapping');

    const divText = document.createElement('h2');
    divText.innerHTML = title;

    const divCode = document.createElement('div');
    divCode.setAttribute('id', 'Output');

    const hr = document.createElement('hr');

    document.body.prepend(div);
    div.appendChild(divText);
    div.appendChild(divCode);
    div.appendChild(hr);

}
