import {useContext} from "react";
import {AuthContext} from "../context/AuthContext.js";
import {toast} from "react-toastify";
import {Navigate} from "react-router-dom";

export function PrivateRoute({children}) {
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        toast.success('Necesita iniciar sesion para aceder a la ruta');
       return  <Navigate to={`/login`}></Navigate>
    } else {
        return <>{children}</>
    }

}