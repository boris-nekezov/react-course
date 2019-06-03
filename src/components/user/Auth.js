import React from 'react';
import Login from './Login'

const Auth = ({ children }) => {
    // vzimam tokena
    const token = localStorage.getItem('token')
    // pravim provekrka ako nqma token
    if(!token){
        return <Login />
    }

    console.log({ token })
    return children;
}

export default Auth;