<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import { items } from "../Constant/Constant";
import 'animate.css';

const current = ref(0);
const next = () => {
  current.value = (current.value + 1) % items.length;
};

let intervalId = null;
onMounted(() => {
  intervalId = setInterval(next, 3000);
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section
    class="relative text-white overflow-hidden sm:h-[90vh] rounded-t-md mb-20 mt-16 bg-cover bg-center transition-all duration-2000"
    :style="{
      backgroundImage: `url(${items[current].image})`,
      clipPath: 'ellipse(90% 100% at 50% 0%)',
    }"
  >
    <div
      class="bg-black/70 w-full h-full absolute top-0 left-0"
      style="clip-path: ellipse(90% 100% at 50% 0%)"
    ></div>

    <div
      class="relative w-full mx-auto px-6 py-16 flex flex-col items-center h-[80vh] sm:mt-16 mt-4 animate__fadeIn animate__animated animate__slow"
    > 

    <div class="md:grid inline md:grid-cols-2 gap-0 mb-4 z-10 ">
       <h1 class="text-3xl md:text-6xl font-bold md:text-end text-center">
        Ready for the best 
      </h1>
      <h1 class="text-amber-400 text-2xl md:text-6xl font-bold md:text-start ml-4 text-center "> {{ items[current].title }}?</h1>
    </div>
    
      <p class="sm:text-lg text-sm mb-6 text-center z-10">
        "Discover powerful software tools to supercharge your creativity and productivity."
      </p>
      <RouterLink
        to="/product"
        class="hover:bg-white w-52 text-center bg-gray-200 opacity-80 text-black hover:text-amber-400 sm:text-lg sm:px-6 px-3 py-1 sm:py-2 rounded font-medium mx-auto block cursor-pointer z-10"
      >
        Explore Products
      </RouterLink>
    </div>
  </section>
</template>

<style>
/* Add smooth transition on background image change if needed (already using Tailwind transition) */
</style>
