import {useState} from "react";
import axios from "axios";


export function useFetchData() {
    const [data, setData] = useState([]);
    const [recommendations,setRecommendations]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg5MmIzOTlhMGRhMzI0ODE3YmYzYWIxMTM1ODE0MiIsInN1YiI6IjY1NDgwYzhiZDhjYzRhMDExZGM0NzFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3kgbPOH0sC12-TVC2dyDM0ee7VlD2vkBohpunAv7irc'
    }
    const FetchData = (category) => {
        axios.get(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, {headers})
            .then((response) => setData(response.data.results))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }

    async function MovieDetails(id) {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {headers})
            .then((response) => setData(response.data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }

    async function SimilarMovies(id) {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, {headers})
            .then((response) => setRecommendations(response.data.results))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }
    async function PlayerMovies(id){
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {headers})
            .then((response) => setData(response.data.results))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }
    async function SearchMovie(title){
        await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, {headers})
            .then((response) => setData(response.data.results))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }

    return {data, error, isLoading, MovieDetails, SimilarMovies,FetchData,recommendations,PlayerMovies,SearchMovie}
}