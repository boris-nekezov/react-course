import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import UserEdit from './components/user/UserEdit';
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
					<Route path="/" component={UserList} />
				</Auth>
			</Switch>		
		</React.Fragment>
	);
}

export default App;

