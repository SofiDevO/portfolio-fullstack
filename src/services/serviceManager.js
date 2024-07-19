// Clase para gestionar servicios de red
export class ServiceManager {
	// Encabezados para solicitudes JSON privadas
	#jsonHeaders = { 'Content-Type': 'application/json' };

	// Encabezados para solicitudes multipart/form-data privadas
	#formDataHeaders = { 'Content-Type': 'multipart/form-data' };

	// Constructor que inicializa la URL base y las opciones de configuración para fetch
	constructor(baseURL, mode, credentials) {
		// Opciones base para las solicitudes fetch
		this.baseFetchOptions = { mode, credentials };
		this.baseURL = baseURL; // URL base para todas las solicitudes
	}

	// Método GET para realizar una solicitud GET
	async GET(path) {
		const fetchOptions = { ...this.baseFetchOptions, method: 'GET' }; // Opciones de fetch con método GET
		const res = await fetch(this.baseURL + path, fetchOptions); // Realiza la solicitud GET

		// Si la respuesta no es exitosa, lanza un error HTTP
		if (!res.ok) throw new HTTPError(await res.json());
		return res; // Devuelve la respuesta
	}

	// Método para realizar una solicitud JSON con el método especificado
	async Json(dataJSON, path, method) {
		const body = JSON.stringify(dataJSON); // Convierte los datos JSON a una cadena
		const fetchOptions = {
			...this.baseFetchOptions,
			method,
			headers: this.#jsonHeaders,
			body,
		};
		const res = await fetch(this.baseURL + path, fetchOptions); // Realiza la solicitud JSON

		// Si la respuesta no es exitosa, lanza un error HTTP
		if (!res.ok) throw new HTTPError(await res.json());
		return res; // Devuelve la respuesta
	}

	// Método para realizar una solicitud FormData con el método especificado
	async FormData(dataJSON, path, method) {
		const body = new FormData(); // Crea un nuevo FormData
		const entries = Object.entries(dataJSON); // Convierte los datos JSON a entradas
		entries.forEach(([name, value]) => body.append(name, value)); // Añade cada entrada a FormData
		const fetchOptions = {
			...this.baseFetchOptions,
			method,
			headers: this.#formDataHeaders,
			body,
		};
		const res = await fetch(this.baseURL + path, fetchOptions); // Realiza la solicitud FormData

		// Si la respuesta no es exitosa, lanza un error HTTP
		if (!res.ok) throw new HTTPError(await res.json());
		return res; // Devuelve la respuesta
	}

	// Método para realizar una solicitud POST con FormData
	async POSTFormData(dataJSON, path) {
		return await this.FormData(dataJSON, path, 'POST');
	}

	// Método para realizar una solicitud PATCH con FormData
	async PATCHFormData(dataJSON, path) {
		return await this.FormData(dataJSON, path, 'PATCH');
	}

	// Método para realizar una solicitud POST con JSON
	async POSTJson(dataJSON, path) {
		return await this.Json(dataJSON, path, 'POST');
	}
}

// Clase para gestionar errores HTTP (debe ser definida en otro lugar)
class HTTPError extends Error {
	constructor(response) {
		super(`HTTP Error: ${response.status}`);
		this.name = 'HTTPError';
		this.response = response;
	}
}