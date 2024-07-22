<script>
import axios from 'axios';
import { store } from "../store.js";
import AppCard from '../components/AppCard.vue';
import AppIconList from '../components/AppIconList.vue';
import AppSearchBar from '../components/AppSearchBar.vue';

export default {
    components: {
        AppIconList,
        AppSearchBar,
        AppCard,
    },

    data() {
        return {
            store,
        }
    },

    created() {
        this.handleSearch();
    },

    methods: {
        async handleSearch() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/search', {
                    params: { query: this.store.searchTerm },
                });
                this.store.results = response.data;
                console.log(this.store.searchTerm);

                this.$router.push("/ricerca")

            } catch (error) {
                console.error(error);
            }
        },
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

    <div class="results container mt-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">

            <AppCard v-for="result in store.results" :key="result.id" :house="result" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-header {
    background-color: grey;
}

.results {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
