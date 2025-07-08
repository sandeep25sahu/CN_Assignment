<script setup>
import Cards from "./Cards.vue";
import 'animate.css';
</script>

<template>
  <section
    class="relative bg-pink-400 text-white overflow-hidden sm:h-[90vh] rounded-t-md mb-20 mt-16"
    style="clip-path: ellipse(90% 100% at 50% 0%)"
  >
    <!-- Content -->
    <div
      class="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center sm:mt-16 mt-4"
    >
      <!-- Left text -->
      <div class="flex-1 mb-10 lg:mb-0 w-full animate__fadeInLeft animate__animated animate__slow">
  <h1 class="text-3xl md:text-5xl font-bold mb-4 text-center">
    Ready for best software?
  </h1>
  <p class="sm:text-lg text-sm mb-6 text-center">
    "Discover powerful software tools to supercharge your creativity and productivity."
  </p>

  <RouterLink
    to="/product"
    class="hover:bg-white w-52 text-center bg-gray-200 opacity-80 text-black hover:text-amber-400 sm:text-lg sm:px-6 px-3 py-1 sm:py-2 rounded font-medium mx-auto block cursor-pointer"
  >
    Explore Products
  </RouterLink>
</div>

      
      <div class="flex-1 flex justify-center">
        <Cards />
      </div>
    </div>
  </section>
</template>

<style></style>
