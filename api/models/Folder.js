const mongoose = require('mongoose');


const FolderSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Folder', FolderSchema);
