import styles from './dashboardPanel.module.css';
import { Profile } from './components/Profile/Profile';
import { Menu } from './components/Menu/Menu';

export default () => {
	return (
		<div className={styles.dashboard_panel}>
			<Profile />
			<Menu />
		</div>
	);
};
