import { Router } from 'express';
import { validationResult } from 'express-validator';
import { 
    validateCreateProductRequest, 
    validateUpdateProductRequest, 
    validateUpdateCreateRequest, 
    validateUpdateRequest, 
    validateCreateUpdatePointRequest, 
    validateUpdatedUpdatePointRequest,
    validateRequests
    } from "./modules/validateRequests"

// This way we create a new router instance
const router = Router();

/** Product */
router.get("/product", (req, res) => {
    res.send("Hello from product");
    res.status(200);
});
router.get("/product/:id", (req, res) => {});
router.put("/product/:id", validateRequests, (req, res) => {
    // const errors = validationResult(req) // Validating based of what we have put in the middleware

    // if(!errors.isEmpty()){
    //     res.status(400); 
    //     res.send({errors: errors.array()});
    // }



}); 
router.post("/product/", validateCreateProductRequest, (req, res) => {
    const errors = validationResult
}); // Validate
router.delete("/product/:id", (req, res) => {});

/** Update */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/", () => {});
router.delete("/update/:id", () => {});

/** Update Point */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint/", () => {});
router.delete("/updatepoint/:id", () => {});

// export the router
export default router;
