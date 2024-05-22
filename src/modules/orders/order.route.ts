import express, { Request, Response } from "express";
const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.send("hiiiii");
});
// router.post("/", ProductControllers.createProduct);

export const OrderRoutes = router;
