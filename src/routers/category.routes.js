import { Router } from "express";

import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  listCategoriesController,
  updateCategoryController,
} from "../controllers/categories.controllers";
import verifyCategoryNameAvailabilityMiddleware from "../middlewares/verifyCategoryNameAvailability.middleware";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  verifyCategoryNameAvailabilityMiddleware,
  createCategoryController
); // create category
categoryRoutes.get("", listCategoriesController); // list categories
categoryRoutes.get("/:id", getCategoryController); // get a category
categoryRoutes.patch("/:id", updateCategoryController); // edit a category
categoryRoutes.delete("/:id", deleteCategoryController); // delete a  category

export default categoryRoutes;
