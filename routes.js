const category = require('./controller');
const validation = require('./validation');
const router = require('express').Router();

router.get('/category/', category.getAllCategory);
router.get('/category/:id', category.getSingleCategory);
router.post('/category/', validation.categoryValidator, category.postSingleCategory);
router.put('/category/:id', validation.categoryValidator, category.putSingleCategory);
router.delete('/category/:id', category.deleteSingleCategory);

router.all('*', (request, response) => {
    response.send("404 Page Not Found");
});

module.exports = router;