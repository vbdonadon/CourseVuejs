new Vue({
    el: '#desafio',
    data: {
        valor: '',
        value: '',
    }, 
    methods: {
        ShowAlert(){
            alert('Alerta de click')
        },
        Listener(event){
            this.valor = event.target.value;
        },
        onEnter(event){
            this.value = event.target.value;
            
        }
    }
})