import '../movieInfo.css'
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export function MovieInfo() {
    const [ApiData, setApiData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg5MmIzOTlhMGRhMzI0ODE3YmYzYWIxMTM1ODE0MiIsInN1YiI6IjY1NDgwYzhiZDhjYzRhMDExZGM0NzFhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3kgbPOH0sC12-TVC2dyDM0ee7VlD2vkBohpunAv7irc'
            }
        };

        fetch('https://api.themoviedb.org/3/movie/823464?language=en-US', options)
            .then(response => response.json())
            .then(response => setApiData(response))
            .catch(err => console.error(err))
            .finally(setIsLoading(false))
    }, []);
    if (isLoading) {
        return (
            <div>
                ....Loading
            </div>)
    }
    return (
        <>
            <Navbar></Navbar>
            <div id="container">
                <div id="results">
                    <div id="movie">
                        <div className="movie-details-container">
                            <div className="column column-md">
                                <img src={`https://image.tmdb.org/t/p/w500/` + ApiData.poster_path}
                                     id="poster"></img>
                            </div>
                            <div className="column column-md">
                                <h1 id="title">{ApiData.original_title}<span id="date"> ()</span></h1>
                                <div className="row">
              <span className="badge"><span id="status">{ApiData.status}</span>
              </span>
                                </div>
                                <div className="row">
                                    1 hour 26 minutes | Fantasy, Animation, Family | {ApiData.release_date}
                                </div>
                              <div id="container">
            <div id="results">
                <div id="movie">
                    <div className="movie-details-container">
                        <div className="column column-md">
                            <img src={`https://image.tmdb.org/t/p/w500/` + ApiData.poster_path}
                                 id="poster"></img>
                        </div>
                        <div className="column column-md">
                            <h1 id="title">{ApiData.original_title}<span id="date"> ()</span></h1>
                            <div className="row">
              <span className="badge"><span id="status">{ApiData.status}</span>
              </span>
                            </div>
                            <div className="row">
                                1 hour 26 minutes | Fantasy, Animation, Family | {ApiData.release_date}
                            </div>
                            <h3 id="tagline">{ApiData.tagline}</h3>
                            <div id="overview">
                                <p id="synopsis">{ApiData.overview}</p>
                            </div>
                            <div className="row">
                                <h2>Company Credits</h2>
                                {/*<div id="companies">{ApiData.production_companies.map((companies) => (*/}
                                {/*    <>*/}
                                {/*        <p>{companies.name}</p>*/}
                                {/*    </>*/}
                                {/*))}</div>*/}
                            </div>
                            <div className="row">
                                <h2>Countries</h2>
                                {/*<div id="countries">{ApiData.production_countries.map((countries) => (*/}
                                {/*    <>*/}
                                {/*        <p>{countries.name}</p>*/}
                                {/*    </>*/}
                                {/*))}</div>*/}
                            </div>
                            <div className="row">
                                <h2>Box Office</h2>
                                <div id="budget"><strong>Budget:</strong> $0</div>
                                <div id="revenue"><strong>Revenue:</strong> $0</div>
                            </div>
                            <div className="row">
                                <div className="column column-md">
                                    <div className="ratings">
                                        <h2>Rating</h2>
                                        <span id="rating">{ApiData.vote_average}/10</span>
                                    </div>
                                </div>
                                <div className="column column-md">
                                    <h2>Runtime</h2>
                                    <div>
                                        <div id="runtime">{ApiData.runtime} minutes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <h3 id="tagline">{ApiData.tagline}</h3>
                                <div id="overview">
                                    <p id="synopsis">{ApiData.overview}</p>
                                </div>
                                <div className="row">
                                    <h2>Company Credits</h2>
                                    {/*<div id="companies">{ApiData.production_companies.map((companies) => (*/}
                                    {/*    <>*/}
                                    {/*        <p>{companies.name}</p>*/}
                                    {/*    </>*/}
                                    {/*))}</div>*/}
                                </div>
                                <div className="row">
                                    <h2>Countries</h2>
                                    {/*<div id="countries">{ApiData.production_countries.map((countries) => (*/}
                                    {/*    <>*/}
                                    {/*        <p>{countries.name}</p>*/}
                                    {/*    </>*/}
                                    {/*))}</div>*/}
                                </div>
                                <div className="row">
                                    <h2>Box Office</h2>
                                    <div id="budget"><strong>Budget:</strong> $0</div>
                                    <div id="revenue"><strong>Revenue:</strong> $0</div>
                                </div>
                                <div className="row">
                                    <div className="column column-md">
                                        <div className="ratings">
                                            <h2>Rating</h2>
                                            <span id="rating">{ApiData.vote_average}/10</span>
                                        </div>
                                    </div>
                                    <div className="column column-md">
                                        <h2>Runtime</h2>
                                        <div>
                                            <div id="runtime">{ApiData.runtime} minutes</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}