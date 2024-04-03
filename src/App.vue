<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';
import { store } from './data/store';
  export default {
    components:{
      Header,
      Main
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(store.apiUrlMovies,{
          params: store.searchParams
        }).then(result => {
        store.moviesList = result.data.results
        store.searchParams.totPages = result.data.total_pages
      console.log(store.moviesList)})
        .catch(error => {
          store.moviesList = []
          store.searchParams.totPages = 0
          store.searchParams.error = "Nessun risultato"
        })
      },
      
    },
    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <Header />
  <Main />
</template>



<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>