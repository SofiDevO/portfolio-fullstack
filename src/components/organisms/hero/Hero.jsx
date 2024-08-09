import { useEffect, useRef, useState } from 'react';
import  './hero.css';
import Boton from '@src/components/atoms/Button/Boton';
import { getUserInfo } from '@src/services';
import { baseURL } from '@services/services';


const defaultIMG = '/img/jhon-doe.webp';

const Hero = () => {
	const [name, setName] = useState('');
	const [profileImg, setProfileImg] = useState('');
	const userNameRef = useRef('');
	const nameRef = useRef('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const userRawData = await getUserInfo();
		const { name, profile_img, user_name } = await userRawData.json();
		const img = baseURL + profile_img;
		setName(name);
		nameRef.current = name;
		userNameRef.current = user_name;
		if (!img?.endsWith('.none')) return setProfileImg(img);
		setProfileImg(defaultIMG);
	};

	return (
		<div>
			<section className="hero">
				<div className="hero__container">
					<div className="text__content">
						<h1 className="hero__title"> {name || 'Jhon Doe'} </h1>
						<p className="hero__text">
							Una descripción breve y llamativa sobre el tema principal del sitio
						</p>
						<Boton href="#" texto="Quiero saber más" />
					</div>
					<img
						className="hero__img"
						src={profileImg}
						alt={`${name || 'User'}'s profile image`}
						width="384"
						height="384"
					/>
				</div>
			</section>
		</div>
	);
};

export default Hero;
