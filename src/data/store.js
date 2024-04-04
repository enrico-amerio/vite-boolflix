	
import { reactive } from 'vue'

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/' ,
  movie: [],
  tv:[],
  searchParams: {
    api_key: 'f011ab811e809591e1e8e9fdcaa603d4',
    query: '',
    error:'',
    language: 'it-IT'
  }
})