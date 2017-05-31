const router = require('express').Router();
const folderApi = require('../controllers/foldersController');
const notesController = require('../controllers/notesController');
const tagsController = require('../controllers/tagsController');

router.get('/folders', folderApi.getFolders);
router.post('/folders', folderApi.addFolder);
router.get('/folders/:id', folderApi.getFolderById);
router.delete('/folders/:id', folderApi.deleteFolderById);
router.put('/folders/:id', folderApi.modifyFolderById);


router.get('/notes', notesController.index);
router.post('/notes', notesController.create);
router.put('/note/:id', notesController.update);
router.delete('/note/:id', notesController.destroy);

router.get('/tags', tagsController.index);
router.post('/tags', tagsController.create);
router.put('/tag/:id', tagsController.update);
router.delete('/tag/:id', tagsController.destroy);

module.exports = router;
