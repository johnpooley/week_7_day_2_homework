import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data:{
      ratesData: {},
      selectedCurrency: 1,
      amountToExchange: 1,
      selectedCurrency2: 1,
      amountToExchange2: 1

    },
    mounted(){
      this.fetchExchange();

    },
    computed:{
      euroToOther: function() {
        return (this.amountToExchange * this.selectedCurrency).toFixed(2)},

        otherToEuro: function () {
          return (this.amountToExchange2 / this.selectedCurrency2).toFixed(2)}

      },
    methods:{
      fetchExchange: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.ratesData = data)
      }

    }




  })
})
