import { PATHS } from '@src/constants/paths';

export class HTTPError extends Error {
	constructor(response) {
		super(`HTTP Error: ${response.status}`);
		this.status = response.status;
		this.response = response;
		if (response.status == 401) location.href = PATHS.INDEX;
	}
}
