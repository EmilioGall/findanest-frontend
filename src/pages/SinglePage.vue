<script>
import axios from 'axios';

export default {
	data() {
		return {
			house: null,  // Initialize house data as null
		}
	},
	created() {
		const slug = this.$route.params.slug;
		axios.get(`http://127.0.0.1:8000/api/houses/${slug}`)
			.then((resp) => {
				this.house = resp.data.result;  // Assign the fetched data to the house property
				console.log(resp);
			})
			.catch(error => {
				console.error('Errore nella richiesta:', error);
			});
	},
}
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
						<img class="img-fluid" :src="house.image || 'https://via.placeholder.com/300'" alt="House Image">
					</div>
				</div>
				<div class="col-md-6 ps-md-5">
					<div class="mb-5 mb-lg-3">
						<h4>{{ house.title }}</h4>
						<p>{{ house.description }}</p>
						<p><strong>Price:</strong> €{{ house.price }}</p>
						<p><strong>Address:</strong> {{ house.address }}</p>
						<p><strong>Rooms:</strong> {{ house.rooms }}</p>
						<p><strong>Beds:</strong> {{ house.beds }}</p>
						<p><strong>Bathrooms:</strong> {{ house.bathrooms }}</p>
						<p><strong>Square Meters:</strong> {{ house.sqm }} sqm</p>
						<a class="btn btn-lg btn-primary" href="#">View Gallery</a>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="text-center">
			<p>Loading...</p>
		</div>
	</section>
</template>

<style scoped lang="scss"></style>
