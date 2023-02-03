import { body, validationResult, ValidationChain } from 'express-validator';

export const validateCreateProductRequest: ValidationChain[] = [
    body('name').isString()
];
export const validateUpdateProductRequest = [
    validateCreateProductRequest
];

export const validateUpdateCreateRequest: String[] = [
    body('title').toString(),
    body('body').toString()

]

export const validateUpdateRequest = [
    validateUpdateCreateRequest
];

export const validateCreateUpdatePointRequest: ValidationChain[] = [
    body('name').isString(),
    body('description').isString()
];
export const validateUpdatedUpdatePointRequest = [
    validateCreateUpdatePointRequest
];

export const validateRequests = ( validator, req, res ) => {
    const {url, method} = req.req
    console.log('url :>> ', url);
    console.log('method :>> ', method);
// preparation for the validate requests function that will check in 
    // const error = validationResult(req)
}