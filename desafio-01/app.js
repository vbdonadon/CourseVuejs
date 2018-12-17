new Vue({
    el: '#desafio',
    data: {
        nome: 'Vinicius',
        idade: 23,
        GoogleImage: "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
    },
    methods: {
        tripleAge: function(){
            let MyAgeThreeTimes = this.idade*3
            return MyAgeThreeTimes
        },
        RandomNum: function(){
            return Math.random().toFixed(2)
        }
    }
})
