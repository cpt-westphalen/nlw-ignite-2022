import { useEffect, useRef } from "react";

import { AddAdModalProps } from "../../../types";

import { AdFormInput } from "./AdFormInput";

import { TbDeviceGamepad2 } from "react-icons/tb";

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
		const handleShiftTab = (event: KeyboardEvent) => {
			if (event.shiftKey && event.key === "Tab") {
				event.preventDefault();
				lastFocusableElementRef.current?.focus();
			}
		};
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};

		const focusTrap = () => {
			firstFocusableElementRef.current?.focus();
			firstFocusableElementRef.current?.addEventListener(
				"keydown",
				handleShiftTab
			);
		};
		const clearFocusTrap = () => {
			firstFocusableElementRef.current?.removeEventListener(
				"keydown",
				handleShiftTab
			);
		};

		focusTrap();
		document.addEventListener("keyup", handleEsc);

		return () => {
			clearFocusTrap();
			document.removeEventListener("keyup", handleEsc);
		};
	}, []);

	return (
		<div
			tabIndex={-1}
			onClick={closeModal}
			className='bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center'>
			<div
				role='dialog'
				aria-labelledby='modalTitle'
				className='z-10 px-10 py-8 bg-[#2A2634] rounded-lg flex flex-col max-w-3xl gap-8 select-none'
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<h2
					className='font-black text-4xl'
					id='modalTitle'>
					Publique um anúncio
				</h2>
				<AdFormInput
					list={list}
					firstFocusableElementRef={firstFocusableElementRef}
					defaultGame={defaultGame}
				/>
				<div className='flex justify-end items-center gap-8'>
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
