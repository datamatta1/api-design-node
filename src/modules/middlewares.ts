import { body, validationResult, ValidationChain, oneOf } from 'express-validator';

export const validateCreateProductRequest: ValidationChain[] = [
    body('name').isString()
];
export const validateUpdateProductRequest = [
    validateCreateProductRequest
];

export const validateUpdateCreateRequest = [
    body('title').optional(),
    body('body').optional(),
];

export const validateUpdateRequest = [
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional()
];

export const validateCreateUpdatePointRequest: ValidationChain[] = [
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString()
];
export const validateUpdatedUpdatePointRequest = [
    body('name').optional().isString(),
    body('description').optional().isString()
];

export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req) 

    if(!errors.isEmpty()){
        res.status(400); 
        res.send({errors: errors.array()});
    } else {
        next(); 
    }
};