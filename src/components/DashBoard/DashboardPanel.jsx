import DashboardForm from '../DashboardForm/DashboardForm';
import { useState } from 'react';

const DashboardPanel = () => {
	const [openOverlay, setOpenOverlay] = useState(false);
	const handleOverlay = () => {
		setOpenOverlay(true);
	};

	const handleCloseOverlay = () => {
		setOpenOverlay(false);
	};
	return (
		<div className="bg-primary10 h-auto min-h-[100dvh] w-[14rem] py-10 flex flex-col items-center gap-10">
			<div className="px-4 flex flex-col gap-3">
				<img
					src="../img/jhon-doe.webp"
					alt="fot de perfil de Jhon Doe"
					className="w-[150px] h-[150px] min-w-[150px] min-h-[150px] rounded-full "
				/>
				<buuton
					onClick={handleOverlay}
					className="rounded-full text-sm text-center px-3 py-3 bg-primary60 cursor-pointer hover:opacity-[0.75]"
				>
					Actualizar perfil
				</buuton>
			</div>
			<ul className="*:text-white flex flex-col gap-10 w-full  py-5">
				<li className="">
					<a
						className="group px-2 py-5 w-full flex items-center gap-[10px] hover:bg-[#5F4E88]"
						href=""
					>
						<iconify-icon
							className="text-primary90 group-hover:text-[#59ed83]"
							icon="ph:cards-bold"
						></iconify-icon>
						Cards Proyectos{' '}
					</a>
				</li>
				<li className="">
					<a
						className="group px-2 py-5 w-full flex items-center gap-[10px] hover:bg-[#5F4E88]"
						href=""
					>
						<iconify-icon
							className="text-primary90 group-hover:text-[#59ed83]"
							icon="carbon:blog"
						></iconify-icon>
						Últimos posts{' '}
					</a>
				</li>
				<div className="flex justify-center bg-white"></div>
			</ul>
			{openOverlay && (
				<dialog className="bg-primary10 *:text-white px-16 py-10 z-30" open>
					<DashboardForm />
						<button onClick={handleCloseOverlay}>OK</button>
				</dialog>
			)}
		</div>
	);
};

export default DashboardPanel;
