import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  //   res.send("hiiiii");
  //   console.log(req.body);
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
      message: "All Products are fetched Successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Couldn't fetch products!",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
