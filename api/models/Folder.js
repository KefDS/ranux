const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Folder = new Schema({
  title: String,
});

module.exports = Folder;
