<script setup>
import { ref } from 'vue'
import { RouterLink,RouterView } from 'vue-router'
const isOpen = ref(false)
const closeDropdown = () => {
  isOpen.value = false
}

</script>
<template>
  <div
    class=" fixed left-0 top-0 z-10 navbar-start flex rounded-xl rounded-e-3xl  w-full shadow-sm bg-white mx-auto h-16 px-8"
  >
    <div class="relative">
    <!-- Toggle Button -->
    <button @click="isOpen = !isOpen" class="btn-square btn-ghost text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-5 w-5 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=""
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <ul
      v-if="isOpen"
      class="absolute menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm mt-2"
    >
      <li>
        <RouterLink to="/" @click="closeDropdown">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/product" @click="closeDropdown">Product</RouterLink>
      </li>
      <li>
        <RouterLink to="/features" @click="closeDropdown">Features</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" @click="closeDropdown">Contact</RouterLink>
      </li>
    </ul>
  </div>
      
    <div class="flex ml-4">
       <li>
        <RouterLink to="/" @click="closeDropdown" class="cursor-pointer text-xl text-black" >daisyUI</RouterLink>
      </li>
      
    </div>
  
 <input
        type="text"
        placeholder="Search for products"
        class="input md:w-auto rounded-2xl h-8 my-auto ml-4 flex-1"
      />
    <div class="flex-1 navbar-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class=" btn-ghost btn-circle avatar">
          <div class="w-12 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  <router-view class="mt-20"></router-view>
</template>

<style></style>
