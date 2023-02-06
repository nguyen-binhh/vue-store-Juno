<template>
  <!-- Modal layout -->
  <transition name="login" appear class="background">
    <form
      @submit.prevent="onSubmit"
      class="fixed top-0 right-0 left-0 bottom-0 bg-slate-200"
    >
      <!-- Authen form -->

      <!-- Login form  -->
      <div
        class="w-[30rem] h-auto rounded-lg bg-white overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div class="px-[3.2rem]">
          <div class="flex items-center justify-between my-8 px-3">
            <h3 class="text-4xl font-normal text-[#333]">Login</h3>
            <router-link
              to="/register"
              class="text-base text-pink-500 cursor-pointer"
              >Register</router-link
            >
          </div>

          <div class="">
            <div class="">
              <input
                type="text"
                class="mt-6 w-full h-10 px-5 text-base border border-b-slate-100 outline-none"
                placeholder="nguyenphubinh2207@gmail.com"
                v-model="user.email"
              />
            </div>
            <div class="">
              <input
                type="password"
                class="mt-6 w-full h-10 px-5 text-base border border-b-slate-100 outline-none"
                placeholder="123456789"
                v-model="user.password"
              />
            </div>
          </div>
          <div class="text-left mt-6 text-red-500" v-if="error">
            <span>{{ error }}</span>
          </div>

          <div class="my-12">
            <button
              class="btn py-2 px-4 bg-pink-500 text-white font-semibold text-xl transition hover:opacity-80"
              v-if="!isPending"
            >
              Log In
            </button>
            <button
              class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
              type="button"
              v-else
              disabled
            >
              Loading...
            </button>
          </div>
        </div>
      </div>
    </form>
  </transition>
</template>

<script>
import { reactive } from "vue";
import { useSignin } from "@/composables/useSignIn";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signin } = useSignin();
    const user = reactive({
      email: "",
      password: "",
    });

    async function onSubmit() {
      await signin(user.email, user.password);
      if (!error.value) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        router.push({ name: "Home", params: {} });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    }

    return {
      onSubmit,
      user,
      error,
      isPending,
    };
  },
};
</script>

<style scoped>
.background {
  background-image: url("../assets/images/listeo_bg3.jpg");
  background-position: center;
  background-repeat: no-repeat;
}
.auth-form {
  width: 50rem;
  border-radius: 0.5rem;
  background-color: #fff;
  overflow: hidden;
}

.login-enter-active,
.login-leave-active {
  animation: login 1s ease;
}

/* .fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

@keyframes login {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
