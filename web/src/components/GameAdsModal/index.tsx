import { useEffect, useRef, useState } from "react";

import { TbDeviceGamepad2 } from "react-icons/tb";

import { AdTypes, Game, Modal } from "../../types/types";

import { mockList } from "../../mockList";
import { Spinner } from "../Spinner";

export const GameAdsModal = ({
	setModal,
	gameId,
	onCloseFocusRef,
}: {
	setModal: (p: Modal) => void;
	gameId: string;
	onCloseFocusRef?: React.RefObject<HTMLButtonElement>;
}) => {
	const firstFocusableElementRef = useRef<HTMLLabelElement>(null);
	const lastFocusableElementRef = useRef<HTMLButtonElement>(null);

	const [game, setGame] = useState<Game>();

	function closeModal() {
		setModal({ open: false, id: "" });
		onCloseFocusRef?.current?.focus();
	}

	const handleClickCreateAd = () => {
		setModal({ open: true, id: "0" });
	};

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
		const fetchGameData = (id: string) => {
			// this is where we would hit the backend for only this game ads, but here the data is all in one place
			const data = mockList.find((game) => game.id === id);
			if (data) setGame(data);
			else console.warn("Erro na ID do jogo");
		};

		focusTrap();
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

const AdsContent = ({ game }: { game: Game; setModal: (p: Modal) => void }) => {
	return (
		<div className='flex flex-col gap-4 justify-center items-center'>
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
				{game.ads.length > 0 ? (
					game.ads.map((ad) => {
						return <AdCard ad={ad} />;
					})
				) : (
					<CreateAdFallback />
				)}
			</div>
		</div>
	);
};

function isRecent(date: string) {
	// checks if ad was placed less than N days ago.
	const NUM_OF_DAYS = 7;
	const now = new Date();

	const today = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
	const compareDate = date.split(/\D/).map((v) => parseInt(v));

	const result = () => {
		if (today[0] === compareDate[0]) {
			if (today[1] === compareDate[1]) {
				return today[2] - compareDate[2] < NUM_OF_DAYS;
			} else if (today[1] - compareDate[1] === 1) {
				return today[2] + 30 - compareDate[2] < NUM_OF_DAYS;
			}
		} else if (today[0] - compareDate[0] === 1) {
			if (today[1] + 12 - compareDate[1] <= 1) {
				return today[2] + 30 - compareDate[2] < NUM_OF_DAYS;
			}
		}
		return false;
	};
	return result();
}

const AdCard = ({ ad }: { ad: AdTypes }) => (
	<article className='flex flex-col flex-grow relative min-h-full w-64 my-2 py-3 px-4 flex-shrink-0 gap-2 rounded bg-zinc-900'>
		{ad.createdAt ? (
			isRecent(ad.createdAt) ? (
				<span className='absolute text-sm text-yellow-600 right-3'>
					Novo!
				</span>
			) : (
				""
			)
		) : (
			""
		)}
		<label className='block text-sm text-zinc-400'>
			Nome
			<p className='text-base text-white'>{ad.author}</p>
		</label>
		<label className='block text-sm text-zinc-400'>
			Experiência de jogo
			<p className='text-base text-white'>
				{ad.experience == 0
					? "< 1 ano"
					: `${ad.experience} ano${ad.experience === 1 ? "" : "s"}`}
			</p>
		</label>
		<label className='block text-sm text-zinc-400'>
			Disponibilidade
			<p className='text-base text-white'>
				{ad.days.filter((n) => n !== 0).length > 0
					? ad.days.map((d) => {
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
								const isLastDay =
									d === ad.days[ad.days.length - 1];
								days += isLastDay ? "" : ", ";
							}
							return days;
					  })
					: "Não informado"}
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

const CreateAdFallback = () => (
	<div className='flex flex-col items-center gap-3 my-10 mx-3'>
		<p>{"Não foram encontrados anúncios para este jogo."}</p>
		<p>{"Deseja criar um novo anúncio?"}</p>
	</div>
);
