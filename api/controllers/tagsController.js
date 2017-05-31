const mongoose = require('mongoose');
const Tag = require('../models/Tag');

function index(request, response) {
  Tag.find().exec((error, data) => {
    if (!error) {
      response.status(200).json(data);
    }
    else {
      response.status(500).json({});
    }
  });
}

function create(request, response) {
  const newTag = new Tag(request.body);
  newTag.save((error, data) => {
    if (!error) {
      response.status(201).json(data);
    }
    else {
      response.status(422).json({});
    }
  });
}

function update(request, response) {
  Tag.findByIdAndUpdate(request.params.id, request.body, (error, data) => {
    if (!error) {
      response.status(204).json({});
    }
    else {
      response.status(500).json({});
    }
  });
}

function destroy(request, response) {
  console.log(request.params.id);
  Tag.findByIdAndRemove(request.params.id, (error, data) => {
    if (!error) {
      response.status(204).json({});
    }
    else {
      response.status(500).json({});
    }
  });
}

const tagsController = {
  index,
  create,
  update,
  destroy,
};

module.exports = tagsController;
