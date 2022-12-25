<template>
  <div class="icons">
    <BoxItem v-if="user" />
    <div v-else>
      <router-link to="/register" class="cursor-pointer">
        <p
          class="text-base font-semibold uppercase text-pink-600 italic hover:text-black transition"
        >
          Sign In
        </p>
      </router-link>
    </div>

    <div class="relative">
      <span @click="showBox" class="icon cursor-pointer">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 9V5C13 3.93913 12.5786 2.92172 11.8284 2.17157C11.0783 1.42143 10.0609 1 9 1C7.93913 1 6.92172 1.42143 6.17157 2.17157C5.42143 2.92172 5 3.93913 5 5V9H13ZM2 7H16L17 19H1L2 7Z"
            stroke="#121212"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        class="absolute -top-[11px] -right-[17px] py-[1px] px-[6px] text-sm rounded-full border border-bg-pink bg-black text-white"
        >{{ cartItemCount }}</span
      >
    </div>
    <transition name="list">
      <div
        class="w-full bg-white fixed top-[60px] right-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] z-20 px-4 overflow-y-auto animation"
        v-show="isOpen"
      >
        <div class="flex justify-between items-center py-2 border-b">
          <div class="uppercase text-sm font-semibold">
            Shopping Bag ({{ cartItemCount }})
          </div>
          <div class="cursor-pointer w-8 h-8 flex justify-center items-center">
            <i
              class="fa-solid fa-arrow-right text-xl cursor-pointer"
              @click="handleBox"
            ></i>
          </div>
        </div>
        <div>
          <div>
            <MiniCart v-for="(item, i) in cart" :key="i" :item="item" />
          </div>

          <div class="flex justify-between items-center mt-4">
            <div class="text-xl font-bold">Total: $ {{ cartTotalPrice }}</div>

            <div
              class="text-base hover:text-red-600 transition cursor-pointer"
              @click.prevent="clearAllCart()"
            >
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
          <div @click="handleRouter" class="cursor-pointer mb-[80px]">
            <div
              class="text-xl text-black font-semibold bg-pink-300 text-center mt-5 border border-spacing-1 py-3"
            >
              Go to Cart
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { useUser } from "@/composables/useUsers";
import BoxItem from "./BoxItem.vue";

import MiniCart from "./MiniCart.vue";
export default {
  components: {
    MiniCart,
    BoxItem,
  },
  data() {
    return {
      isOpen: false,

      user: useUser,
    };
  },

  computed: {
    ...mapGetters({ cart: "addToCart" }),

    ...mapGetters({ cartItemCount: "cartItemCount" }),
    //
    ...mapGetters({ cartTotalPrice: "cartTotalPrice" }),
  },

  watch() {},

  methods: {
    showBox() {
      this.isOpen = !this.isOpen;
    },

    handleBox() {
      this.isOpen = false;
    },

    clearAllCart() {
      setTimeout(() => {
        this.$store.dispatch("clearAllCart");
      }, 1000);
      let timerInterval;
      this.$swal({
        title: "Waiting !!",
        html: "I will remove in <b></b> milliseconds.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    },

    handleRouter() {
      this.$router.push("/checkout");
      this.handleBox();
    },
  },
};
</script>

<style scoped>
.icons {
  display: flex;
  align-items: center;
}
.icons span {
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.animation {
  animation: animeted 0.5s linear;
}

@keyframes animeted {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-120px);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.list-enter-active {
  transition: all 0.7s linear;
}
.list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-120);
}

.list-leave-active {
  transition: all 0.7s ease;
}

.box {
  margin: 20px;
  border: 1px solid #666;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
