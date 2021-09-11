import fetchUrl from '../utils/fetchUrl.js';
import HttpError from '../utils/httpErrorHandler.js';

async function usingVirustotal(apiKey, domain) {
	let request;

	try {
		request = await fetchUrl(`https://www.virustotal.com/vtapi/v2/domain/report?apikey=${apiKey}&domain=${domain}`);
	} catch(error) {
		if (error instanceof HttpError && error.response.status == 404) {
        	console.log(error);
     	} else {
       		throw error;
      	}
	}
	
	return request;
}

export default usingVirustotal;