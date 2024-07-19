import React, { useEffect } from 'react';
import { getPortafolioData } from '../../data/portfolioData';
import Card from "../../molecules/CardPortfolioDashboad/CardPortfolioDashboad"
import '../../organisms/Portfolio/portfolio.css';

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
        <div className="portfolio__elements">
          {getPortafolioData.map((props) => (
            <Card key={props.id} {...props} />
          ))}
        </div>

    </>
  )
}

export default CardPortfolioDashboad
