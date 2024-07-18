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

}
</script>

<template>
    <section class="container" style="margin-top: 100px;" >

        <p class="pt-5">In Evidenza</p>
        <div class="d-flex">
            <h2>I nostri Alloggi piu Popolari</h2>
            <h6 class="ms-auto">Scopri <span class="arrow-icon">&rarr;</span></h6>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-md-3 g-4 mt-2">
            <div class="col">
                <div class="card border-0 rounded-0">
                    <img src="/src/real estate/home1.jpg" class="card-img-top rounded-0" alt="img1">
                    <div class="card-body">
                        <p class="cardtext text-muted">Trento, Italia</p>

                        <div class="d-flex justify-content-center mt-3">
                            <p class="mx-4 text-muted card-text"><i class="fa fa-car"></i> letti</p>
                            <p class="mx-4 text-muted card-text"><i class="fa fa-play"></i> 8 * 8</p>
                            <p class="mx-4 text-muted card-text"><i class="fa fa-compass"></i> 2000 m2</p>
                        </div>

                        <div class="d-flex my-2">
                            <button class="btn btn-lg text-white bg-dark px-4 rounded-0">Prenota ora</button>
                            <h5 class="my-auto ms-auto">$20,13,048</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
    .arrow-icon{
        font-size: 28px;
        font-weight: 800;
    }
</style>
