import Api from "./Api";

export default {
  // All Products
  all() {
    return Api.get("products");
  },

  // Single Product
  show(id) {
    return Api.get(`products/${id}`);
  },

  // All category
  categories() {
    return Api.get("products/categories");
  },
};
