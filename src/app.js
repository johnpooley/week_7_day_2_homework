import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data:{
      ratesData: {},
      selectedCurrency: 0

    },
    mounted(){
      this.fetchExchange();

    },
    computed:{

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
