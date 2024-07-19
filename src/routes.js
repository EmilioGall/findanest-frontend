import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/ricerca",
    name: "Ricerca",
    component: HomePage,
  },
  {
    path: "/contatti",
    name: "Contatti",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
