const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  color: String,
  tagsIds: [String],
  folderId: String,
});

module.exports = mongoose.model('Note', NoteSchema);
