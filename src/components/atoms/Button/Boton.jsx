import './Boton.css';

const Boton = ({ href, texto }) => {
	return (
		<div>
			<a className="primary button" href={href}>
				{texto}
			</a>
		</div>
	);
};

export default Boton;
