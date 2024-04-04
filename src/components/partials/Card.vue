<script>
import {store} from '../../data/store';
  export default {
    props:{
      title: String,
      originalTitle: String,
      language : String,
      vote: Number,
      img: String
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getVote(vote){
        let stars = ''
        vote = Math.round(vote / 2)
        for (let i = 0; i < vote; i++){
        stars += "<i class='fa-solid fa-star'></i>";}
        for(let j=0; j < 5 - vote; j++){
        stars += "<i class='fa-regular fa-star'></i>";}
        return stars;
      }
    }
  
  }
</script>
<template>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <img v-if="img" class="card-img-top" :src="'https://image.tmdb.org/t/p/original/'+ img" :alt="img">
    <li class="list-group-item">{{ title }}</li>
    <li class="list-group-item">{{ originalTitle }}</li>
    <li class="list-group-item" v-if="this.store.availableFlags.includes(language)"> <img class="flag" :src="'img/' + language + '.png'" alt=""> </li>
    <li class="list-group-item" v-else> {{ language }}</li>
    <li class="list-group-item" v-html="getVote(vote)"></li>
  </ul>
</div>
</template>


<style lang="scss" scoped>
.flag{
width: 20px;
}
</style>