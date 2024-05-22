import express from "express";
// import express, { Request, Response } from "express";
// import { Order } from "./order.model";
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrders);
router.get("/:orderId", OrderControllers.getOrderById);

export const OrderRoutes = router;
