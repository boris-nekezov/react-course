import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/User';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [filter, setfilter] = useState('');

 useEffect(() => {
    async function fetchUsers(){
        const userResponse = await getUsers();
        setUsers(userResponse)
        // console.log('users', users);
    }
 fetchUsers();   
 }, [])

 console.log('users', users);
 // (user.website)
 // ({website}) looks in user
const filteredUsers = users.filter(({ website }) => website.includes(filter) )

 return (
    <div>
        <button onClick={() => setfilter('')}>CLEAR</button>
        <button onClick={() => setfilter('.com')}>all with .com</button>
        <button onClick={() => setfilter('.org')}>all with .org</button>
        <button onClick={() => setfilter('.biz')}>all with .biz</button>

        {filteredUsers.map(user => {
            const { name, id } = user;
            return (
                <div key={id}>
                    <p>{id}</p>
                    <p>{name}</p>
                    <hr />  
                </div>
            );
        })}    
    </div>
 )
}

export default UserList;