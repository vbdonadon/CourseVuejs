<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <b>{{ inverterNome() }}</b></p>
        <p>Idade de Usuário: <b>{{ idade }}</b></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        nome: {
            type: String,
            default: 'Anônimo',
            // required: true,
            // default: function (){
            //     return Array(10).fill(0).join(' ,')
            // }
            
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = "Pedro"
            this.$emit('nomeMudou', this.nome)
            // this.$emit('nomeMudou', {
            //     novo: this.nome,
            //     antigo
            // }) Pode nos retornar um objeto
        }
    },
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
