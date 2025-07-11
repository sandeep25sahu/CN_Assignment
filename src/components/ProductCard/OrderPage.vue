<script setup>
import { computed,ref } from "vue";
import { RouterLink } from "vue-router";
 const temp={
    id: 1,
    name: "Adobe Photoshop",
    description: "The industry-standard photo editing and design software.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    price: 21000,
    type: "photoEditing",
  }
  const showAlert = ref(false);
const selectedProduct = temp;
const selectedAmount = temp.price; 
const InvoiceEnable=ref(false)
const selectPlan = (amount) => {
  selectedAmount = amount;
};
const finalAmount = computed(() => {
  return (selectedAmount * 1.18).toFixed(0);
});
function handlePay() {
  showAlert.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
  InvoiceEnable.value=true;
  
}

function openModal() {

  document.getElementById("my_modal_5").showModal();
}

function closeModal() {
  document.getElementById("my_modal_5").close();
 
}

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




    <!-- Order Page -->
<div
      class="bg-white rounded-xl shadow-lg sm:w-[80%] mx-auto p-8"
      v-if="selectedProduct"
    >
      <div class="card w-full sm:grid sm:grid-cols-2 flex ">
        <figure class="sm:p-4 p-2">
          <img
            :src="selectedProduct.image"
            alt="selectedProductImage"
            class="rounded-xl w-full sm:h-60 h-32 object-contain"
          />
        </figure>
       <div class="card-body px-2 lg:px-6 lg:py-4 py-5 ">
          <h2 class="card-title text-2xl md:text-4xl font-bold text-center">
            {{ selectedProduct.name }}
          </h2>
          <p class="text-gray-600">{{ selectedProduct.description }}</p>
          <div class="bg-gray-100 shadow-sm sm:p-4 p-2">
            <h4 class="text-gray-700 text-xl font-bold text-center mb-3">
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
<!-- plan selection options -->
           <div class="bg-gray-100 w-full justify-center p-3">
                <p class="my-1  text-gray-700 text-xl font-bold  text-center">Select your plan</p>
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
                  >/6 months</span
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
              @click="openModal()"
              class=" bg-green-500 px-4 py-2 text-white rounded-xl cursor-pointer"
            >
             Confirm
            </button>
            <RouterLink
            to="/product"
            >
               <button  class="bg-red-500 px-4 py-2 text-white rounded-xl cursor-pointer"> Cancel</button>
            </RouterLink>
          </div>
        </div>
      </div>
</div>

<!-- Modal show after confirm -->
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    
    <div
      class="bg-white rounded-xl shadow-lg sm:w-[80%] mx-auto p-8"
      v-if="selectedProduct"
    >

          <div class="flex justify-center space-x-2">
            <button
              @click="handlePay(), InvoiceEnable()"
              class=" bg-green-500 px-4 py-2 text-white rounded-xl cursor-pointer"
            >
              Pay ₹{{ finalAmount }}
            </button>
         
             <button
              v-if="InvoiceEnable"
              class="bg-blue-500 px-4 py-2 text-white rounded-xl cursor-pointer"
            >
            Get Invoice
            </button>

               <button
              @click="closeModal"
              class="bg-red-500 px-4 py-2 text-white rounded-xl cursor-pointer"
            >
              Cancel
            </button>
              <h1
          @click="closeModal"
          class=" cursor-pointer btn btn-sm btn-circle btn-ghost opacity-70 text-red-500 absolute left-34 top-65    "
        >
          ✕
  </h1>
          </div>
        </div>

    
  </dialog>

</template>