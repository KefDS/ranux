const router = require('express').Router();
const notesController = require('../controllers/notesController');

router.get('/notes', notesController.index);
router.post('/notes', notesController.create);
router.put('/note/:id', notesController.update);
router.delete('note/:id', notesController.destroy);

module.exports = router;
