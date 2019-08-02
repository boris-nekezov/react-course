import React, { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../api/User';
import UserContext from '../../context/UserContext'
import { GET_USERS } from '../../api/API_URL'

const UserList = () => {
    
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');

    const currentUser = useContext(UserContext);
    // console.log('currentUser: ', currentUser);

    useEffect(() => {
        async function fetchUsers(){
            const userResponse = await getUsers();
            setUsers(userResponse)
            // console.log('users', users);
        }
        
        fetchUsers();   

        const foundFilter = localStorage.getItem('filter')

        if(foundFilter){
            setFilter(foundFilter);
        }
    }, [])

    function changeFilter(value){
        setFilter(value);
        localStorage.setItem('filter', value);
    }

    function navigate(id){
        const {permissions} = currentUser;

        if(!permissions.canEdit){
            return null;
        }

        window.location.href = `/user/${id}`
    }

    //  console.log('users', users);
    // (user.website)
    // ({website}) looks in user
    const filteredUsers = users.filter(({ name }) => name.includes(filter) )

    return (
        <div>
        <button onClick={() => setFilter('')}>CLEAR</button>
        <button onClick={() => setFilter('.com')}>all with .com</button>
        <button onClick={() => setFilter('.org')}>all with .org</button>
        <button onClick={() => setFilter('.biz')}>all with .biz</button>

        <hr/>
        <input value={filter}
            onChange={(e) => changeFilter(e.target.value)}/>
        <hr/>

        {filteredUsers.map((user, index) => {
            const { name, id } = user;

            return (
                <div 
                    key={index} 
                    onClick={() => navigate(id)}>
                    <p>{id}</p>
                    <p>{name}</p>
                    <hr />  
                </div>
            );
        })}    
        </div>
    )
}
//  window.location.href = `/user/${id}`
export default UserList;