"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const orderSchema = zod_1.default.object({
    email: zod_1.default.string().email().optional(),
    productId: zod_1.default.string().optional(),
    price: zod_1.default.number().positive().optional(),
    quantity: zod_1.default.number().int().positive().optional(),
});
exports.OrderSchema = orderSchema;
