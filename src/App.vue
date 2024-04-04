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
      search(){
        this.getApi('movie');
        this.getApi('tv');
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
  <Main />
</template>



<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>