import player_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useFetchData} from "../hooks/useFetchData.js";
import {useEffect} from "react";
import {Loading} from "../components/Loading.jsx";
import {Link} from "react-router-dom";

export default function Home() {
    const {data, error, isLoading, MovieDetails} = useFetchData();
    useEffect(() => {
        MovieDetails(24428)
    }, []);
    if (isLoading) {
        return <Loading></Loading>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <>
            <Navbar></Navbar>
            <main>
                <section className='relative'>
                    <img src={`https://image.tmdb.org/t/p/original/` + data.backdrop_path} className='banner_img '
                         alt='imagen de la pelicula'
                         style={{maskImage: 'linear-gradient(to right,transparent, black 75%)'}}
                    ></img>
                    <div className='absolute w-full pl-[4%] bottom-0'>
                        <h1 className={`font-bold my-8 sm:text-4xl text-2xl`}>{data.original_title}</h1>
                        <p className={`sm:block hidden`}>{data.overview}</p>
                        <div className='flex gap-2 my-10'>
                            <Link to={`/player/${data.id}`}>
                                <button type="button"
                                        className="text-black bg-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center gap-2 hover:duration-200 hover:transition-ease">
                                    <img className='max-w-6 h-auto' src={player_icon}></img>
                                    Play
                                </button>
                            </Link>
                            <Link to={`/movie/details/${data.id}`}>
                                <button type="button"
                                        className="bg-white/5 text-white hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 inline-flex items-center gap-2 hover:duration-200 hover:transition-ease">
                                    <img className='max-w-6 h-auto' src={info_icon}></img>
                                    Description
                                </button>
                            </Link>
                        </div>
                        <div className='hidden lg:block'>
                            <TitleCards category='popular'></TitleCards>
                        </div>
                    </div>
                </section>
                <div className='pl-[3%]'>
                    <TitleCards title='Upcoming' category='upcoming'></TitleCards>
                    <TitleCards title='Top Pick for you' category='top_rated'></TitleCards>
                </div>
            </main>
            <Footer></Footer>
        </>)
}
