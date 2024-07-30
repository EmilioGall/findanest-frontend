<script>
export default {

}
</script>

<template>
    <!-- Footer -->
    <footer class="bg-dark bg-footer">
        <div class="container">
            <div class="row">

                <div class="col-lg-6">
                    <h5 class="text-light">Contatti</h5>
                    <p class="text-light">Il mondo è la tua casa, noi creiamo la porta.</p>
                    <p class="text-light"><i class="fa fa-location"></i> Milano</p>
                    <p class="text-light"><i class="fa fa-phone"></i> (+39) 351 8545656</p>
                    <p class="text-light"><i class="fa fa-envelope"></i> info@findnest.com </p>
                </div>

                <div class="col-lg-3">
                    <h5 class="text-light">Link Veloci</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li><a href="/ricerca">Ricerca</a></li>
                        <li><a href="/chi-siamo">Chi siamo</a></li>
                        <li><a href="http://127.0.0.1:8000">Pubblica il tuo annuncio</a></li>
                    </ul>
                </div>

                <div class="col-lg-3">
                    <h5 class="text-light">I nostri social</h5>
                    <ul class="list-unstyled">
                        <li><a href="#"><i class="fab fa-facebook"></i> Faceboook</a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i> Linedin</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                    </ul>
                </div>

            </div>

            <hr>

            <div class="row">
                <div class="col-lg-12">
                    <p class="text-center text-light">
                        Copyright &copy; 2024 <a href="https://boolean.co.uk/"> FindNest </a>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>

</template>

<style scoped lang="scss">
.bg-footer {
    background-color: #000;
    padding: 50px 0 30px;
}

.bg-footer a {
    text-decoration: none;
    color: #aeaeae;
}
</style>