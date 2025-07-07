<script setup>
import { ref, computed } from "vue";
import { products } from "../Constant/Constant"; 

const selectedType = ref("all");
const selectedProduct = ref(null);
const showAlert = ref(false);

const types = [
  { label: "Photo Editing", value: "photoEditing" },
  { label: "Video Editing", value: "videoEditing" },
  { label: "Antivirus", value: "antivirus" },
  { label: "Music Production", value: "musicProduction" },
  { label: "Business Tools", value: "businessTools" },
  { label: "Design Tools", value: "designTools" },
  { label: "AI Tools", value: "aiTools" },
  { label: "Educational Tools", value: "educationalTools" },
];

function handlePay() {
  showAlert.value = true;

  // Optionally auto-hide after 3 seconds
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
}

function openModal(product) {
  selectedProduct.value = product;
  document.getElementById('my_modal_5').showModal();
}

function closeModal() {
  document.getElementById('my_modal_5').close();
  selectedProduct.value = null;
}

const filteredProducts = computed(() => {
  if (selectedType.value === "all") {
    return products;
  }
  return products.filter((p) => p.type === selectedType.value);
});
</script>

<template>

<!-- Alert -->
<div 
  v-if="showAlert" 
  role="alert" 
  class="alert alert-success fixed top-12 right-20 w-[50%] justify-center  shadow-lg z-100"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your purchase has been confirmed!</span>
</div>

  

  <div class="bg-gray-100 mt-20 mb-20">
    <h1 class="text-4xl text-gray-800 font-bold text-center mb-3">
      Choose Category
    </h1>
    <p class="text-center mb-10 text-gray-600 mx-auto w-[60%]">
      Choose a category to see handpicked software and AI tools tailored for
      different needs — from entertainment to office work and beyond.
    </p>

    <!-- Tabs -->
    <div
      role="tablist"
      class="tabs-boxed mb-6 shadow-xl p-3 justify-evenly rounded-b-4xl hidden sm:flex"
    >
      <a
        class="bg-yellow-300 rounded-3xl mx-2 p-2 cursor-pointer"
        role="tab"
        @click="selectedType = 'all'"
        :class="selectedType === 'all' ? 'tab-active text-red-500' : 'text-black'"
      >
        All Products
      </a>
      <a
        class="bg-yellow-300 rounded-3xl mx-2 p-2 cursor-pointer"
        v-for="type in types"
        :key="type.value"
        role="tab"
        @click="selectedType = type.value"
        :class="selectedType === type.value ? 'tab-active text-red-500' : ''"
      >
        {{ type.label }}
      </a>
    </div>

    <!-- Dropdown for small screens -->
    <div class="sm:hidden visible mb-6">
      <select
        v-model="selectedType"
        class="select select-bordered w-full bg-amber-300"
      >
        <option value="all">All</option>
        <option v-for="type in types" :key="type.value" :value="type.value">
          {{ type.label }}
        </option>
      </select>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="card shadow-xl border-2 border-gray-200"
      >
        <figure>
          <img
            :src="product.image"
            alt="product image"
            class="h-48 object-contain p-4"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <div class="mt-2 font-bold text-primary">
            ₹{{ product.price.toLocaleString() }}/year
          </div>
          <button
            class="bg-amber-400 hover:bg-blue-400 hover:text-white opacity-80 text-black p-2 rounded font-medium justify-end cursor-pointer"
            @click="openModal(product)"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
 <dialog
  id="my_modal_5"
  class="modal modal-bottom sm:modal-middle"
>
  <div class="bg-white rounded-xl shadow-lg w-full max-w-md mx-auto " v-if="selectedProduct">
    <div class="card w-full">
      <figure class="p-4">
        <img
          :src="selectedProduct.image"
          alt="selectedProductImage"
          class="rounded-xl w-full h-60 object-contain"
        />
      </figure>
      <div class="card-body px-6 py-4">
        <h2 class="card-title text-lg font-bold">{{ selectedProduct.name }}</h2>
        <p class="text-gray-600 mb-2">{{ selectedProduct.description }}</p>
        <p class="mb-4 font-medium">
          Price: ₹{{ selectedProduct.price }} + <span>18% GST</span>
        </p>
        <div class="flex justify-center space-x-2">
          <button
           @click="handlePay(),closeModal()"
            class="bg-green-500 px-4 py-2 text-white rounded-xl cursor-pointer"
          >
            Pay ₹{{ (selectedProduct.price * 0.18 + selectedProduct.price).toFixed(0) }}
          </button>
          <button
            @click="closeModal"
            class="bg-red-500 px-4 py-2 text-white rounded-xl cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</dialog>

</template>

<style scoped>
.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
