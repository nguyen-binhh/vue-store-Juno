import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./stores/index";

import { loginGlobalComponent } from "./utils/import";

import "./assets/main.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { projectAuth } from "./configs/firebase";

import axios from "axios";
window.axios = axios;

let app;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    loginGlobalComponent(app);

    app.use(VueSweetalert2);
    window.Swal = app.config.globalProperties.$swal;

    app.use(store);
    app.use(router);
    app.mount("#app");
  }
});
// const app = createApp(App);
// loginGlobalComponent(app);

// app.use(VueSweetalert2);
// app.use(projectAuth);

// app.use(store);
// app.use(router);

// app.mount("#app");
