import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  state() {
    return {
      products: [],
      singleProduct: [],
      limitProducts: [],
      categories: [],
      cart: [],
      cartItemCount: 0,
    };
  },
  mutations,
  actions,
  getters,
};
