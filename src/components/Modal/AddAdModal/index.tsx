import { useEffect, useRef } from "react";

import { AddAdModalProps } from "../../../types";

import { AdFormInput } from "./AdFormInput";

import { TbDeviceGamepad2 } from "react-icons/tb";
import { createFocusTrap } from "../../../utils/focusTrap";

export const AddAdModal = ({
	setModal,
	list,
	onCloseFocusRef,
	defaultGame,
}: AddAdModalProps) => {
	const firstFocusableElementRef = useRef<HTMLLabelElement>(null);
	const lastFocusableElementRef = useRef<HTMLButtonElement>(null);

	function closeModal() {
		setModal({ open: false, id: "" });
		onCloseFocusRef.current?.focus();
	}

	useEffect(() => {
		const clearFocusTrap = createFocusTrap(
			firstFocusableElementRef,
			lastFocusableElementRef
		);
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};
		return () => {
			clearFocusTrap();
			document.removeEventListener("keyup", handleEsc);
		};
	}, []);

	return (
		<div
			tabIndex={-1}
			onClick={closeModal}
			className='bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center sm:items-center'>
			<div
				role='dialog'
				aria-labelledby='modalTitle'
				className='z-10 px-4 xl:px-10 py-4 sm:py-8 bg-[#2A2634] rounded-lg flex flex-col max-w-[100vw] xl:max-w-3xl gap-1 sm:gap-8 select-none'
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<h2
					className='font-black text-2xl sm:text-4xl'
					id='modalTitle'>
					Publique um anúncio
				</h2>
				<AdFormInput
					list={list}
					firstFocusableElementRef={firstFocusableElementRef}
					defaultGame={defaultGame}
					closeModal={closeModal}
				/>
				<div className='flex justify-end items-center sm:gap-8'>
					<button
						className='hover:text-zinc-400'
						onClick={closeModal}>
						Cancelar
					</button>
					<button
						ref={lastFocusableElementRef}
						type='submit'
						form='adFormInput'
						className='bg-violet-500 hover:bg-violet-600 flex gap-2'>
						<TbDeviceGamepad2 size={24} />
						Encontrar duo
					</button>
				</div>
			</div>
		</div>
	);
};
