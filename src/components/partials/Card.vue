<script>
import {store} from '../../data/store';
  export default {
    props:{
      title: String,
      originalTitle: String,
      language : String,
      vote: Number
    },
    data(){
      return{
        store
      }
    }
  
  }
</script>
<template>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ title }}</li>
    <li class="list-group-item">{{ originalTitle }}</li>
    <li class="list-group-item" v-if="this.store.availableFlags.includes(language)"> <img :src="'img/' + language + '.png'" alt=""> </li>
    <li class="list-group-item" v-else> {{ language }}</li>
    <li class="list-group-item">{{ vote }}</li>
  </ul>
</div>
</template>


<style lang="scss" scoped>
img{
width: 20px;
}
</style>