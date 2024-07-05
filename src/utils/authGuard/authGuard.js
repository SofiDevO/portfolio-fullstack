export const authGuard = () => {
	const status = localStorage.getItem('loginStatus') == 'ok' ? true : false;
	if (!status) navigation.navigate('/');
	return status;
};
