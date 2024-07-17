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
        <div class="carousel-inner">
           
            <div class="carousel-item active">
                <img class="d-block w-100-height" src="/src/real estate/home6.jpg" alt="image1">                
                <div class="carousel-caption carousel1">                    
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
