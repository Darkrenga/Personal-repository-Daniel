function fetchData(key) {
    fetch(key)
    .then(response => response.json())
    .then(data => {
        return data;
    })
}


const key = 'data.json';

fetchData(key);

console.log(data);