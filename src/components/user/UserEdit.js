import React, { useEffect, useState } from 'react';
import { getUserById } from '../../api/User';
// import paramCase = require('param-case');

// 2
const UserEdit = ({match}) => {
	// console.log('{props}', {props});
	const [user, setUser] = useState(null)
	const { id } = match.params;

	useEffect(() => {
		async function fetch(){
			const response = await getUserById(id);
			setUser(response); 
			console.log({ response });
		}
		fetch();
	}, [])

	function onChange(field, value){
		const temp = {...user}
		temp[field] = value;
		setUser(temp);
	}

	function goBack(){
		window.location.href= '/'
	}

	return (
		<div>
			<p>Name: </p>
			<input 
				value={user && user.name} 
				onChange={(e) => onChange('name', e.target.value)}/>
			
			<p>Phone: </p>
			<input 
				value={user && user.phone} 
				onChange={(e) =>  onChange('phone', e.target.value)}/>

			<p>Username: </p>
			<input 
				value={user && user.username} 
				onChange={(e) => onChange('username', e.target.value)}/>

			<p>Website: </p>
			<input 
				value={user && user.website} 
				onChange={(e) => onChange('username', e.target.value)}/>
			
			<button onClick={() => goBack()}>Go back</button>
			<button onClick={() => console.log({ user })}>Save</button>
		</div>
	);
}

// class UserEdit extends React.Component {
// 	state = {
// 		user: {
// 			username: '',
// 			password: ''
// 		}
// 	};

// 	changeField = (field, value) => {
// 		// this is spread operator and here it's used to clone user object
// 		// so we can edit it after that, because if we don't make new instance
// 		// of the object we edit the current state
// 		// url: https://stackoverflow.com/questions/39736397/is-this-a-good-way-to-clone-an-object-in-es6
// 		const user = { ...this.state.user };
// 		user[field] = value;

// 		this.setState({
// 			user
// 		});
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<p>Username: {this.state.user.username}</p>
// 				<span>Change me:</span>
// 				<input onChange={e => this.changeField('username', e.target.value)} />

// 				<p>Password: {this.state.user.password}</p>
// 				<span>change password:</span>
// 				<input onChange={e => this.changeField('password', e.target.value)} />
// 			</div>
// 		);
// 	}
// }

export default UserEdit;
