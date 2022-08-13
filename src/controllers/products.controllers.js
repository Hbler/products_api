import createProductSevice from "../services/products/createProducts.service";
import deleteProductService from "../services/products/deleteProduct.service";
import getProductService from "../services/products/getProduct.service";
import listProductsService from "../services/products/listProducts.service";
import listProductsByCategoryService from "../services/products/listProductsByCategory.service";
import updateProductService from "../services/products/updateProduct.service";

export const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;
  try {
    const product = await createProductSevice(name, price, category_id);

    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await deleteProductService(id);

    return res.status(204);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export const updateProductController = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;

  try {
    const product = await updateProductService(id, productData);

    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export const getProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductService(id);

    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export const listProductsController = async (req, res) => {
  try {
    const products = await listProductsService();

    return res.status(201).json(products);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export const listProductsByCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await listProductsByCategoryService(id);

    return res.status(201).json(products);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
