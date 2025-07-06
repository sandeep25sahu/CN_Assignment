<script setup>
import { ref, computed } from "vue";
import { products } from "../Constant/Constant";

const selectedType = ref("all");

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

const filteredProducts = computed(() => {
  if (selectedType.value === "all") {
    return products;
  }
  return products.filter((p) => p.type === selectedType.value);
});
</script>

<template>
  <div class=" bg-gray-100 mt-20">
    <h1 class="text-4xl text-gray-800 font-bold text-center mb-3">
      Choose Category
    </h1>
    <p class="text-center mb-10 text-gray-600">
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
        class="select select-bordered w-full bg-pink-300"
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
            ₹{{ product.price.toLocaleString() }}
          </div>

          <!-- <button
          class=" bg-amber-400 hover:bg-blue-400 hover:text-white opacity-80 text-black  p-2 rounded font-medium justify-end cursor-pointer"
        >
          <RouterLink to="/order">Buy now </RouterLink>
        </button> -->

          <!-- Open the modal using ID.showModal() method -->
          <button class="bg-amber-400 hover:bg-blue-400 hover:text-white opacity-80 text-black  p-2 rounded font-medium justify-end cursor-pointer" onclick="my_modal_5.showModal()">
            Buy now 
          </button>
        </div>
      </div>
    </div>
  </div>
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box bg-white">

      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>


      <div class="modal-action">
         <button class="btn bg-green-500">Pay Now</button>
        <form method="dialog">
          
          <button class="btn bg-red-500 ">Cancel</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped></style>
