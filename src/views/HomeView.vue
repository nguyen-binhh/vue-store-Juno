<template>
  <transition name="home" appear>
    <div>
      <Hero />
      <Feature />
      <LimitProducts />
    </div>
  </transition>
</template>

<script>
import Hero from "../components/Hero.vue";
import Feature from "../components/Feature.vue";
import LimitProducts from "../components/LimitProducts.vue";
// import useAllProducts from "../services/index.js";
export default {
  components: {
    Hero,
    Feature,
    LimitProducts,
  },
};
</script>

<style scoped>
.home-enter-active,
.home-leave-active {
  animation: fade 1s ease;
}

/* .fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

@keyframes fade {
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
