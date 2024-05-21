import { Schema, model } from "mongoose";
import { TInventory, TProduct, Tvariants } from "./product.interface";

const variantSchema = new Schema<Tvariants>({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
  },
  inStock: {
    type: Boolean,
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  tags: {
    type: [String],
  },
  variants: {
    type: [variantSchema],
  },
  inventory: {
    type: inventorySchema,
  },
});

//Create Model
export const Product = model<TProduct>("Product", productSchema);
