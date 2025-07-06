<script setup>
import Cards from "./Cards.vue";
</script>

<template>
  <section
    class="relative bg-[#0B3C38] text-white overflow-hidden rounded-t-2xl mb-10"
    style="clip-path: ellipse(90% 100% at 50% 0%)"
  >
    <!-- Content -->
    <div
      class="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center"
    >
      <!-- Left text -->
      <div class="flex-1 mb-10 lg:mb-0 w-full">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          We bring the store to your door
        </h1>
        <p class="text-lg mb-6">
          Get organic produce and sustainably sourced groceries delivery at up
          to 4% off grocery.
        </p>

        <button
          class="bg-lime-400 text-black px-6 py-3 rounded font-medium ml-[25%] cursor-pointer"
        >
          <RouterLink to="/product">Shop now</RouterLink>
        </button>
      </div>
      
      <div class="flex-1 flex justify-center">
        <Cards />
      </div>
    </div>
  </section>
</template>

<style></style>
