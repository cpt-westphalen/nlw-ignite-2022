import { useEffect, useRef, useState } from "react";

import { TbDeviceGamepad2 } from "react-icons/tb";

import { AdTypes, Game, Modal } from "../../types/types";

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
		<div className='flex flex-col gap-4 justify-center items-center h-[420px]'>
			<div className='flex gap-4 items-center'>
				<div
					style={{ backgroundImage: `url('./${game.imgUrl}')` }}
					className='overflow-clip bg-top flex-shrink-0 w-20 h-20 rounded-50 border-solid border-zinc-800 border-2'
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
				</div>
			</div>
			<div className='flex flex-row flex-shrink-0 gap-2 overflow-x-scroll max-w-2xl'>
				{game.ads.map((ad) => {
					return <AdCard ad={ad} />;
				})}
			</div>
		</div>
	);
};

const AdCard = ({ ad }: { ad: AdTypes }) => (
	<article className='flex flex-col flex-grow relative min-h-full w-64 my-2 py-3 px-4 flex-shrink-0 gap-2 rounded bg-zinc-900'>
		<span className='absolute text-sm text-yellow-600 right-3'>Novo!</span>
		<label className='block text-sm text-zinc-400'>
			Nome
			<p className='text-base text-white'>{ad.author}</p>
		</label>
		<label className='block text-sm text-zinc-400'>
			Tempo de jogo
			<p className='text-base text-white'>{`${ad.experience} ano${
				ad.experience === 1 ? "" : "s"
			}`}</p>
		</label>
		<label className='block text-sm text-zinc-400'>
			Disponibilidade
			<p className='text-base text-white'>
				{ad.days.map((d) => {
					let days = "";
					days +=
						d !== 0
							? d == 7
								? "sáb."
								: d == 1
								? "dom."
								: `${d}ª`
							: "";
					if (days) {
						days += d === ad.days[ad.days.length - 1] ? "" : ", ";
					}
					return days;
				})}
			</p>
		</label>
		<label className='block text-sm text-zinc-400'>
			Chamada de Áudio
			<p
				className={`text-base ${
					ad.voice ? "text-green-600 font-bold" : "text-white"
				}`}>
				{ad.voice ? "sim" : "não"}
			</p>
		</label>
		<button className='bg-green-700 hover:bg-green-800 p-2 mt-3 self-center justify-self-end'>
			Conectar!
		</button>
	</article>
);
