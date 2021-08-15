import React, { useState } from 'react';

const AuthContext=React.createContext({
isLoggedIn:false,
onLogout:()=>{},
onLogin:(email,password)=>{}
});
export const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const logoutHandler=()=>{
        setIsLoggedIn(false)
    }
    const logInHandler=()=>{
        setIsLoggedIn(false)
    }
    return <AuthContextProvider
    value={{
        isLoggedIn:isLoggedIn,onLogout:logoutHandler,logInHandler:logInHandler
    }}
    >{props.children}</AuthContextProvider>
}
export default AuthContext;