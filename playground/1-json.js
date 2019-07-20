const fs = require('fs');
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('json1.json', bookJSON);

const dataBuffer = fs.readFileSync('json1.json');

const file = dataBuffer.toString();
const data = JSON.parse(file);
console.log(data);