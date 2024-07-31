import './card-portfolio.css';

const CardPortfolio = ({
	title,
	descripcion,
	imgSrc,
	skills,
	repoURL,
	demoURL,
	averageBrightness,
	edit = false,
}) => {
	return (
		<>
			<div className="card__portfolio">
				{edit && (
					<a className="card__edit" href="/edit-portfolio">
						<iconify-icon
							icon="mage:edit-fill"
							width="32"
							height="32"
						></iconify-icon>
					</a>
				)}
				<img
					src={imgSrc}
					alt={title}
					crossOrigin="anonymous"
					height={130}
					width={332}
					loading="lazy"
					data-average-brightness={averageBrightness}
				/>

				<div className="descripcion__container">
					<h2 className="card__title">{title}</h2>
					<div className="descripcion">
						<p>{descripcion}</p>

						<div className="skills">
							{skills.map((skill, index) => (
								//Estás usando la misma key! Debe de ser unica
								// Cada map o elementos que se hagan en bucle, cada uno debe de tener una diferente.
								// En la mayoria de casos, puedes usar el indice
								<div key={index}>
									<iconify-icon
										className="iconify"
										icon={skill}
										width="32"
										height="32"
									/>
								</div>
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
		</>
	);
};

export default CardPortfolio;
