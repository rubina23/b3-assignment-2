import z from "zod";
const variantSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
});

const inventorySchema = z.object({
  quantity: z.number().int().positive(),
  inStock: z.boolean(),
});

const productSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number().positive(),
  category: z.string().nonempty(),
  tags: z.array(z.string()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

export const ProductSchema = productSchema;
