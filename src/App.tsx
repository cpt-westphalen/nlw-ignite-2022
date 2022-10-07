import { createContext, useEffect, useRef, useState } from "react";
import { useModal } from "./utils/useModal";

import logo from "./assets/logo.svg";

import { AddAdArea } from "./components/AddAdArea";
import { GameList } from "./components/GameList";
import { Modal } from "./components/Modal";
import { Spinner } from "./components/Spinner";

import { Game } from "./types";

import { mockList } from "./utils/mockList";

export const SetGamesContext = createContext<
	(s: Game[] | ((s: Game[]) => Game[])) => void
>(() => {
	console.error("ops, something went wrong");
});

function App() {
	const [modal, setModal] = useModal({ open: false, id: "" });

	const [games, setGames] = useState<Game[]>([]);

	const openModalBtnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const fetchGameList = () => {
			//this would be the external fetch
			setTimeout(() => {
				setGames(mockList);
			}, 1500);
		};
		fetchGameList();
	}, []);

	return (
		<SetGamesContext.Provider value={setGames}>
			<div className='bg-[url("./assets/bg-galaxy.png")] bg-cover min-h-screen flex flex-col justify-center items-center font-inter'>
				<div className='max-w-[1344px] flex flex-col items-center'>
					<Logo />
					<Heading />

					{games.length > 0 ? (
						<GameList
							list={games}
							setModal={setModal}
						/>
					) : (
						<Spinner />
					)}
					<AddAdArea
						setModal={setModal}
						btnRef={openModalBtnRef}
					/>
				</div>
				<Modal
					modal={modal}
					props={{
						list: games,
						setModal: setModal,
						onCloseFocusRef: openModalBtnRef,
					}}
				/>
			</div>
		</SetGamesContext.Provider>
	);
}

const Logo = () => {
	return (
		<img
			src={logo}
			alt='NLW eSport Logo'
		/>
	);
};

const Heading = () => {
	return (
		<h1 className='mt-[80px] mb-16 text-6xl font-black'>
			Seu{" "}
			<span className='bg-gradient-theme bg-clip-text text-transparent'>
				duo
			</span>{" "}
			está aqui.
		</h1>
	);
};

export default App;
