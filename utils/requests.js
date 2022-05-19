const API_KEY = process.env.API_KEY;


export default {
    fetchTrending:{
        title: 'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-us`
    },
    fetchTopRated:{
        title: 'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-us`
    },
    fetchAnimation:{
        title: 'Animation',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchActionMovies:{
        title: 'Action Movies',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchHorrorMovies:{
        title: 'Horror Movies',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchComedyMovies:{
        title: 'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchRomanceMovies:{
        title: 'Romance',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=18749`
    },
    fetchMystery:{
        title: 'Mystery',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title: 'Sci-Fi',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title: 'Western',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchTv:{
        title: 'TV Movies',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },

};