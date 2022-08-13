import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post(""); // create category
categoryRoutes.get(""); // list categories
categoryRoutes.get("/:id"); // get a category
categoryRoutes.patch("/:id"); // edit a category
categoryRoutes.delete("/:id"); // delete a  category

export default categoryRoutes;
