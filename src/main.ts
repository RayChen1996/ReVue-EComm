import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createMemoryHistory, createRouter } from "vue-router";
import { VueQueryPlugin } from "@tanstack/vue-query";
import HomeView from "./views/Home.vue";
import AboutView from "./views/About.vue";
import SinginView from "./views/singin.vue";
import ProductsView from "./views/Products.vue";
import CartView from "./views/Cart.vue";
import CheckoutView from "./views/Checkout.vue";

const routes = [
  { name: "Home", path: "/", component: HomeView },
  { name: "About", path: "/about", component: AboutView },
  { name: "Login", path: "/sing-in", component: SinginView },
  { name: "Products", path: "/products", component: ProductsView },
  { name: "Cart", path: "/cart", component: CartView },
  { name: "Checkout", path: "/checkout", component: CheckoutView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).use(VueQueryPlugin).mount("#app");
