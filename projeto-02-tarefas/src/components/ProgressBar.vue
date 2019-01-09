<template>
    <div id="app">
        <div class="progress">
            <span></span>
            <p class="percentage">0%</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .progress {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 700px;
        height: 30px;
        border: 1px solid white;
        border-radius: 10px;
        margin-top: 10px;
    }

    .loading {
        background-color: greenyellow;
        width: 10%;
    }

    .percentage {
        font-size: 15px;
        font-weight: 300;
    }
</style>
