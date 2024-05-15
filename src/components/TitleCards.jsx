import {useEffect, useRef, useState} from 'react'


// eslint-disable-next-line react/prop-types
export default function TitleCards({title, category}) {
    const [ApiData,setApiData]=useState([])
    const cardRef = useRef();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg5MmIzOTlhMGRhMzI0ODE3YmYzYWIxMTM1ODE0MiIsInN1YiI6IjY1NDgwYzhiZDhjYzRhMDExZGM0NzFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3kgbPOH0sC12-TVC2dyDM0ee7VlD2vkBohpunAv7irc'
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        cardRef.current.scrollLeft += e.deltaY;
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));

    }, [])

    return (
        <div>
            <h2 className='font-bold mt-12 mb-8 text-3xl'>{title ? title : "Popular on Netflix"}</h2>
            <div className='card-list'>
                {ApiData?.map((card, index) => (
                    <div className='relative mb-5' key={index} ref={cardRef}>
                        <img className='max-w-[240px] h-auto rounded-md cursor-pointer' src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
                             alt={`imagen de ${card.title}`}></img>
                        <p className='absolute right-0 bottom-4 font-semibold hover:underline'>{card.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
