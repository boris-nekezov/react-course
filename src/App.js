import React from 'react';
import { Switch, Route } from 'react-router-dom';
//1
import UserEdit from './components/user/UserEdit';
import UserList from './components/user/UserList';
import Login from './components/user/Login';

import Auth from './components/user/Auth';

function Test(){
	return (
		<div>Registration</div>
	)
}

function App() {
	return (
		<React.Fragment>	
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Test} />

				<Auth>
					<Route exact path="/" component={UserList} />
					<Route path="/user/:id" component={UserEdit} />
				</Auth>
			</Switch>		
		</React.Fragment>
	);
}

export default App;

/*
To do list Application
kato se shraktne to do da checknem butoncheto
create
edit
update

*/

