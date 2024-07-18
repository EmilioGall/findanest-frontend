<script>
import { routes } from '../routes';

export default {
  data() {
    return {
      menuRoutes: routes,
    };
  },
};
</script>


<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/img/findanest-logo-h1.svg" alt="logo" class="w-50">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mg-lg-0">
          <li v-for="route in menuRoutes" :key="route.name" class="nav-item ">
            <router-link :to="{ name: route.name }" class="nav-link text-light " exact-active-class="active-link text-dark ">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<style scoped lang="scss">
@use "../scss/partials/variables" as *;

nav {
  background-color: transparent;

  

  li:last-child {
    padding-left: 2em;

  }
}



.active-link {
  background-color: $color-light-green;
  border-radius: 5px;
}

.navbar a {
  font-size: 18px;
  font-weight: 400;
}

.navbar-toggler {
  padding: 1px 5px;
  font-size: 18px;
  line-height: 0.3;
  background: #fff;
}
</style>
