import { useEffect } from 'react';
import { getPortafolioData } from '@data/portfolioData';
import Card from '@src/react/organisms/PortfolioCard/PortfolioCard';
import { getIMGAverageColor } from '@utils/average-img-color/average-img-color';

const CardPortfolioDashboad = () => {
	useEffect(() => {
		const $cards = document.querySelectorAll('.card__portfolio');
		$cards.forEach((card) => {
			const $container = card.querySelector('.descripcion__container');
			const $img = card.querySelector('img');
			if (!$img || !$container) return;

			const setBg = () => {
				const [rbgString] = getIMGAverageColor($img, 0.7);
				$container.style.background = rbgString;
			};
			setBg();
			$img.onload = setBg;
		});
	}, []);

	return (
		<>
			<section className="flex w-full  items-center h-auto min-h-[100vh]">
				<div className="flex flex-wrap gap-3 justify-center self-center items-center">
					{getPortafolioData.map((props, index) => (
						// Se debe usar siempre una key cuando colocas elementos en un bucle
						<Card
							keyValue={props.title}
							/*Faltaba esta Key*/ key={index}
							{...props}
							edit={true}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default CardPortfolioDashboad;
