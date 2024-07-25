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

    computed: {

        sponsoredHouses() {
            return this.store.results.filter(house => house.sponsored === 1);
        },

        houses() {
            return this.store.results.filter(house => house.sponsored !== 1);
        },

    },

    methods: {

        navigateToSinglePage(slug) {

            this.$router.push({ name: 'singlepage', params: { slug } });

        },

        async handleSearch() {

            const allFilters = this.store.formData;

            try {
                const response = await axios.get(`${store.baseURL}/api/search`, {

                    params: allFilters,

                });

                this.store.results = response.data;

                // console.log(this.store.results);

                // console.log(this.store.searchTerm);

            } catch (error) {

                console.error(error);

            }
        },

    }
}
</script>

<template>

    <main>

        <!-- Header -->
        <div class="search-header">

            <div class="container pt-5">
                <AppSearchBar :page="'searchPage'" />
            </div>

            <div class="container pt-1 pb-4">
                <AppIconList />
            </div>

        </div>
        <!-- Header -->

        <!-- Houses Cards Grid -->
        <div class="gap-2">

            <!-- container delle cards -->
            <section class="container pt-2" style="margin-top: 10px;">

                <!-- titolo e descrizione sezione -->
                <p class="mt-3">In Evidenza</p>

                <div class="d-flex">

                    <h2>I nostri Alloggi più Popolari</h2>

                </div>
                <!-- fine titolo e descrizione -->

                <!-- formattazione delle card -->
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">

                    <div v-for="sponsoredHouse in sponsoredHouses" :key="sponsoredHouse.id" class="col">

                        <!-- sezione dedicata alle cards -->
                        <AppCard :house="sponsoredHouse" @houseSelected="navigateToSinglePage" class="cardCustom" />
                        <!-- fine sezione dedicata alle cards -->

                    </div>

                </div>
                <!-- fine formattazione delle cards -->

            </section>
            <!-- fine container delle cards -->

            <!-- background grigio e logo -->
            <section class="bg-dark" style="margin-top: -15%;">

                <!-- contenitore  -->
                <div class="container pt-2">

                    <!-- riga del fondatore e della suo frase -->
                    <div class="row" style="margin-top: 25%;">

                        <!-- sezione delle card annunci non sponsorizzati-->
                        <section class="container cardsnormal">

                            <p class="text-light">Le nostre proposte</p>

                            <div class="d-flex">
                                <h2 class="customhome">I nostri Alloggi più recenti</h2>
                                <h6 class="ms-auto text-light">Scopri <span class="arrow-icon text-light">&rarr;</span>
                                </h6>
                            </div>

                            <!-- formattazione cards -->

                            <!-- formattazione delle card -->
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">

                                <div v-for="house in houses" :key="house.id" class="col">

                                    <!-- sezione dedicata alle cards -->
                                    <AppCard :house="house" @houseSelected="navigateToSinglePage" class="cardCustom" />
                                    <!-- fine sezione dedicata alle cards -->

                                </div>

                            </div>
                            <!-- fine formattazione delle cards -->

                            <!-- fine formattazione cards -->

                        </section>
                        <!-- fine sezione delle card annunci non sponsorizzati -->

                    </div>
                    <!-- fine riga del fondatore e della suo frase -->

                </div>
                <!-- fine contenitore  -->

                <hr class="text-light mt-5 mb-0">

            </section>
            <!-- fine background grigio e logo -->

        </div>
        <!-- Houses Cards Grid -->


    </main>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;


.search-header {

    background-color: grey;

}

.cardCustom {
    cursor: pointer;
}

.arrow-icon {
    font-size: 28px;
    font-weight: 800;
}

.customhome {
    color: $color-light-green;
}

main {
    background-color: $color-light-grey;
}
</style>