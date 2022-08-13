import database from "../database";

const getCategoryService = async (id) => {
  try {
    const res = await database.query(
      "SELECT FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rows.length === 0) {
      throw "Category not found";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default getCategoryService;
