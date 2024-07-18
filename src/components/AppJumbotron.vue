<script>
export default {
    data() {
        return {

        }
    },

}

</script>

<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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

            <!-- terzo carosello -->
            <div class="carousel-item">
                <img class="d-block w-100-height" src="/src/real estate/home8.jpg" alt="image3">

                <!-- caption del carosello -->
                <div class="carousel-caption carousel1">
                    <p>3 / 3</p>
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

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>

        <div class="col-md-4" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
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
</style>
