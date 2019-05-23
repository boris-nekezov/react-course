import request from 'superagent';
import SuperagentPromisePlugin from 'superagent-promise-plugin';
import { GET_USERS } from './API_URL';

export async function getUsers() {
	try {
		const response = await request
			.get(GET_USERS)
			.use(SuperagentPromisePlugin)
			.set('Content-Type', 'text/plain');
		const responseJson = await response.body;
		return responseJson;
	} catch (e) {
		throw e;
	}
}
