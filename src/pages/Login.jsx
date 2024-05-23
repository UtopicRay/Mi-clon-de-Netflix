import logo from '../assets/logo.png'
import {useState} from "react";
import {login, signUp} from "../../firebase.js";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    const [signIn, setSignIn] = useState("Sign In")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()
    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    const authentication = async () => {
        if (signIn === 'Login') {
          const respuesta=  await login(email, password);
          if (respuesta==='success'){
          navigate('/')
          }
        } else {
            await signUp(name, email, password)
        }
    }

    return (
        <div className='login'>
            <Link to={`/`}>
                <img className='max-w-40' src={logo} alt={`logo de Netflix`}></img>
            </Link>
            <form className="max-w-sm mx-auto my-12 bg-black/60 p-6">
            <h1 className='font-bold text-2xl mt-2 mb-8'>{signIn}</h1>
                {signIn === 'Login' ? '' : (<div className='mb-5'>
                    <input type='text' className='bg-gray-700 text-sm rounded-lg w-full'
                           value={name} onChange={handleChangeName}
                           placeholder='Your Name'/>
                </div>)}

                <div className="mb-5">
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium  dark:text-white"></label>
                    <input type="email" id="email"
                           className="bg-gray-700  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           value={email} onChange={handleChangeEmail}
                           placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <input type="password" id="password"
                           className="bg-gray-700    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           value={password} onChange={handleChangePassword}
                           placeholder='Password'
                           required/>
                </div>
                <button type="submit"
                        className="text-white w-full bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text- px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={(e) => {
                            e.preventDefault();
                            authentication()
                        }}>Submit
                </button>
                <div className="flex justify-between mb-5 mt-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value=""
                               className="w-4 h-4  border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                               required/>
                        <label htmlFor="remember"
                               className="ms-2 text-sm font-medium text-gray-300">Remember
                            me</label>
                    </div>
                    <div>
                        <a href='#' className='hover:underline'>Need for help?</a>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <a href='#' className='hover:underline' onClick={() => {
                        setSignIn('Sign In')
                    }}>New in NetFlix? Sign up Now</a>
                    <a href='#' className='hover:underline' onClick={() => {
                        setSignIn('Login')
                    }}>Already have a account? Sing in Now</a>
                </div>
            </form>
        </div>
    )
}
