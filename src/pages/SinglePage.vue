<script>
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';
import AppContactForm from '../components/AppContactForm.vue';

export default {
  components: {
	AppContactForm
  },
  data() {
	return {
	  house: null,
	  imageBaseUrl: 'http://127.0.0.1:8000/storage'
	};
  },
  created() {
	const slug = this.$route.params.slug;
	axios.get(`http://127.0.0.1:8000/api/houses/${slug}`)
	  .then((resp) => {
		this.house = resp.data.result;
		console.log(resp);
		this.$nextTick(() => {
		  this.initMap();
		});
	  })
	  .catch(error => {
		console.error('Errore nella richiesta:', error);
	  });
  },
  methods: {
	initMap() {
	  const longitude = this.house ? this.house.longitude : -74.0060;
	  const latitude = this.house ? this.house.latitude : 40.7128;
	  
	  const map = tt.map({
		key: 'oqhAPvi5e4AQAL3zAV2MAL0rP9SlonP0',
		container: this.$refs.map,
		center: [longitude, latitude],
		zoom: 15
	  });
	  
	  new tt.Marker().setLngLat([longitude, latitude]).addTo(map);
	}
  }
};
</script>

<template>
  <section class="py-5">
	<div v-if="house" class="container">
	  <div class="row justify-content-center text-center mb-2 mb-lg-4">
		<div class="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
		  <span class="text-muted">Showcase</span>
		  <h2 class="display-5 fw-bold">{{ house.title }}</h2>
		  <p class="lead">{{ house.description }}</p>
		</div>
	  </div>
	  <div class="row py-3 align-items-center">
		<div class="col-md-6 mt-md-0 mt-4">
		  <div class="mb-5 mb-lg-3">
			<img :src="house.image
			  ? `${imageBaseUrl}/${house.image}`
			  : `https://placehold.co/500x300?text=immagine+non+disponibile`" class="card-img-top rounded-0"
			  :alt="house.title">
		  </div>
		</div>
		<div class="col-md-6 ps-md-5">
		  <div class="mb-5 mb-lg-3">
			<h4>{{ house.title }}</h4>
			<p>{{ house.description }}</p>
			<p><strong>Prezzo:</strong> €{{ house.price }}</p>
			<p><strong>Indirizzo:</strong> {{ house.address }}</p>
			<p><strong>Stanze:</strong> {{ house.rooms }}</p>
			<p><strong>Letti:</strong> {{ house.beds }}</p>
			<p><strong>Bagni:</strong> {{ house.bathrooms }}</p>
			<p><strong>Area:</strong> {{ house.sqm }} m2</p>
			<a class="btn btn-lg btn-primary" href="#">Visualizza La Galleria</a>
		  </div>
		</div>
	  </div>
	  <div class="row py-3 align-items-center">
		<div class="col-12">
		  <div ref="map" class="map"></div>
		</div>
	  </div>
	</div>
	<div v-else class="text-center">
	  <p>Loading...</p>
	</div>
  </section>
  <AppContactForm />
</template>

<style scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>
