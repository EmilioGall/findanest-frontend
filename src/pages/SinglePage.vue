<script>
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';
import AppContactForm from '../components/AppContactForm.vue';
import { store } from "../store.js";

export default {
	components: {
		AppContactForm
	},

	data() {
		return {
			house: null,
			store,
			imageBaseUrl: 'http://127.0.0.1:8000/images/house_images/',
		};
	},

	created() {
		const slug = this.$route.params.slug;

		axios.get(`http://127.0.0.1:8000/api/houses/${slug}`)
			.then((resp) => {
				this.house = resp.data.result;
				console.log(this.house);
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

			map.addControl(new tt.FullscreenControl());
			map.addControl(new tt.NavigationControl());

			new tt.Marker().setLngLat([longitude, latitude]).addTo(map);
		}
	}
};
</script>

<template>
	<!-- House Details Section -->
	<div v-if="house" class="container py-4">
		<div class="row justify-content-center text-center mb-2 mb-lg-4">
			<div class="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
				<h2 class="display-5 fw-bold">{{ house.title }}</h2>
			</div>
		</div>

		<div class="row py-3 align-items-center">
			<div class="col-md-6 mt-md-0 mt-4">
				<div class="mb-5 mb-lg-3">
					<img :src="house.image.substring(0, 13) == 'house_images/' ? `${store.baseURL}/storage/${house.image}` : `${imageBaseUrl}/${house.image}`"
						class="card-img-top rounded-0" :alt="house.title">
				</div>
			</div>

			<div class="col-md-6 ps-md-5">
				<div class="mb-5 mb-lg-3">
					<h4>{{ house.title }}</h4>
					<p>{{ house.description }}</p>
					<p><strong>Prezzo:</strong> €{{ Math.floor(house.price) }} /notte</p>
					<p><strong>Indirizzo:</strong> {{ house.address }}</p>
					<p><strong>Stanze:</strong> {{ house.rooms }}</p>
					<p><strong>Letti:</strong> {{ house.beds }}</p>
					<p><strong>Bagni:</strong> {{ house.bathrooms }}</p>
					<p><strong>Area:</strong> {{ house.sqm }} m2</p>
					<div v-for="service in house.services" class="me-2 d-inline-block">
						<i class="me-2" :class="service.icon"></i>
						<span class="me-2">{{ service.service_name }}</span>
					</div>
				</div>
			</div>



		</div>

		<!-- Location Map -->
		<div class="row py-3 align-items-center">
			<div class="col-12">
				<div ref="map" class="map"></div>
			</div>
		</div>
		<!-- Location Map -->

		<!-- Contact Form Component -->
		<AppContactForm :houseObj="house" />

	</div>
	<!-- House Details Section -->

	<!-- Loading Section -->
	<div v-else class="text-center py-4">

		<i id="loader" class="fa-solid fa-spinner fa-spin"></i>

	</div>
	<!-- Loading Section -->


</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

i {
	color: $color-light-green;
}

.map {
	width: 100%;
	height: 500px;
}

#loader {
	font-size: 100px;
}
</style>
