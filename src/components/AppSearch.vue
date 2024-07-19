<script>
export default {
    data() {
        return {
            searchTerm: "",
            results: [],
            serviziCasa: {
                "TV": "fas fa-tv",
                "WiFi": "fas fa-wifi",
                "Piscina": "fas fa-swimming-pool",
                "Cucina Attrezzata": "fas fa-utensils",
                "Parcheggio": "fas fa-car",
                "Aria Condizionata": "fas fa-air-freshener",
                "Lavastoviglie": "fas fa-dishwasher", 
                "Vasca Idromassaggio": "fas fa-hot-tub",
                "Palestra": "fas fa-dumbbell",
                "Camino": "fas fa-fire"  
            }
        };
    },
    methods: {
        async handleSearch() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/search`, {
                    params: { query: this.searchTerm },
                });
                this.results = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
}
</script>

<template>
    <div class="container">
        <div class="input-group">
            <form @submit.prevent="handleSearch" class="search-form">
                <input class="form-control-sm search-input" type="text" v-model="searchTerm" placeholder="Cerca le case..." />
                <button class="search-btn btn ms-2" type="submit">Cerca</button>
            </form>
            <ul>
                <li v-for="house in results" :key="house.id">
                    {{ house.title }} - {{ house.address }}
                </li>
            </ul>
            
            <div class="mt-3">
                <div class="icon-list text-light">
                    <div v-for="(iconClass, service) in serviziCasa" :key="service" class="icon-item">
                        <i :class="iconClass"></i>
                        <span>{{ service }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.search-form {
    display: flex;
    width: 100%;
}

.search-input {
    flex-grow: 1;
    padding: 0.73rem 1rem;
    height: 45px;
    border: 0;
}

.search-btn {
    background-color: $color-light-green;
    height: 48px;
    margin-top: -2px;
}

.input-group {
    padding: 1.5rem;
    padding-bottom: 4rem;
    border-radius: 20px;
    margin-top: -210px;
    z-index: 2;
}

.icon-list {
    display: flex;
    
    padding: 1rem 0;
    gap: 2rem;
}

.icon-item {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    text-align: center;
}

.icon-item i {
    font-size: 2rem;
}

.icon-item span {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    white-space: nowrap;
}

.icon-list::-webkit-scrollbar {
    height: 8px;
}

.icon-list::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 4px;
}

.icon-list::-webkit-scrollbar-track {
    background: #f1f1f1;
}
</style>
