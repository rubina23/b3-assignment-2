import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad);
  return result;
};

const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

const getOrderById = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  getOrderById,
};
