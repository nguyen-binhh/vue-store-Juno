<template>
  <div class="relative">
    <button class="w-8 h-8 rounded-full overflow-hidden" @click="closeBox">
      <img src="@/assets/images/img_avatar.png" alt="" />
    </button>
    <ul
      v-if="isClose"
      class="absolute top-[38px] right-0 w-[160px] bg-white rounded-sm shadow-sm z-30 fade"
    >
      <li
        class="border border-t-[1px] border-b-gray-100 rounded-tl-sm rounded-tr-sm"
      >
        <router-link
          to="/"
          class="text-black font-semibold text-sm py-1 px-4 block"
          >My Profile</router-link
        >
      </li>
      <li class="border border-t-[1px] border-b-gray-100">
        <router-link
          to="/"
          class="text-black text-sm py-1 font-semibold px-4 block"
          >My Cart</router-link
        >
      </li>
      <li class="border border-t-[1px] border-b-gray-100">
        <router-link
          to="/"
          class="text-black text-sm py-1 font-semibold px-4 block"
          >My Favorite</router-link
        >
      </li>
      <li
        class="border border-t-[1px] border-b-gray-100 rounded-bl-sm rounded-br-sm"
      >
        <router-link
          to="/logout"
          class="text-red-300 text-sm py-1 font-semibold px-4 block my-3"
        >
          Log out
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUser } from "../../composables/useUsers";

export default {
  setup() {
    const isClose = ref(false);
    const { getUser } = useUser();
    const { user } = getUser();

    function closeBox() {
      isClose.value = !isClose.value;
    }

    return { user, closeBox, isClose };
  },
};
</script>

<style scoped>
.fade {
  animation: fade 0.5s ease-out;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
