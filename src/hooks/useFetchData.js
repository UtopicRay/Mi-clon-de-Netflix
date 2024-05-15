import {useEffect, useState} from "react";
import axios from "axios";

export function useFetchData(category) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg5MmIzOTlhMGRhMzI0ODE3YmYzYWIxMTM1ODE0MiIsInN1YiI6IjY1NDgwYzhiZDhjYzRhMDExZGM0NzFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3kgbPOH0sC12-TVC2dyDM0ee7VlD2vkBohpunAv7irc'
    }
    const FetchData = (category) => {
        try {
             axios.get(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, {headers})
                 .then((response)=>{
                     setData(response.data);
                 })
                 .finally(setIsLoading(false))
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        FetchData(category);
    }, []);
    return {data, error, isLoading}
}