import { useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export const AuthState = (props) =>{

    // const [userDetails , setUserDetails] = useState(null);
    const [ userAuthentication , setuserAuthentication] = useState(false);
    const [username , setUsername ] = useState("");

    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const login = (token) => {
       localStorage.setItem('authentication', true);
       setToken(token);      
       setuserAuthentication(true);
    };

   return(
        <AuthContext.Provider value={{login ,token ,username ,userAuthentication,setuserAuthentication, setUsername ,setToken}}>
            {props.children}
        </AuthContext.Provider>
    )

}