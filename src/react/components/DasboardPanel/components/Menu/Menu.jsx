import { PATHS } from '@src/constants/paths';
import styles from './menu.module.css';
export const Menu = ({ route }) => {
	return (
		<div className={styles.menu}>
			<div
				className={styles.item}
				is-selected={`${route == PATHS.DASHBOARD_PROJECTS}`}
			>
				<iconify-icon icon="mdi:star" />
				<span>Project cards</span>
			</div>
		</div>
	);
};
