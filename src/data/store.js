	
import { reactive } from 'vue'

export const store = reactive({
  apiUrlMovies: 'https://api.themoviedb.org/3/search/movie' ,
  apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
  moviesList: [],
  seriesList:[],
  searchParams: {
    api_key: 'f011ab811e809591e1e8e9fdcaa603d4',
    query: 'Matrix',
    totPages: 0,
    error:'',
    language: 'it'
  }
})