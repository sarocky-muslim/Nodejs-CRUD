const categoryValidator = require('./middlewares/validations/category');
const userValidator = require('./middlewares/validations/user');
const categoryController = require('./controllers/category');
const userController = require('./controllers/auth');
const router = require('express').Router();

router.get('/category/', categoryController.getAllCategory);
router.get('/category/:id', categoryController.getSingleCategory);
router.post('/category/', categoryValidator, categoryController.postSingleCategory);
router.put('/category/:id', categoryValidator, categoryController.putSingleCategory);
router.delete('/category/:id', categoryController.deleteSingleCategory);

router.get('/user/all', userController.allUser);
router.get('/user/login', userController.loginUser);
router.post('/user/create', userValidator, userController.createUser);
//router.post('/user/logout', userController.logoutUser);

router.all('*', (request, response) => {
    response.send("404 Page Not Found");
});

module.exports = router;