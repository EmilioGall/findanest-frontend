<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppEvidenza from './components/AppEvidenza.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {

    AppHeader,
    AppFooter,

  },

}
</script>

<template>
  <AppHeader class="header" />
  <router-view></router-view>
      
  <AppFooter/>
</template>

<style scoped lang="scss">
  .header{
    z-index: 2;
  }
</style>