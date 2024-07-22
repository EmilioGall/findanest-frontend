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
            this.loading = true;

            axios.post('http://127.0.0.1:8000/api/leads', {
                ...this.formData,
                house_id: this.houseObj.id
            })
                .then((resp) => {
                    this.loading = false;
                    if (resp.data.success) {
                        this.success = true;
                    }
                })
                .catch(error => {
                    this.loading = false;
                    console.error('Errore nell\'invio del modulo:', error);
                });
        },
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <h5 class="text-center my-4">Vuoi maggiori informazioni?</h5>
                <div class="card card-border">
                    <!-- Success message -->
                    <div v-if="success" class="success-overlay d-flex flex-column">
                        <i class="fa-regular fa-circle-check"></i>
                        <p class="success-message pt-5 fs-3 fw-bold">Il messaggio è stato inviato con successo!</p>
                    </div>
                    
                    <div class="card-body">
                        <form @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-12 col-md-6 mb-3">
                                    <label for="name" class="form-label">Nome</label>
                                    <input type="text" class="form-control input-border" id="name" v-model="formData.name" required>
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label for="email" class="form-label">Indirizzo E-Mail *</label>
                                    <input type="email" class="form-control input-border" id="email" v-model="formData.email" required>
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label for="phone_number" class="form-label">Telefono</label>
                                    <input type="text" class="form-control input-border" id="phone_number" v-model="formData.phone_number">
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label class="form-label">Stai richiedendo informazioni per:</label>
                                    <p class="form-control bg-light">{{ houseObj.title }}</p>
                                </div>
                                <div class="col-12 mb-3">
                                    <label for="message" class="form-label">Messaggio *</label>
                                    <textarea class="form-control input-border" id="message" v-model="formData.message" required></textarea>
                                    <div id="messageHelp" class="form-text">Scrivi qui la tua richiesta.</div>
                                </div>
                            </div>
                            <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                                <!-- Send btn -->
                                <button v-if="!loading" type="submit" class="btn btn-custom mb-2 mb-sm-0">
                                    <i class="fa-solid fa-paper-plane fa-beat-fade"></i><span class="ms-2">Invia</span>
                                </button>
                                <!-- Loading btn -->
                                <button v-if="loading" class="btn btn-custom" type="button">
                                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                    <span class="ms-2" role="status">Invio del messaggio in corso...</span>
                                </button>
                            </div>
                            <small class="d-block text-center text-secondary mt-2">I campi contrassegnati con * sono obbligatori.</small>
                        </form>
                    </div>
                </div>
            </div>
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
    color: white;
    border: none;
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
    text-align: center;

    i {
        font-size: 5rem;
    }
}

.success-message {
    font-size: 1.25rem;
}
</style>
