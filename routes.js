const categoryController = require('./controllers/category');
const categoryValidator = require('./middlewares/validations/category');
const router = require('express').Router();

router.get('/category/', categoryController.getAllCategory);
router.get('/category/:id', categoryController.getSingleCategory);
router.post('/category/', categoryValidator, categoryController.postSingleCategory);
router.put('/category/:id', categoryValidator, categoryController.putSingleCategory);
router.delete('/category/:id', categoryController.deleteSingleCategory);

router.all('*', (request, response) => {
    response.send("404 Page Not Found");
});

module.exports = router;