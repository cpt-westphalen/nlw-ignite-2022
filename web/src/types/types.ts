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
}

type GameAdsModalProps = {
	setModal: SetModalType;
	gameId: string;
	onCloseFocusRef?: React.RefObject<HTMLButtonElement>;
}


export type { Game, AdTypes, AddAdModalProps, ModalType, SetModalType, GameAdsModalProps }