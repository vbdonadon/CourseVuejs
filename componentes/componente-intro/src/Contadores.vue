<template>
    <div class="contadores">
        <h2>Contadores:</h2>
        <app-contador v-for="item in 5" :key="item"></app-contador>
    </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
    components: { 'app-contador': Contador }
}
</script>

<style>
</style>
