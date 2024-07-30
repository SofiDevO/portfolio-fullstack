import { useState, useRef, useEffect } from 'react';
import styles from './dashboardPanel.module.css';
import DashboardForm from '../../DashboardForm/DashboardForm';
import { getUserInfo } from '@src/services';
import { Profile } from './components/profile/profile';
const base = 'https://sofi.igarrux.com';
import { ToastContainer } from 'react-toastify';

export default () => {
	const [userInfo, setUserInfo] = useState();
	const dialogRef = useRef();
	useEffect(() => {
		getUserInfo()
			.then((res) => res.json())
			.then(setUserInfo);
		// .catch(console.log);
	}, []);

	// reinicia el server de astro
	const handleClose = () => {
		dialogRef.current?.close();
	};

	const handleOpen = () => {
		dialogRef.current?.showModal();
	};

	const hasImg = !userInfo?.profile_img?.endsWith('.none');
	const user_img = hasImg
		? base + userInfo?.profile_img
		: '/img/profile_placeholder.png';
	return (
		<div className={styles.dashboard_panel}>
			<Profile />
		</div>
	);
};
