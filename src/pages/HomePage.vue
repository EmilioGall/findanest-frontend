<script>
import AppJumbotron from '../components/AppJumbotron.vue';
import AppEvidenza from '../components/AppEvidenza.vue';
import AppMain from '../components/AppMain.vue';
import AppSearch from '../components/AppSearch.vue';


export default {
    components: {

        AppJumbotron,
        AppEvidenza,
        AppMain,
        AppSearch,

    },

}
</script>

<template>

    <AppJumbotron class="jumbo"/>
    <AppSearch/>
    <AppEvidenza />

</template>

<style scoped lang="scss">
.jumbo{
    margin-top: -80px;
}

</style>