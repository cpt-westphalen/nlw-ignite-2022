import { RefObject } from "react";

import MagnifyingGlassPlus from "../assets/MagnifyingGlassPlus.svg";

interface AddAdAreaProps {
	setModalOpen: (arg: boolean) => void;
	btnRef: RefObject<HTMLButtonElement>;
}

export const AddAdArea = ({ setModalOpen, btnRef }: AddAdAreaProps) => {
	const handleClickCreateAdModalOpen = (
		event: React.MouseEvent<HTMLElement>
	) => {
		btnRef.current?.blur();
		setModalOpen(true);
	};

	return (
		<div className='flex flex-row w-[1200px] bg-[#2A2634] m-8 rounded-lg box-border bg-cover bg-clip-content-box bg-origin-border bg-gradient-theme-border border-t-4 border-solid border-t-transparent'>
			<div className='flex-1 my-8 ml-8'>
				<h3 className='font-black text-2xl'>Não encontrou seu duo?</h3>
				<p className='text-zinc-400'>
					Publique um anúncio para encontrar novos players!
				</p>
			</div>
			<div className='flex flex-grow-0 flex-shrink-0 basis-[190px] my-8 mr-8'>
				<button
					className='flex items-center justify-center gap-2 p-3 bg-violet-500 rounded-md hover:bg-violet-600'
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
