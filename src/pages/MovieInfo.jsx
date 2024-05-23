import {useEffect} from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useParams} from "react-router-dom";
import {useFetchData} from "../hooks/useFetchData.js";
import {MovieCard} from "../components/MovieCard.jsx";
import {Card} from "../components/Card.jsx";
import {Loading} from "../components/Loading.jsx";

export function MovieInfo() {
    // const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const {data, error, isLoading, MovieDetails, SimilarMovies, recommendations} = useFetchData()
    useEffect(() => {
        MovieDetails(id);
        SimilarMovies(id)
    }, [id]);
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
            <Navbar/>
            <main className=''>
                <div
                    style={{
                        background: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w1280/${data.poster_path}") no-repeat fixed `,
                        backgroundSize: "cover"
                    }}>
                    <MovieCard poster_path={data.poster_path} production_companies={data.production_companies}
                               production_countries={data.production_countries} title={data.original_title}
                               runtime={data.runtime}
                               overview={data.overview} release_date={data.release_date} status={data.status}
                               tagline={data.tagline} vote_average={data.vote_average} genres={data.genres} id={data.id}
                    ></MovieCard>
                </div>
                <div className='px-4'>
                    <h2 className='font-bold mt-12 mb-8 text-3xl'> Peliculas Similares </h2>
                    <div className='card-list'>
                        {recommendations?.map((movie) => (
                            <div key={movie.id}>
                                <Card title={movie.original_title}
                                      img={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} id={movie.id}></Card>

                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}