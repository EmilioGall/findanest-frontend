<script>
import axios from 'axios';

export default {
    props: {
        houseObj: {
            type: Object,
            default: () => ({ title: 'Nome Annuncio', id: 3 })
        }
    },
    data() {
        return {
            formData: {
                name: "",
                phone_number: "",
                email: "",
                message: "",
                house_id: this.houseObj.id
            },
            loading: false,
            success: false,
        };
    },
    methods: {
        submitForm() {
            // console.log('prova invio');
            this.loading = true;

            axios.post('http://127.0.0.1:8000/api/leads', {
                ...this.formData,
                house_id: this.houseObj.id
            })
                .then((resp) => {
                    // console.log(resp);
                    this.loading = false;
                    if (resp.data.success) {
                        this.success = true;
                    }
                })
        },
    }
}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-8">
            <h5 class="text-center my-4">Vuoi maggiori informazioni?</h5>
            <form>
                <div class="card card-border">
                    <!-- Success message -->
                    <div v-if="success" class="success-overlay d-flex flex-column">
                        <i class="fa-regular fa-circle-check"></i>
                        <p class="success-message pt-5 fs-3 fw-bold">Il messaggio è stato inviato con successo!</p>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-6 p-3">
                                <div class="mb-3">
                                    <label for="name" class="form-label">Nome</label>
                                    <input type="text" class="form-control input-border" id="name"
                                        aria-describedby="nameHelp" v-model="formData.name">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Indirizzo E-Mail *</label>
                                    <input type="email" class="form-control input-border" id="email"
                                        aria-describedby="emailHelp" v-model="formData.email">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 p-3">
                                <div class="mb-3">
                                    <label for="phone_number" class="form-label">Telefono</label>
                                    <input type="text" class="form-control input-border" id="phone_number"
                                        aria-describedby="phoneHelp" v-model="formData.phone_number">
                                </div>
                                <div class="mb-3">
                                    <span class="text-secondary form-label">Stai richiedendo informazioni
                                        per:</span>
                                    <p class="mt-2 text-secondary form-control bg-light">{{ houseObj.title }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 pb-3 px-3">
                                <div class="mb-3">
                                    <label for="message" class="form-label">Messaggio *</label>
                                    <textarea class="form-control input-border" id="message"
                                        v-model="formData.message"></textarea>
                                    <div id="messageHelp" class="form-text ">Scrivi qui la tua richiesta.</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between">
                            <!-- Send btn -->
                            <button v-if="!loading" @click.prevent="submitForm" type="submit"
                                class="btn btn-custom mb-3 mb-md-0">
                                <i class="fa-solid fa-paper-plane fa-beat-fade"></i><span class="ms-2">Invia</span>
                            </button>
                            <!-- Loading btn -->
                            <button v-if="loading" class="btn btn-custom" type="button">
                                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span class="ms-2" role="status">Invio del messaggio in corso...</span>
                            </button>
                            <small class="align-self-end text-secondary">I campi contrassegnati con * sono
                                obbligatori.</small>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.card-border,
.input-border {
    border-color: $color-light-green;
}

.btn-custom {
    background-color: $color-light-green;
}

.success-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color-light-green, 0.8);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    i {
        font-size: 9rem;
    }
}

.success-message {
    font-size: 1.25rem;
    text-align: center;
}
</style>
