<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppEvidenza from './components/AppEvidenza.vue';

export default {
  components: {

    AppHeader,
    AppMain,
    AppJumbotron,
    AppEvidenza

  },

}
</script>

<template>
  <router-view></router-view>
      <AppHeader/>
      <AppJumbotron/>
      <AppEvidenza />
</template>

<style scoped lang="scss"></style>