new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 0,
        monsterLife: 10,

    },
    computed: {
        hasResult(){
            return this.playerLife <= 0 || this.monsterLife <= 0
        },
    },
    methods: {
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(especial){
            this.hurt(7, 12, false)
        },
        hurt(min, max, especial){
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this.playerLife = Math.max(this.playerLife -  hurt, 0)
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }        
    },
    watch: {

    }
}) 