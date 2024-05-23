import {Link} from "react-router-dom";
import player_icon from "../assets/play_icon.png";

export function MovieCard({
                              title,
                              status,
                              overview,
                              tagline,
                              release_date,
                              runtime,
                              vote_average,
                              production_countries,
                              production_companies,
                              poster_path,
                              genres,id
                          }) {
    function convertirAHoraMinutos(numero) {
        // Extraer las horas completas
        const horas = Math.floor(numero / 60);

        // Calcular los minutos restantes
        const minutosRestantes = numero % 60;

        // Formatear la salida
        const salida = `${horas} hora${horas === 1 ? '' : 's'} y ${minutosRestantes} minuto${minutosRestantes === 1 ? '' : 's'}`;

        return salida;
    }

    return (
        <div className='container m-auto bg-white/50 rounded-lg'>
            <div className="md:p-1 p-3 grid grid-cols-2 font-sans md:mx-3">
                <div className=" flex justify-center mr-2">
                    <img src={`https://image.tmdb.org/t/p/w500/` + poster_path}></img>
                </div>
                <div className="text-left mt-4 ">
                    <h1 className='text-3xl font-semibold mb-3'>{title}
                    </h1>
                    <div className="flex items-center mb-5">
                        <span className="bg-violet-800 rounded-md px-2 py-2 text-xl mr-2"><span
                            id="status">{status}</span></span>
                        <p className='text-xl'>{convertirAHoraMinutos(runtime)} <span>| {genres?.map((genre, index) => (
                            <span key={genre.id}>{index>genres.length-2 ? ` ${genre.name} ` : `${genre.name},`}</span>))}</span>
                            <span>| {release_date}</span></p>
                    </div>
                    <div className='my-2'>
                        <h3 className="underline text-green-400 text-2xl font-semibold mb-3">{tagline}</h3>
                        <p className='text-lg'>{overview}</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-green-400 text-2xl font-semibold'>Company Credits</h2>
                        <ul>{production_companies?.map((companies, index) => (
                            <li className='text-xl my-2' key={index}>{companies.name}</li>
                        ))}</ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-green-400 text-2xl font-semibold'>Countries</h2>
                        <ul>{production_countries?.map((countries, index) => (
                            <li className='text-xl my-2' key={index}>{countries.name}</li>
                        ))}</ul>
                    </div>
                    <div className="flex flex-col mt-3">
                        <h2 className='text-green-400 text-xl font-semibold'>Box Office</h2>
                        <p className='text-lg'><strong>Budget:</strong> $0</p>
                        <p className='text-lg'><strong>Revenue:</strong> $0</p>
                    </div>
                    <div className="flex gap-5 mt-2 items-center">
                        <div>
                            <h2 className='text-2xl font-semibold text-green-400'>Rating</h2>
                            <p className='text-xl mt-2'>{vote_average}/10</p>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-green-400'>Runtime</h2>
                            <p className='text-xl mt-2'>{runtime} minutes</p>
                        </div>
                    </div>
                    <div>
                        <Link to={`/player/${id}`}>
                            <button type="button"
                                    className="text-black bg-gray-700 mt-5 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600  inline-flex items-center gap-2 hover:duration-200 hover:transition-ease">
                                <img className='max-w-6 h-auto' src={player_icon}></img>
                                Play
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}