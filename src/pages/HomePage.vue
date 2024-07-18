<script>
import AppJumbotron from '../components/AppJumbotron.vue';
import AppEvidenza from '../components/AppEvidenza.vue';
import AppMain from '../components/AppMain.vue';

export default {
    components: {

        AppJumbotron,
        AppEvidenza,
        AppMain

    },

}
</script>

<template>

    <AppJumbotron class="jumbo"/>
    <AppEvidenza />

</template>

<style scoped lang="scss">
    .jumbo{
        margin-top: -90px;
        z-index: -1;
    }

</style>