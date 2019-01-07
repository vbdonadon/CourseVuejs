<template>
	<v-app>
		<app-navigation></app-navigation>
		<app-toolbar></app-toolbar>
		<app-carousel></app-carousel>
		<app-footer></app-footer> 
	</v-app>
</template>

<script>
import Toolbar from './components/template/Toolbar.vue'
import Navigation from './components/template/Navigation.vue'
import Carousel from './components/widgets/Carousel.vue'
import Footer from './components/template/Footer.vue'

export default {
	components: { 
		'app-carousel': Carousel, 'app-toolbar': Toolbar,
		'app-navigation': Navigation, 'app-footer': Footer
		}
}
</script>

<style>

</style>

