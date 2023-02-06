export default {
  products(state) {
    return state.products;
  },

  getAllCategoryProducts(state) {
    return state.getAllCategoryProducts;
  },

  limitProducts(state) {
    return state.products.slice(0, 8);
  },
  singleProduct(state) {
    return state.singleProduct;
  },

  addToCart(state) {
    return JSON.parse(JSON.stringify(state.cart));
  },
  cartItemCount(state) {
    return state.cart.length;
  },
  cartTotalPrice(state) {
    let total = 0;
    console.log(state.cart.product);

    state.cart.forEach((item) => (total += item.product.price * item.quantity));

    return total.toFixed(2);
  },
};
