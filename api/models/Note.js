const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Note = new Schema({
  title: String,
  content: String,
  color: String,
  notebookId: String,
});

module.exports = Note;
