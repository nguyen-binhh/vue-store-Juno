import { ref } from "vue";
import { projectAuth } from "../configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!res) throw new Error("Could not create a new user");

    await res.user.updateProfile({ displayName: fullName });

    return res;
  } catch (err) {
    error.value = err.message;
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } finally {
    isPending.value = false;
  }
}

export function useSignup() {
  return { isPending, error, signup };
}
