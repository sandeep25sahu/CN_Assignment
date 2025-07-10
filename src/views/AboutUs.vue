<script setup>
import Img1 from '../assets/AboutUs.png'
import 'animate.css'
</script>

<template>
  <div
  id=""
    class="rounded-lg text-center my-12 bg-gray-100 p-8 pb-20 shadow-lg max-w-screen-xl max-h-max mx-auto mb-20 animate__fadeIn animate__animated  animate__slow"
    style="clip-path: ellipse(90% 100% at 50% 0%)"
    data-aos="zoom-in"
    data-aos-duration="1000"
  >
  <h2 class="text-gray-900 sm:text-5xl text-4xl font-extrabold mb-5" >About Us</h2>
  <div class=" bg-gray-200 rounded-md ">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-center p-8" >

  <div class="flex justify-center">
    <img :src='Img1' alt="AboutUs" class=" max-w-full h-auto" />
  </div>

  <!-- Right Column: Content -->
  <div>
    <p class="text-gray-700 md:text-lg text-sm">
      At <span class="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl md:text-2xl font-bold">SoftifyMart</span>, we believe technology should make your life easier, more creative, and more productive. 
      That's why we bring you a curated collection of the best software and AI tools from around the world — all in one place.
      <br/><br><hr/><br/>
      Whether you're a designer, entrepreneur, student, or tech enthusiast, we have powerful solutions to help you work smarter,
       create faster, and achieve more.
    </p>
  </div>
  </div>
  </div>
</div>

</template>