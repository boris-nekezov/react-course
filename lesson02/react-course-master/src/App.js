import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Main from './main';
import UserList from './components/user/UserList';

function App() {
	return (
		<div>
			<Main />
			<UserList />
		</div>		
	);
}

export default App;


{/* <Switch>
			<Route exact path="/" component={Main} />
		</Switch> */}