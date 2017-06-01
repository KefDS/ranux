//Folders controllers
//funciones para cada uno de nuestros verbos

const Folder = require('../models/Folder');

function getFolders(req, res) {
  Folder.find().exec(function (error, data) {
    if (!error) {
      res.status(200);
      res.json(data);
    } else {
      res.json(error);
      res.status(404);
    }
  });
}

function getFolderById(req, res) {
  Folder.findById(req.params.id, function (error, user) {
    if (!error) {
      res.json(user);
      res.status(200);
    } else {
      res.json({ error: error });
      res.status(404);
    }
  });
}

function addFolder(req, res) {
  const folder = new Folder(req.body);
  folder.save(function (error, data) {
    console.log(data);
    if (error) {
      res.json(error);
      res.status(422);
    } else {
      res.status(201);
      res.json(data);
    }
  });
}

function modifyFolderById(req, res) {
  Folder.findByIdAndUpdate(req.params.id, req.body, function (error, doc) {
    if (!error) {
      res.json(doc);
      res.status(204);
    } else {
      res.json(error);
      res.status(404);
    }
  });


}
function deleteFolderById(req, res) {
  Folder.findByIdAndRemove(req.params.id, function (error, doc) {
    if (!error) {
      res.json(doc);
      res.status(204);
    } else {
      res.json(error);
      res.status(404);
    }
  });
}


const foldersApi = {
  getFolders,
  addFolder,
  getFolderById,
  deleteFolderById,
  modifyFolderById,
};
module.exports = foldersApi;
