const router = require('express').Router();
const folderApi = require('../controllers/foldersController');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/folders', folderApi.getFolders);
router.post('/folders', urlencodedParser, folderApi.addFolder);
router.get('/folders/:id', urlencodedParser, folderApi.getFolderById);
router.delete('/folders/:id', urlencodedParser, folderApi.deleteFolderById);
router.put('/folders/:id', urlencodedParser, folderApi.modifyFolderById);

module.exports = router;
