<template>
  <div>
    <!-- Invoice Section -->
    <div
      id="invoice"
      class="bg-white p-6 sm:p-8 mt-6 shadow-md rounded-md w-full max-w-2xl mx-auto"
      v-if="invoiceData"
    >
      <!-- Header -->
      <div class="border-b pb-4 mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Invoice</h1>
        <div class="text-gray-600 text-xs sm:text-sm text-left sm:text-right">
          <p><strong>Invoice #:</strong> {{ invoiceData.id }}</p>
          <p><strong>Date:</strong> {{ invoiceData.date }}</p>
        </div>
      </div>

      <!-- Customer -->
      <div class="mb-4 text-sm sm:text-base">
        <p class="text-gray-700 font-semibold "><strong>Bill To:</strong></p>
        <p class="">{{ invoiceData.customerName }}</p>
        <p>{{ invoiceData.customerEmail }}</p>
      </div>

      <!-- Table -->
      <table class="w-full text-left mb-4 text-xs sm:text-sm">
        <thead>
          <tr class="bg-gray-100 text-gray-700">
            <th class="py-2 px-2">Item</th>
            <th class="py-2 px-2">Plan Type</th>
            <th class="py-2 px-2">Qty</th>
            <th class="py-2 px-2">Price</th>
            <th class="py-2 px-2">GST</th>
            <th class="py-2 px-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in invoiceData.items"
            :key="item.name"
            class="border-b text-gray-700"
          >
            <td class="py-2 px-2">{{ item.name }}</td>
            <td class="py-2 px-2">{{ item.planType }}</td>
            <td class="py-2 px-2">1</td>
            <td class="py-2 px-2">₹{{ item.price.toLocaleString() }}</td>
            <td class="py-2 px-2">₹{{ (item.price * 0.18).toLocaleString() }}</td>
            <td class="py-2 px-2">₹{{ (item.price * 1.18).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Total -->
      <div class="text-right text-base sm:text-lg font-semibold text-gray-800">
        Grand Total: ₹{{ (invoiceData.total * 1.18).toLocaleString() }}
      </div>

      <!-- Buttons -->
      <div class="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3">
        <RouterLink to="/product">
          <button
          @click="downloadPDF"
          class="bg-green-600 text-white px-4 py-2 rounded text-sm sm:text-base hover:bg-green-700"
        >
          Download PDF
        </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick } from "vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useProductStore } from "../../Stores/ProductStores";
import { RouterLink } from "vue-router";

const productStore = useProductStore();
const invoiceData = productStore.invoiceData;

async function downloadPDF() {
  await nextTick();
  const element = document.getElementById("invoice");
  if (element) {
    element.style.backgroundColor = "white";
    element.style.color = "black";
    element.querySelectorAll("*").forEach(child => {
      child.style.backgroundColor = "white";
      child.style.color = "black";
    });

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice_${invoiceData.id}.pdf`);
  } else {
    console.error("Invoice element not found!");
  }
}
</script>

