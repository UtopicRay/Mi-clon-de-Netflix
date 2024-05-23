import {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {useFetchData} from "../hooks/useFetchData.js";
import '@justinribeiro/lite-youtube';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Loading} from "../components/Loading.jsx";

export default function Player() {
    const {id} = useParams();
    const {data, error, isLoading, PlayerMovies} = useFetchData();
    useEffect(() => {
        PlayerMovies(id)
    }, []);

    if (isLoading) {
        return <Loading/>
    }
    if (error) {
        return (
            <p>{error.message}</p>
        )
    }
    return (
        <>
        <Navbar></Navbar>
        <div className={`flex flex-col justify-center items-center h-[100vh]`}>Player
           <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${data[0].key}`} allowFullScreen={true}>
           </iframe>
            <div className='flex justify-between w-[90%]'>
                <p className={`font-semibold`}>{data[0].published_at.slice(0,10)}</p>
                <p>{data[0].name}</p>
                <p>{data[0].type}</p>
            </div>
        </div>
            <Footer/>
        </>
    )
}
