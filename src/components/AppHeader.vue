<script>

export default {

   data() {
      return {



      }
   },

   created() {

      //

   },

   methods: {

      //

   }
}

</script>

<template>
   <!-- navbar -->
   <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">

  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/src/real estate/logo.png" alt="logo" class="w-50">
   </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mg-lg-0">

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">In Evidenza</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Chi Siamo</a>
        </li>
 
        <li class="nav-item">
          <a class="nav-link" href="#">Domande</a>
        </li>

        <li class="nav-item">
          <a class="nav-link btn text-white bg-dark px-3 rounded-0" href="#">Chi Siamo</a>
        </li>
      </ul>
      

    </div>
  </div>
</nav>

</template>

<style scoped lang="scss">
   .navbar a{
   font-size: 14px;
   font-weight: 500;
}
.navbar-toggler{
   padding: 1px 5px;
   font-size: 18px;
   line-height: 0.3;
   background: #fff;
}
</style>