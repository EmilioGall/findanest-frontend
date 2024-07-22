<script>
export default {
    data() {
        return {
            searchTerm: "",
            results: [],
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
            }
        };
    },
    methods: {
        async handleSearch() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/search', {
                    params: { query: this.searchTerm },
                });
                this.results = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        toggleFilter(service) {
            if (this.selectedFilters.includes(service)) {
                this.selectedFilters = this.selectedFilters.filter(item => item !== service);
            } else {
                this.selectedFilters.push(service);
            }
        },
        searchAutocomplete() {
            const apiKey = 'oqhAPvi5e4AQAL3zAV2MAL0rP9SlonP0';
            const suggestionsList = document.getElementById('suggestions-list');
            const query = this.searchTerm;

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
                                this.searchTerm = suggestion.address.freeformAddress;
                                suggestionsList.innerHTML = '';
                            });
                            suggestionsList.appendChild(listItem);
                        });
                    })
            } else {
                suggestionsList.innerHTML = '';
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="input-group">
            <form @submit.prevent="handleSearch" class="search-form">
                <input class="form-control-sm search-input" type="text" v-model="searchTerm"
                    placeholder="Cerca le case (eg. Titolo, Città)..." @input="searchAutocomplete" />
                <button class="search-btn btn ms-2" type="submit">Cerca</button>
            </form>

            <!-- Debug for results -->
            <!-- <ul>
                <li v-for="house in results" :key="house.id">
                    {{ house.title }} - {{ house.address }}
                </li>
            </ul> -->

            <div id="suggestions-list" class="list-group mt-2"></div>

            <div class="mt-3">
                <div class="icon-list text-light">
                    <div v-for="(iconClass, service) in serviziCasa" :key="service"
                        :class="['icon-item', { activeFilter: selectedFilters.includes(service) }]"
                        @click="toggleFilter(service)">
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
