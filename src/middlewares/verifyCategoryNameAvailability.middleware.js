import database from "../database";

const verifyCategoryNameAvailabilityMiddleware = async (req, res, next) => {
  const { name } = req.body;

  try {
    const result = await database.query(
      "SELECT * FROM categories WHERE name = $1",
      [name]
    );

    if (result.rows.length > 0) {
      return res.status(400).json({ message: "This category already exists" });
    }
    next();
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

export default verifyCategoryNameAvailabilityMiddleware;
