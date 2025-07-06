<!-- <script setup>
import {educationalTools,photoEditing,videoEditing,antivirus,musicProduction,businessTools,aiTools} from '../Constant/Constant'

</script>
<template>

  <div class="tabs tabs-box">
  <input type="radio" name="my_tabs_6" class="tab" aria-label="Educational Tools" />
  <div class="tab-content bg-base-100 border-base-300 p-6">
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="item in educationalTools"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        :alt="item.title"
        class="h-48 w-full object-cover"
      />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600 flex-1">{{ item.description }}</p>
        <div class="mt-4 text-blue-600 font-bold text-right">{{ item.price }} INR </div>
       <button class="btn w-[50%]  font-light btn-md ">See more</button>
      </div>
    </div>
  </div>

  </div>

  <input type="radio" name="my_tabs_6" class="tab" aria-label="Photo Editing Tools" checked="checked" />
  <div class="tab-content bg-base-100 border-base-300 p-6">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="item in photoEditing"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        :alt="item.title"
        class="h-48 w-full object-cover"
      />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600 flex-1">{{ item.description }}</p>
        <div class="mt-4 text-blue-600 font-bold text-right">{{ item.price }} INR </div>
       <button class="btn w-[50%]  font-light btn-md ">See more</button>
      </div>
    </div>
  </div>
    
  </div>

  <input type="radio" name="my_tabs_6" class="tab" aria-label="Video Editing Tools" />
  <div class="tab-content bg-base-100 border-base-300 p-6">

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="item in videoEditing"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        :alt="item.title"
        class="h-48 w-full object-cover"
      />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600 flex-1">{{ item.description }}</p>
        <div class="mt-4 text-blue-600 font-bold text-right">{{ item.price }} INR </div>
       <button class="btn w-[50%]  font-light btn-md ">See more</button>
      </div>
    </div>
  </div>

  </div>

    <input type="radio" name="my_tabs_6" class="tab" aria-label="Antivirus" />
  <div class="tab-content bg-base-100 border-base-300 p-6">

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="item in antivirus"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        :alt="item.title"
        class="h-48 w-full object-cover"
      />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600 flex-1">{{ item.description }}</p>
        <div class="mt-4 text-blue-600 font-bold text-right">{{ item.price }} INR </div>
       <button class="btn w-[50%]  font-light btn-md ">See more</button>
      </div>
    </div>
  </div>

  </div>

    <input type="radio" name="my_tabs_6" class="tab" aria-label="Music Production Tools" />
  <div class="tab-content bg-base-100 border-base-300 p-6">

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="item in musicProduction"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        :alt="item.title"
        class="h-48 w-full object-cover"
      />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600 flex-1">{{ item.description }}</p>
        <div class="mt-4 text-blue-600 font-bold text-right">{{ item.price }} INR </div>
       <button class="btn w-[50%]  font-light btn-md ">See more</button>
      </div>
    </div>
  </div>

  </div>

    <input type="radio" name="my_tabs_6" class="tab" aria-label="Bussiness Tools" />
  <div class="tab-content bg-base-100 border-base-300 p-6">
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="item in businessTools"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        :alt="item.title"
        class="h-48 w-full object-cover"
      />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600 flex-1">{{ item.description }}</p>
        <div class="mt-4 text-blue-600 font-bold text-right">{{ item.price }} INR </div>
       <button class="btn w-[50%]  font-light btn-md ">See more</button>
      </div>
    </div>
  </div>

  </div>

    <input type="radio" name="my_tabs_6" class="tab" aria-label="AI Tools" />
  <div class="tab-content bg-base-100 border-base-300 p-6">

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="item in aiTools"
      :key="item.id"
      class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        :alt="item.title"
        class="h-48 w-full object-cover"
      />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold mb-2 text-gray-900">{{ item.name }}</h3>
        <p class="text-gray-600 flex-1">{{ item.description }}</p>
        <div class="mt-4 text-blue-600 font-bold text-right">{{ item.price }} INR </div>
       <button class="btn w-[50%]  font-light btn-md ">See more</button>
      </div>
    </div>
  </div>

  </div>

</div>
  
</template> -->





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
        All
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
        class="select select-bordered w-full"
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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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

<script setup>
import { ref, computed } from 'vue';
import { products } from '../Constant/Constant'; // path as per your folder

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

<style scoped>

</style>
