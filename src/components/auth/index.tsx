import React from "react"
import Login from "../../pages/login";

const Auth = ({ children }: any) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return isAuthenticated ? children : <Login/>;
  };

export default Auth