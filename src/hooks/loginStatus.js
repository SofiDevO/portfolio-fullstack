export const useLoginStatus = () => {
	const [loginStatus, setLoginStatus] = useState(false);
	useEffect(() => {
		const status =
			localStorage.getItem('loginStatus') == 'ok' ? true : false;
		setLoginStatus(status);
	});

	return loginStatus;
};
