import logo from "../assets/logo.png";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../firebase.js";
import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext.js";

export default function Navbar() {
    const {currentUser} = useContext(AuthContext);
    const navigate=useNavigate();
    const [visible,setVisible]=useState(false);
    const handleLogout = () => {
        logout();
        navigate('/login');
    }
    return (
        <nav
            className="flex justify-between items-center p-5 z-10  w-full fixed"
            style={{
                backgroundImage:
                    "linear-gradient(180deg, rgba(0,0,0,0.7) 10%,transparent)",
            }}
        >
            <div className="flex">
                <Link to={`/`}>
                    <img src={logo} className="w-20" alt="logo de NexFlix"></img>
                </Link>
                <ul className="ml-10 hidden sm:flex">
                    <li className="mr-3 cursor-pointer"><Link to='/'>Home</Link></li>
                    <li className="mr-3 cursor-pointer"><Link to={`/movies`}>Movies</Link></li>
                </ul>
            </div>
            <div className="flex items-center gap-3 z-10">
                <div className="flex flex-col z-10">
                    <button
                        className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0  dark:focus:ring-gray-700 dark:text-white"
                        type="button"
                        onClick={()=>setVisible(!visible)}
                    >
                        <span className="sr-only">Open user menu</span>
                        <img src={profile_img} alt="imagen de usuario de netflix"/>
                        {currentUser ? (<p className='text-white mx-2'>{currentUser}</p>) : ""}
                        <img className={`mx-2`} src={caret_icon} alt="imagen de buscador"/>
                    </button>
                    <div className={`z-10 bg-gray-600 absolute right-4  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 top-14 ${visible?"animate-fade animate-duration-300":"hidden"}`}>
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div className="truncate"> {currentUser ? (
                                    <button className="text-white hover:underline" onClick={handleLogout}>Sing out</button>
                                ) :
                                (
                                    <Link to={`/login`} className="text-white hover:underline">login</Link>)
                            } </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
