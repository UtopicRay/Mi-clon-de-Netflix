import hero_banner from '/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import player_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className='relative'>
      <img src={hero_banner} className='banner_img ' alt='imagen de la pelicula'
      style={{maskImage:'linear-gradient(to right,transparent, black 75%)'}}
      ></img>
       <div className='absolute w-full pl-[4%] bottom-0'>
        <img className='w-[90%] mb-10 max-w-sm' src={hero_title} alt='Titulo de la Pelicula'></img>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vero. Magni qui necessitatibus adipisci voluptates rem harum quis sapiente quas totam ipsa. Iure, molestiae iusto?</p>
        <div className='flex gap-2 my-10'>
        <button type="button" className="text-black bg-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 inline-flex items-center gap-2">
          <img className='max-w-6 h-auto' src={player_icon}></img>
          Play
        </button>
        <button type="button" className=" bg-white/5 text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 inline-flex items-center gap-2 hover:duration-200 hover:transition-ease">
         <img className='max-w-6 h-auto' src={info_icon}></img>
          Description
        </button>
        </div>
        <TitleCards category='popular'></TitleCards>
        </div>
    </div>
    <div className='pl-[3%]'>
      <TitleCards title='Only on Netflix'></TitleCards>
      <TitleCards title='Upcoming' category='upcoming'></TitleCards>
      <TitleCards title='Top Pick for you' category='top_rated'></TitleCards>
    </div>
    <Footer></Footer>
    </>)
}
