import styles from './dashboardPanel.module.css';
import { Profile } from './components/profile/profile';

export default () => {
	return (
		<div className={styles.dashboard_panel}>
			<Profile />
		</div>
	);
};
