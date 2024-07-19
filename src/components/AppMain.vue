<script>
import AppCard from '../components/AppCard.vue'
import AppAnnunci from './AppAnnunci.vue';
export default {
    components: {

        AppCard,
        AppAnnunci

    },

    data() {
        return {
            apartments: [
                { city: 'Milano', title: 'Loft moderno a Milano', image: 'https://via.placeholder.com/150/0000FF/808080' },
                { city: 'Torino', title: 'Appartamento accogliente a Torino', image: 'https://via.placeholder.com/150/FF0000/FFFFFF' },
                { city: 'Roma', title: 'Ampio appartamento a Roma', image: 'https://via.placeholder.com/150/FFFF00/000000' },
                { city: 'Tione', title: 'Monolocale affascinante a Tione', image: 'https://via.placeholder.com/150/00FF00/000000' },
                { city: 'Trento', title: 'Condominio di lusso a Trento', image: 'https://via.placeholder.com/150/FF0000/FFFFFF' },
                { city: 'Trento', title: 'Condominio di lusso a Trento', image: 'https://via.placeholder.com/150/FF00FF/GGGGGG' }
            ],
            selectedIndex: null // Indice della card selezionata
        }
    },

}
</script>

<template>

    <AppCard />

    <!-- background grigio e logo -->
    <section class="bg-dark" style="margin-top: -15%;">
        <div class="container pt-5">
            <div class="row" style="margin-top: 25%;">

                <!-- cards -->
                <section class="container cardsnormal">
                    <p class="pt-5 text-light">Le nostre proproste</p>
                    <div class="d-flex">
                        <h2 class="customhome">I nostri Alloggi piu recenti</h2>
                        <h6 class="ms-auto text-light">Scopri <span class="arrow-icon text-light">&rarr;</span></h6>
                    </div>

                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
                        <AppAnnunci/>
                

 

                    </div>
                </section>
                

                <div class="col-lg-4 mt-5">
                    <h2 style="color: #b5b5b5;">Elon Musk</h2>
                    <p style="color: #b5b5b5;">Fondatore Find-A-Nest</p>
                </div>
                <div class="col-lg-8 mb-5 mt-5">
                    <h6 class="lh-lg" style="color: #b5b5b5;">&ldquo; Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit.
                        Repudiandae ad, consectetur perspiciatis recusandae quidem iure quia itaque obcaecati minima
                        error quae
                        quaerat ab atque libero est! Eum temporibus dicta voluptatem? &rdquo;</h6>
                </div>
            </div>

            <hr class="text-light">

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
        </div>

    </section>








</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;
.arrow-icon {
    font-size: 28px;
    font-weight: 800;
}
.customhome{
   color: $color-light-green;
}
</style>
