<template>
  <ul class="flex gap-x-[30px] items-center">
    <li class="item">
      <router-link to="/about">About Us</router-link>
    </li>
    <li class="item">
      <router-link
        class="text-slate-900 font-medium text-base border-b-transparent transition hover:bg-slate-900"
        to="/products"
        >Products</router-link
      >
    </li>
    <li class="item">
      <router-link to="/">Blog</router-link>
    </li>
    <li class="item">
      <router-link to="/contact">Contact</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.item a {
  color: #121212;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  border-bottom: 1px solid transparent;
  transition: 0.2s;
}

.item a:hover {
  border-color: #121212;
}
</style>
