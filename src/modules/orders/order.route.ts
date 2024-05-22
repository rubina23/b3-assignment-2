import express, { Request, Response } from "express";
import { Order } from "./order.model";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  //   res.send("hiiiii");
  //   console.log(req.body);
  const result = await Order.create(req.body);
  res.json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
});
export const OrderRoutes = router;
