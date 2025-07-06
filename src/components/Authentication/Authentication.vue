<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4">
    <!-- Login form -->
    <div v-if="!isLoggedIn" class="bg-gray-100 p-4 rounded shadow">
      <h2 class="text-xl font-bold mb-2">Login</h2>
      <input v-model="username" placeholder="Username" class="border p-2 rounded mb-2 w-60" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 rounded mb-2 w-60" />
      <button @click="login" class="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </div>

    <!-- User dashboard -->
    <div v-else class="bg-green-100 p-4 rounded shadow">
      <h2 class="text-xl font-bold mb-2">Welcome, {{ username }}</h2>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// State variables
const isLoggedIn = ref(false)
const username = ref('')
const password = ref('')

// Login function
function login() {
  // Just a basic example with if-else
  if (username.value === 'admin' && password.value === '1234') {
    isLoggedIn.value = true
  } else {
    alert('Invalid credentials! (Try admin / 1234)')
  }
}

// Logout function
function logout() {
  isLoggedIn.value = false
  username.value = ''
  password.value = ''
}
</script>
