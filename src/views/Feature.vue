<script setup>
import { features } from '../components/Constant/Constant';

</script>
<template>

<section class="bg-gray-50 animate__fadeIn animate__animated animate__slow py-12">
    <div class="max-w-5xl mx-auto text-center mb-12 p-2">
      <h1 class="md:text-4xl text-3xl font-bold text-gray-800 mb-3">Discover Our Features</h1>
      <p class="text-gray-600">
        We designed our platform to make your experience smooth, fun, and worry-free. 
        From lightning-fast browsing to secure payments, see what makes us stand out! 🚀
      </p>
    </div>
    <!-- feature content -->
    <div class="space-y-8 w-[80%] mx-auto">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="p-6 rounded-lg hover:bg-white bg-gray-100 shadow-lg"
      >
        <h2 class="md:text-3xl text-2xl md:text-center text-start font-bold text-amber-400 mb-2">
          {{ feature.icon }} {{ feature.title }}
        </h2>
        <p class="md:text-center text-start  text-gray-500">
          {{ feature.content }}
        </p>
      </div>
    </div>
  </section>

</template>