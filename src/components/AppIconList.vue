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

                // console.log(resp.data);

                this.store.servicesArray = resp.data.result;

                // console.log(this.store.servicesArray[0].service_name);

            }).catch(error => {

                console.error('Errore nella richiesta di tutti i servizi:', error);

            });

        },

        toggleFilter(serviceId) {

            if (this.store.selectedServices.includes(serviceId)) {

                this.store.selectedServices = this.store.selectedServices.filter(item => item !== serviceId);

            } else {

                this.store.selectedServices.push(serviceId);

            }
        },

        wordCount(str) {

            return str.split(' ').filter(function (n) { return n != '' }).length;

        },

    }
}
</script>

<template>

    <div class="text-center text-light row g-2 py-4" :class="`row-cols-${this.store.servicesArray.length}`">

        <div v-for="service in this.store.servicesArray" :key="service" class="icon-item col"
            :class="[{ activeFilter: store.selectedServices.includes(service.id) }]" @click="toggleFilter(service.id)">

            <i class="fs-3 pb-3" :class="service.icon"></i>

            <span v-if="wordCount(service.service_name) == 1" :id="`icon-text-${service.id}`" class="icon-text">
                {{ service.service_name }}
            </span>

            <div v-else :id="`icon-text-${service.id}`" class="d-flex flex-column align-items-center icon-text">

                <span>
                    {{ service.service_name.split(" ")[0] }}
                </span>

                <span>
                    {{ service.service_name.split(" ")[1] }}
                </span>

            </div>

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
    font-size: 0.8rem;
}

.icon-item:hover {
    color: $color-light-green;
}

.icon-item i {
    font-size: 2rem;
}

.activeFilter {
    color: $color-light-green;
}
</style>