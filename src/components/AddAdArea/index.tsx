import { RefObject } from "react";

import MagnifyingGlassPlus from "../../assets/MagnifyingGlassPlus.svg";
import { SetModalType } from "../../types";

type AddAdAreaProps = {
	setModal: SetModalType;
	btnRef: RefObject<HTMLButtonElement>;
};

export const AddAdArea = ({ setModal, btnRef }: AddAdAreaProps) => {
	const handleClickCreateAdModalOpen = (
		event: React.MouseEvent<HTMLElement>
	) => {
		btnRef.current?.blur();
		setModal({ open: true, id: "0" });
	};

	return (
		<div className='flex md:justify-start justify-center flex-wrap 2xl:flex-nowrap 2xl:w-[1200px] w-[90vw] bg-[#2A2634] m-14 rounded-lg box-border bg-cover bg-clip-content-box bg-origin-border bg-gradient-theme-border border-t-4 border-solid border-t-transparent'>
			<div className='flex-1 md:my-8 mt-6 mb-0 ml-8'>
				<h3 className='font-black text-xl sm:text-2xl w-max'>
					Não encontrou seu duo?
				</h3>
				<p className='text-zinc-400'>
					Publique um anúncio para encontrar novos players!
				</p>
			</div>
			<div className='flex flex-grow-0 items-center flex-shrink-0 basis-[190px] my-8 lg:mr-8'>
				<button
					className='flex items-center justify-center gap-2 py-4 px-3 bg-violet-500 rounded-md hover:bg-violet-600'
					onClick={handleClickCreateAdModalOpen}
					ref={btnRef}>
					<img
						src={MagnifyingGlassPlus}
						alt=''
						width={24}
					/>
					<strong className='font-medium'>Publicar anúncio</strong>
				</button>
			</div>
		</div>
	);
};
