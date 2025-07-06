<script setup>
import { ref } from 'vue'

// Items array (cards)
const items = [
  {
    id: 1,
    title: 'Fruits',
    description: 'Fresh and organic fruits',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  },
  {
    id: 2,
    title: 'Vegetables',
    description: 'Locally sourced vegetables',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  },
  {
    id: 3,
    title: 'Milk & Dairy',
    description: 'High-quality dairy products',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  },
  {
    id: 4,
    title: 'Meat',
    description: 'Sustainably sourced meat',
    image: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  }
]

const current = ref(0)
const next = () => {
  current.value = (current.value + 1) % items.length
}
const prev = () => {
  current.value = (current.value - 1 + items.length) % items.length
}
</script>

<template>
  <div class="flex flex-col items-center h-52 w-52">
    <div class="carousel-item relative w-full flex justify-center">
      <div class="card bg-base-100 image-full w-64 shadow-sm transition-all duration-500">
        <figure>
          <img :src="items[current].image" alt="Image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ items[current].title }}</h2>
          <p>{{ items[current].description }}</p>
         
        </div>
      </div>
    </div>


    <div class="flex mt-1 space-x-4">
      <button @click="prev" class="btn btn-circle size-6">❮</button>
      <button @click="next" class="btn btn-circle size-6 ">❯</button>
    </div>
  </div>
  
</template>
