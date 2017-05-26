const router = require('express').Router();

router.get('/', (request, response) => {
  response.send('Hello World');
});

module.exports = router;
