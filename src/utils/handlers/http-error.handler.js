export const httpErrorHandler = async (response, setError) => {
	const contentType = response?.headers?.get('Content-Type') || '';
	if (!contentType?.includes('application/json')) return false;
	if (response.status != 400 && response.status != 409) return false;
	const causeInfo = await response.json();
	if (!Array.isArray(causeInfo)) return false;
	causeInfo.forEach(({ path, message }) => {
		setError(path, { message });
	});
	return true;
};
