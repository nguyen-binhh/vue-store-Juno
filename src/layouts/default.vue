<template>
  <Header />
  <slot />
  <Footer v-if="meta.isShowFooter" />
</template>

<script>
import Header from "../components/header/Header.vue";
import Footer from "../components/Footer.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();

    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
