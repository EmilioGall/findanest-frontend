<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';


export default {
  components: {

    AppHeader,
    AppMain,
    AppJumbotron

  },

}
</script>

<template>
  <router-view></router-view>
      <AppHeader/>
      <AppJumbotron/>
</template>

<style scoped lang="scss"></style>