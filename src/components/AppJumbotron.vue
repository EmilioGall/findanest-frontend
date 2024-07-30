<script>
import axios from "axios";

export default {

};
</script>

<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <!-- <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></li>
        </ol> -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100-height" src="/src/real estate/home6.jpg" alt="image1" />
                <div class="carousel-caption carousel1">
                    <p class="d-none d-md-block">1 / 3</p>
                    <h5>La tua vacanza<br /><span class="easyCap">A tutto Relax</span></h5>
                    <br>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100-height" src="/src/real estate/home7.jpg" alt="image2" />
                <div class="carousel-caption carousel1">
                    <p class="d-none d-md-block">2 / 3</p>
                    <h5>Pubblica il tuo annuncio<br /><span class="easyCap">Più Facilmente</span></h5>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100-height" src="/src/real estate/home8.jpg" alt="image3" />
                <div class="carousel-caption carousel1">
                    <p class="d-none d-md-block">3 / 3</p>
                    <h5>Scopri la proprietà<br /><span class="easyCap">Più Facilmente</span></h5>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.easyCap {
    color: $color-light-green;
}


.w-100-height {
    height: 90vh;
    width: 100%;
}

.carousel-item {
    min-height: 300px;
}

.carousel-caption {
    text-align: left;
    margin-bottom: 200px;
    z-index: 2;
}

.carousel-caption h5 {
    font-size: 60px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    line-height: 60px;
    text-align: left;
}

.carousel-caption p {
    width: 60%;
    font-size: 16px;
    line-height: 1.9;
    text-align: left;
}


.carousel-inner::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

@media only screen and (max-width: 767px) {
    .carousel-caption h5 {
        font-size: 30px;
        letter-spacing: 0;
        line-height: normal;
    }

    .carousel-caption p {
        padding: 10px 15px;
        font-size: 15px;
    }
}
</style>
