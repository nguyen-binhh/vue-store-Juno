<template>
  <div class="py-16">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <span class="font-bold text-3xl block mb-3">Products</span>
        <router-link
          to="/products"
          class="hover:text-pink-400 transition-all font-semibold text-xl"
          >See All</router-link
        >
      </div>

      <div v-if="isLoading" class="loader-5 center"><span></span></div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
      >
        <div v-for="item in limitProducts" :key="item._id">
          <div
            class="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"
          >
            <div class="w-full h-full flex justify-center items-center">
              <div class="w-[200px] mx-auto flex justify-center items-center">
                <img
                  :src="item.image"
                  class="max-h-[160px] group-hover:scale-110 transition duration-300"
                />
              </div>
            </div>
            <!--button-->
            <div
              class="absolute top-0 right-0 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <router-link
                :to="`/products/${item._id}`"
                class="w-10 h-10 bg-white flex justify-center items-center text-black drop-shadow-xl"
              >
                <i class="fa-solid fa-eye"></i>
              </router-link>
            </div>
          </div>

          <!-- Category & price -->
          <div>
            <router-link :to="`/products/${item._id}`">
              <h2
                class="font-semibold mb-1 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {{ item.name }}
              </h2>
            </router-link>
            <div class="font-semibold">$ {{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    ...mapGetters({ limitProducts: "limitProducts" }),
  },

  methods: {
    addToCart(id) {
      this.$store.dispatch("addProductToCart", {
        product: this.limitProducts[id],
        quantity: 1,
      });
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Your item has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },

    fetchLimit() {
      this.isLoading = true;
      setTimeout(() => {
        this.$store.dispatch("getAllProducts");
      }, 1000);
      this.isLoading = false;
    },
  },

  created() {
    this.fetchLimit();
  },
};
</script>

<style scoped></style>
