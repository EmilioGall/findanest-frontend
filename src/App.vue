<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppEvidenza from './components/AppEvidenza.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {

    AppHeader,
    AppMain,
    AppJumbotron,
    AppEvidenza,
    AppFooter,

  },

}
</script>

<template>
  <router-view></router-view>
      <AppHeader/>
      <AppJumbotron/>
      <AppEvidenza />
      <AppFooter/>
</template>

<style scoped lang="scss"></style>