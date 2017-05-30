const router = require('express').Router();
const folderApi = require('../controllers/foldersController');
const notesController = require('../controllers/notesController');


router.get('/folders', folderApi.getFolders);
router.post('/folders', folderApi.addFolder);
router.get('/folders/:id', folderApi.getFolderById);
router.delete('/folders/:id', folderApi.deleteFolderById);
router.put('/folders/:id', folderApi.modifyFolderById);


router.get('/notes', notesController.index);
router.post('/notes', notesController.create);
router.put('/note/:id', notesController.update);
router.delete('/note/:id', notesController.destroy);

module.exports = router;
