const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  color: String,
  notebookId: String,
  tagsIds: [String],
});

module.exports = mongoose.model('Note', NoteSchema);
