	
import { reactive } from 'vue'

export const store = reactive({
  apiUrlTrend: 'https://api.themoviedb.org/3/trending/',
  trend_movie: [],
  trend_tv: [],
  imHome: true,
  apiUrl: 'https://api.themoviedb.org/3/search/' ,
  movie: [],
  tv:[],
  pages_movie: 0,
  pages_tv: 0,
  availableFlags: ['en', 'it'],
  countermovie: 1,
  countertv: 1,
  isError: false,
  isLoading: false,
  searchParams: {
    api_key: 'f011ab811e809591e1e8e9fdcaa603d4',
    query: '',
    error:'',
    language: 'it-IT',
    page: 1,
    total_pages: 0
    
  },
  homeParams:{
    api_key: 'f011ab811e809591e1e8e9fdcaa603d4',
    language: 'it-IT',

  }
})
