<script setup>
import { ref, computed } from "vue";
import { products, types } from "../Constant/Constant";
import { useProductStore } from "../../Stores/ProductStores";
import { useRouter } from "vue-router";
import "animate.css";

const productStore = useProductStore();
const router = useRouter();

const selectedType = ref("all");

const filteredProducts = computed(() => {
  if (selectedType.value === "all") {
    return products;
  }
  return products.filter((p) => p.type === selectedType.value);
});

function goToOrderPage(product) {
  productStore.setProduct(product);
  router.push({ name: "orderPage" }); // Make sure your route name matches
}
</script>

<template>
  <!-- Category -->
  <div
    class="bg-gray-100 mt-20 mb-20 animate__fadeIn animate__animated animate__slow my-10 py-12"
  >
    <h1 class="text-4xl text-gray-800 font-bold text-center mb-3">
      Choose Category
    </h1>
    <p class="text-center mb-10 text-gray-600 mx-auto md:w-[60%] w-[90%]">
      Choose a category to see handpicked software and AI tools tailored for
      different needs — from entertainment to office work and beyond.
    </p>

    <!-- Category selection buttons -->
    <div
      role="tablist"
      class="tabs-boxed mb-6 shadow-xl p-4 rounded-b-4xl hidden lg:flex"
    >
      <a
        class="bg-yellow-300 rounded-3xl  p-1 cursor-pointer w-32 text-center items-center justify-center flex"
        role="tab"
        @click="selectedType = 'all'"
        :class="selectedType === 'all' ? 'tab-active text-red-500 font-semibold' : 'text-black'"
      >
        All Products
      </a>
      <a
        class="bg-yellow-300 rounded-3xl mx-1 p-1 cursor-pointer w-32 text-center items-center justify-center flex"
        v-for="type in types"
        :key="type.value"
        role="tab"
        @click="selectedType = type.value"
        :class="selectedType === type.value ? 'tab-active text-red-500 font-semibold' : ''"
      >
        {{ type.label }}
      </a>
    </div>

    <!-- Dropdown for small screens -->
    <div
      class="lg:hidden mb-6 animate__fadeIn animate__animated animate__slow"
    >
      <select
        v-model="selectedType"
        class="select select-bordered w-full bg-amber-300 "
      >
        <option value="all">All</option>
        <option v-for="type in types" :key="type.value" :value="type.value">
          {{ type.label }}
        </option>
      </select>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="card shadow-xl border-2 border-gray-200 animate__fadeIn animate__animated animate__slow"
      >
        <figure>
          <img
            :src="product.image"
            alt="product image"
            class="h-48 object-contain p-4"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title font-bold text-xl md:text-2xl">{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <div class="mt-2 font-bold text-primary">
            ₹{{ product.price.toLocaleString() }}/year
          </div>
          <RouterLink to="/orderPage">
 <button
            class="bg-amber-400 hover:bg-blue-400 w-full hover:text-white opacity-80 text-black p-2 rounded font-medium justify-end cursor-pointer"
            @click="goToOrderPage(product)"
          >
            Check Details
          </button>
          </RouterLink>
         
        </div>
      </div>
    </div>
  </div>
</template>
