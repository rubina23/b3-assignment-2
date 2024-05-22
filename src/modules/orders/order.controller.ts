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

export const OrderControllers = {
  createOrder,
};
