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

    created() {

        // console.error('house img', this.house.image);

    },

    methods: {
        navigateToSinglePage() {
            this.$emit('houseSelected', this.house.slug);
        }
    }
}
</script>


<template>

    <!-- colonna della card -->
    <div class="col h-100" @click="navigateToSinglePage">

        <div class="card h-100 border-0 rounded-0 card-3d">

            <img :src="house.image.substring(0, 8) == 'https://'
                ? house.image : `${imageBaseUrl}/${house.image}`" class="card-img-top rounded-0"
                :alt="house.title">

            <!-- corpo della card -->
            <div class="card-body">
                <!-- testo della card -->
                <h5 class="cardtext">{{ house.title }}</h5>
                <p class="cardtext text-muted">{{ house.address }}</p>

                <!-- caratteristice della card -->
                <div class="d-flex justify-content-center mt-3">
                    <p class="mx-4 text-muted card-text"><i class="fa fa-bed"></i> {{ house.beds }} letti</p>
                    <p class="mx-4 text-muted card-text"><i class="fa-solid fa-ruler-combined"></i> {{ house.sqm }} mq
                    </p>
                </div>

                <!-- bottone della card -->
                <div class="d-flex my-2">
                    <button @click="navigateToSinglePage" class="btn btn-lg px-4 rounded custom-color">Dettagli</button>
                    <h5 class="my-auto ms-auto">{{ Math.floor(house.price) }} €/notte</h5>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.card {
    cursor: pointer;

    img {
        max-height: 200px;
    }
}

button {
    border: 3px solid $color-light-green;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
    background-color: $color-light-green;
    transform: scale(1.1);
}

.card-3d {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.card-3d:hover {
    transform: scale(1.05) translateZ(10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1);
}

</style>
