import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import logo from "./assets/logo.svg";

import { GameList } from "./components/GameList";
import { AddAdArea } from "./components/AddAdArea";
import { AddAdModal } from "./components/AddAdModal";
import { Spinner } from "./components/Spinner";

import { Game } from "./types";

import { mockList } from "./mockList";
import { useModal } from "./useModal";
import { GameAdsModal } from "./components/GameAdsModal";

function App() {
	const [modal, setModal] = useModal({ open: false, id: "" });

	const [modalOpen, setModalOpen] = useState(false);
	const [gameList, setGameList] = useState<Game[]>([]);

	const openModalBtnRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const fetchGameList = () => {
			//this would be the external fetch
			setTimeout(() => {
				setGameList(mockList);
			}, 1500);
		};
		fetchGameList();
	}, []);

	return (
		<div className='bg-galaxy bg-cover min-h-screen flex flex-col justify-center items-center font-inter'>
			<div className='max-w-[1344px] flex flex-col items-center'>
				<Logo />
				<Heading />

				{gameList.length > 0 ? (
					<GameList
						list={gameList}
						setModal={setModal}
					/>
				) : (
					<Spinner />
				)}
				<AddAdArea
					setModalOpen={setModalOpen}
					btnRef={openModalBtnRef}
				/>
			</div>
			{modalOpen && (
				<AddAdModal
					setModalOpen={setModalOpen}
					list={gameList}
					onCloseFocusRef={openModalBtnRef}
				/>
			)}
			{modal.open && (
				<GameAdsModal
					setModal={setModal}
					gameId={modal.id}
				/>
			)}
			<p>The modal is: {JSON.stringify(modal)}</p>
		</div>
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
