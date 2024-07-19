import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SinglePage from "./pages/SinglePage.vue";

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
const singlePage = [
  {
    path : "/singlePage",
    name : "SinglePge",
    component : SinglePage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes };
