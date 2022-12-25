<template>
  <transition name="checkout" appear>
    <div class="container mx-auto">
      <div class="mt-[5.5rem] p-5 max-md:p-[10px]">
        <div>
          <h1 class="font-bold text-center text-4xl uppercase">Your Bags</h1>
        </div>

        <!-- TOP -->
        <div
          class="flex justify-between items-center p-5 max-md:justify-center"
        >
          <router-link
            to="/products"
            class="block px-4 py-2 bg-black text-white rounded hover:tracking-wide transition shadow-lg font-primary"
          >
            CONTINUE SHOPPING
          </router-link>
          <div class="underline cursor-pointer max-md:hidden">
            <p>Shopping bag ({{ cartItemCount }})</p>
          </div>
        </div>

        <!-- BOTTOM -->
        <div
          class="flex justify-between items-center p-5 w-full h-auto border mb-5 shadow-md max-md:flex-col"
        >
          <!-- Left -->
          <div class="flex-[3]">
            <CheckBox v-for="(item, i) in cart" :key="i" :item="item" />
          </div>

          <!-- RIGHT -->
          <div
            class="flex-[1] border-[0.5px] border-solid border-b-gray-200 rounded-[10px] p-5 h-full max-md:w-full"
          >
            <div class="font-extralight">Order sumary</div>
            <div class="my-[30px] flex justify-between">
              <div class="text">Subtotal :</div>
              <div class="price">$ {{ cartTotalPrice }}</div>
            </div>
            <div class="my-[30px] flex justify-between">
              <div class="text">Shipping :</div>
              <div class="price">+ $20</div>
            </div>
            <div class="my-[30px] flex justify-between">
              <div class="text">discount :</div>
              <div class="price">- $12</div>
            </div>
            <div class="my-[30px] flex justify-between">
              <div class="text-2xl font-medium">total :</div>
              <div class="text-2xl font-medium">$ {{ total.toFixed(2) }}</div>
            </div>
            <button
              class="block w-full p-3 bg-pink-400 text-white rounded-xl hover:tracking-widest"
              @click.prevent="handleCheckout()"
            >
              Checkout now
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import CheckBox from "../components/CheckBox.vue";
export default {
  components: {
    CheckBox,
  },

  computed: {
    ...mapGetters({ cart: "addToCart" }),

    ...mapGetters({ cartItemCount: "cartItemCount" }),
    //
    ...mapGetters({ cartTotalPrice: "cartTotalPrice" }),

    total() {
      if (!this.cartItemCount) {
        return 0;
      }
      return this.cartTotalPrice - -8;
    },
  },

  methods: {
    handleCheckout() {
      if (this.cartItemCount > 0) {
        this.$store.dispatch("clearAllCart");

        this.$swal({
          position: "top-end",
          icon: "success",
          title: "Thank you for your purchase ",
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "There are no products in the cart!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    },
  },
};
</script>

<style scoped>
.handle-font {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.checkout-enter-active,
.checkout-leave-active {
  animation: checkout 1s ease;
}

/* .fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

@keyframes checkout {
  0% {
    transform: translateX(-120px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
