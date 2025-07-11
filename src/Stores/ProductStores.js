import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedProduct: null,
    invoiceData: null
  }),
  actions: {
    setProduct(product) {
      this.selectedProduct = product
    },
    clearProduct() {
      this.selectedProduct = null
    },
    // New actions for invoice
    setInvoiceData(invoice) {
      this.invoiceData = invoice
    },
    clearInvoiceData() {
      this.invoiceData = null
    }
  }
})
