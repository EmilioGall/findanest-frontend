<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            formData: {
                rooms: '',
                bathrooms: "",
                beds: "",
                sqm: "",
                distance: [],
                price: [],
                services: [],
            },
            errors: {},
            noResults: false, 
        }
    },

    methods: {
        async handleSearch() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/search', {
                    params: { query: this.store.searchTerm },
                });

                this.store.results = response.data;
                if(this.store.results.length === 0){
                    this.noResults = true;
                };//Se i risultati sono 0 la variabile diventa true


                console.log(this.store.searchTerm);

                this.$router.push("/ricerca");
            } catch (error) {
                console.error(error);
            }
        },

        searchAutocomplete() {
            const apiKey = 'oqhAPvi5e4AQAL3zAV2MAL0rP9SlonP0';
            const suggestionsList = document.getElementById('suggestions-list');
            const query = this.store.searchTerm;

            if (query.length > 2) {
                fetch(`https://api.tomtom.com/search/2/search/${encodeURIComponent(query)}.json?key=${apiKey}&limit=5&language=it-IT`)
                    .then(response => response.json())
                    .then(data => {
                        suggestionsList.innerHTML = '';

                        const suggestions = data.results;

                        suggestions.forEach(suggestion => {
                            const listItem = document.createElement('li');
                            listItem.textContent = suggestion.address.freeformAddress;
                            listItem.classList.add('list-group-item');
                            listItem.addEventListener('click', () => {
                                this.store.searchTerm = suggestion.address.freeformAddress;
                                suggestionsList.innerHTML = '';
                            });
                            suggestionsList.appendChild(listItem);
                        });
                    });
            } else {
                suggestionsList.innerHTML = '';
            }
        },
    }
}
</script>

<template>
    <!-- SEARCHBAR -->
    <form @submit.prevent="handleSearch" class="row g-4 text-white">
        <!-- Inputs Filters -->
        <div class="col-12 gap-2 d-flex">
            <!-- Input Numbers -->
            <div class="row gx-5 gy-1">
                <!-- Input Rooms -->
                <div class="col-6 d-flex gap-2 align-items-end">
                    <label for="rooms" class="form-label">Stanze</label>
                    <input type="number" class="form-control input-border" id="rooms" aria-describedby="rooms"
                        v-model="formData.rooms">
                    <div v-if="errors.rooms" class="text-danger">{{ errors.rooms[0] }}</div>
                </div>
                <!-- Input Rooms -->

                <!-- Input Bathrooms -->
                <div class="col-6 d-flex gap-2 align-items-end">
                    <label for="bathrooms" class="form-label">Bagni</label>
                    <input type="number" class="form-control input-border" id="bathrooms" aria-describedby="bathrooms"
                        v-model="formData.bathrooms">
                    <div v-if="errors.bathrooms" class="text-danger">{{ errors.bathrooms[0] }}</div>
                </div>
                <!-- Input Bathrooms -->

                <!-- Input Beds -->
                <div class="col-6 d-flex gap-2 align-items-end">
                    <label for="beds" class="form-label">Letti</label>
                    <input type="number" class="form-control input-border" id="beds" aria-describedby="beds"
                        v-model="formData.beds">
                    <div v-if="errors.beds" class="text-danger">{{ errors.beds[0] }}</div>
                </div>
                <!-- Input Beds -->

                <!-- Input Sqm -->
                <div class="col-6 d-flex gap-2 align-items-end">
                    <label for="sqm" class="form-label">m²</label>
                    <input type="number" class="form-control input-border" id="sqm" aria-describedby="sqm"
                        v-model="formData.sqm">
                    <div v-if="errors.sqm" class="text-danger">{{ errors.sqm[0] }}</div>
                </div>
                <!-- Input Sqm -->
            </div>
            <!-- Input Numbers -->

            <!-- Input Sliders -->
            <div class="row g-2">
                <!-- Input Slider Distance -->
                <div class="col-12">
                    <label for="distance" class="form-label">Distanza massima da posizione selezionata</label>
                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="distance"
                        v-model="formData.distance">
                    <div v-if="errors.distance" class="text-danger">{{ errors.distance[0] }}</div>
                </div>
                <!-- Input Slider Distance -->

                <!-- Input Slider Distance -->
                <div class="col-12">
                    <label for="price" class="form-label">Prezzo massimo</label>
                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="price"
                        v-model="formData.price">
                    <div v-if="errors.price" class="text-danger">{{ errors.price[0] }}</div>
                </div>
                <!-- Input Slider Distance -->
            </div>
            <!-- Input Sliders -->

            <div v-if="errors.general" class="text-danger">{{ errors.general }}</div>
        </div>
        <!-- Inputs Filters -->

        <!-- Input Search -->
        <div class="col-12">
            <div class="row gap-2 align-items-center">
                <input class="col-7 form-control-sm search-input" type="text" v-model="store.searchTerm"
                    placeholder="Cerca le case (eg. Titolo, Città)..." @input="searchAutocomplete" />
                <!-- Submit Button -->
                <button class="col-2 search-btn btn ms-2" type="submit">Cerca</button>
                <!-- Submit Button -->
            </div>
        </div>
        <!-- Input Search -->
    </form>
    <!-- SEARCHBAR -->

    <!-- LISTA SUGGERIMENTI -->
    <div id="suggestions-list" class="list-group mt-2"></div>

    <!-- NO RESULTS MESSAGE -->
    <div v-if="noResults" class="alert alert-danger mt-3">La ricerca non ha prodotto risultati.</div>
    
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.search-input {
    flex-grow: 1;
    padding: 0.73rem 1rem;
    height: 45px;
    border: 0;
}

.search-btn {
    background-color: $color-light-green;
    height: 48px;
}
</style>
