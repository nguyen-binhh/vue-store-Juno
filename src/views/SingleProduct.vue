<template>
  <transition name="single" appear>
    <div class="w-full h-full">
      <div class="mt-24">
        <h1 class="text-center font-bold text-3xl">Detail Product</h1>
      </div>

      <div>
        <div
          class="mt-20 flex justify-between absolute mx-auto left-0 right-0 box"
        >
          <div class="w-1/2 float-left ml-[30px] mt-[30px]">
            <img
              :src="this.singleProduct.image"
              alt=""
              class="h-[400px] w-[400px]"
            />
          </div>
          <div class="w-1/2 mt-[30px]">
            <h1 class="mt-2 font-normal text-3xl">
              {{ this.singleProduct.name }}
            </h1>
            <p class="font-semibold mt-3">
              Rating
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </p>
            <h3 class="font-bold my-4 text-4xl">
              $ {{ this.singleProduct.price }}
            </h3>
            <p class="mt-3">
              {{ this.singleProduct.description }}
            </p>
            <div class="">
              <button
                class="mt-[39px] border rounded bg-pink-400 text-white inline-block py-3 px-6 hover:bg-opacity-60 transition"
                @click="addToCart()"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    singleProduct() {
      return this.$store.getters.singleProduct;
    },
  },

  created() {
    this.getSingleProduct(this.$route.params.id);
  },

  methods: {
    getSingleProduct() {
      this.$store.dispatch("getSingleProduct", this.$route.params.id);
    },

    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.singleProduct,
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

<style scoped>
.single-enter-active,
.single-leave-active {
  animation: single 1s ease;
}

@keyframes single {
  0% {
    transform: translateY(-120px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@media (max-width: 992px) {
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  img {
    object-fit: center;
  }
  button {
    margin-bottom: 20px;
    height: auto;
  }
}
</style>
