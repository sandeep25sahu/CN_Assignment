<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import 'animate.css';
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
        class="absolute menu bg-white rounded-box z-10 w-52 p-2 shadow-sm mt-2 font-semibold text-md"
      >
        <li>
          <RouterLink to="/" @click="closeDropdown">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/product" @click="closeDropdown">Product</RouterLink>
        </li>
        <li>
          <RouterLink to="/features" @click="closeDropdown"
            >Features</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" @click="closeDropdown">Contact</RouterLink>
        </li>
      </ul>
    </div>

    <div class="flex ml-4">
      <RouterLink
        to="/"
        @click="closeDropdown"
        class="cursor-pointer text-2xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent animate__fadeIn animate__animated  animate__slow"
      >
        SoftifyMart</RouterLink
      >
    </div>

    <div class="ml-auto font-bold gap-3 text-xl mr-24 text-yellow-400 sm:flex hidden animate__fadeIn animate__animated  animate__slow">
      <RouterLink to="/" @click="closeDropdown">Home</RouterLink>
      <RouterLink to="/product" @click="closeDropdown">Product</RouterLink>
      <RouterLink to="/features" @click="closeDropdown">Features</RouterLink>
      <RouterLink to="/contact" @click="closeDropdown">Contact</RouterLink>
    </div>
  </div>
  <router-view class="mt-20"></router-view>
</template>

<style></style>
