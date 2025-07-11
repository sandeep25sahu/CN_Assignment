<template>
  <!-- Alert -->
  <div
    v-if="showAlert"
    role="alert"
    class="alert alert-success fixed top-12 right-20 w-[50%] justify-center shadow-lg z-100 "
  >
    <span>Your purchase has been confirmed!</span>
  </div>

  <!-- Order Page -->
  <div
    class="bg-white rounded-xl shadow-lg sm:w-[80%] mx-auto p-8 my-16 animate__fadeIn animate__animated  animate__slow "
    v-if="selectedProduct"
  >
    <div class="card w-full sm:grid sm:grid-cols-2 flex">
      <!-- Left Side (Image and Buttons) -->
      <div>
        <figure class="sm:p-4 p-2 sm:mt-20">
          <img
            :src="selectedProduct.image"
            alt="Product Image"
            class="rounded-xl w-full sm:h-60 h-48 object-contain"
          />
        </figure>
        <!-- Buttons for tablet and desktop -->
        <div class="justify-center space-x-2 mt-4 hidden md:flex">
          <button
            @click="openModal"
            class="bg-green-500 px-4 py-2 text-white rounded-xl cursor-pointer"
          >
            Confirm
          </button>
          <RouterLink to="/product">
            <button
              class="bg-red-500 px-4 py-2 text-white rounded-xl cursor-pointer"
            >
              Cancel
            </button>
          </RouterLink>
        </div>
      </div>

      <!-- Right Side Products Details -->
      <div class="card-body px-2 lg:px-6 lg:py-4 py-5">
        <h2 class="card-title text-2xl md:text-4xl font-bold text-center">
          {{ selectedProduct.name }}
        </h2>
        <p class="text-gray-600">{{ selectedProduct.description }}</p>
        <div class="bg-gray-100 shadow-sm sm:p-4 p-2 rounded-xl">
          <h4 class="text-gray-700 text-xl font-bold text-center mb-3">
            New Features
          </h4>
          <p>
            1️⃣ Layer-based editing — Easily manage and edit different elements separately.<br />
            2️⃣ Powerful selection tools — Precisely select and isolate any part of an image.<br />
            3️⃣ Retouching and healing — Remove imperfections and enhance photos flawlessly.<br />
            4️⃣ Creative filters and effects — Apply artistic looks and unique visual styles.<br />
            5️⃣ Seamless Adobe integration — Work smoothly with other Adobe apps for a complete design workflow.
          </p>
        </div>

        <!-- Plan selection div -->
        <div class="bg-gray-100 w-full justify-center p-3 rounded-xl mt-4">
          <p class="my-1 text-gray-700 text-xl font-bold text-center">
            Select your plan
          </p>
          <div class="md:grid md:grid-cols-1 md:gap-1 lg:flex lg:gap-3 gap-3 text-center">
            <div
              class="h-12 w-28 mx-auto bg-gray-100 shadow-sm flex justify-center items-center cursor-pointer rounded-lg my-1"
              :class="selectedAmount === parseInt(selectedProduct.price / 12 + 500) ? 'bg-green-400' : ''"
              @click="selectPlan(parseInt(selectedProduct.price / 12 + 500))"
            >
              <p class="font-semibold">
                ₹{{ parseInt(selectedProduct.price / 12 + 500).toLocaleString() }}/month
              </p>
            </div>

            <div
              class="w-28 h-12 mx-auto bg-gray-100 shadow-sm flex justify-center items-center cursor-pointer my-1 rounded-lg"
              :class="selectedAmount === parseInt(selectedProduct.price / 2 + 300) ? 'bg-green-400' : ''"
              @click="selectPlan(parseInt(selectedProduct.price / 2 + 300))"
            >
              <p class="font-semibold">
                ₹{{ parseInt(selectedProduct.price / 2 + 300).toLocaleString() }}/6 months
              </p>
            </div>

            <div
              class="w-28 h-12 mx-auto bg-gray-100 shadow-sm flex justify-center items-center cursor-pointer rounded-lg my-1"
              :class="selectedAmount === parseInt(selectedProduct.price) ? 'bg-green-400' : ''"
              @click="selectPlan(parseInt(selectedProduct.price))"
            >
              <p class="font-semibold">
                ₹{{ parseInt(selectedProduct.price).toLocaleString() }}/year
              </p>
            </div>
          </div>
          <p class="font-medium text-end text-red-500 mt-2">
            + ₹{{ parseInt(selectedAmount * 0.18).toLocaleString() }} (18% GST applies)
          </p>
          <p class="text-white py-2 sm:text-xl my-6 bg-amber-400 rounded-full font-semibold text-center">
            Total Payable Amount: ₹{{ Number(finalAmount*1.18).toLocaleString() }}
          </p>
        </div>
      </div>
    </div>

    <!-- Buttons for mobile view -->
    <div class="flex justify-center space-x-2 mt-4 sm:hidden visible">
      <button
        @click="openModal"
        class="bg-green-500 px-4 py-2 text-white rounded-xl cursor-pointer"
      >
        Confirm
      </button>
      <RouterLink to="/product">
        <button
          class="bg-red-500 px-4 py-2 text-white rounded-xl cursor-pointer"
        >
          Cancel
        </button>
      </RouterLink>
    </div>
  </div>

  <!-- Modal -->
  <dialog id="my_modal_5" class="modal modal-bottom animate__fadeIn animate__animated  animate__slow  ">
    <div class="bg-white rounded-xl shadow-lg sm:w-[80%] mx-auto p-8 relative" v-if="selectedProduct">
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
      >
        ✕
      </button>
      <p class="text-md text-red-500 flex justify-center items-center font-semibold">Make payment first to get invoice.</p>
      <div class="flex flex-col sm:flex-row sm:justify-center sm:space-x-2 space-y-2 sm:space-y-0 mt-6">
        
        <button
          @click="handlePay"
          class="bg-green-500 px-4 py-2 text-white rounded-xl cursor-pointer w-full sm:w-auto"
        >
          Pay ₹{{ Number(finalAmount*1.18).toLocaleString() }}
        </button>

        <RouterLink to="/getinvoice">
          <button
            @click="handleInvoice"
            :disabled="!InvoiceEnable"
            class="bg-blue-500 px-4 py-2 text-white rounded-xl cursor-pointer w-full sm:w-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Get Invoice
          </button>
        </RouterLink>

        <button
          @click="closeModal"
          class="bg-red-500 px-4 py-2 text-white rounded-xl cursor-pointer w-full sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { RouterLink } from "vue-router";
import { useProductStore } from "../../Stores/ProductStores";
const showAlert = ref(false);
const InvoiceEnable = ref(false);
const productStore = useProductStore();
const selectedProduct = productStore.selectedProduct;
const selectedAmount = ref(0);

//  choose the yearly pack
watchEffect(() => {
  if (selectedProduct) {
    selectedAmount.value = parseInt(selectedProduct.price);
  }
});

const selectPlan = (amount) => {
  selectedAmount.value = amount;
};

const finalAmount = computed(() => {
  return (selectedAmount.value).toFixed(0);
});

function handlePay() {
  showAlert.value = true;
  InvoiceEnable.value = true;
  setTimeout(() => {
    showAlert.value = false;
  }, 3000);
}

const planType = computed(() => {
  if (selectedAmount.value === parseInt(selectedProduct.price / 12 + 500)) {
    return "Monthly";
  } else if (selectedAmount.value === parseInt(selectedProduct.price / 2 + 300)) {
    return "6 Months";
  } else if (selectedAmount.value === parseInt(selectedProduct.price)) {
    return "Yearly";
  } else {
    return "Custom";
  }
});


// add data for invoice page it shares on invoice page
function handleInvoice() {
  productStore.invoiceData = {
    id: "ORD" + Math.floor(Math.random() * 100000),
    date: new Date().toLocaleString(),
    customerName: "Mr. XYZ",
    customerEmail: "XYZ@example.com",
    items: [
      {
        name: selectedProduct.name,
        quantity: 1,
        price: selectedAmount.value,
        planType: planType.value
      }
    ],
    total: parseInt(finalAmount.value)
      
  };
}

function openModal() {
  document.getElementById("my_modal_5").showModal();
}

function closeModal() {
  document.getElementById("my_modal_5").close();
}
</script>
