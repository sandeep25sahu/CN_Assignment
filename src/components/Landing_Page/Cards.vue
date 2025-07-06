<script setup>
import { ref } from 'vue'
import Img1 from '../../assets/antivirus.png'
import Img2 from '../../assets/editing.jpg'
import Img3 from '../../assets/business.png'
import Img4 from '../../assets/aitools.jpg'
import Img5 from '../../assets/design.jpg'
const items = [
  {
    id: 1,
    title: 'Editing Tools',
    description: 'Tools for edit Video and Photo',
    image:Img2
  },
  {
    id: 2,
    title: 'Antivirus',
    description: 'Tools to prevent computer system from virus',
    image: Img1
  },
  {
    id: 3,
    title: 'Business Tools',
    description: 'Tools for improve Business performance ',
    image:Img3
  },
  {
    id: 4,
    title: 'AI Tools',
    description: 'Tools for make Automation',
    image: Img4
  },
    {
    id: 5,
    title: 'Design Tools',
    description: 'Tools for make design',
    image: Img5
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
  <div class="flex flex-col items-center">
    <div class="carousel-item relative flex justify-center">
      <div class="card bg-base-100 image-full shadow-sm transition-all duration-500">
        <figure>
          <img :src="items[current].image" alt="Image" class="h-full w-full object-cover" />
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
