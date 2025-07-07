<script setup>
import { ref } from "vue";
import Authentication from "../components/Authentication/Authentication.vue";

const name = ref("");
const email = ref("");
const message = ref("");

const errors = ref({
  name: "",
  email: "",
  message: "",
});

function validateEmail(emailValue) {
  // Simple email regex
  const re = /\S+@\S+\.\S+/;
  return re.test(emailValue);
}

function handleSubmit(e) {
  e.preventDefault();

  // Reset errors
  errors.value = {
    name: "",
    email: "",
    message: "",
  };

  let valid = true;

  if (!name.value) {
    errors.value.name = "Name is required.";
    valid = false;
  }

  if (!email.value) {
    errors.value.email = "Email is required.";
    valid = false;
  } else if (!validateEmail(email.value)) {
    errors.value.email = "Please enter a valid email address.";
    valid = false;
  }

  if (!message.value) {
    errors.value.message = "Message is required.";
    valid = false;
  }

  if (valid) {
   alert(`Form submitted successfully! 🎉 \nName: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
    name.value = "";
    email.value = "";
    message.value = "";
  }
}
</script>

<template>
  <section class="bg-gray-100 mt-20 w-[70%] mx-auto p-8">
    <div class="max-w-3xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p class="text-gray-600">
        We would love to hear from you. Please fill out the form below and we'll get in touch with you shortly.
      </p>
    </div>

    <form @submit="handleSubmit" class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
      <div class="mb-6">
        <label for="name" class="block text-left text-gray-700 mb-2">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Your Name"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <p v-if="errors.name" class="text-red-500 mt-1 text-left">{{ errors.name }}</p>
      </div>

      <div class="mb-6">
        <label for="email" class="block text-left text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Your Email"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <p v-if="errors.email" class="text-red-500 mt-1 text-left">{{ errors.email }}</p>
      </div>

      <div class="mb-6">
        <label for="message" class="block text-left text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          rows="5"
          v-model="message"
          placeholder="Your Message"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>
        <p v-if="errors.message" class="text-red-500 mt-1 text-left">{{ errors.message }}</p>
      </div>

      <button
        type="submit"
        class="w-full bg-amber-400 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
      >
        Send Message
      </button>
    </form>
  </section>

  <Authentication />
  
</template>
