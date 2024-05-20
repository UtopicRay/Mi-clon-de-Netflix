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
                              genres
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

// Ejemplo de uso
    const tiempoEnMinutos = 115;
    const resultado = convertirAHoraMinutos(tiempoEnMinutos);
    console.log(resultado); // Salida: 1 hora y 55 minutos

    return (
        <div className='container m-auto bg-white/50 rounded-lg'>
            <div className="p-3 grid grid-cols-2 font-sans">
                <div className=" flex justify-center">
                    <img src={`https://image.tmdb.org/t/p/w500/` + poster_path}></img>
                </div>
                <div className="text-left mt-4 ">
                    <h1 className='text-3xl font-semibold mb-3'>{title}
                    </h1>
                    <div className="flex items-center mb-5">
                        <span className="bg-violet-800 rounded-md px-2 py-2 text-xl mr-2"><span
                            id="status">{status}</span></span>
                        <p className='text-xl'>{convertirAHoraMinutos(runtime)} <span>| {genres.map((genre, index) => (
                            <span key={genre.id}>{index>genres.length-2 ? ` ${genre.name} ` : `${genre.name},`}</span>))}</span>
                            <span>| {release_date}</span></p>
                    </div>
                    <div className='my-2'>
                        <h3 className="underline text-green-400 text-2xl font-semibold mb-3">{tagline}</h3>
                        <p className='text-lg'>{overview}</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-green-400 text-2xl font-semibold'>Company Credits</h2>
                        <ul>{production_companies.map((companies, index) => (
                            <li className='text-xl my-2' key={index}>{companies.name}</li>
                        ))}</ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-green-400 text-2xl font-semibold'>Countries</h2>
                        <ul>{production_countries.map((countries, index) => (
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
                </div>
            </div>
        </div>
    )
}