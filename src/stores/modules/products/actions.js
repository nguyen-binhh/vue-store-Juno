import Products from "@/services/Products";

export default {
  // All products
  async getAllProducts({ commit }) {
    const res = await Products.all();
    const data = await res.data;

    commit("getAllProducts", data);
  },

  // Single Product
  async getSingleProduct({ commit }, id) {
    const res = await Products.show(id);
    const data = await res.data;

    commit("getSingleProduct", data);
  },

  // add to cart
  addProductToCart({ commit }, { product, quantity }) {
    commit("addToCart", {
      product,
      quantity,
    });
  },

  addToCart({ commit }, product) {
    commit("addItem", product);
  },

  removeToCart({ commit }, product) {
    commit("removeItem", product);
  },

  removeFromCart({ commit }, product) {
    commit("removeFromCart", product);
  },

  clearAllCart({ commit }) {
    commit("clearAllCart");
  },
};
