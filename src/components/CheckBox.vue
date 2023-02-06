<template>
  <div class="border-b-[1px] border-solid mb-4">
    <div class="flex justify-between">
      <div class="flex-[2] items-center flex max-[600px]:flex-col">
        <img class="w-[100px] h-[100px]" :src="item.product.image" alt="" />
        <div class="p-5 flex flex-col justify-around">
          <p><b>Product: </b> {{ item.product.name }}</p>
          <p
            class="overflow-hidden overflow-ellipsis handle-font max-[1024px]:hidden"
          >
            <b>Description: </b> {{ item.product.description }}
          </p>
        </div>
      </div>
      <div class="flex-1 flex justify-center items-center flex-col">
        <div class="flex items-center mb-3">
          <div
            class="text-base mx-[25px] my-[5px] cursor-pointer"
            @click.prevent="removeItems(item)"
          >
            <i class="fa-solid fa-minus"></i>
          </div>
          <div class="font-extralight text-xl">{{ item.quantity }}</div>
          <div
            class="text-base mx-[25px] my-[5px] cursor-pointer"
            @click.prevent="addItems(item)"
          >
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div>
          <span>$ {{ item.product.price }}</span>
        </div>
        <div class="mt-2 font-semibold text-base">
          <span
            >$
            {{
              parseFloat(item.product.price * item.quantity).toFixed(2)
            }}</span
          >
        </div>
      </div>
    </div>
  </div>
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

<style></style>
