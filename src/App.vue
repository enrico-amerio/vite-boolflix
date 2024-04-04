<script>
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import axios from 'axios';
import { store } from './data/store';
  export default {
    components:{
      Header,
      CardsContainer
    },
    data(){
      return{
        store
      }
    },
    methods:{
      search(){
        this.getApi('movie');
        this.getApi('tv');
        this.store.availableFla
      },
      getApi(type){
        axios.get(store.apiUrl + type,{
          params: store.searchParams
        }).then(result => {
        store[type] = result.data.results})
        .catch(error => {
          store[type] = []
          store.searchParams.error = "Nessun risultato"
        })
        
      }
      
    },
    mounted(){
      this.search()
    }
  }
</script>

<template>
  <Header @search="search"/>
  <CardsContainer type="movie"/>
  <CardsContainer type="tv" />
</template>



<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>