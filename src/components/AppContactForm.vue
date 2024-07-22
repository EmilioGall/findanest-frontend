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
            errors: {},
        };
    },
    methods: {
        async submitForm() {
            this.loading = true;
            this.success = false;
            this.errors = {};


            try {
                console.log('Dati inviati:', this.formData);

                const response = await axios.post('http://127.0.0.1:8000/api/leads', this.formData);
                this.loading = false;
                this.success = true;
                this.formData = {
                    name: "",
                    phone_number: "",
                    email: "",
                    message: "",
                    house_id: this.houseObj.id
                };
            } catch (error) {
                this.loading = false;
                if (error.response && error.response.data.errors) {
                    this.errors = error.response.data.errors;
                } else {
                    this.errors.general = 'Si è verificato un errore. Riprova più tardi.';
                    console.error('Errore nel submitForm:', error.response ? error.response.data : error);
                }
            }
        }
    }

}
</script>


<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-8">
            <h5 class="text-center my-4">Vuoi maggiori informazioni?</h5>
            <form @submit.prevent="submitForm">
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
                                    <div v-if="errors.name" class="text-danger">{{ errors.name[0] }}</div>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Indirizzo E-Mail *</label>
                                    <input type="email" class="form-control input-border" id="email"
                                        aria-describedby="emailHelp" v-model="formData.email">
                                    <div v-if="errors.email" class="text-danger">{{ errors.email[0] }}</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 p-3">
                                <div class="mb-3">
                                    <label for="phone_number" class="form-label">Telefono</label>
                                    <input type="text" class="form-control input-border" id="phone_number"
                                        aria-describedby="phoneHelp" v-model="formData.phone_number">
                                    <div v-if="errors.phone_number" class="text-danger">{{ errors.phone_number[0] }}
                                    </div>
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
                                    <div id="messageHelp" class="form-text">Scrivi qui la tua richiesta.</div>
                                    <div v-if="errors.message" class="text-danger">{{ errors.message[0] }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between">
                            <!-- Send btn -->
                            <button v-if="!loading" type="submit" class="btn btn-custom mb-3 mb-md-0">
                                <i class="fa-solid fa-paper-plane fa-beat-fade"></i><span class="ms-2">Invia</span>
                            </button>
                            <!-- Loading btn -->
                            <button v-if="loading" class="btn btn-custom" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                <span class="ms-2" role="status">Invio del messaggio in corso...</span>
                            </button>
                            <small class="align-self-end text-secondary">I campi contrassegnati con * sono
                                obbligatori.</small>
                        </div>
                        <div v-if="errors.general" class="text-danger">{{ errors.general }}</div>
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

.text-danger {
    font-size: 0.875rem;
    margin-top: 0.25rem;
    font-weight: bold;
}
</style>
