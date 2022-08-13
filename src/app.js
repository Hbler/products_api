import "dotenv/config";
import express from "express";
import { startDatabase } from "./database";
import categoryRoutes from "./routers/category.routes";
import productsRouter from "./routers/products.routes";

const app = express();

app.use(express.json());
app.use("/products", productsRouter);
app.use("/categories", categoryRoutes);

export default app.listen(process.env.PORT || 3000, () => {
  startDatabase();
  console.log("Server running");
});
