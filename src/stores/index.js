import { createStore } from "vuex";
import products from "../stores/modules/products/index";

const store = createStore({
  modules: {
    products,
  },
});

export default store;
