<template>
  <div>
    <component :is="layouts">
      <RouterView />
    </component>
  </div>
</template>
<script>
import { PUBLIC_LAYOUT } from "./constants/index";

export default {
  components: {},

  computed: {
    layouts() {
      return (this.$route.meta.layout || PUBLIC_LAYOUT) + "-layout";
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  max-width: calc(1440px - 170px);
  width: 100%;
  margin: auto;
}

.btn {
  background: transparent;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  width: 100%;
  font: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.before-enter {
  opacity: 0;
  transform: translateY(-120px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 0;
  transform: translateY(0);
}

img {
  width: 100%;
}
</style>
