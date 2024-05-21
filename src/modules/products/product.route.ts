// import express, { Request, Response } from "express";
import express from "express";
// import { Product } from "./product.model";
import { ProductControllers } from "./product.controller";
const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/:productId", ProductControllers.getProductById);
router.get("/", ProductControllers.getAllProducts);
router.put("/:productId", ProductControllers.updateProduct);
router.delete("/:productId", ProductControllers.deleteProduct);

export const ProductRoutes = router;
