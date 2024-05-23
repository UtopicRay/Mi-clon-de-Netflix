import Home from './pages/Home'
import Login from './pages/Login'
import {Route, Routes} from 'react-router-dom'
import {MovieInfo} from "./pages/MovieInfo.jsx";
import Player from "./pages/Player.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Movies} from "./pages/Movies.jsx";
import {PrivateRoute} from "./components/PrivateRoute.jsx";


export default function App() {

    return (
        <>
            <ToastContainer theme={"dark"}/>
            <Routes>
                <Route path='/' id='home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path={'/player/:id'} element={
                    <PrivateRoute>
                        <Player/>
                    </PrivateRoute>
                }></Route>
                <Route path='/movie/details/:id' element={<MovieInfo/>}/>
                <Route path='/movies' element={<Movies/>}/>
            </Routes>
        </>
    )
}

