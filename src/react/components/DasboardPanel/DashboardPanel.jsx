import styles from './dashboardPanel.module.css';
import { Profile } from './components/Profile/Profile';

export default () => {
	return (
		<div className={styles.dashboard_panel}>
			<Profile />
		</div>
	);
};
