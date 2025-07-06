import { createRouter, createWebHistory } from "vue-router";


import Contact from "../views/Contact.vue";
import Feature from "../views/Feature.vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";


import Home from "../views/Home.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/features", name: "Feature", component: Feature },
  { path: "/product", name: "product", component: ProductCard },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
