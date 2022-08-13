import createCategorySevice from "../services/categories/createCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import getCategoryService from "../services/categories/getCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import updateCategoryService from "../services/categories/updateCategory.service";

export const createCategoryController = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await createCategorySevice(name);

    return res.status(201).json(category);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await deleteCategoryService(id);

    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const category = await updateCategoryService(id, name);

    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const getCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await getCategoryService(id);

    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const listCategoriesController = async (req, res) => {
  try {
    const category = await listCategoriesService();

    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
