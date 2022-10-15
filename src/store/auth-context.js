import React, { useState,createContext, useEffect } from 'react'
export const AuthContext=createContext(
    {
        token:'',
        isLoggedIn:false,
        login:token=>{},
        logout:()=>{},
    }
)

const AuthContextProvider=props=>{
const [token,setToken]=useState(null);

const isLoggedIn=!!token;
const loginHandler=token=>{
   
setToken(token);
localStorage.setItem("token",token);
localStorage.setItem("currentLoginTime",(new Date().getTime()));

}
const logoutHandler=()=>{
 setToken(null);
 localStorage.removeItem("token");
}
const ContextValue={
    token,isLoggedIn,login:loginHandler,logout:logoutHandler
}
return <AuthContext.Provider value={ContextValue}>{props.children}</AuthContext.Provider>

}
export default AuthContextProvider;