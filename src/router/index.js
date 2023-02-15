import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../configs/firebase";
import Home from "@/views/HomeView.vue";

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;

  if (!user) next({ name: "Login", params: {} });
  else next();
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        layout: "default",
        isShowFooter: true,
        toTop: true,
        smoothScroll: true,
      },
      component: Home,
      beforeEnter: requireAuth,
    },
    {
      path: "/about",
      name: "About",
      meta: {
        layout: "default",
        isShowFooter: true,
        toTop: true,
        smoothScroll: true,
      },
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/products",
      name: "Products",
      meta: {
        layout: "default",
        leading: false,
        isShowFooter: true,
        toTop: true,
        smoothScroll: true,
      },
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/products/:id",
      name: "category",
      meta: {
        layout: "default",
        isShowFooter: false,
        toTop: true,
        smoothScroll: true,
      },
      component: () => import("../views/SingleProduct.vue"),
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        layout: "auth",
        toTop: true,
        smoothScroll: true,
        // isShowFooter: false,
      },
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      meta: {
        layout: "auth",
        toTop: true,
        smoothScroll: true,
        // isShowFooter: false,
      },
      component: () => import("../views/RegisterView.vue"),
    },

    {
      path: "/contact",
      name: "Contact",
      meta: {
        layout: "default",
        isShowFooter: true,
        toTop: true,
        smoothScroll: true,
      },
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/checkout",
      name: "Checkout",
      meta: {
        layout: "default",
        isShowFooter: true,
        toTop: true,
        smoothScroll: true,
      },
      component: () => import("../views/Checkout.vue"),
    },
    {
      path: "/logout",
      name: "Logout",
      meta: {
        layout: "auth",
        isShowFooter: true,
        toTop: true,
        smoothScroll: true,
      },
      component: () => import("../views/Logout.vue"),
    },

    {
      path: "/:notFound(.*)",
      name: "NotFound",
      redirect: "/",
    },
  ],
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = "smooth";
    return scroll;
  },
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition > 0) {
  //     return savedPosition === 0;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
});

export default router;
