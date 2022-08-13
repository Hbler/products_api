import * as yup from "yup";

const productSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  price: yup.string().required("Price is required"),
  category_id: yup.number(),
});

export default productSchema;
