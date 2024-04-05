<script>
import { store } from '../../data/store'

export default {
  props:{
    type:String
  },
  data(){
      return{
        store,
      }
    },
    methods:{
      nextPage(){
        this.store.searchParams.page++
        this.store[`counter${this.type}`]++
        this.store.searchParams.page = this.store[`counter${this.type}`]
        this.$emit('goNext')
        // window.scrollTo(0,0);
      },
      prevPage(){
        this.store.searchParams.page--
        this.store[`counter${this.type}`]--
        this.store.searchParams.page = this.store[`counter${this.type}`]
        this.$emit('goPrev')
        // window.scrollTo(0,0);
      },
    }
}
</script>

<template>
  <div v-if="this.store.searchParams.total_pages > 0" class="container d-flex justify-content-center align-content-center pagenav">
    <p>Pagina {{ this.store[`counter${this.type}`] }} di {{ this.store[`pages_${type}`] }}</p>
    <button v-if="this.store[`counter${this.type}`] > 1" @click="prevPage" class="btn btn-danger me-2">&lt;</button>
    <button v-if="this.store[`pages_${this.type}`] != this.store[`counter${this.type}`]" @click="nextPage" class="btn btn-danger">&gt;</button>
  </div>

</template>

<style>
p{
    margin: 10px 10px 0 0;
    color: white;
  }
 

</style>