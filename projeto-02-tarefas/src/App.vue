<template>
	<div id="app">
		<h1 class="title">
			TASKS
		</h1>
		<h4>to do</h4>
		<ProgressBar />
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'


export default {
	components: { ProgressBar }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.title {
		font-family: Gotham, Calibri, Arial;
		font-size: 55px;
	}

</style>
