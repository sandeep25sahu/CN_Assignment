<script setup>
import { ref, computed } from "vue";
import { products } from "../Constant/Constant";

const selectedType = ref("all");
const showModal = ref(false);
const selectedProduct = ref(null);

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
function openModal(product) {
  selectedProduct.value = product;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
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
  <div class="bg-gray-100 mt-20 mb-20">
    <h1 class="text-4xl text-gray-800 font-bold text-center mb-3">
      Choose Category
    </h1>
    <p class="text-center mb-10 text-gray-600 mx-auto w-[60%]">
      Choose a category to see handpicked software and AI tools tailored for
      different needs — from entertainment to office work and beyond.
    </p>
    <!-- Daisy Tabs -->
    <div
      role="tablist"
      class="tabs-boxed mb-6 shadow-xl p-3 justify-evenly rounded-b-4xl hidden sm:flex"
    >
      <a
        class="bg-yellow-300 rounded-3xl mx-2 p-2 cursor-pointer"
        role="tab"
        @click="selectedType = 'all'"
        :class="
          selectedType === 'all' ? ' tab-active  text-red-500' : ' text-black'
        "
      >
        All Product
      </a>
      <a
        class="bg-yellow-300 rounded-3xl mx-2 p-2 cursor-pointer"
        v-for="type in types"
        :key="type.value"
        role="tab"
        :class="selectedType === type.value ? ' tab-active text-red-500' : '  '"
        @click="selectedType = type.value"
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

          <!-- Open the modal using ID.showModal() method -->
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







  <div
    v-if="showModal"
    class="fixed inset-0 flex justify-center items-center "
  >
    <div class="bg-white p-6 rounded shadow-lg max-w-md w-full relative">
      <div class="card  w-96 shadow-lg">
        <figure>
          <img :src="selectedProduct.image" class="rounded-xl" alt="selectedProductImage" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ selectedProduct.name }}</h2>
          <p>{{ selectedProduct.description }}</p>
          <p class="mb-2">
            Price: ₹{{ selectedProduct.price }}+<span>18% GST</span>
          </p>
<div class="flex justify-center">


          <button
            @click=""
            class=" bg-green-500 p-2 mr-2 text-white rounded-xl cursor-pointer w-32"
          >
            Pay ₹{{ selectedProduct.price * 0.18 + selectedProduct.price }}
          </button>

          <button
            @click="closeModal"
            class=" bg-red-500 p-2 w-16 text-white rounded-xl cursor-pointer"
          >
            Cancel
          </button>
</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal::backdrop {
  background-color: rgba(0, 0, 0, 0.5); 
}</style>
