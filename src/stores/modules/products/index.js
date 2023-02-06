import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

let cart = localStorage.getItem("cart");

export default {
  state() {
    return {
      products: [],
      singleProduct: [],
      limitProducts: [],
      categories: [],
      cart: cart ? JSON.parse(cart) : [],
      cartItemCount: 0,
    };
  },
  mutations,
  actions,
  getters,
};
