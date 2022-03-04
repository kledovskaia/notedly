const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema();
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
