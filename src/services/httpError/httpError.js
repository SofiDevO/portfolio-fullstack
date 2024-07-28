import { ERROR_MESSAGES } from './messajes';
export class HTTPError {
	constructor(response) {
		this.status = response.status;
		if (response.status == 401) {
			return (this.msg = ERROR_MESSAGES.invalidPassword);
		}
		if (response.status == 400) {
			this.causes = response.json();
		}
		this.msg = response;
	}
}