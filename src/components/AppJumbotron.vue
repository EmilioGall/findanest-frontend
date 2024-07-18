<script>
export default {
    data() {
        return {

        }
    },

}

</script>

<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">

            <!-- primo carosello -->
            <div class="carousel-item active">
                <img class="d-block w-100-height" src="/src/real estate/home6.jpg" alt="image1">

                <!-- caption del carosello -->
                <div class="carousel-caption carousel1">
                    <p>1 / 3</p>
                    <h5>Scopri la proprietà<br>Piu Facilmente</h5>
                    <div class="mt-5 d-flex">
                        <input type="text" class="form-control search w-50 rounded-0" id="floatingInput"
                            placeholder="Cerca...">
                        <button class="btn btn-light btn-sm justify-content-md-end mx-2 px-3 rounded-0">
                            <i class="fas fa-search"></i> Cerca
                        </button>
                    </div>
                </div>
            </div>

            <!-- secondo carosello -->
            <div class="carousel-item">
                <img class="d-block w-100-height" src="/src/real estate/home7.jpg" alt="image2">

                <!-- caption del carosello -->
                <div class="carousel-caption carousel1">
                    <p>2 / 3</p>
                    <h5>Pubblica il tuo annuncio<br>Piu Facilmente</h5>
                    <p><a href="#" class="btn btn-light btn-lg mt-3 rounded-0">Scopri di Piu</a></p>
                </div>
            </div>

            <!-- terzo carosello -->
            <div class="carousel-item">
                <img class="d-block w-100-height" src="/src/real estate/home8.jpg" alt="image3">

                <!-- caption del carosello -->
                <div class="carousel-caption carousel1">
                    <p>3 / 3</p>
                    <h5>Scopri la proprietà<br>Piu Facilmente</h5>
                    <p><a href="#" class="btn btn-light btn-lg mt-3 rounded-0">Scopri di Piu</a></p>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="icon">&larr;</span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="icon">&rarr;</span>
            <span class="visually-hidden">Next</span>
        </button>


        <!-- card -->
        <div class="col-md-4 z-1 psoition-absolute card-bottom card mb-3 card-color rounded-0" style="background: #000;" >
            <div class="row align-items-center">

                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title text-light">Card title</h5>
                        <p class="card-text text-light">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-white">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="col-md-3">
                    <img src="/src/real estate/project-3.jpg" class="img-fluid rounded-start" alt="card-img">
                </div>
            </div>
        </div>

    </div>


</template>

<style scoped lang="scss">
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

.carousel-item .carousel-caption input {
    padding: 0.73rem 1rem;
}

//aggiunge il filtro scuro al background
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

//card presentazione
.card-bottom{
    right: 0;
    margin-top: -178px;
    border-radius: 0;
}
.card-text{
    color: #aeaeae;
}
.card-color{
    background: #000;
    border-radius: 0;
}
//icone di navigazione carosello
.icon{
    font-size: 40px;
    font-weight: 700;
    background: transparent;
    border: 1px solid #ffffff74;
    width: 80px;
    height: 80px;
    line-height: 1.8;
    border-radius: 50%;
}

@media only screen and (max-width: 767px){
    .navbar-nav{
        text-align: center;
    }
    .carousel-caption h5{
        font-size: 30px;
        letter-spacing: 0;
        line-height: normal;
    }
    .carousel-caption p {
        padding: 10px 15px;
        font-size: 15px;
    }
    .carousel .card-bottom{
        display: none;
    }
}
</style>
