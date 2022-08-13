import database from "../../database";

const listProductsByCategoryService = async (id) => {
  try {
    const res = await database.query(
      `
      SELECT pr.name, pr.price, cat.name category 
      FROM products pr 
      JOIN categories cat ON cat.id = $1`,
      [id]
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsByCategoryService;
