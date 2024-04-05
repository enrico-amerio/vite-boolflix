<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';

  export default {
    props:{
      type:String
    },
    components:{
      Card,
     
    },
    data(){
      return{
        store
      }
    },
    computed:{
      title(){
        return this.type === 'movie' ? 'Top Film' : 'Top Serie TV'
      } 
    }
  }
</script>

<template>
  <div  class="wrapper">
    <h2 class="text-center ">{{ title }}</h2>
    <div  class="container d-flex  flex-wrap justify-content-center ">
        <Card v-for="card in store[`trend_${this.type}`]" :key="card.id"
          :title="card.title || card.name"
          :originalTitle="card.original_title || card.original_name"
          :language="card.original_language"
          :vote="card.vote_average"
          :img="card.backdrop_path"
        />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  padding-top: 80px
}
.wrapper.error{
  font-size: 50px;
 
}
</style>