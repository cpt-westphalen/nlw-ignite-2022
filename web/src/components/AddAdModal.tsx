import { RefObject, useEffect, useRef } from "react";
import { AdFormInput } from "./AdFormInput";
import { TbDeviceGamepad2 } from "react-icons/tb";

export const AddAdModal = ({
	modalOpen,
	setModalOpen,
}: {
	modalOpen: boolean;
	setModalOpen: (arg: boolean) => void;
}) => {
	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div
			tabIndex={-1}
			aria-dialog
			onClick={closeModal}
			className='bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center'>
			<section
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='z-10 px-10 py-8 bg-[#2A2634] rounded-lg flex flex-col max-w-2xl gap-8'>
				<h2 className='font-black text-4xl'>Publique um anúncio</h2>
				<AdFormInput />
				<div className='flex justify-end items-center gap-8'>
					<button
						className='hover:text-zinc-400'
						onClick={closeModal}>
						Cancelar
					</button>
					<button
						type='submit'
						form='adFormInput'
						className='bg-violet-500 hover:bg-violet-600 flex gap-2'>
						<TbDeviceGamepad2 size={24} />
						Encontrar duo
					</button>
				</div>
			</section>
		</div>
	);
};
