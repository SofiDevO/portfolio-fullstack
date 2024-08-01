import styles from './dashboard-projects.module.css';
import PortfolioCard from '@src/react/organisms/PortfolioCard/PortfolioCard';
import { UI_TEXT } from './ui/text';
import { useEffect, useState } from 'react';
import { getUserCards } from '@src/services/get-user-cards.service';
export const DashboardProjects = () => {
	const [userCards, setUserCards] = useState(null);
	useEffect(() => {
		getUserCards()
			.then((res) => res.json())
			.then(setUserCards);
	}, []);
	return (
		<div className={styles.DashboardProjects}>
			<h2>{UI_TEXT.TITLE}</h2>
			<div className={styles.cards}>
				{!userCards && (
					<>
						<PortfolioCard isLoading="true" />
						<PortfolioCard isLoading="true" />
						<PortfolioCard isLoading="true" />
					</>
				)}
			</div>
		</div>
	);
};
