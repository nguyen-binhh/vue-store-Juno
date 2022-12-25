<template>
  <div>Log out...</div>
</template>

<script>
import { useRouter } from "vue-router";
import { useLogout } from "@/composables/useLogOut";
export default {
  setup() {
    const router = useRouter();
    const { error, logout } = useLogout();

    async function onLogout() {
      await logout();
      if (!error.value) router.push({ name: "Login", params: {} });
    }

    onLogout();

    return {};
  },
};
</script>

<style></style>
