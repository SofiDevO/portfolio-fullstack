import React from 'react';
import './card-portfolio.css';

const CardPortfolio = ({
  title,
  descripcion,
  imgSrc,
  skills,
  repoURL,
  demoURL,
  averageBrightness,
}) => {
  return (
    <div className="card__portfolio">
      <img
        src={imgSrc}
        alt={title}
        crossOrigin="anonymous"
        height={130}
        width={332}
        loading="lazy"
        average-brightness={averageBrightness}
      />

      <div className="descripcion__container">
        <h2 className="card__title">{title}</h2>
        <div className="descripcion">
          <p>{descripcion}</p>

          <div className="skills">
            {skills.map((skill, index) => (
              <iconify-icon key={index} className="iconify" icon={skill}  width="32" height="32"/>
            ))}
          </div>

          <div className="buttons">
            <a href={repoURL}>
              <span>
                Github
                <iconify-icon icon="quill:link-out" />
              </span>
            </a>

            <a href={demoURL}>
              <span>
                Demo
                <iconify-icon icon="quill:link-out" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
