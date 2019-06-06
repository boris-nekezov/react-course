import React, {useEffect, useState} from 'react';
import Login from './Login'
import UserContext from '../../context/UserContext'
import { fetchCurrentUser } from '../../api/User'

const Auth = ({ children }) => {
    // we get the token here
    const token = localStorage.getItem('token')
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch(){
            const userResponse = await fetchCurrentUser();
            userResponse.permissions = {
                canEdit: true
            }

            setUser(userResponse);
            setLoading(false);
            // console.log({ userResponse });
        } 

        fetch();
    }, []);

    if (loading){
        return <div>Loading ... </div>
    }

    if(!user){
        return <Login />
    }

    // pravim provekrka ako nqma token
    // if(!token){
        // return <Login />
    // }

    // console.log({ token })
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default Auth;

// COntext - kratka versiq na Redux i FLux
// Context - se polzva za malki proekti

// ako imam nujda ot asinhronna funkciq useEffect
// 