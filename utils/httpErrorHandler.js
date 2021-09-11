class HttpError extends Error {
	constructor(response) {
		super(`${response.url} got ${response.status} status.`);
		this.name 		= "HttpError";
		this.response 	= response;
	}
}

export default HttpError;