<script>
import { store  } from '../../data/store';
  export default {
    data(){
      return{
        store,
        
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
    outOfFocus(){
      document.body.classList.remove("overflow-hidden");
      this.store.isFocus = false;
    }
    }

  }
</script>

<template>
    <div class="popup-container">
      <div class="popup">
        <h1 class="m-3">{{ this.store.focusedObj.title || this.store.focusedObj.name }}</h1>
        <h5 class="ms-3">Titolo originale: {{ this.store.focusedObj.original_title || this.store.focusedObj.original_name }}</h5>
        <div v-if="this.store.availableFlags.includes(this.store.focusedObj.original_language)"> <img class="flag ms-3 " :src="'img/' + this.store.focusedObj.original_language + '.png'" alt=""></div>
        <div v-else> {{ this.store.focusedObj.original_language }}</div>
        <p class="ms-3" v-if="this.store.focusedObj.genres && this.store.focusedObj.genres.length > 1">{{ this.store.focusedObj.genres[1].name }}</p>
        <p class="rating ms-3" v-html="getVote(this.store.focusedObj.vote_average)"></p>
        <div class="description">
          <p class=" m-3">{{ this.store.focusedObj.overview }}</p>
          <a v-if="this.store.focusedObj.homepage && this.store.focusedObj.homepage.length > 1" class="btn btn-danger ms-3" :href="this.store.focusedObj.homepage" target="_blank">Guarda Ora</a>
        </div>
        <img class="poster" :src="'https://image.tmdb.org/t/p/original/'+ this.store.focusedObj.backdrop_path" alt="img">
        <div class="close-icon" @click="outOfFocus"><i class="fa-solid fa-circle-xmark"></i></div>
      </div>
    </div>
 

</template>

<style lang="scss" scoped>
.popup-container, .popup{
  position: fixed;
  z-index: 998;
}
.popup-container{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .popup{
    width: 90%;
    height: 80%;
    max-width: 1200px;
    max-height: 700px;
    border-radius: 20px;
    background-color: #000000;
    font-size: 50px;
    flex-direction: column;
    position:relative;
    overflow: hidden;

    .poster{
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.4;
      z-index: -1;
    }
    .description{
      overflow-y: auto;
      width: 100%;
      height:65%;
    }
    h1{
      text-shadow: 3px 0px 7px rgba(0, 0, 0, 0.8), -3px 0px 7px rgba(0, 0, 0, 0.8), 0px 4px 7px rgba(0, 0, 0, 0.8);

    }
    h5{
      color:white
    }
    p{
      font-size: 15px ;
    }
    .flag, div{
      width:30px;
      font-size:20px 
    }
    .close-icon{
      color: #bb2d3b;
      position:absolute;
      z-index: 999;
      top:20px;
      right: 40px;
      font-size: 40px;
      cursor: pointer;
      
    }
  }
}
</style>