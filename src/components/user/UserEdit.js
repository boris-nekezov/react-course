import React from 'react';

class UserEdit extends React.Component {
	state = {
		user: {
			username: '',
			password: ''
		}
	};

	changeField = (field, value) => {
		// this is spread operator and here it's used to clone user object
		// so we can edit it after that, because if we don't make new instance
		// of the object we edit the current state
		// url: https://stackoverflow.com/questions/39736397/is-this-a-good-way-to-clone-an-object-in-es6
		const user = { ...this.state.user };
		user[field] = value;

		this.setState({
			user
		});
	};

	render() {
		return (
			<div>
				<p>Username: {this.state.user.username}</p>
				<span>Change me:</span>
				<input onChange={e => this.changeField('username', e.target.value)} />

				<p>Password: {this.state.user.password}</p>
				<span>change password:</span>
				<input onChange={e => this.changeField('password', e.target.value)} />
			</div>
		);
	}
}

export default UserEdit;
