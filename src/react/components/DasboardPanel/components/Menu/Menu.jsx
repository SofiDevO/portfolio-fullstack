import styles from './menu.module.css';
export const Menu = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.item} is-selected="true">
				<iconify-icon icon="mdi:star" />
				<span>Project cards</span>
			</div>
		</div>
	);
};
