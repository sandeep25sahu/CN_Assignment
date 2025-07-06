<script setup>
import { ref, computed } from 'vue';
import { products } from '../Constant/Constant';

const selectedType = ref('all');

const types = [
  { label: 'Photo Editing', value: 'photoEditing' },
  { label: 'Video Editing', value: 'videoEditing' },
  { label: 'Antivirus', value: 'antivirus' },
  { label: 'Music Production', value: 'musicProduction' },
  { label: 'Business Tools', value: 'businessTools' },
  { label: 'Design Tools', value: 'designTools' },
  { label: 'AI Tools', value: 'aiTools' },
  { label: 'Educational Tools', value: 'educationalTools' },
];

const filteredProducts = computed(() => {
  if (selectedType.value === 'all') {
    return products;
  }
  return products.filter((p) => p.type === selectedType.value);
});
</script>

<template>
  <div class="p-6 bg-white">
    <h1 class="text-5xl text-blue-500 font-bold text-center my-5">Choose Category</h1>
    <!-- Daisy Tabs -->
    <div role="tablist" class=" tabs-boxed mb-6 bg-base-200 p-3 justify-evenly rounded-b-lg hidden sm:flex">
      <a
      class=" bg-amber-200 rounded-3xl mx-2 p-2"
        role="tab"
         @click="selectedType = 'all'"
        :class="selectedType === 'all' ? ' tab-active  text-red-500' : ' text-black'"
      >
        All Product
      </a>
      <a
      class=" bg-amber-200 rounded-3xl mx-2 p-2 cursor-pointer "
        v-for="type in types"
        :key="type.value"
        role="tab"
        :class="selectedType === type.value ?  ' tab-active text-red-500' : '  '"
        @click="selectedType = type.value"
      >
        {{ type.label }}
      </a>
    </div>


     <!-- Dropdown for small screens -->
    <div class="sm:hidden visible mb-6">
      <select
        v-model="selectedType"
        class="select select-bordered w-full  bg-pink-300"
      >
        <option value="all">All</option>
        <option
          v-for="type in types"
          :key="type.value"
          :value="type.value"
        >
          {{ type.label }}
        </option>
      </select>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="card  shadow-xl border-2 border-gray-200"
      >
        <figure><img :src="product.image" alt="product image" class="h-48 object-contain p-4" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <div class="mt-2 font-bold text-primary">₹{{ product.price.toLocaleString() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>
