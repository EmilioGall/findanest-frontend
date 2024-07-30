<template>
    <div class="text-center text-light py-4">
      <!-- Bootstrap Carousel -->
      <div id="servicesCarousel" class="carousel slide">
        <div class="carousel-inner">
          <!-- Genera le slide del carosello in base ai chunk dei servizi -->
          <div v-for="(chunk, index) in chunkedServices" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <div class="row g-2">
              <div
                v-for="service in chunk"
                :key="service.id"
                class="icon-item col-12 col-sm-4 col-md-4 col-lg-3"
                :class="{ activeFilter: store.selectedServices.includes(service.id) }"
                @click="toggleFilter(service.id)"
              >
                <i class="fs-3 pb-3" :class="service.icon"></i>
                
                <span
                  v-if="wordCount(service.service_name) === 1"
                  :id="`icon-text-${service.id}`"
                  class="icon-text"
                >
                  {{ service.service_name }}
                </span>
                
                <div
                  v-else
                  :id="`icon-text-${service.id}`"
                  class="d-flex flex-column align-items-center icon-text"
                >
                  <span>{{ service.service_name.split(' ')[0] }}</span>
                  <span>{{ service.service_name.split(' ')[1] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Controlli del carosello -->
        <button class="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { store } from "../store.js";
  import axios from 'axios';
  
  export default {
    data() {
      return {
        store,
        chunkSize: 6, // Numero di icone per slide
      };
    },
  
    computed: {
      // Divide i servizi in gruppi (chunk) di dimensioni specificate
      chunkedServices() {
        const services = this.store.servicesArray;
        const result = [];
        for (let i = 0; i < services.length; i += this.chunkSize) {
          result.push(services.slice(i, i + this.chunkSize));
        }
        return result;
      }
    },
  
    created() {
      this.getServices();
    },
  
    methods: {
      getServices() {
        axios.get("http://127.0.0.1:8000/api/services").then((resp) => {
          this.store.servicesArray = resp.data.result;
        }).catch(error => {
          console.error('Errore nella richiesta di tutti i servizi:', error);
        });
      },
  
      toggleFilter(serviceId) {
        if (this.store.selectedServices.includes(serviceId)) {
          this.store.selectedServices = this.store.selectedServices.filter(item => item !== serviceId);
        } else {
          this.store.selectedServices.push(serviceId);
        }
      },
  
      wordCount(str) {
        return str.split(' ').filter(function (n) { return n != '' }).length;
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  @use "../scss/partials/variables" as *;
  
  .icon-item {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: color 0.3s;
    text-align: center;
  }
  
  .icon-text {
    font-size: 0.8rem;
  }
  
  .icon-item:hover {
    color: $color-light-green;
  }
  
  .icon-item i {
    font-size: 2rem;
  }
  
  .activeFilter {
    color: $color-light-green;
  }
  
  /* Responsive adjustments */
  @media (max-width: 767.98px) {
    .icon-item {
      font-size: 1rem; /* Adjust based on your needs */
    }
  }
  
  /* Additional styling for carousel controls */
  .carousel-control-prev,
  .carousel-control-next {
    filter: invert(1);
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
   color: white;
    border-radius: 50%;
  }
  </style>
  