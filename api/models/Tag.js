const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Tag', TagSchema);
