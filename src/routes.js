import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const ExternalRedirect = {
  created() {
    window.location.href = "http://127.0.0.1:8000/login";
  },
};

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
  {
    path: "/login",
    name: "Login",
    component: ExternalRedirect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
