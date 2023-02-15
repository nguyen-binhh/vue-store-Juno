<template>
  <!--  Register form  -->

  <transition name="register" appear class="background">
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
            <h3 class="text-4xl font-normal text-[#333]">Register</h3>
            <router-link
              to="/login"
              class="text-base text-pink-500 cursor-pointer"
              >Login</router-link
            >
          </div>

          <div class="">
            <div class="">
              <input
                type="text"
                class="mt-6 w-full h-10 px-5 text-base border border-b-slate-100 outline-none"
                placeholder="Full Name"
                v-model="user.fullName"
              />
            </div>
            <div class="">
              <input
                type="email"
                class="mt-6 w-full h-10 px-5 text-base border border-b-slate-100 outline-none"
                placeholder="email"
                v-model="user.email"
              />
            </div>
            <div class="">
              <input
                type="password"
                class="mt-6 w-full h-10 px-5 text-base border border-b-slate-100 outline-none"
                placeholder="password"
                v-model="user.password"
              />
            </div>
          </div>
          <div class="mt-7">
            <p class="text-sm px-[9px] text-center">
              By registering, you agree to Routine's
              <router-link to="/" class="text-slate-400"
                >Terms of Service</router-link
              >
              &
              <router-link to="/" class="text-slate-400"
                >Privacy Policy</router-link
              >
            </p>
          </div>
          <div class="text-left mt-6 text-red" v-if="error">
            <span>{{ error }}</span>
          </div>

          <div class="my-12">
            <button
              v-if="!isPending"
              class="btn py-2 px-4 bg-pink-500 text-white font-semibold text-xl transition hover:opacity-80"
            >
              Sign In
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
import { useSignup } from "../composables/useSignup";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, isPending, signup } = useSignup();
    const router = useRouter();
    const user = reactive({
      fullName: "",
      email: "",
      password: "",
    });
    async function onSubmit() {
      await signup(user.email, user.password, user.fullName);
      if (!error.value) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Up Success",
          showConfirmButton: false,
          timer: 1500,
        });
        return router.push({ name: "Login", params: {} });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!! Please check your Email or Password",
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
.register-enter-active,
.register-leave-active {
  animation: register 1s ease;
}

@keyframes register {
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
