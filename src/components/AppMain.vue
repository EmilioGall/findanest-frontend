<script>
// importazioni
import AppCard from '../components/AppCard.vue'
import AppAnnunci from './AppAnnunci.vue';
import axios from 'axios';
// fine importazioni

export default {
    components: {
        AppCard,
        AppAnnunci
    },

    data() {
        return {
            homes: [],
        };
    },
    created() {
        axios.get("http://127.0.0.1:8000/api/houses").then((resp) => {
            this.homes = resp.data.result;
            console.log(this.homes);
        });
    },
}
</script>

<template>
    <!-- container delle cards -->
    <section class="container" style="margin-top: 10px;">
        <!-- titolo e descrizione sezione -->
        <p class="pt-5">In Evidenza</p>
        <div class="d-flex">
            <h2>I nostri Alloggi piu Popolari</h2>
            <h6 class="ms-auto">Scopri <span class="arrow-icon">&rarr;</span></h6>
        </div>
        <!-- fine titolo e descrizione -->

        <!-- formattazione delle card -->
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
            <div v-for="house in homes" :key="house.id" class="col">
                <!-- sezione dedicata alle cards -->
                <AppCard :house="house" />
                <!-- fine sezione dedicata alle cards -->
            </div>
        </div>
        <!-- fine formattazione delle cards -->
    </section>
    <!-- fine container delle cards -->

    <!-- background grigio e logo -->
    <section class="bg-dark" style="margin-top: -15%;">
        <!-- contenitore  -->
        <div class="container pt-5">
            <!-- riga del fondatore e della suo frase -->
            <div class="row" style="margin-top: 25%;">
                <!-- sezione delle card annunci non sponsorizzati-->
                <section class="container cardsnormal">
                    <p class="pt-5 text-light">Le nostre proproste</p>
                    <div class="d-flex">
                        <h2 class="customhome">I nostri Alloggi piu recenti</h2>
                        <h6 class="ms-auto text-light">Scopri <span class="arrow-icon text-light">&rarr;</span></h6>
                    </div>

                    <!-- formattazione cards -->
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
                        <!-- card degli annunci non sponsorizzati -->
                        <AppAnnunci />
                        <!-- fine card degli annunci non sponsorizzati -->
                    </div>
                    <!-- fine formattazione cards -->
                </section>
                <!-- fine sezione delle card annunci non sponsorizzati -->

                <!-- inizio colonna Fondatore -->
                <div class="col-lg-4 mt-5">
                    <h2 style="color: #b5b5b5;">Elon Musk</h2>
                    <p style="color: #b5b5b5;">Fondatore Find-A-Nest</p>
                </div>
                <!-- fine colonna Fondatore -->

                <!-- inizio colonna quotazione -->
                <div class="col-lg-8 mb-5 mt-5">
                    <h6 class="lh-lg" style="color: #b5b5b5;">&ldquo; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad, consectetur perspiciatis recusandae quidem iure quia itaque obcaecati minima error quae quaerat ab atque libero est! Eum temporibus dicta voluptatem? &rdquo;</h6>
                </div>
                <!-- fine colonna quotazione -->
            </div>
            <!-- fine riga del fondatore e della suo frase -->

            <hr class="text-light">

            <!-- Loghi -->
            <div class="container mt-5 pb-5">
                <div class="row text-center">
                    <div class="col-md-3 col-sm-6">
                        <img src="/src/real estate/logo1.png" alt="" style="width: 55%;">
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <img src="/src/real estate/logo2.png" alt="" style="width: 55%;">
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <img src="/src/real estate/logo3.png" alt="" style="width: 55%;">
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <img src="/src/real estate/logo4.png" alt="" style="width: 55%;">
                    </div>
                </div>
            </div>
            <!-- fine loghi -->
        </div>
        <!-- fine contenitore  -->
    </section>
    <!-- fine background grigio e logo -->
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.arrow-icon {
    font-size: 28px;
    font-weight: 800;
}

.customhome {
    color: $color-light-green;
}
</style>
