import {useFetchData} from "../hooks/useFetchData.js";
import {useEffect, useState} from "react";
import {Loading} from "../components/Loading.jsx";
import {Card} from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import backgroundImage from '../assets/background_banner.jpg'
export function Movies() {
    const [search, setSearch] = useState("");
    const {data, error, isLoading, FetchData, SearchMovie} = useFetchData();

    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    useEffect(() => {
        FetchData()
    }, []);

    function handleClick(e) {
        e.preventDefault()
        if (search===''){
            FetchData();
        }else{
            SearchMovie(search);
        }

    }

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
            <main style={{backgroundImage:`linear-gradient(#0000007e, #0000007e), url(${backgroundImage})`}}>
                <section className='container mx-auto p-4'>
                    <div className='w-full flex justify-between items-center mb-5 mt-10'>
                        <h1 className='text-3xl font-bold'>Movies</h1>
                        <form className="max-w-md ">
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search your a movie" required onChange={handleSearch}
                                       value={search}/>
                                <button type="submit"
                                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={handleClick}>Search
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3  gap-3 '>
                        {data?.map(card => (
                            <div key={card.id}>
                                <Card img={`https://image.tmdb.org/t/p/w500/${card.poster_path}`} title={card.title}
                                      id={card.id} max={true}></Card>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}