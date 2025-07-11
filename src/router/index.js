import { createRouter, createWebHistory } from "vue-router";


import Contact from "../views/Contact.vue";
import Feature from "../views/Feature.vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";


import Home from "../views/Home.vue";
import ReviewPage from "../components/User_Review/ReviewPage.vue";
import AboutUs from "../views/AboutUs.vue";
import OrderPage from "../components/ProductCard/OrderPage.vue";
import InvoicePage from "../components/InvoicePage/InvoicePage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "about", component:AboutUs },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/features", name: "Feature", component: Feature },
   { path: "/review", name: "review", component: ReviewPage },
  { path: "/product", name: "product", component: ProductCard },
    { path: "/orderPage",   name: 'orderPage', component: OrderPage },
  { path: "/getinvoice",   name: 'getinvoice', component: InvoicePage }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
