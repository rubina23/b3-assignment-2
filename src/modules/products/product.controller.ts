import { Request, Response } from "express";
import { ProductServices } from "./product.service";
// import { error } from "console";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);
  res.json({
    success: true,
    messase: "Product Created Successfully!",
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Product not found",
      // error: err,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    // const { productId } = req.params;
    // const result = await ProductServices.updateProduct(productId);
    const result = await ProductServices.updateProduct();
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
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
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted Successfully!",
      data: result, //ekhane null chilo
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Couldn't fetch products!",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
