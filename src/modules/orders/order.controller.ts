import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderServices.createOrder(orderData);
  res.json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrders();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      error: err,
    });
  }
};

const getOrderById = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.getOrderById(orderId);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      // error: err,
    });
  }
};
const orderSearchByEmail = async (req: Request, res: Response) => {
  try {
    const { orderSearchByEmail } = req.params;
    const result = await OrderServices.getOrderById(orderSearchByEmail);
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      // error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrderById,
  orderSearchByEmail,
};
