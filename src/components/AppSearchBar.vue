<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
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
                    })
            } else {
                suggestionsList.innerHTML = '';
            }
        },

    }
}
</script>

<template>

    <!-- SEARCHBAR -->
    <form @submit.prevent="handleSearch" class="search-form">
        <input class="form-control-sm search-input" type="text" v-model="store.searchTerm"
            placeholder="Cerca le case (eg. Titolo, Città)..." @input="searchAutocomplete" />
        <button class="search-btn btn ms-2" type="submit">Cerca</button>
    </form>

    <!-- LISTA SUGGERIMENTI -->
    <div id="suggestions-list" class="list-group mt-2"></div>

</template>

<style lang="scss" scoped>
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
</style>
