<script>
export default {

}
</script>

<template>
            <!-- colonna della card -->
            <div class="col">
                <div class="card border-0 rounded-0">   <!--Bordi della colonna-->
                    <img src="/src/real estate/home1.jpg" class="card-img-top rounded-0" alt="img1">
                    <!-- corpo della card -->
                    <div class="card-body">
                        <!-- testo della card -->
                        <p class="cardtext text-muted">Trento, Italia</p>

                        <!-- caratteristice della card -->
                        <div class="d-flex justify-content-center mt-3">
                            <p class="mx-4 text-muted card-text"><i class="fa fa-bed"></i> 3 letti</p>
                            <p class="mx-4 text-muted card-text"><i class="fa-solid fa-person-shelter"></i> 8 * 8</p>
                            <p class="mx-4 text-muted card-text"><i class="fa-solid fa-ruler-combined"></i> 2000 mq</p>
                        </div>

                        <!-- bottone della card -->
                        <div class="d-flex my-2">
                            <button class="btn btn-lg px-4 rounded custom-color">Prenota ora</button>
                            <h5 class="my-auto ms-auto">$20,13,048</h5>
                        </div>
                    </div>
                </div>
            </div>
            <!-- seconda casa -->
            <!-- <div class="col">
                <div class="card border-0 rounded-0">
                    <img src="/src/real estate/home2.jpg" class="card-img-top rounded-0" alt="img1">
                    <div class="card-body">
                        <p class="cardtext text-muted">Trento, Italia</p>

                        <div class="d-flex justify-content-center mt-3">
                            <p class="mx-4 text-muted card-text"><i class="fa fa-bed"></i> 3 letti</p>
                            <p class="mx-4 text-muted card-text"><i class="fa-solid fa-person-shelter"></i> 8 * 8</p>
                            <p class="mx-4 text-muted card-text"><i class="fa-solid fa-ruler-combined"></i> 2000 mq</p>
                        </div>

                        <div class="d-flex my-2">
                            <button class="btn btn-lg text-white bg-dark px-4 rounded">Prenota ora</button>
                            <h5 class="my-auto ms-auto">$20,13,048</h5>
                        </div>
                    </div>
                </div>
            </div> -->

            <!-- terza casa -->
            <!-- <div class="col">
                <div class="card border-0 rounded-0">
                    <img src="/src/real estate/home3.jpg" class="card-img-top rounded-0" alt="img1">
                    <div class="card-body">
                        <p class="cardtext text-muted">Trento, Italia</p>

                        <div class="d-flex justify-content-center mt-3">
                            <p class="mx-4 text-muted card-text"><i class="fa fa-bed"></i> 3 letti</p>
                            <p class="mx-4 text-muted card-text"><i class="fa-solid fa-person-shelter"></i> 8 * 8</p>
                            <p class="mx-4 text-muted card-text"><i class="fa-solid fa-ruler-combined"></i> 2000 mq</p>
                        </div>

                        <div class="d-flex my-2">
                            <button class="btn btn-lg text-white bg-dark px-4 rounded">Prenota ora</button>
                            <h5 class="my-auto ms-auto">$20,13,048</h5>
                        </div>
                    </div>
                </div>
            </div> -->

            

</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;
button{
    border: 3px solid $color-light-green;
    transition: background-color 0.3s ease, transform 0.3s ease;
}
button:hover{
    background-color: $color-light-green;
    transform: scale(1.1);
}
</style>