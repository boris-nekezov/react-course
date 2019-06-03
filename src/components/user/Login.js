// we will change vars so add {useState}
import React, { useState } from 'react';
import { login } from '../../api/User'
import history from '../../History';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(){
        const response = await login({ email, password})

        localStorage.setItem('token', response.token);

        history.push('dashboard');
    }

    return (
        <>  
            <p>Email:</p>
            <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />

            <p>Password: </p>
            <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={() => submit()}>Log me dude</button>

            <div>I am login

                    
            </div>
        </>
    )
}

export default Login; 