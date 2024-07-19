import React, { useEffect } from 'react';
import { getPortafolioData } from '../../data/portfolioData';
import Card from '../../molecules/card-portfolio/CardPortfolio';
import { getIMGAverageColor } from '../../../utils/average-img-color/average-img-color';
import './portfolio.css';
import MainTitle from '../../atoms/MainTitle';


const Portafolio = () => {
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
    <section
      id="portafolio"
      className="flex flex-col w-full justify-center items-center h-auto min-h-[100vh]"
    >
      <div className="portfolio__container">
        <MainTitle contenido="Portfolio" margin="2rem"/>
        <div className="portfolio__elements">
          {getPortafolioData.map((props) => (
            <Card key={props.id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;