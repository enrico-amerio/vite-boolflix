<script>
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import TrendContainer from './components/TrendContainer.vue'
import ZeroResoult from './components/ZeroResoult.vue';
import axios from 'axios';
import { store } from './data/store';
  export default {
    components:{
      Header,
      CardsContainer,
      ZeroResoult,
      TrendContainer
      
    },
    data(){
      return{
        store
      }
    },
    methods:{
      prepareHome(){
        this.getTrend('movie');
        this.getTrend('tv');
        this.store.imHome = true;
        
      },
      getTrend(type){
        this.store.isLoading = true;
        axios.get(store.apiUrlTrend + type + '/day?',{
          params: store.homeParams
        }).then(result => {
          this.store.isLoading = false;
          store[`trend_${type}`] = result.data.results
          console.log(store.trend_tv);
        }).catch(error => {
          store[`trend_${type}`] = []
          store.isError = true
        })
        
      },
      search(){
        this.getApi('movie');
        this.getApi('tv');
        this.store.isLoading = true;
      },
      getApi(type){
        this.store.imHome = false;
        this.store.isError = false;
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
      this.prepareHome()
    }
  }
</script>

<template>
  <Header @search="search" @backhome="prepareHome"/>
  <div v-if="this.store.imHome">
    <TrendContainer type="movie"  />
    <TrendContainer type="tv"  />
  </div>
  <div v-if="!this.store.imHome">
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