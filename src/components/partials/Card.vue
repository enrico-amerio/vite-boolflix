<script>
import {store} from '../../data/store';
  export default {
    props:{
      title: String,
      originalTitle: String,
      language : String,
      vote: Number,
      img: String,
      total_pages: Number,
      tipo: String,
      id: Number
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
      },
     
    }
  
  }
</script>
<template>
  <div class="card m-3" :id="id" style="width: 18rem;">
    <img v-if="img" class="poster" :src="'https://image.tmdb.org/t/p/original/'+ img" :alt="img">
    <img v-else class="poster" src="/img/noimageavailable2.png" alt="">
    <h3 class="title">{{ title }}</h3>
    <div class="movie-info">
      <h5>Titolo originale: {{ originalTitle }}</h5>
      <div v-if="this.store.availableFlags.includes(language)"> <img class="flag" :src="'img/' + language + '.png'" alt=""></div>
      <div v-else> {{ language }}</div>
      <div v-html="getVote(vote)"></div>
    </div>
</div>
</template>


<style lang="scss" scoped>
.card{
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  color: white;
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);

  .poster {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.8;
    transition: opacity .2s ease-out;
  }
  h3 {
    position: absolute;
    inset: auto auto 30px 30px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    font-weight: normal;
    text-transform: uppercase;
    text-shadow: 3px 0px 7px rgba(0, 0, 0, 0.8), -3px 0px 7px rgba(0, 0, 0, 0.8), 0px 4px 7px rgba(0, 0, 0, 0.8);

  }
  .movie-info {
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
    inset: auto auto 80px 30px;
    padding: 5px;
    border-radius: 5px;
  }
  &:hover h3 {
    inset: auto auto 220px 30px;
    transition: inset .3s ease-out;
    
  }
  &:hover .movie-info{
    opacity: 1;
    transition: opacity .5s .1s ease-in;
  }
  &:hover .poster {
    transition: opacity .3s ease-in;
    opacity: 1;
    filter: brightness(50%);
  }

  .flag{
  width: 20px;
  }
  
}

</style>