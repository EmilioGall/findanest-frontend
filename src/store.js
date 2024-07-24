import { reactive } from 'vue'

export const store = reactive({

    baseURL: 'http://127.0.0.1:8000',
    apiKey: 'oqhAPvi5e4AQAL3zAV2MAL0rP9SlonP0',
    searchTerm: "",
    results: [],
    servicesArray: [],
    selectedServices: [],
    
})