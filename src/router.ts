import { Router } from 'express';
import { 
    validateCreateProductRequest, 
    validateUpdateProductRequest, 
    validateUpdateCreateRequest, 
    validateUpdateRequest, 
    validateCreateUpdatePointRequest, 
    validateUpdatedUpdatePointRequest,
    handleInputErrors
    } from "./modules/middlewares"

// This way we create a new router instance
const router = Router();

/** Product */
router.get("/product", (req, res) => {
    res.send("Hello from product");
    res.status(200);
});
router.get("/product/:id", (req, res) => {});
router.put("/product/:id", validateUpdateProductRequest, handleInputErrors, (req, res) => {
    
}); 
router.post("/product/", validateCreateProductRequest, handleInputErrors, (req, res) => {

});
router.delete("/product/:id", (req, res) => {});

/** Update */
router.get("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.put("/update/:id", validateUpdateRequest, handleInputErrors, (req, res) => {});
router.post("/update/", validateUpdateCreateRequest, handleInputErrors, (req, res) => {});
router.delete("/update/:id", () => {});

/** Update Point */
router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.put("/updatepoint/:id", validateUpdatedUpdatePointRequest, handleInputErrors, (req, res) => {});
router.post("/updatepoint/", validateCreateUpdatePointRequest, handleInputErrors, (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});

// export the router
export default router;
