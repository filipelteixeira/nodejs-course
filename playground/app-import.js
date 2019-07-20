const validator = require('validator');
const getNotes = require('../notes-app/notes.js');

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('filipe@example.com'));
console.log(validator.isURL('https://www.medium.com'));