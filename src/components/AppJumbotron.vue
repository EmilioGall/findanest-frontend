<script>
export default{
    data() {
        return {
            
        }
    },
}
</script>
<template>
    <div class="wrapper ">
        <div class="container">
            <div class="title col-6 col-md-12 d-flex justify-content-start ">
                <h1 >Trova ora l'alloggio dei tuoi sogni</h1>
            </div>
            <form action="">

                <div class="input col-12 d-flex justify-content-center align-items-center">
                    <input id="searchbar" type="text " placeholder="inserisci la zona">
                    <span>
                        <button class="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </span>
                </div>       

            </form>

        </div>
    </div>
</template>
<style>
.wrapper{
    background-color: aliceblue;
    height: 60vh;
    padding-top: 10vh;
}
.input{
    height: 20vh;
    margin-top: 10vh;
}
#searchbar{
    height: 30px;
    width: 60%;
    border-radius: 5px;
    border: 0.5px solid rgb(220, 211, 211);
}
.search{
    margin-left: -30px;
    border: 0;
    background-color: transparent;
}
</style>