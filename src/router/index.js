import { createRouter, createWebHistory } from "vue-router";


import Contact from "../views/Contact.vue";
import Feature from "../views/Feature.vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";


import Home from "../views/Home.vue";
import ReviewPage from "../components/User_Review/ReviewPage.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/features", name: "Feature", component: Feature },
  { path: "/product", name: "product", component: ProductCard },
   { path: "/review", name: "review", component: ReviewPage }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior() {
    return { top: 0 }
  },
});

export default router;
