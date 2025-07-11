<template>
  <div>
    <!-- Invoice Section -->
    <div
      id="invoice"
      class="bg-white p-8 mt-6 shadow-md rounded-md w-full max-w-2xl mx-auto"
    >
      <!-- Header -->
      <div class="border-b pb-4 mb-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Invoice</h1>
        <div class="text-gray-600 text-sm">
          <p><strong>Invoice #:</strong> {{ order.id }}</p>
          <p><strong>Date:</strong> {{ order.date }}</p>
        </div>
      </div>

      <!-- Customer -->
      <div class="mb-4">
        <p class="text-gray-700"><strong>Bill To:</strong></p>
        <p>{{ order.customerName }}</p>
        <p>{{ order.customerEmail }}</p>
      </div>

      <!-- Table -->
      <table class="w-full text-left mb-4">
        <thead>
          <tr class="bg-gray-100 text-gray-700">
            <th class="py-2 px-2">Item</th>
            <th class="py-2 px-2">Qty</th>
            <th class="py-2 px-2">Price</th>
            <th class="py-2 px-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in order.items"
            :key="item.name"
            class="border-b text-gray-700"
          >
            <td class="py-2 px-2">{{ item.name }}</td>
            <td class="py-2 px-2">{{ item.quantity }}</td>
            <td class="py-2 px-2">{{ formatPrice(item.price) }}</td>
            <td class="py-2 px-2">{{ formatPrice(item.price * item.quantity) }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Total -->
      <div class="text-right text-lg font-semibold text-gray-800">
        Grand Total: {{ formatPrice(order.total) }}
      </div>

      <!-- Download button -->
      <button
        @click="downloadPDF"
        class="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Download PDF
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Example order data
const order = ref({
  id: "ORD12345",
  date: new Date().toLocaleDateString(),
  customerName: "John Doe",
  customerEmail: "john@example.com",
  items: [
    { name: "Premium Plan", quantity: 1, price: 299 },
    { name: "Support Add-on", quantity: 1, price: 49 }
  ],
  total: 348
});

function formatPrice(value) {
  return "$" + value.toFixed(2);
}

async function downloadPDF() {
  await nextTick();
  const element = document.getElementById("invoice");
  if (element) {
    // Force fallback colors to avoid oklch errors
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
    pdf.save(`Invoice_${order.value.id}.pdf`);
  } else {
    console.error("Invoice element not found!");
  }
}
</script>

<style scoped>
/* Optional custom styles if needed */
</style>
