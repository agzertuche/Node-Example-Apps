const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })
  .help()
  .argv;

var command = process.argv[2];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.warn('Note title already taken, choose another title...');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  if(allNotes.length > 0){
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach(n => {
      notes.logNote(n);
    });
  } else {
    console.log('No notes file found');
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.warn('Note not found...');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}