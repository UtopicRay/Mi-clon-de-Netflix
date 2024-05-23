import { useState} from "react";
import {auth} from "../../firebase.js";
import {AuthContext} from "./AuthContext.js";

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    auth?.onAuthStateChanged((user) => {
        setCurrentUser(user?.email);
    })
    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}