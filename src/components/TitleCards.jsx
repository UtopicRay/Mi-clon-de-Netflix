import {useEffect} from 'react'
import {Card} from "./Card.jsx";
import {useFetchData} from "../hooks/useFetchData.js";
import {Loading} from "./Loading.jsx";


// eslint-disable-next-line react/prop-types
export default function TitleCards({title, category}) {
    const {data, error, isLoading, FetchData} = useFetchData()

    useEffect(() => {
        FetchData(category);
    }, [])
    if(isLoading){
        return <Loading/>
    }
    if (error) {
        return (
            <div>{error.message}</div>
        )
    }
    return (
        <div>
            <h2 className='font-bold mt-12 mb-8 text-3xl'>{title ? title : "Popular on Netflix"}</h2>
            <div className='card-list'>
                {data?.map(card => (
                    <div key={card.id}>
                        <Card img={`https://image.tmdb.org/t/p/w500/${card.poster_path}`} title={card.title}
                              id={card.id}></Card>
                    </div>

                ))}
            </div>
        </div>
    )
}
