import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
  },
  productId: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

// Model
export const Order = model<TOrder>("Order", orderSchema);
// export const Product = model<TProduct>("Product", productSchema);
