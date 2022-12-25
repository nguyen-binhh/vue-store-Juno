export default {
  getAllProducts(state, payload) {
    state.products = payload;
  },

  getAllCategories(state, payload) {
    state.categories = payload;
  },

  getSingleProduct(state, productId) {
    state.singleProduct = productId;
  },

  addToCart(state, { product, quantity }) {
    let productInCart = state.cart.find(
      (item) => item.product.id === product.id
    );
    if (productInCart) {
      productInCart.quantity += quantity;
      return;
    }

    state.cart.push({
      product,
      quantity,
    });
    localStorage.setItem("cart", state.cart);
  },

  removeFromCart(state, product) {
    state.cart = state.cart.filter((item) => item.product.id !== product.id);
  },

  addItem(state, { product, quantity }) {
    let bool = state.cart.some((item) => item.product.id === product.id);
    if (bool) {
      let productIndex = state.cart.findIndex(
        (el) => el.product.id === product.id
      );
      state.cart[productIndex]["quantity"] += 1;

      return;
    }

    state.cart.push({
      product,
      quantity,
    });
  },
  removeItem(state, { product, quantity }) {
    let bool = state.cart.some((item) => item.product.id === product.id);
    if (bool) {
      let productIndex = state.cart.findIndex(
        (el) => el.product.id === product.id
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
  },

  setItemFromLocalStorage(state) {
    const cart = localStorage.getItem("cart");
    if (cart) {
      state.cart = JSON.parse(JSON.stringify(cart));
    }
  },
};
