<script>
export default {
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
    methods: {
        selectApartment(index) {
            this.selectedIndex = index; // Aggiorna l'indice della card selezionata
        }
    }
}
</script>

<template>
    <div>
        <div class="wrapper">
            <div class="container">
                <div class="title">
                    <h3>Abbiamo selezionato questi alloggi per te</h3>
                </div>
                <div class="row">
                    <div 
                        v-for="(apartment, index) in apartments" 
                        :key="index" 
                        class="col-12 col-sm-4 col-md-2 col-lg-2" 
                    >
                        <div 
                            class="card" 
                            :class="{ selected: selectedIndex === index }" 
                            @click="selectApartment(index)"
                        >
                            <img :src="apartment.image" alt="house placeholder">
                            <div class="card-body">
                                <h5 class="card-text">{{ apartment.title }}</h5>
                                <p class="card-title">{{ apartment.city }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    background-color: antiquewhite;
    padding: 20px; 
}
.title {
    font-size: 30px;
    margin-bottom: 25px;
}
.card {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer; 
    transition: border-color 0.3s;
}
.card.selected {
    border-color: #b6b8b9; 
}
.card img {
    width: 100%;
    height: auto;
    margin-top: 5px;
}
.card-body {
    padding: 2px;
}
</style>
