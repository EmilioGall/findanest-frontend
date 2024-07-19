<script>
export default {
    props: {
        house: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
             imageBaseUrl: 'http://127.0.0.1:8000/storage'
        }
    },
}
</script>

<template>
    <!-- colonna della card -->
    <div class="col">
        <div class="card border-0 rounded-0">
            <img 
            :src="house.image
            ? `${imageBaseUrl}/${house.image}`
            :`https://placehold.co/500x300?text=immagine+non+disponibile`" 
            class="card-img-top rounded-0" 
            :alt="house.title">
            <!-- corpo della card -->
            <div class="card-body">
                <!-- testo della card -->
                <h5 class="cardtext">{{ house.title }}</h5>
                <p class="cardtext text-muted">{{ house.address }}</p>

                <!-- caratteristice della card -->
                <div class="d-flex justify-content-center mt-3">
                    <p class="mx-4 text-muted card-text"><i class="fa fa-bed"></i> {{ house.beds }} letti</p>
                    <p class="mx-4 text-muted card-text"><i class="fa-solid fa-ruler-combined"></i> {{ house.sqm }} mq</p>
                </div>

                <!-- bottone della card -->
                <div class="d-flex my-2">
                    <button class="btn btn-lg px-4 rounded custom-color">Prenota ora</button>
                    <h5 class="my-auto ms-auto">€ {{ house.price }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

button {
    border: 3px solid $color-light-green;
    transition: background-color 0.3s ease, transform 0.3s ease;
}
button:hover {
    background-color: $color-light-green;
    transform: scale(1.1);
}
</style>
