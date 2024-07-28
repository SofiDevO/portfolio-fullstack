export class HTTPError extends Error {
	constructor(response) {
		super(`HTTP Error: ${response.status}`);
		this.status = response.status;
		this.response = response;
	}
}
