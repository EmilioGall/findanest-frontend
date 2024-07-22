<script>
import AppIconList from '../components/AppIconList.vue';
import AppSearchBar from '../components/AppSearchBar.vue';

export default {
    components: {
        AppIconList,
        AppSearchBar,
    }
}

</script>

<template>

    <div class="search-header">

        <div class="container pt-5">
            <AppSearchBar />
        </div>

        <div class="container pt-5">
            <AppIconList />
        </div>

    </div>

</template>

<style lang="scss" scoped>
.search-header{
    background-color: grey;
}
</style>