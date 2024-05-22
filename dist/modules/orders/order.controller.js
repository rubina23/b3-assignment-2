"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const result = yield order_service_1.OrderServices.createOrder(orderData);
    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
    });
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getAllOrders();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            error: err,
        });
    }
});
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const result = yield order_service_1.OrderServices.getOrderById(orderId);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            // error: err,
        });
    }
});
const orderSearchByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderSearchByEmail } = req.params;
        const result = yield order_service_1.OrderServices.getOrderById(orderSearchByEmail);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            // error: err,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrders,
    getOrderById,
    orderSearchByEmail,
};
