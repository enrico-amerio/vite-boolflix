<script>
import {store} from '../data/store'
  export default {  
    data(){
      return{
        store
      }
    },
    methods:{
      search(nameToSearch){
        this.store.searchParams.totPages = 0
        this.store.searchParams.query = nameToSearch
        this.$emit('search');
      }
    }
    
  }
</script>


<template>
<nav class="d-flex flex-column justify-content-center ">
  <div class="row">
    <div class="col-7"> 
      <a class="navbar-brand text-danger ms-2 h1 logo" href="#">BOOLFLIX</a>
    </div>
    <div class="col d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" v-model.trim="nameToSearch">
      <button class="btn btn-danger" @click="search(nameToSearch)">Search</button>
    </div>
  </div>
</nav>
</template>



<style lang="scss" scoped>
nav{
  background-color: black;
  position:fixed;
  z-index: 999;
  width: 100%;
  height: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    .logo{
    font-size: 1.8rem;
    }
}
</style>