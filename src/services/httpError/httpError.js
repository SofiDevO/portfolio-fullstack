export class HTTPError extends Error{
	constructor(response) {
		super(`HTTP Error: ${response.status}`)
		this.status = response.status;
		if (response.status == 400) {
			this.causes = response.json();
		}
	}
}