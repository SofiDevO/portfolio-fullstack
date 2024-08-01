import './portfolio-card.css';

export default ({
	title,
	descripcion,
	imgSrc,
	skills = ['eos-icons:three-dots-loading', 'eos-icons:three-dots-loading'],
	repoURL,
	demoURL,
	averageBrightness,
	isLoading = false,
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
					is-loading={isLoading}
					crossOrigin="anonymous"
					height={130}
					width={332}
					loading="lazy"
					data-average-brightness={averageBrightness}
				/>

				<div className="descripcion__container">
					<h2 className="card__title">{title}</h2>
					<div className="descripcion">
						<p is-loading={isLoading}>{descripcion}</p>

						<div className="skills">
							{skills.map((skill, index) => (
								//Estás usando la misma key! Debe de ser unica
								// Cada map o elementos que se hagan en bucle, cada uno debe de tener una diferente.
								// En la mayoria de casos, puedes usar el indice
								<div key={index}>
									<iconify-icon
										is-loading={isLoading}
										className="iconify"
										icon={skill}
										width="32"
										height="32"
									/>
								</div>
							))}
						</div>

						<div className="buttons">
							<a href={repoURL} is-loading={isLoading}>
								<span>
									Github
									<iconify-icon icon="quill:link-out" />
								</span>
							</a>

							<a href={demoURL} is-loading={isLoading}>
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
