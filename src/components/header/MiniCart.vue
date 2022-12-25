<template>
  <div
    class="flex gap-x-4 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500"
  >
    <div class="w-full min-h-[150px] flex items-center gap-x-4">
      <div class="cursor-default">
        <img :src="item.product.image" alt="" class="max-w-[80px]" />
      </div>
      <div class="w-full flex flex-col">
        <div class="flex justify-between mb-2">
          <div
            class="text-sm uppercase font-medium max-w-[240px] text-black hover:underline cursor-default"
          >
            {{ item.product.title }}
          </div>

          <div
            class="text-xl cursor-pointer"
            @click.prevent="removeFromCart(item.product)"
          >
            <i
              class="fa-solid fa-x text-gray-500 hover:text-red-500 transition"
            ></i>
          </div>
        </div>
        <div class="flex gap-x-2 h-[36px] text-sm">
          <div
            class="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium"
          >
            <!-- MINUS ICON -->
            <div
              class="flex flex-1 justify-center items-center cursor-pointer"
              @click.prevent="removeItems(item)"
            >
              <i class="fa-solid fa-minus"></i>
            </div>

            <!-- QUANTITY -->
            <div class="h-full flex justify-center items-center px-2">
              {{ item.quantity }}
            </div>

            <!-- PLUS ICON -->
            <div
              class="flex-1 h-full flex justify-center items-center cursor-pointer"
              @click.prevent="addItems(item)"
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>

          <!-- ITEM PRICE -->
          <div class="flex-1 flex items-center justify-around">
            $ {{ item.product.price }}
          </div>
          <div
            class="flex-1 flex justify-end items-center text-black font-medium"
          >
            $ {{ parseFloat(item.product.price * item.quantity).toFixed(2) }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TOTAL & CLEAR -->
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    alertDialog() {
      let timerInterval;
      this.$swal({
        title: "Waiting !!",
        html: "I will remove in <b></b> milliseconds.",
        timer: 700,
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
    removeFromCart(product) {
      setTimeout(() => {
        this.$store.dispatch("removeFromCart", product);
      }, 700);
      this.alertDialog();
    },
    addItems(product) {
      this.$store.dispatch("addToCart", product);
    },

    removeItems(product) {
      this.$store.dispatch("removeToCart", product);
      this.alertDialog();
    },
  },
};
</script>

<style scoped></style>
