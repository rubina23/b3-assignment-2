import { request } from "express";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  // const searchTerm = request.query.searchTerm;
  // const result = await Product.find({
  //   name: { $regex: searchTerm },
  // });
  return result;
};

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async () => {
  // const result = await Product.updateOne();
  // const result = await Product.updateOne({
  // const result = await Product.findOneAndUpdate({
  // const result = await Product.findByIdAndUpdate({
  const result = await Product.updateOne({
    name: "iphone99 update for testing",
    description: "test9",
    // inventory: { quantity: 19 },
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  // const result = await Product.findOneAndDelete();
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
