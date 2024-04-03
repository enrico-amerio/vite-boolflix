<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    },
    methods:{
      search(){
        this.store.searchParams.totPages = 0
        this.store.searchParams.query = this.nameToSearch
        this.$emit('search');
        console.log('dio Cane');
        console.log(this.store.searchParams.query)
        
      }
    }
    
  }
</script>


<template>
<nav>
  <a class="navbar-brand" href="#">BOOLFLIX</a>
  
    <input class="form-control me-2" type="search" placeholder="Search" v-model="nameToSearch">
    <button class="btn btn-outline-success" type="submit" @click="search(nameToSearch)">Search</button>
  

</nav>
</template>



<style lang="scss" scoped>

</style>