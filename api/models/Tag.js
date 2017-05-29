const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Tag = new Schema({
  title: String,
});

module.exports = Tag;
