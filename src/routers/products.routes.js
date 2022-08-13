import { Router } from "express";

const productsRouter = Router();

productsRouter.post(""); // create products
productsRouter.get(""); // list all products
productsRouter.get("/:id"); // get a product
productsRouter.patch("/:id"); // edit a product
productsRouter.delete("/:id"); // delete a product
productsRouter.get("/category/:cat_id"); // list products of cat_id

export default productsRouter;
