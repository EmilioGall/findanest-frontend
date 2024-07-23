<script>
import { store } from "../store.js";
import axios from 'axios';

export default {

    data() {
        return {

            store,

        }
    },

    created() {

        this.getServices();

    },

    methods: {

        getServices() {

            axios.get("http://127.0.0.1:8000/api/services").then((resp) => {

                console.log(resp.data);

                this.store.servicesArray = resp.data.result;

                console.log(this.store.servicesArray[0].service_name);

            }).catch(error => {

                console.error('Errore nella richiesta di tutti i servizi:', error);

            });

        },

        toggleFilter(serviceId) {

            if (this.store.selectedFilters.includes(serviceId)) {

                this.store.selectedFilters = this.store.selectedFilters.filter(item => item !== serviceId);

            } else {

                this.store.selectedFilters.push(serviceId);

            }
        },
    }
}
</script>

<template>

    <div class="text-center text-light row g-2" :class="`row-cols-${this.store.servicesArray.length}`">

        <div v-for="service in this.store.servicesArray" :key="service" class="icon-item col"
            :class="[{ activeFilter: store.selectedFilters.includes(service.id) }]" @click="toggleFilter(service.id)">

            <i class="fs-6" :class="service.icon"></i>

            <span class="icon-text">{{ service.service_name }}</span>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.icon-item {
    display: flex;
    flex-direction: column;

    cursor: pointer;
    transition: color 0.3s;
}

.icon-text {
    font-size: 5px;
}

.icon-item:hover {
    color: $color-light-green;
}

.icon-item i {
    font-size: 2rem;
}

.icon-item span {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    white-space: nowrap;
}

.activeFilter {
    color: $color-light-green;
}
</style>