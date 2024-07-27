<script>
import { links } from '../routes';

export default {
  data() {
    return {
      menuRoutes: links,
    };
  },
};
</script>


<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">

    <div class="container">

      <!-- logo -->
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img src="/src/assets/img/findanest-logo-h1.svg" alt="logo" class="w-50">
      </router-link>
      <!-- fine logo -->

      <!-- button per il responsive -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- fine button per il responive -->


      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- link della navbar -->
        <ul class="navbar-nav ms-auto mg-lg-0">
          <!-- link inseriti dinamicamente -->
          <li v-for="route in menuRoutes" :key="route.name" class="nav-item ">
            <router-link :to="{ name: route.name }" class="nav-link text-light "
              exact-active-class="active-link text-dark ">
              {{ route.name }}
            </router-link>
          </li>
          <!-- fine link inseriti dinamicamente -->

          <!-- link per il backend -->
          <li class="d-flex backend-links ">
            <a href="http://127.0.0.1:8000" class="nav-link text-light publish-link">Pubblica il tuo annuncio</a>
          </li>
          <li>
            <a href="http://127.0.0.1:8000/login" class="nav-link publish-home">Login</a>
          </li>
          <li>
            <a href="http://127.0.0.1:8000/register" class="nav-link  publish-home">Registrati</a>
          </li>
          <!-- fine link per il backend -->

        </ul>
        <!-- fine link navbar -->
      </div>
    </div>
  </nav>
</template>



<style scoped lang="scss">
@use "../scss/partials/variables" as *;

nav {
  background-color: rgba(0, 0, 0, 0.8);
}

// .backend-links {
//   border-left: 2px solid $color-light-green;
// }

.publish-home {
  border: 1px solid $color-light-green;
  border-radius: 5px;
  margin: 2px;
  color: white;
}

.publish-home:hover {
  background-color: $color-light-green;
  color: black;
}

.publish-link {
  position: relative;
  color: white;
  text-decoration: none;
}

.publish-link:hover {
  color: $color-light-green;
}

.publish-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 10px;
  background: $color-light-green;
  transition: width 0.3s ease;
  -webkit-transition: width 0.3s ease;
}

.publish-link:hover::after {
  width: 93%;
  left: 10px;
  background: $color-light-green;
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

@media (max-width: 768px) {
  .publish-home {
    border: none;
    margin: 0;
  }

  .backend-links {
    border-left: none;
    margin: 0;
  }
}
</style>
