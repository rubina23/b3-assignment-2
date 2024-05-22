import express, { Request, Response } from "express";
import { Order } from "./order.model";
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.post("/", OrderControllers.createOrder);
export const OrderRoutes = router;
