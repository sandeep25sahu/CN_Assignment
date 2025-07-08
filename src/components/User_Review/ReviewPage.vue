<script setup>
import 'animate.css'
import { reviews } from '../Constant/Constant';
const repeatedReviews = [...reviews, ...reviews]
</script>

<template>
 <section class="py-12 bg-gray-50 animate__fadeIn animate__animated  animate__slow">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
      <p class="text-gray-600 max-w-2xl mx-auto mb-10">Hear from professionals and creators who trust our tools to grow their business and ideas.</p>

 <div class="overflow-hidden my-8">
    <div class="flex gap-6 animate-slide-right w-max">
      <div
        v-for="(item, index) in repeatedReviews"
        :key="index"
        class="card bg-white shadow-xl inline-block w-64 flex-shrink-0"
      >
        <figure class="px-6 pt-6">
          <img
            class="rounded-xl w-32 h-48 object-cover mx-auto"
            :src="item.image"
            :alt="item.name"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{{ item.name }}</h2>
           <div class="rating flex items-center gap-1">
            <input type="radio" class="mask mask-star-2 bg-yellow-400" checked />
            <input type="radio" class="mask mask-star-2 bg-yellow-400" checked />
            <input type="radio" class="mask mask-star-2 bg-yellow-400"  />
            <input type="radio" class="mask mask-star-2 bg-yellow-400"  />
            <input type="radio" class="mask mask-star-2 bg-yellow-400" />
          </div>
          <p class="w-60 text-center">"{{ item.review }}"</p>
        </div>
      </div>
    </div>
  </div>


      <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 w-[80%] sm:w-[90%] mx-auto">
        <div
          v-for="(item, index) in reviews"
          :key="index"
          class="card bg-white shadow-xl"
        >
          <figure class="px-6 pt-6">
            <img
              class="rounded-full w-32 h-48 object-cover"
              :src="item.image"
              :alt="item.name"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{{ item.name }}</h2>
             <div class="rating flex items-center gap-1">
            <input type="radio" class="mask mask-star-2 bg-yellow-400" checked />
            <input type="radio" class="mask mask-star-2 bg-yellow-400" checked />
            <input type="radio" class="mask mask-star-2 bg-yellow-400"  />
            <input type="radio" class="mask mask-star-2 bg-yellow-400"  />
            <input type="radio" class="mask mask-star-2 bg-yellow-400" />
          </div>
            <p>"{{ item.review }}"</p>
          </div>
        </div>
      </div>
    </div>
  </section>


    


</template>

<style scoped>


@keyframes slideRight {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}



.animate-slide-right {
  animation: slideRight 40s linear infinite;
}
</style>


