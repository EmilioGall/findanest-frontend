<script>

export default {

    data() {
        return {
            selectedFilters: [],
            serviziCasa: {
                "Ascensore": "fas fa-elevator",
                "Garage": "fas fa-square-parking",
                "Posto auto": "fas fa-warehouse",
                "Cantina": "fas fa-cube",
                "Balcone": "fas fa-window-maximize",
                "Giardino": "fas fa-tree",
                "Aria condizionata": "fas fa-snowflake",
                "Cucina attrezzata": "fas fa-utensils",
                "Lavanderia": "fas fa-jug-detergent",
                "Piscina": "fas fa-swimming-pool",
                "Palestra": "fas fa-dumbbell",
                "Portineria": "fas fa-door-open",
                "Videocitofono": "fas fa-video",
                "Allarme": "fas fa-bell",
                "Wi-Fi": "fas fa-wifi"
            },
        }
    },

    methods: {
        toggleFilter(service) {
            if (this.selectedFilters.includes(service)) {
                this.selectedFilters = this.selectedFilters.filter(item => item !== service);
            } else {
                this.selectedFilters.push(service);
            }
        },
    }
}
</script>

<template>
    <div class="icon-list text-light">
        <div v-for="(iconClass, service) in serviziCasa" :key="service"
            :class="['icon-item', { activeFilter: selectedFilters.includes(service) }]" @click="toggleFilter(service)">
            <i :class="iconClass"></i>
            <span>{{ service }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.icon-list {
    display: flex;
    padding: 1rem 0;
    gap: 0.5rem;
    margin-left: -10px;
}

.icon-item {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;

    text-align: center;
    cursor: pointer;
    transition: color 0.3s;
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