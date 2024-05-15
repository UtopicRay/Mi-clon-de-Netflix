import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import {MovieInfo} from "./pages/MovieInfo.jsx";
export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>\
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/movie/details/:id' element={<MovieInfo/>}></Route>
    </Routes>
    </>
  )
}

