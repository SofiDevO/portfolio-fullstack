import { useState, useRef, useEffect } from 'react';
import DashboardForm from '../DashboardForm/DashboardForm';
import { getUserInfo } from '@src/services';
const base = "https://sofi.igarrux.com"

export default () => {
	const [userInfo, setUserInfo] = useState();
	const dialogRef = useRef();
	useEffect(() => {
		getUserInfo()
			.then((res) => res.json())
			.then(setUserInfo)
            .catch(console.log);
	},[]);


// reinicia el server de astro
	const handleClose = () => {
		dialogRef.current?.close();
	};

	const handleOpen = () => {
		dialogRef.current?.showModal();
	};

    const hasImg = !userInfo?.profile_img?.endsWith(".undefined");
    const user_img = hasImg ? base + userInfo?.profile_img : "/img/jhon-doe.webp";
	return (
		<div className="bg-primary10 h-auto min-h-[100dvh] w-[24rem] py-10 flex flex-col items-center gap-10">
			<div className="px-4 flex flex-col gap-3">

				<img
                        src={user_img}
                        alt="foto de perfil de Jhon Doe"
                        className="w-[150px] h-[150px] min-w-[150px] min-h-[150px] rounded-full"
                />
                <h2 className='text-2xl text-center '>{userInfo?.name}</h2>

				<button
					id="open-verlay"
                    onClick={handleOpen}
					className="rounded-full text-[1.9rem] text-center px-3 py-3 bg-primary60 cursor-pointer hover:opacity-[0.75]"
				>
					Actualizar perfil
				</button>
			</div>
			<ul className="text-white flex flex-col gap-10 w-full py-5 *:text-[1.6rem]">
				<li>
					<a
						className="group px-2 py-5 w-full flex items-center gap-[10px] hover:bg-[#5F4E88]"
						href="#"
					>
						<iconify-icon
							className="text-primary90 group-hover:text-[#59ed83]"
							icon="ph:cards-bold"
						></iconify-icon>
						Cards Proyectos
					</a>
				</li>
				<li>
					<a
						className="group px-2 py-5 w-full flex items-center gap-[10px] hover:bg-[#5F4E88]"
						href="#"
					>
						<iconify-icon
							className="text-primary90 group-hover:text-[#59ed83]"
							icon="carbon:blog"
						></iconify-icon>
						Últimos posts
					</a>
				</li>
			</ul>
			<dialog
				ref={dialogRef}
				className="bg-primary10 text-white px-16 py-10 z-30"
			>
				<DashboardForm />
				<button id="close-overlay" onClick={handleClose}>OK</button>
			</dialog>
		</div>
	);
};
