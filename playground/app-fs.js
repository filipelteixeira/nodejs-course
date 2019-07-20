// ES 6: Load Node JS Module
//import { writeFileSync } from 'fs';
const fs = require('fs');

// Write line to a new file
fs.writeFileSync('notes.txt', 'Something more');

// Challenge:
fs.appendFileSync('notes.txt', '\nadded text');
