import fetch from 'cross-fetch';
import HttpError from './httpErrorHandler.js';

async function fetchUrl(url) {
	let response = await fetch(url);
	
	if(response.status == 200) {
		return response.json();
	} else {
		throw new HttpError(response);
	}
}

export default fetchUrl;