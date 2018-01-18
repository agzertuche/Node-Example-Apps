const fs = require('fs');
const notesFilePath = 'notes-data.json';

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync(notesFilePath);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }  
};

var saveNotes = (notes) => {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter(n => n.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } 
};

var getAll = () => {
  var notes = fetchNotes();
  return notes;
};

var getNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter(n => n.title === title);
  return note.pop();
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(n => n.title !== title);  
  saveNotes(filteredNotes);

  return notes.length != filteredNotes.length;
};

var logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};