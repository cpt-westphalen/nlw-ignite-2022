import { RefObject } from "react";

type ModalType = {
	open: boolean;
	id: string;
}

type SetModalType = (value: ModalType) => void;

interface Game {
    id: string,
    imgUrl: string,
    title: string,
    ads: AdTypes[]
}

interface AdTypes {
    id: string;
	game: string;
	author: string;
	experience: number;
	contact: string;
	days: number[];
	time: {start: string, end: string};
	voice: boolean;
	createdAt?: string;
}

type AddAdModalProps = {
	setModal: SetModalType;
	list: Game[];
	onCloseFocusRef: RefObject<HTMLButtonElement>;	
	defaultGame?: string;
}

type GameAdsModalProps = {
	setModal: SetModalType;
	gameId: string;
	onCloseFocusRef?: React.RefObject<HTMLButtonElement>;
	setDefaultGame: (value: string | undefined) => void;
}


export type { Game, AdTypes, AddAdModalProps, ModalType, SetModalType, GameAdsModalProps }