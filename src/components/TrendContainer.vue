<script>
import {store} from '../data/store';
import Card from './partials/Card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';


export default {
  props: {
    type: String
  },
  components: {
    Card,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation],
      store,
      swiperInstance: null,
      swiperNavigation: true 
    }
  },
   computed: {
    title() {
      return this.type === 'movie' ? 'TOP FILMS' : 'TOP SERIE TV'
    } 
  },
  methods:{
    getInfo(id, type){
      document.body.classList.add("overflow-hidden");
      this.store.focusedObj = [];
      this.store.isLoading = true;
      this.store.isFocus = true;
      this.$emit('getInfo', id, type);
    }
  }
  
}
</script>

<template>
  <div  class="wrapper">
    <h2 class="text-center ">{{ title }}</h2>
    <div  class="container d-flex  flex-wrap justify-content-center ">
      <swiper :navigation="true" 
              :modules="modules"
              :slides-per-view="'auto'"
              :space-between="10"
              :loop="true">
        <swiper-slide class="swiper-slide" v-for="card in store[`trend_${this.type}`]" :key="card.id">
          <Card 
            :title="card.title || card.name"
            :originalTitle="card.original_title || card.original_name"
            :language="card.original_language"
            :vote="card.vote_average"
            :img="card.backdrop_path"
            :id="card.id"
            :virtual="true"
            @click="getInfo(card.id, this.type)"
          />
        </swiper-slide>
          
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" >
.wrapper{
  padding-top: 80px
}
.wrapper.error{
  font-size: 50px;
 
}
.swiper-slide {
    width: auto;
}
.swiper-button-prev, .swiper-button-next{
  color: #bb2d3b;
  background-color:rgba(0,0,0,0.2);
  padding:30px;
  border-radius: 50%;
  
}
</style>