const controller = require('./controller');
const router = require('express').Router();

router.get('/', controller.getAllCategory);
router.get('/:id', controller.getSingleCategory);
router.post('/', controller.postSingleCategory);
router.put('/:id', controller.putSingleCategory);
router.delete('/:id', controller.deleteSingleCategory);

router.all('*', (request, response) => {
    response.send("404 Page Not Found");
});

module.exports = router;