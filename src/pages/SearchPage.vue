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
            visibleHouses: [],
        }
    },

    created() {

        this.handleSearch();

    },

    computed: {

        sponsoredHouses() {
            return this.store.results.filter(house => house.sponsorships.length > 0);
        },

        houses() {
            return this.store.results.filter(house => house.sponsorships.length <= 0);
        },

    },

    methods: {

        navigateToSinglePage(slug) {

            this.$router.push({ name: 'singlepage', params: { slug } });

        },

        async handleSearch() {

            this.store.formData.services = this.store.selectedServices;

            const allFilters = this.store.formData;

            try {

                const response = await axios.get(`${store.baseURL}/api/search`, {
                    params: allFilters,
                });

                const data = response.data;

                // Filtra appartamenti visibili
                this.visibleHouses = data.filter(house => house.visible == 2);
                
                const filteredDataRaw = this.visibleHouses.filter(house => {
                    if (this.store.formData.services.length === 0) return true;
                    return this.store.formData.services.every(serviceId => house.services.some(service => service.id === serviceId));
                });

                const filteredData = filteredDataRaw.filter(house => {
                    if (this.store.formData.distance === 0) return true;

                    const housePosition = {

                        lat: house.latitude,
                        lon: house.longitude,
                    };

                    const distanceToHouse = this.calculateDistance(this.store.selectedPosition, housePosition);

                    return distanceToHouse <= this.store.formData.distance;

                });

                this.store.results = filteredData;

                console.log(this.store.results);

                if (this.store.results.length === 0) {
                    this.noResults = true;
                } else {
                    this.noResults = false;
                }

                if (this.page != 'searchPage') {
                    this.$router.push("/ricerca");
                }

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
            <section v-if="sponsoredHouses.length !== 0" class="container pt-2" style="margin-top: 10px;">

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
            <section class="bg-dark" :class=" sponsoredHouses.length !== 0 ? 'dark-long' : '' ">

                <!-- contenitore  -->
                <div class="container pt-3">

                    <div class="row" :class=" sponsoredHouses.length !== 0 ? 'grid-down' : '' ">

                        <!-- sezione delle card annunci non sponsorizzati-->
                        <section v-if="houses.length !== 0" class="container cardsnormal">

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

.dark-long {

    margin-top: -15%;

}

.grid-down {

    margin-top: 25%;

}

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