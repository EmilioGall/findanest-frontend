import { reactive } from 'vue'

export const store = reactive({

    baseURL: 'http://127.0.0.1:8000',
    apiKey: 'oqhAPvi5e4AQAL3zAV2MAL0rP9SlonP0',
    results: [],
    servicesArray: [],
    selectedServices: [],
    formData: { 
        text: '',
        rooms: 0,
        bathrooms: 0,
        beds: 0,
        sqm: 0,
        distance: 0,
        price: 0,
        services: [],
    },
})