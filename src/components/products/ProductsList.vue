<template>
  <div >
    <div
      class="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"
    >
      <div class="w-full h-full flex justify-center items-center">
        <div class="w-[200px] mx-auto flex justify-center items-center">
          <img
            :src="product.image"
            class="max-h-[160px] group-hover:scale-110 transition duration-300"
          />
        </div>
      </div>
      <!--button-->
      <div
        class="absolute top-0 right-0 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <button @click="addToCart()">
          <div
            class="flex justify-center items-center text-white w-10 h-10 bg-red-500"
          >
            <i class="fa-solid fa-plus text-3xl"></i>
          </div>
        </button>

        <router-link
          :to="`/products/${product.id}`"
          class="w-10 h-10 bg-white flex justify-center items-center text-black drop-shadow-xl"
        >
          <i class="fa-solid fa-eye"></i>
        </router-link>
      </div>
    </div>

    <!-- Category & price -->
    <div>
      <div class="text-sm capitalize text-gray-500 mb-1">
        {{ product.category }}
      </div>
      <router-link :to="`/products/${product.id}`">
        <h2
          class="font-semibold mb-1 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {{ product.title }}
        </h2>
      </router-link>
      <div class="font-semibold">$ {{ product.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 900,
      });
    },
  },
};
</script>

<style></style>
