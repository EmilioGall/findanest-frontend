<script>
import AppJumbotron from '../components/AppJumbotron.vue';
import AppMain from '../components/AppMain.vue';
import AppSearch from '../components/AppSearch.vue';


export default {
    components: {

        AppJumbotron,
        AppMain,
        AppSearch,

    },

}
</script>

<template>

    <AppJumbotron class="jumbo"/>
    <AppSearch/>
    <AppMain />

</template>

<style scoped lang="scss">
.jumbo{
    margin-top: -80px;
}

</style>