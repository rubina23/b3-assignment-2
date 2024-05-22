import z from "zod";

const orderSchema = z.object({
  email: z.string().email().optional(),
  productId: z.string().optional(),
  price: z.number().positive().optional(),
  quantity: z.number().int().positive().optional(),
});

export const OrderSchema = orderSchema;
