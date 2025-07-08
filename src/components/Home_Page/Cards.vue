<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Img1 from '../../assets/antivirus.png'
import Img2 from '../../assets/editing.jpg'
import Img3 from '../../assets/business.png'
import Img4 from '../../assets/aitools.jpg'
import Img5 from '../../assets/design.jpg'
import 'animate.css';
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

let intervalId = null; 
onMounted(() => {
  intervalId = setInterval(() => {
    next();
  }, 3000); // Change slide every 3 seconds
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

</script>

<template>
 <div class="flex flex-col items-center animate__animated animate__fadeInRight animate__slow ">
    <div class="carousel-item relative flex justify-center">
      <div class="card bg-base-100 image-full shadow-sm  ">
        <figure class="sm:h-64 sm:w-96 h-48 w-60 ">
          <img :src="items[current].image" alt="Image" class=" object-cover " />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-3xl text-white font-bold">{{ items[current].title }}</h2>
          <p class="w-40">{{ items[current].description }}</p>
        </div>
      </div>
    </div>
  </div>
  
</template>
