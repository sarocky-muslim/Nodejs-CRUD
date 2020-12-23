const category = require('./controller');
const router = require('express').Router();

router.get('/category/', category.getAllCategory);
router.get('/category/:id', category.getSingleCategory);
router.post('/category/', category.postSingleCategory);
router.put('/category/:id', category.putSingleCategory);
router.delete('/category/:id', category.deleteSingleCategory);

router.all('*', (request, response) => {
    response.send("404 Page Not Found");
});

module.exports = router;