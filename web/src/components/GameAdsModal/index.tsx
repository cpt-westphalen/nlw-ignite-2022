import { useEffect, useRef, useState } from "react";

import { TbDeviceGamepad2 } from "react-icons/tb";

import { Game, Modal } from "../../types/types";

import { mockList } from "../../mockList";
import { Spinner } from "../Spinner";

export const GameAdsModal = ({
	setModal,
	gameId,
}: {
	setModal: (modal: Modal) => void;
	gameId: string;
}) => {
	const modalContainerRef = useRef<HTMLDivElement>(null);
	const firstFocusableElementRef = useRef<HTMLLabelElement>(null);
	const lastFocusableElementRef = useRef<HTMLButtonElement>(null);

	const [game, setGame] = useState<Game>();

	const handleShiftTab = (event: KeyboardEvent) => {
		if (event.shiftKey && event.key === "Tab") {
			event.preventDefault();
			lastFocusableElementRef.current?.focus();
		}
	};

	useEffect(() => {
		const focusTrap = () => {
			modalContainerRef.current?.focus();
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
		const fetchGameData = (id: string) => {
			// this is where we would hit the backend for only this game ads, but here the data is all in one place
			const data = mockList.find((game) => game.id === id);
			if (data) setGame(data);
			else console.warn("Erro na ID do jogo");
		};

		focusTrap();
		fetchGameData(gameId);

		return () => {
			clearFocusTrap();
		};
	}, []);

	function closeModal() {
		setModal({ open: false, id: "" });
	}

	return (
		<div
			tabIndex={-1}
			onClick={closeModal}
			className='bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center'>
			<div
				ref={modalContainerRef}
				role='dialog'
				aria-labelledby='modalTitle'
				className='z-10 px-10 py-8 bg-[#2A2634] rounded-lg flex flex-col max-w-3xl gap-4 select-none'
				onClick={(e) => {
					e.stopPropagation();
				}}>
				{game ? <AdsContent game={game} /> : <Spinner />}

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
						Confirma
					</button>
				</div>
			</div>
		</div>
	);
};

const AdsContent = ({ game }: { game: Game }) => {
	return (
		<div className='flex flex-row gap-4 items-center'>
			<img
				src={game.imgUrl}
				className='w-60 rounded-lg border-solid border-zinc-800 border-2'
			/>
			<div>
				<h2
					className='font-black text-4xl mb-0'
					id='modalTitle'>
					{game.title}
				</h2>
				<p className='text-zinc-400 text-lg'>
					Conecte-se e comece a jogar!
				</p>
				<div className='flex flex-row flex-shrink-0 gap-2 overflow-x-scroll max-w-md'>
					{game.ads.map((ad) => {
						return (
							<article className='w-60 p-3 flex-shrink-0 rounded gap-4 bg-zinc-900'>
								<label className='text-sm text-zinc-400'>
									Nome
									<p className='text-base text-white'>
										{ad.author}
									</p>
								</label>
								<label className='text-sm text-zinc-400'>
									Tempo de jogo
									<p className='text-base text-white'>
										{ad.experience}
									</p>
								</label>
								<label className='text-sm text-zinc-400'>
									Disponibilidade
									<p className='text-base text-white'>
										{ad.days.map((d) =>
											d !== 0 ? `${d}ª` : ""
										)}
									</p>
								</label>
								<label className='text-sm text-zinc-400'>
									Chamada de Áudio
									<p className='text-base text-white'>
										{ad.voice ? "sim" : "não"}
									</p>
								</label>
								<button className='bg-green-700 p-2 m-2 self-end justify-self-center'>
									Conectar!
								</button>
							</article>
						);
					})}
				</div>
			</div>
		</div>
	);
};
