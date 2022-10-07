import { useEffect, useRef, useState } from "react";
import { useModal } from "./utils/useModal";

import logo from "./assets/logo.svg";

import { AddAdArea } from "./components/AddAdArea";
import { GameList } from "./components/GameList";
import { Modal } from "./components/Modal";
import { Spinner } from "./components/Spinner";

import { Game } from "./types";

import { mockList } from "./utils/mockList";

function App() {
	const [modal, setModal] = useModal({ open: false, id: "" });

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
		<div className='bg-[url("./assets/bg-galaxy.png")] bg-cover min-h-screen flex flex-col justify-center items-center font-inter'>
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
					setModal={setModal}
					btnRef={openModalBtnRef}
				/>
			</div>
			<Modal
				modal={modal}
				props={{
					list: gameList,
					setModal: setModal,
					onCloseFocusRef: openModalBtnRef,
				}}
			/>
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
