import { ref } from "vue";
import { projectAuth } from "../configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signin(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);

    if (!res) throw new Error("Your Email or Password is wrong !! ");

    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignin() {
  return { error, isPending, signin };
}
