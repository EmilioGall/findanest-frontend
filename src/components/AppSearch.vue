<script>
import AppSearchBar from './AppSearchBar.vue';


export default {

    components: {
        AppSearchBar
    },

    data() {
        return {

        };
    },


}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center input-group">
            <AppSearchBar />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;



.input-group {
    padding: 1.5rem;
    padding-bottom: 4rem;
    border-radius: 20px;
    margin-top: -210px;
    z-index: 2;
}
</style>
