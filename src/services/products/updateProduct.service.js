import database from "../database";

const updateProductService = async (id, productData) => {
  try {
    if (productData.id) {
      delete productData["id"];
    }

    let query = "UPDATE products SET ";
    const keys = Object.keys(productData);
    const values = Object.values(productData);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, id]);

    if (res.rows.length === 0) {
      throw "Prodcut not found";
    }

    return { message: "Product updated", category: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
