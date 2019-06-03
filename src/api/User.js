import request from 'superagent';
import SuperagentPromisePlugin from 'superagent-promise-plugin';
import { GET_USERS, GET_SINGLE_USER } from './API_URL';

export async function getUsers() {
	try {
		const response = await request
			.get(GET_USERS)
			.use(SuperagentPromisePlugin)
			.set('Content-Type', 'text/plain');
		return response.body;
	} catch (e) {
		throw e;
	}
}

export async function login({email, password}){
	try {
		const response = await request
			.get(GET_SINGLE_USER);

		const tempUser = { 
			user: response.body,
			// dev tools, application, local storage, localhost:300
			token: 'OHDGFBPISFUGSDPFIUYSEB:KEJRGEPIWUTGEP' 
		}
		 
		return tempUser;
	} catch (e) {
		throw e;
	}

} 