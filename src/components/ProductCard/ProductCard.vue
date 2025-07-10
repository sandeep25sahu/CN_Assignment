<script setup>
import { ref, computed } from "vue";
import { products } from "../Constant/Constant";
import "animate.css";

const selectedType = ref("all");
const showAlert = ref(false);

const types = [
  { label: "Music Production", value: "musicProduction" },
  { label: "Video Editing", value: "videoEditing" },
  { label: "Photo Editing", value: "photoEditing" },
  { label: "Antivirus", value: "antivirus" },
  { label: "Business Tools", value: "businessTools" },
  { label: "Design Tools", value: "designTools" },
  { label: "AI Tools", value: "aiTools" },
  { label: "Educational Tools", value: "educationalTools" },
];

const selectedProduct = ref(null);
const selectedAmount = ref(0); // Start as 0

const selectPlan = (amount) => {
  selectedAmount.value = amount;
};

const finalAmount = computed(() => {
  return (selectedAmount.value * 1.18).toFixed(0);
});

function handlePay() {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
  
}

function openModal(product) {
  selectedProduct.value = product;
  selectedAmount.value = parseInt(product.price); // Default to yearly price on modal open
  document.getElementById("my_modal_5").showModal();
}

function closeModal() {
  document.getElementById("my_modal_5").close();
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
    class="alert alert-success fixed top-12 right-20 w-[50%] justify-center shadow-lg z-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>Your purchase has been confirmed!</span>
  </div>

  <div
    class="bg-gray-100 mt-20 mb-20 animate__fadeIn animate__animated animate__slow my-10 py-12"
  >
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
      class="tabs-boxed mb-6 shadow-xl p-3 justify-evenly rounded-b-4xl hidden lg:flex "
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
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-6">
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
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <div class="mt-2 font-bold text-primary">
            ₹{{ product.price.toLocaleString() }}/year
          </div>
          <button
            class="bg-amber-400 hover:bg-blue-400 hover:text-white opacity-80 text-black p-2 rounded font-medium justify-end cursor-pointer"
            @click="openModal(product)"
          >
            Check details
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div
      class="bg-white rounded-xl shadow-lg sm:w-[80%] mx-auto p-8"
      v-if="selectedProduct"
    >
      <div class="card w-full sm:grid sm:grid-cols-2 flex ">
        <figure class="sm:p-4 p-2">
          <img
            :src="selectedProduct.image"
            alt="selectedProductImage"
            class="rounded-xl w-full h-60 object-contain"
          />
        </figure>


       <div class="card-body px-2 lg:px-6 lg:py-4 py-5 h-[45vh]  overflow-y-scroll md:overflow-y-auto overflow-x-hidden">
          <h2 class="card-title text-4xl font-bold">
            {{ selectedProduct.name }}
          </h2>
          <p class="text-gray-600">{{ selectedProduct.description }}</p>
          <div class="bg-gray-100 shadow-sm sm:p-4 p-2">
            <h4 class="text-blue-400 text-xl font-bold text-center">
              New Features
            </h4>
            <p>
              1️⃣ Layer-based editing — Easily manage and edit different elements
              separately.<br />
              2️⃣ Powerful selection tools — Precisely select and isolate any part
              of an image.<br />
              3️⃣ Retouching and healing — Remove imperfections and enhance photos
              flawlessly.<br />
              4️⃣ Creative filters and effects — Apply artistic looks and unique
              visual styles.<br />
              5️⃣ Seamless Adobe integration — Work smoothly with other Adobe apps
              for a complete design workflow.
            </p>
          </div>

          <!-- various charges -->
           <div class="bg-gray-100 w-full justify-center p-3">
                <p class="my-1  text-blue-400 text-xl font-bold  text-center">Choose the plan first below</p>
            <div class=" md:grid md:grid-cols-1 md:gap-1 lg:flex lg:gap-3 gap-3">
            <div
              class="h-12 w-28 mx-auto bg-gray-100 card-sm shadow-sm flex justify-center text-center items-center cursor-pointer rounded-lg my-1"
                :class="selectedAmount === parseInt(selectedProduct.price /12 + 500) ? ' bg-green-400' : ''"
              @click="selectPlan(parseInt(selectedProduct.price / 12 + 500))"
            >
              <p class="font-semibold">
                ₹{{ parseInt(selectedProduct.price / 12 + 500).toLocaleString() }}<span
                  >/month</span
                >
              </p>
            </div>

            <div
              class="w-28 h-12 mx-auto bg-gray-100 card-sm shadow-sm flex justify-center text-center items-center cursor-pointer my-1 rounded-lg"
              @click="selectPlan(parseInt(selectedProduct.price / 2 + 300))"
                :class="selectedAmount === parseInt(selectedProduct.price / 2 + 300) ? ' bg-green-400' : ''"
            >
              <p class="font-semibold">
                ₹{{ parseInt(selectedProduct.price / 2 + 300).toLocaleString() }}<span
                  >/half yearly</span
                >
              </p>
            </div>

            <div
              class="w-28 h-12 mx-auto bg-gray-100 card-sm shadow-sm flex justify-center text-center items-center cursor-pointer rounded-lg my-1"
              @click="selectPlan(parseInt(selectedProduct.price))"
                :class="selectedAmount === parseInt(selectedProduct.price) ? ' bg-green-400' : ''"
            >
              <p class="font-semibold ">
                ₹{{ parseInt(selectedProduct.price).toLocaleString() }}<span>/year</span>
              </p>
            </div>
          </div>

           </div>
           
          <p class="mb-4 font-medium ml-4 text-red-500">
            + 18% GST will be applied for each subscription plan.
          </p>
          <div class="flex justify-center space-x-2">
            <button
              @click="handlePay(), closeModal()"
              class=" bg-green-500 px-4 py-2 text-white rounded-xl cursor-pointer"
            >
              Pay ₹{{ finalAmount }}
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
