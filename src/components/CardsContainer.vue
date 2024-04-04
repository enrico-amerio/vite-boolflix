<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';

  export default {
    props:{
      type:String
    },
    components:{
      Card
    },
    data(){
      return{
        store
      }
    },
    computed:{
      title(){
        return this.type === 'movie' ? 'Film' : 'Serie TV'
      } 
    }
  }
</script>


<template>
  <h2>{{ title }}</h2>
  <div v-if="this.store[type].length > 0" class="container d-flex  flex-wrap justify-content-center ">
      <Card v-for="card in this.store[type]" :key="card.id"
        :title="card.title || card.name"
        :originalTitle="card.original_title || card.original_name"
        :language="card.original_language"
        :vote="card.vote_average"
      />
  </div>
</template>



<style lang="scss" scoped>

</style>