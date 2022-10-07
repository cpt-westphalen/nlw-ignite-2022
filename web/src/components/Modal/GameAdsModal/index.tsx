import { useEffect, useRef, useState } from "react";

import { Game, GameAdsModalProps } from "../../../types";

import { AdsContent } from "./AdsContent";
import { Spinner } from "../../Spinner";

import { mockList } from "../../../utils/mockList";
import { createFocusTrap } from "../../../utils/focusTrap";

import { TbDeviceGamepad2 } from "react-icons/tb";

export const GameAdsModal = ({
	setModal,
	gameId,
	onCloseFocusRef,
	setDefaultGame,
}: GameAdsModalProps) => {
	const firstFocusableElementRef = useRef<HTMLLabelElement>(null);
	const lastFocusableElementRef = useRef<HTMLButtonElement>(null);

	const [game, setGame] = useState<Game>();

	function closeModal() {
		setDefaultGame(undefined);
		setModal({ open: false, id: "" });
		onCloseFocusRef?.current?.focus();
	}

	const handleClickCreateAd = () => {
		setDefaultGame(game?.id);
		setModal({ open: true, id: "0" });
	};

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
		const fetchGameData = (id: string) => {
			// this is where we would hit the backend for only this game ads, but here the data is all in one place
			const data = mockList.find((game) => game.id === id);
			if (data) setGame(data);
			else console.warn("Erro na ID do jogo");
		};

		document.addEventListener("keyup", handleEsc);
		fetchGameData(gameId);

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
				className='z-10 px-10 py-8 bg-[#2A2634] rounded-lg flex flex-col max-w-3xl gap-4 select-none'
				onClick={(e) => {
					e.stopPropagation();
				}}>
				{game ? (
					<AdsContent
						game={game}
						setModal={setModal}
					/>
				) : (
					<Spinner />
				)}

				<div className='flex justify-end items-center gap-8'>
					<button
						className='hover:text-zinc-400'
						onClick={closeModal}>
						Cancelar
					</button>
					<button
						ref={lastFocusableElementRef}
						onClick={handleClickCreateAd}
						className='bg-violet-500 hover:bg-violet-600 flex gap-2'>
						<TbDeviceGamepad2 size={24} />
						Criar anúncio
					</button>
				</div>
			</div>
		</div>
	);
};
