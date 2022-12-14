import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useModal } from "./utils/useModal";

import logo from "./assets/logo.svg";

import { AddAdArea } from "./components/AddAdArea";
import { GameList } from "./components/GameList";
import { Modal } from "./components/Modal";
import { Spinner } from "./components/Spinner";
import { Toast, ToastContext, ToastProvider } from "./components/Toast";

import { Game, ToastContextTypes } from "./types";

import { mockList } from "./utils/mockList";

export const SetGamesContext = createContext<
	(s: Game[] | ((s: Game[]) => Game[])) => void
>(() => {
	console.error("ops, something went wrong");
});

function App() {
	const [modal, setModal] = useModal({ open: false, id: "" });

	const toastContext = useContext(ToastContext); // if default is wanted
	const [toast, setToast] = useState(toastContext.toast);
	const [openToast, setOpenToast] = useState(toastContext.open);
	const toastMemo: ToastContextTypes = useMemo(() => {
		return { toast, setToast, open: openToast, setOpen: setOpenToast };
	}, [openToast, toast]);

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
			<ToastProvider toastContext={toastMemo}>
				<div className='bg-[url("./assets/bg-galaxy.png")] bg-cover min-h-screen overflow-x-hidden overflow-y-auto flex flex-col justify-start items-center font-inter'>
					<div className='2xl:max-w-[1344px] max-w-[90%] flex flex-col items-center'>
						{openToast && <Toast />}
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
			</ToastProvider>
		</SetGamesContext.Provider>
	);
}

const Logo = () => {
	return (
		<img
			src={logo}
			alt='NLW eSport Logo'
			className='xs:w-72 w-[70vw] mt-16 lg:mt-20'
		/>
	);
};

const Heading = () => {
	return (
		<h1 className='my-12 lg:text-6xl sm:text-5xl text-4xl font-black'>
			Seu{" "}
			<span className='bg-gradient-theme bg-clip-text text-transparent'>
				duo
			</span>{" "}
			est?? aqui.
		</h1>
	);
};

export default App;
