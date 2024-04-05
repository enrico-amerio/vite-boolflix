<script>
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import ZeroResoult from './components/ZeroResoult.vue';
import axios from 'axios';
import { store } from './data/store';
  export default {
    components:{
      Header,
      CardsContainer,
      ZeroResoult
      
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
        this.store.isLoading = true;
      },
      getApi(type){
        this.store.isError = false
        axios.get(store.apiUrl + type,{
          params: store.searchParams
        }).then(result => {
          this.store.isLoading = false;
          store[type] = result.data.results
          store[`pages_${type}`] = result.data.total_pages
          store.searchParams.total_pages = result.data.total_pages
          this.checkForError()
        })
        .catch(error => {
          store[type] = []
          store.isError = true
        })
        
      },
      checkForError(){
        if(this.store.tv.length === 0 && this.store.movie.length === 0 && isLoading === false){
          this.store.isError = true
        }
      }
      
    },
    mounted(){
      // this.search()
    }
  }
</script>

<template>
  <Header @search="search"/>
  <div>
    <CardsContainer type="movie"  @goNext="getApi('movie')" @goPrev="getApi('movie')"/>
    <CardsContainer type="tv" @goNext="getApi('tv')" @goPrev="getApi('tv')" />
  </div>
  <div v-if="this.store.isError">
    <ZeroResoult />
  </div>
</template>


<style lang="scss" scoped>
@use './assets/scss/main.scss';
</style>