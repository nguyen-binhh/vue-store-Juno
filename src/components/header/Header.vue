<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <!--Logo-->

      <div class="logo">
        <router-link class="logo-link" to="/">
          <img
            class="logo-img"
            src="https://file.hstatic.net/1000003969/file/logo-svg.svg"
            alt=""
          />
        </router-link>
      </div>

      <!--Links-->
      <div class="wrapper">
        <ul class="navigation" v-show="!mobile">
          <li>
            <router-link :to="{ name: 'About' }">About Us</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Products' }">Products</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Contact' }">Contact</router-link>
          </li>
        </ul>

        <div class="icon pt-[5px]">
          <i
            @click="toggleMobileNav"
            v-show="mobile"
            class="fa fa-bars"
            :class="{ 'icon-active': mobileNav }"
          ></i>
        </div>
        <transition name="mobile-nav">
          <ul class="dropdown-nav" v-show="mobileNav">
            <li>
              <router-link @click="handleClick" :to="{ name: 'About' }"
                >About Us</router-link
              >
            </li>
            <li>
              <router-link @click="handleClick" :to="{ name: 'Products' }"
                >Products</router-link
              >
            </li>

            <li>
              <router-link @click="handleClick" :to="{ name: 'Contact' }"
                >Contact</router-link
              >
            </li>
          </ul>
        </transition>

        <!--Icons-->

        <Icons />
      </div>
    </nav>
  </header>
</template>

<script>
import Icons from "./Icon.vue";
export default {
  components: { Icons },
  data() {
    return {
      scrollNav: null,
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    handleClick() {
      this.mobileNav = null;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrollNav = true;
        return;
      }
      this.scrollNav = false;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #faf8f8;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  transition: 0.4s ease all;
  color: #000;

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.4s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    .logo-link {
      width: 100px;
      height: 30px;

      .logo-img {
        width: 100%;
        height: 100%;
      }
    }

    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ul,
    .link {
      font-weight: 500;
      color: #000;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.4 ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;
      }
    }

    .logo {
      display: flex;
      align-items: center;

      img {
        width: 50px;
        transition: 0.4 ease all;
      }
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }

  .icon {
    margin-right: 10px;
    i {
      font-size: 22px;
      cursor: pointer;
      transition: 0.6s ease all;
    }
  }

  .icon-active {
    transform: rotate(180deg);
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 230px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;

    li {
      margin-left: 0;
      .link {
        color: #000;
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  nav {
    padding: 30px 100px;

    .logo {
      .logo-img {
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
    }
  }
}
</style>
