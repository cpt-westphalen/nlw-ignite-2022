import logo from "./assets/logo.svg";
import { GameList } from "./components/GameList";
import { mockList } from "./mockList";
import { AddAdArea } from "./components/AddAdArea";
import { useEffect, useState } from "react";
import { Game } from "./types";
import { AddAdModal } from "./components/AddAdModal";

function App() {
	const [modalOpen, setModalOpen] = useState(false);
	const [gameList, setGameList] = useState<Game[]>([]);

	useEffect(() => {
		const fetchGameList = () => {
			//this would be the external fetch
			setTimeout(() => {
				setGameList(mockList);
			}, 500);
		};
		fetchGameList();
	}, []);

	return (
		<main className='bg-galaxy bg-cover min-h-screen flex flex-col justify-center items-center font-inter'>
			<div className='max-w-[1344px] flex flex-col items-center'>
				<Logo />
				<Heading />

				{gameList ? (
					<GameList list={gameList} />
				) : (
					"Carregando lista de jogos..."
				)}
				<AddAdArea setModalOpen={setModalOpen} />
			</div>
			{modalOpen && <AddAdModal setModalOpen={setModalOpen} />}
		</main>
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
