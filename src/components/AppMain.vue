<script>
// importazioni
import AppCard from '../components/AppCard.vue';
import axios from 'axios';
// fine importazioni

export default {
    components: {
        AppCard
    },

    data() {
        return {
            houses: [],
            sponsoredHouses: [],
            visibleHouses: [],
        };
    },

    created() {
        axios.get("http://127.0.0.1:8000/api/houses").then((resp) => {
            
            this.houses = resp.data.result;

            console.log('Response all houses:', this.houses);

            // Filtra appartamenti visibili
            this.visibleHouses = this.houses.filter(house => house.visible === 2);

            // Filtra tra gli visibili appartamenti sponsorizzati
            this.sponsoredHouses = this.visibleHouses.filter(house => house.sponsorships.length > 0);
            
            // Filtra tra gli visibili appartamenti non sponsorizzati
            this.houses = this.visibleHouses.filter(house => house.sponsorships.length <= 0);  //quando avremo la tabella ponte modifica

            // console.log('Sponsored houses:', this.sponsoredHouses);

            // console.log('houses:', this.houses);

        }).catch(error => {
            console.error('Errore nella richiesta:', error);
        });
    },
    
    methods: {
        navigateToSinglePage(slug) {
            this.$router.push({ name: 'singlepage', params: { slug } });
        }
        
    }
    
}
</script>

<template> 

    <main>

        <!-- container delle cards -->
        <section class="container pt-5" style="margin-top: 10px;">
    
            <!-- titolo e descrizione sezione -->
            <p class="mt-5">In Evidenza</p>
    
            <div class="d-flex">
    
                <h2>I nostri Alloggi più Popolari</h2>
    
            </div>
            <!-- fine titolo e descrizione -->
    
            <!-- formattazione delle card -->
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
    
                <div v-for="sponsoredHouse in sponsoredHouses" :key="sponsoredHouse.id" class="col">
                    
                    <!-- sezione dedicata alle cards -->
                    <AppCard :house="sponsoredHouse" @houseSelected="navigateToSinglePage" class="cardCustom"/>
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
    
                        <p class="text-light">Le nostre proposte</p>
    
                        <div class="d-flex">
                            <h2 class="customhome">I nostri Alloggi più recenti</h2>
                            <h6 class="ms-auto text-light">Scopri <span class="arrow-icon text-light">&rarr;</span></h6>
                        </div>
    
                        <!-- formattazione cards -->
    
                        <!-- formattazione delle card -->
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
    
                            <div v-for="house in houses" :key="house.id" class="col">
    
                                <!-- sezione dedicata alle cards -->
                                <AppCard :house="house" @houseSelected="navigateToSinglePage" class="cardCustom"/>
                                <!-- fine sezione dedicata alle cards -->
    
                            </div>
    
                        </div>
                        <!-- fine formattazione delle cards -->
    
                        <!-- fine formattazione cards -->
    
                    </section>
                    <!-- fine sezione delle card annunci non sponsorizzati -->
    
                    <!-- inizio colonna Fondatore -->
                    <div class="col-lg-4 mt-5">
    
                        <h2 style="color: #b5b5b5;">Team #7</h2>
    
                        <p style="color: #b5b5b5;">Powered by Boolean</p>
    
                    </div>
                    <!-- fine colonna Fondatore -->
    
                    <!-- inizio colonna quotazione -->
                    <div class="col-lg-8 mb-5 mt-5">
    
                        <h6 class="lh-lg" style="color: #b5b5b5;">
                            &ldquo; Benvenuti su Find Nest, il sito numero uno per soggiorni unici. Offriamo una vasta gamma di alloggi selezionati con cura, garantendo comfort, stile e benessere per ogni tipo di viaggiatore. Scopri i vantaggi di prenotare con noi e trasforma il tuo prossimo viaggio in un'esperienza indimenticabile!
                            &rdquo;
                        </h6>
    
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

    </main>


</template>



<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.cardCustom{
    cursor: pointer;
}

.arrow-icon {
    font-size: 28px;
    font-weight: 800;
}

.customhome {
    color: $color-light-green;
}

main {
    background-color: $color-light-grey;
}

</style>



