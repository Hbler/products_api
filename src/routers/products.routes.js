import { Router } from "express";

import {
  createProductController,
  deleteProductController,
  getProductController,
  listProductsByCategoryController,
  listProductsController,
  updateProductController,
} from "../controllers/products.controllers";

import productSchema from "../database/schemas/product.schema";
import schemaValidation from "../middlewares/schemaValidation.middleware";

const productsRouter = Router();

productsRouter.post(
  "",
  schemaValidation(productSchema),
  createProductController
); // create products
productsRouter.get("", listProductsController); // list all products
productsRouter.get("/:id", getProductController); // get a product
productsRouter.patch("/:id", updateProductController); // edit a product
productsRouter.delete("/:id", deleteProductController); // delete a product
productsRouter.get("/category/:cat_id", listProductsByCategoryController); // list products of cat_id

export default productsRouter;
