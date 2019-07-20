// notes.js

const fs = require('fs');

const fileDatabase = 'notes.json';

const getNotes = () => loadNotes();

const getNote = (id) => loadNotes().list.filter((note) => note.id === id)[0];

const addNote = (title, body) => {
    const notes = loadNotes();

    // push new note to the list
    notes.list.push({
        id: notes.id,
        title: title,
        body: body
    });

    // update last note id
    notes.id++;

    // save notes
    saveNotes(notes);
}

const removeNote = (id) => {
    const notes = loadNotes();

    const notesToKeep = notes.list.filter((note) => note.id != id);
    notes.list = notesToKeep;

    // save notes
    saveNotes(notes);
}

const loadNotes = () => {
    try {
        if (fs.existsSync(fileDatabase)) {            
            const dataBuffer = fs.readFileSync(fileDatabase);
            const dataJson = dataBuffer.toString();
            return JSON.parse(dataJson);
        }
        else {
            return {
                list: [],
                id: 1
            };
        }
    }
    catch (err) {
        throw err;
    }  
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync(fileDatabase, dataJSON);
}

module.exports = {
    list: getNotes,
    read: getNote,
    add: addNote,
    remove: removeNote
};