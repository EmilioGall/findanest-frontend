<script>
import axios from 'axios';
import { store } from '../store';

export default {
    props: {
        page: String,
    },
    data() {
        return {
            store,
            formData: store.formData,
            errors: {},
            noResults: false,
        }
    },
    methods: {
        degreesToRadians(degrees) {
            return degrees * (Math.PI / 180);
        },
        calculateDistance(point1, point2) {
            const R = 6371;
            const lat1 = point1.lat;
            const lon1 = point1.lon;
            const lat2 = point2.lat;
            const lon2 = point2.lon;

            const dLat = this.degreesToRadians(lat2 - lat1);
            const dLon = this.degreesToRadians(lon2 - lon1);

            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.degreesToRadians(lat1)) * Math.cos(this.degreesToRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            const distance = R * c;

            return distance;
        },
        async handleSearch() {
            this.store.formData.services = this.store.selectedServices;
            const allFilters = this.store.formData;

            try {
                const response = await axios.get(`${store.baseURL}/api/search`, {
                    params: allFilters,
                });

                const data = response.data;

                console.log(data);
                
                const filteredDataRaw = data.filter(house => {
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
        searchAutocomplete() {
            const suggestionsList = document.getElementById('suggestions-list');
            const query = this.store.formData.text;

            if (query.length > 2) {
                fetch(`https://api.tomtom.com/search/2/search/${encodeURIComponent(query)}.json?key=${this.store.apiKey}&limit=5&language=it-IT`)
                    .then(response => response.json())
                    .then(data => {
                        suggestionsList.innerHTML = '';

                        const suggestions = data.results;

                        suggestions.forEach(suggestion => {
                            const listItem = document.createElement('li');
                            listItem.textContent = suggestion.address.freeformAddress;
                            listItem.classList.add('list-group-item');

                            listItem.addEventListener('click', () => {
                                this.store.formData.text = suggestion.address.freeformAddress;
                                this.store.selectedPosition.lat = suggestion.position.lat;
                                this.store.selectedPosition.lon = suggestion.position.lon;
                                suggestionsList.innerHTML = '';
                            });

                            suggestionsList.appendChild(listItem);
                        });
                    });
            } else {
                suggestionsList.innerHTML = '';
            }
        },
        increment(field) {
            this.store.formData[field]++;
        },
        decrement(field) {
            if (this.store.formData[field] > 0) {
                this.store.formData[field]--;
            }
        },
    }
}
</script>

<template>
    <!-- Inputs Filters -->
    <div class="col-12 gap-2 position-relative">

        <!-- SEARCHBAR -->
        <form @submit.prevent="handleSearch" class="row g-4 mb-2">

            <!-- Inputs Filters -->
            <div v-if="page == 'searchPage'" class="col-12 gap-3 d-flex flex-column flex-md-row justify-content-between text-white py-2">

                <!-- Input Numbers -->
                <div class="col-12 col-md-5 row gx-2 gy-1 d-flex justify-content-between gap-2 input-numbers">

                    <!-- Input Rooms -->
                    <div class="col-6 col-md d-flex flex-column align-items-center">
                        <label for="rooms" class="form-label">Stanze</label>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-square-minus" @click="decrement('rooms')"></i>
                            <input type="text" class="form-control input-border text-center" id="rooms"
                                :value="store.formData.rooms" readonly>
                            <i class="fa-solid fa-square-plus" @click="increment('rooms')"></i>
                        </div>
                        <div v-if="errors.rooms" class="text-danger">{{ errors.rooms[0] }}</div>
                    </div>
                    <!-- /Input Rooms -->

                    <!-- Input Bathrooms -->
                    <div class="col-6 col-md d-flex flex-column align-items-center">
                        <label for="bathrooms" class="form-label">Bagni</label>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-square-minus" @click="decrement('bathrooms')"></i>
                            <input type="text" class="form-control input-border text-center" id="bathrooms"
                                :value="store.formData.bathrooms" readonly>
                            <i class="fa-solid fa-square-plus" @click="increment('bathrooms')"></i>
                        </div>
                        <div v-if="errors.bathrooms" class="text-danger">{{ errors.bathrooms[0] }}</div>
                    </div>
                    <!-- /Input Bathrooms -->

                    <!-- Input Beds -->
                    <div class="col-6 col-md d-flex flex-column align-items-center">
                        <label for="beds" class="form-label">Letti</label>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-square-minus" @click="decrement('beds')"></i>
                            <input type="text" class="form-control input-border text-center" id="beds"
                                :value="store.formData.beds" readonly>
                            <i class="fa-solid fa-square-plus" @click="increment('beds')"></i>
                        </div>
                        <div v-if="errors.beds" class="text-danger">{{ errors.beds[0] }}</div>
                    </div>
                    <!-- /Input Beds -->

                    <!-- Input Sqm -->
                    <div class="col-6 col-md d-flex flex-column align-items-center">
                        <label for="sqm" class="form-label">m²</label>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-square-minus"
                                @click="store.formData.sqm > 0 ? (store.formData.sqm -= 10) : null"></i>
                            <input type="text" class="form-control input-border text-center" id="sqm"
                                :value="store.formData.sqm" readonly>
                            <i class="fa-solid fa-square-plus" @click="store.formData.sqm += 10"></i>
                        </div>

                        <div v-if="errors.sqm" class="text-danger">{{ errors.sqm[0] }}</div>
                    </div>
                    <!-- /Input Sqm -->

                </div>
                <!-- /Input Numbers -->

                <!-- Input Sliders -->
                <div class="col-12 col-md-7 d-flex flex-column flex-md-row justify-content-between gap-3">

                    <!-- Input Slider Distance -->
                    <div class="col-md-6 d-flex flex-column justify-content-end">
                        <label for="distance" class="form-label">Distanza massima:
                            <span class="text-evident">{{ ` ${formData.distance}` }} km</span></label>
                        <input type="range" class="form-range" min="0" max="100" step="1" id="distance"
                            v-model="formData.distance">
                        <div v-if="errors.distance" class="text-danger">{{ errors.distance[0] }}</div>
                    </div>
                    <!-- /Input Slider Distance -->

                    <!-- Input Slider Distance -->
                    <div class="col-md-6 d-flex flex-column justify-content-end">
                        <label for="price" class="form-label">Prezzo massimo: <span class="text-evident">{{ `${formData.price} €/notte` }}</span></label>
                        <input type="range" class="form-range" min="0" max="1000" step="10" id="price" v-model="formData.price">
                        <div v-if="errors.price" class="text-danger">{{ errors.price[0] }}</div>
                    </div>
                    <!-- /Input Slider Distance -->

                </div>
                <!-- /Input Sliders -->

                <div v-if="errors.general" class="text-danger">{{ errors.general }}</div>

            </div>
            <!-- /Inputs Filters -->

            <!-- Input Search -->
            <div class="col-12">
                <div class="row gap-2 align-items-center pt-1">
                    <input class="col-8 col-sm-7 form-control-sm search-input" type="text" v-model="store.formData.text"
                        placeholder="Cerca le case (eg. Titolo, Città)..." @input="searchAutocomplete" />
                    <!-- Submit Button -->
                    <button class="col-3 col-sm-2 search-btn btn ms-2" type="submit">Cerca</button>
                    <!-- Submit Button -->
                </div>
            </div>
            <!-- /Input Search -->

        </form>
        <!-- /SEARCHBAR -->

        <!-- LISTA SUGGERIMENTI -->
        <div id="suggestions-list" class="list-group mt-2 position-absolute w-100"></div>

        <!-- NO RESULTS MESSAGE -->
        <div v-if="noResults" class="alert alert-danger mt-3">La ricerca non ha prodotto risultati.</div>

    </div>
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

.fa-square-plus,
.fa-square-minus {
    cursor: pointer;
}

.input-numbers {
    input {
        background-color: transparent !important;
        border: 0 !important;
        color: $color-light-grey;
    }

    i {
        font-size: 1.7rem;
        color: $color-light-green;
    }
}

.text-evident {
    color: $color-light-green;
    font-weight: bold;
}

input[type="range"]::-webkit-slider-thumb {
    background-color: $color-light-green;
    /* Per browser basati su WebKit */
}

input[type="range"]::-moz-range-thumb {
    background-color: $color-light-green;
    /* Per Firefox */
}
</style>
