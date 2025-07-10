<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import "animate.css";
const isOpen = ref(false);
const closeDropdown = () => {
  isOpen.value = false;
};
</script>
<template>
  <div
    class="fixed left-0 top-0 z-10 navbar-start rounded-xl rounded-e-3xl w-full shadow-xl bg-white h-16 px-8"
  >
    <div class="relative">
      <!-- Toggle Button -->
      <button
        @click="isOpen = !isOpen"
        class="btn-square btn-ghost text-black sm:hidden"
      >
        <!-- hamburger icon -->
        <svg
          class="fill-amber-500 align-center mt-3"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 512 512"
        >
          <path
            d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
          />
        </svg>
      </button>

      <!-- Dropdown Menu -->

      <ul
        v-if="isOpen"
        class="absolute menu bg-white rounded-box z-10 w-60 p-2 shadow-sm mt-2 font-semibold text-md"
      >
        <h1 class="mb-4 text-white">X</h1>
        <h1
          @click="closeDropdown"
          class="btn btn-sm btn-circle btn-ghost opacity-70 text-red-500 absolute right-2 top-2"
        >
          ✕
        </h1>
        <li>
          <div class="visible sm:hidden">
            <div class="avatar">
              <div class="rounded-full w-20 h-20 border-3 border-amber-400">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="data:image/jpeg;base64,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"
                />
              </div>
            </div>
          </div>
        </li>
        <li>
          <RouterLink to="/" @click="closeDropdown">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/features" @click="closeDropdown">Features</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/product" @click="closeDropdown">Product</RouterLink>
        </li>

        <li>
          <RouterLink to="/contact" @click="closeDropdown">Contact</RouterLink>
        </li>
      </ul>
    </div>

    <div class="ml-4">
      <RouterLink
        to="/"
        @click="closeDropdown"
        class="cursor-pointer text-2xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent animate__fadeIn animate__animated animate__slow"
      >
        SoftifyMart</RouterLink
      >
    </div>

    <div
      class="ml-auto font-bold gap-3 text-xl mr-24 text-yellow-400 sm:flex hidden animate__fadeIn animate__animated animate__slow"
    >
      <RouterLink to="/" @click="closeDropdown">Home</RouterLink>
      <RouterLink to="/features" @click="closeDropdown">Features</RouterLink>
      <RouterLink to="/product" @click="closeDropdown">Product</RouterLink>

      <RouterLink to="/contact" @click="closeDropdown">Contact</RouterLink>
    </div>

    <div class="dropdown hidden md:block">
      <div tabindex="0" role="button" class="avatar">
        <div class="w-14 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="data:image/jpeg;base64,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"
          />
        </div>
        <ul
          tabindex="0"
          class="dropdown-content rounded-box z-1 mt-14 bg-white w-18 p-2 mr-8"
        >
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>

  <router-view class="mt-20"></router-view>
</template>

<style></style>
