class ServiceError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = "ServiceError";
    this.status = status;
  }
}
const Product = require("../models/Product");
const getAllProducts = async () => {
  try {
    const allProducts = await Product.find({});
    return allProducts;
  } catch (error) {
    throw new ServiceError(
      `DB Error: Failed to fetch all products: ${error.message}`,
      400
    );
  }
};
const createOneProduct = async (data) => {
  try {
    const newProduct = await Product.create(data);
    return newProduct;
  } catch (error) {
    throw new ServiceError(
      `DB Error: Failed to create new product: ${error.message}`,
      400
    );
  }
};
const getOneProduct = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new ServiceError(
      `DB Error: Failed to fetch product ${id}: ${error.message}`,
      400
    );
  }
};
const updateOneProduct = async (id, changes) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, changes, {
      new: true,
      runValidators: true,
    });
    return updatedProduct;
  } catch (error) {
    throw new ServiceError(
      `DB Error: Failed to update product ${id}: ${error.message}`,
      400
    );
  }
};
const deleteOneProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct ? 1 : 0;
  } catch (error) {
    throw new ServiceError(
      `DB Error: Failed to delete product ${id}: ${error.message}`,
      400
    );
  }
};
module.exports = {
  getAllProducts,
  createOneProduct,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
