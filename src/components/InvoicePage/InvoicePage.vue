<template>
  <div>
    <!-- Invoice Section -->
    <div
      id="invoice"
      class="bg-white p-8 mt-6 shadow-md rounded-md w-full max-w-2xl mx-auto"
      v-if="invoiceData"
    >
      <!-- Header -->
      <div class="border-b pb-4 mb-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Invoice</h1>
        <div class="text-gray-600 text-sm text-right">
          <p><strong>Invoice #:</strong> {{ invoiceData.id }}</p>
          <p><strong>Date:</strong> {{ invoiceData.date }}</p>
        </div>
      </div>

      <!-- Customer -->
      <div class="mb-4">
        <p class="text-gray-700"><strong>Bill To:</strong></p>
        <p>{{ invoiceData.customerName }}</p>
        <p>{{ invoiceData.customerEmail }}</p>
      </div>

      <!-- Table -->
      <table class="w-full text-left mb-4">
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
             <td class="py-2 px-2">₹{{ (item.price*.18).toLocaleString() }}</td>
            <td class="py-2 px-2">₹{{ (item.price*1.18).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Total -->
      <div class="text-right text-lg font-semibold text-gray-800">
        Grand Total: ₹{{ (invoiceData.total*1.18).toLocaleString() }}
      </div>

      <!-- Buttons -->
      <div class="mt-6 flex flex-wrap gap-3">
<RouterLink to="/">
          <button
             @click="downloadPDF"
            class="bg-green-600 text-white px-4 py-2 rounded"
          >
           Download PDF
          </button>
        </RouterLink>
        <RouterLink to="/">
          <button
            class="bg-amber-400 text-white px-4 py-2 rounded hover:bg-amber-500"
          >
            Back to Home Page
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

<style scoped>
</style>
