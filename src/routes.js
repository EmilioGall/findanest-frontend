import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import SinglePage from "./pages/SinglePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";

const links = [
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
    path: "/chi-siamo",
    name: "Chi Siamo",
    component: AboutUsPage,
  },
];

const routes = [
  ...links,
  {
    path: "/singlepage/:slug",
    name: "singlepage",
    component: SinglePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, routes, links };
