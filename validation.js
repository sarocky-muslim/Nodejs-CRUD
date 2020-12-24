const { body, validationResult } = require('express-validator');

exports.categoryValidator = [
    body('name').not().isEmpty().withMessage('this field is required'),
    body('description').isLength({max : 100}).withMessage('maximum length is 2'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
]