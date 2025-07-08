<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="relative py-16 bg-white overflow-hidden sm:my-16 ny-10 z-0"
    data-aos="zoom-in"
    data-aos-duration="1000"
  >
    <div
      class="absolute inset-0 flex justify-center flex-wrap gap-1 opacity-20 pointer-events-none"
    >
      <img
        class="rounded-xl w-32 h-84 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <img
        class="rounded-xl w-32 h-54 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <img
        class="rounded-xl w-32 h-72 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/men/65.jpg"
      />
      <img
        class="rounded-xl w-32 h-60 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/women/68.jpg"
      />
      <img
        class="rounded-xl w-32 h-64 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/men/22.jpg"
      />
      <img
        class="rounded-xl w-32 h-48 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/women/19.jpg"
      />
      <img
        class="rounded-xl w-32 h-60 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/men/40.jpg"
      />
      <img
        class="rounded-xl w-32 h-80 shadow-lg transform hover:scale-105 transition"
        src="https://randomuser.me/api/portraits/women/55.jpg"
      />
    </div>

    <div class="relative z-10 max-w-3xl mx-auto text-center px-6">
      <h2 class="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        Trusted by users <br />from various industries
      </h2>
      <p class="text-gray-600 text-lg mb-6">
        Learn why professionals trust our softwares to complete their journeys.
      </p>
      <RouterLink to="/review">
        <button
          class="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Read Success Stories →
        </button>
      </RouterLink>
    </div>
  </section>
</template>
