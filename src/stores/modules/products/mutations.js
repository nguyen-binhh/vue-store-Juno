export default {
  getAllProducts(state, payload) {
    state.products = payload;
  },

  getAllCategoryProducts(state, payload) {
    state.getAllCategoryProducts = payload;
  },

  getSingleProduct(state, productId) {
    state.singleProduct = productId;
  },

  addToCart(state, { product, quantity }) {
    let productInCart = state.cart.find(
      (item) => item.product._id === product._id
    );
    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }

    state.cart.push({
      product,
      quantity,
    });
    this.commit("saveData");
  },

  saveData(state) {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  removeData(state) {
    localStorage.removeItem("cart", JSON.stringify(state.cart));
  },

  removeFromCart(state, product) {
    state.cart = state.cart.filter((item) => item.product._id !== product._id);
  },

  addItem(state, { product, quantity }) {
    let bool = state.cart.some((item) => item.product._id === product._id);
    if (bool) {
      let productIndex = state.cart.findIndex(
        (el) => el.product._id === product._id
      );
      state.cart[productIndex]["quantity"] += 1;

      return;
    }

    state.cart.push({
      product,
      quantity,
    });
    this.commit("saveData");
  },
  removeItem(state, { product, quantity }) {
    let bool = state.cart.some((item) => item.product._id === product._id);
    if (bool) {
      let productIndex = state.cart.findIndex(
        (el) => el.product._id === product._id
      );
      if (state.cart[productIndex]["quantity"] !== 0) {
        state.cart[productIndex]["quantity"] -= 1;
      }
      if (state.cart[productIndex]["quantity"] === 0) {
        state.cart.splice(productIndex, 1);
      }
      return;
    }
  },

  clearAllCart(state) {
    state.cart = [];
    this.commit("removeData");
  },
};
