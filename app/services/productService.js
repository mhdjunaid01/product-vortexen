import axios from "axios";

export async function fetchProducts() {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
}