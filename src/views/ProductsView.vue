<template>
  <div>
    <div class="mt-24">
      <h1 class="text-center font-bold text-3xl">ALL PRODUCTS</h1>
    </div>

    <transition name="product" appear>
      <div class="py-16">
        <!-- <div v-if="isLoading" class="loader-5 center"><span></span></div> -->

        <div class="container mx-auto">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            <ProductsList
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ProductsList from "../components/products/ProductsList.vue";

export default {
  components: {
    ProductsList,
  },

  data() {
    return {};
  },

  computed: {
    products() {
      return this.$store.getters.products;
    },
  },

  mounted() {
    this.showProducts();
  },
  methods: {
    showProducts() {
      setTimeout(async () => {
        this.isLoading = true;
        await this.$store.dispatch("getAllProducts");
        this.isLoading = false;
      }, 700);
    },
  },
};
</script>

<style scoped>
.product-enter-active,
.product-leave-active {
  animation: product 1s ease;
}

@keyframes product {
  0% {
    transform: translateY(-120px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
