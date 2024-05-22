"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const variantSchema = zod_1.default.object({
    type: zod_1.default.string().nonempty(),
    value: zod_1.default.string().nonempty(),
});
const inventorySchema = zod_1.default.object({
    quantity: zod_1.default.number().int().positive(),
    inStock: zod_1.default.boolean(),
});
const productSchema = zod_1.default.object({
    name: zod_1.default.string().nonempty(),
    description: zod_1.default.string().nonempty(),
    price: zod_1.default.number().positive(),
    category: zod_1.default.string().nonempty(),
    tags: zod_1.default.array(zod_1.default.string()),
    variants: zod_1.default.array(variantSchema),
    inventory: inventorySchema,
});
exports.ProductSchema = productSchema;
