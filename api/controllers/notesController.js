const mongoose = require('mongoose');
const Note = require('../models/Note');

function index(request, response) {
  Note.find().exec((error, data) => {
    if (!error) {
      response.status(200).json(data);
    }
    else {
      response.status(500).json({});
    }
  });
}

function create(request, response) {
  const newNote = new Note(request.body);
  newNote.save((error, data) => {
    if (!error) {
      response.status(201).json(data);
    }
    else {
      response.status(422).json({});
    }
  });
}

function update(request, response) {
  Note.findByIdAndUpdate(request.params.id, request.body, (error, data) => {
    if (!error) {
      response.status(204).json({});
    }
    else {
      response.status(500).json({});
    }
  });
}

function destroy(request, response) {
  Note.findByIdAndRemove(request.params.id, (error, data) => {
    if (!error) {
      response.status(204).json({});
    }
    else {
      response.status(500).json({});
    }
  });
}

const notesController = {
  index,
  create,
  update,
  destroy,
};

module.exports = notesController;
