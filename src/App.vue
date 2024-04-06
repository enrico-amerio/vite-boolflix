<script>
import Header from './components/Header.vue';
import CardsContainer from './components/CardsContainer.vue';
import TrendContainer from './components/TrendContainer.vue'
import ZeroResoult from './components/ZeroResoult.vue';
import Popup from './components/partials/Popup.vue'
import axios from 'axios';
import { store } from './data/store';
  export default {
    components:{
      Header,
      CardsContainer,
      ZeroResoult,
      TrendContainer,
      Popup
      
    },
    data(){
      return{
        store
      }
    },
    methods:{
      prepareHome(){
        document.body.classList.remove("overflow-hidden");
        this.getTrend('movie');
        this.getTrend('tv');
        this.store.imHome = true;
        store.isError = false;
        window.scrollTo(0,0);
        this.store.isFocus = false;
        

      },
      getTrend(type){
        this.store.isLoading = true;
        axios.get(store.apiUrlTrend + type + '/day?',{
          params: store.homeParams
        }).then(result => {
          this.store.isLoading = false;
          store[`trend_${type}`] = result.data.results
        }).catch(error => {
          store[`trend_${type}`] = []
          store.isError = true
        })
        
      },
      search(){
        window.scrollTo(0,0);
        this.store.isFocus = false;
        document.body.classList.remove("overflow-hidden");
        this.getApi('movie');
        this.getApi('tv');
        this.store.isLoading = true;
        this.store.countermovie = 1
        this.store.countertv = 1
        this.store.searchParams.page = 1
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
      },
      getInfo(id, type){

        axios.get(store.apiUrlFocus + type + '/' + id,{
          params: store.searchParams
        }).then(result => {
          store.focusedObj = result.data
          
        })
        .catch(error => {
          store[type] = []
          store.isError = true
        })
      }
      
    },
    mounted(){
      this.prepareHome()
    }
  }
</script>

<template>
  <Popup v-if="this.store.isFocus "/> 
  <Header @search="search" @backhome="prepareHome"/>
  <div v-if="this.store.imHome">
    <TrendContainer type="movie" @getInfo = getInfo />
    <TrendContainer type="tv" @getInfo = getInfo />
  </div>
  <div v-if="!this.store.imHome">
    <CardsContainer type="movie"  @goNext="getApi('movie')" @goPrev="getApi('movie')" @getInfo = getInfo />
    <CardsContainer type="tv" @goNext="getApi('tv')" @goPrev="getApi('tv')" @getInfo = getInfo />
  </div>
  <div v-if="this.store.isError">
    <ZeroResoult />
  </div>
</template>


<style lang="scss" >
@use './assets/scss/main.scss';
</style>