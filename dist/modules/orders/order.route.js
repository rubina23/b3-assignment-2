"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
// import express, { Request, Response } from "express";
// import { Order } from "./order.model";
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/", order_controller_1.OrderControllers.createOrder);
router.get("/", order_controller_1.OrderControllers.getAllOrders);
router.get("/:orderId", order_controller_1.OrderControllers.getOrderById);
exports.OrderRoutes = router;