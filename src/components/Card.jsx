import player_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import {useState} from "react";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function Card({title, img,id,max}) {
    const [isHovering, setIsHovering] = useState(false)
    return (
            <div className='w-full animate-fade-up'>
                <div className='relative mb-5' style={{overflow:'hidden'}}
                     onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                    <img className={`${max?`max-w-full`:'max-w-[180px]'}  h-auto rounded-md cursor-pointer`}
                         src={img}
                         alt={`imagen de ${title}`}></img>
                    <p className={`absolute right-2 font-semibold hover:underline transition-all duration-200 ${isHovering ? 'bottom-16' : 'bottom-4'} `}>{title}</p>
                    <div
                        className={`flex gap-2 ${max?"justify-end":'justify-center'}  w-full  absolute transition-all duration-200 ${isHovering ? 'bottom-0' : '-bottom-[70px]'}`}>
                        <Link to={`/player/${id}`}>
                            <button type="button"
                                    className="text-black bg-white hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-2 py-2.5 text-center ml-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600  inline-flex items-center gap-2 hover:duration-200 hover:transition-ease">
                                <img className='max-w-6 h-auto' src={player_icon} alt={`imagen de play`}></img>
                                Play
                            </button>
                        </Link>
                        <Link to={`/movie/details/${id}`}>
                            <button type="button"
                                    className=" hover:text-black  border border-gray-800 bg-gray-900  font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 inline-flex items-center gap-2 hover:duration-200 hover:transition-ease">
                                <img className='max-w-6 h-auto' src={info_icon} alt={`icono de informacion`}></img>
                                Info
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}