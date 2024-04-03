<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';

  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
  <h2>Movies</h2>
  <div v-if="this.store.moviesList.length > 0" class="container d-flex  flex-wrap justify-content-center ">
      <Card v-for="card in this.store.moviesList" :key="card.id"
        :title="card.title"
        :originalTitle="card.original_title"
        :language="card.original_language"
        :vote="card.vote_average"
      />
  </div>
  <h2>Series</h2>
  <div v-if="this.store.seriesList.length > 0" class="container d-flex  flex-wrap justify-content-center ">
      <Card v-for="card in this.store.seriesList" :key="card.id"
        :title="card.name"
        :originalTitle="card.original_name"
        :language="card.original_language"
        :vote="card.vote_average"
      />
  </div>

</template>



<style lang="scss" scoped>

</style>