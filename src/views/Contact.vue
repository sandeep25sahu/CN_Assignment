<script setup>
import Authentication from '../components/Authentication/Authentication.vue';


</script>

<template>
  <section class="bg-gray-100 mt-20">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p class="text-gray-600">We would love to hear from you. Please fill out the form below and we'll get in touch with you shortly.</p>
    </div>

    <form class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      <div class="mb-6">
        <label for="name" class="block text-left text-gray-700 mb-2">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-6">
        <label for="email" class="block text-left text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-6">
        <label for="message" class="block text-left text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          rows="5"
          placeholder="Your Message"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
      >
        Send Message
      </button>
    </form>
  </section>
  <Authentication/>
</template>
