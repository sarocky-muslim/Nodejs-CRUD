const { body, validationResult } = require('express-validator');
const Category = require('./model');

exports.categoryValidator = [
    body('name')
        .not().isEmpty().withMessage('this field is required')
        .custom(async name => {
            const category = Category.findOne({name});
            if(category){
                return Promise.reject('the name already in use');
            }
        }),
    body('description').isLength({max : 100}).withMessage('maximum length is 2'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
]