new Vue({
  el: '#desafio',
  data: {
    primeiraClasse: 'destaque',
    alterarClasse: 'destaque',
    classe4: '',
    negative: true,
    cor: '',
    widthPerSec: 0
  },
  methods: {
    iniciarEfeito(){
      setInterval(() => {
        this.primeiraClasse = this.primeiraClasse == 'destaque' 
        ? 'encolher' : 'destaque'
      }, 1000)
    },
    iniciarProgresso(){
      let valor = 0
      const temporizador = setInterval(() => {
        valor += 5
        this.widthPerSec = `${valor}%`"
        if (valor == 100){ clearInterval(temporizador) }
      }, 0500)
    }
  }    
});
