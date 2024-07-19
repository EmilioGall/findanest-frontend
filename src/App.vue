<script>
// importazioni
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {

    AppHeader,
    AppFooter,

  },

}
</script>

<template>
  <!-- header -->
  <AppHeader class="header" />
  <!-- fine header -->

  <!-- router-view per le pagine in pages -->
  <router-view></router-view>
  <!-- fine router-view per le pagine in pages -->

  <!-- footer -->
  <AppFooter/>
  <!-- fine footer -->
</template>

<style scoped lang="scss">
  .header{
    z-index: 2;
  }
</style>