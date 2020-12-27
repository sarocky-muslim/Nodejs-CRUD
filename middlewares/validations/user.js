const { body, validationResult } = require('express-validator');
const User = require('../../models/User');

let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

module.exports = [
    body('name')
        .not().isEmpty().withMessage('this field is required')
        .isLength({max : 20}).withMessage('maximum length is 20'),
    body('email')
        .isEmail().withMessage('this is not email format')
        .custom(async email => {
            const user = await User.findOne({email});
            if(user){
                return Promise.reject('the email already in use');
            }
        }),
    body('password')
        .matches(passwordRegex).withMessage('minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1'),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
]