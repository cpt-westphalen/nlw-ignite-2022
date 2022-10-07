import { RefObject } from "react";

export type ModalType = {
	open: boolean;
	id: string;
}

export type SetModalType = (value: ModalType) => void;

export interface Game {
    id: string,
    imgUrl: string,
    title: string,
    ads: AdTypes[]
}

export interface AdTypes {
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

export type ModalProps = {
	modal: ModalType;
	props: AddAdModalProps;
}

export type AddAdModalProps = {
	setModal: SetModalType;
	list: Game[];
	onCloseFocusRef: RefObject<HTMLButtonElement>;	
	defaultGame?: string;
}

export type GameAdsModalProps = {
	setModal: SetModalType;
	gameId: string;
	onCloseFocusRef?: React.RefObject<HTMLButtonElement>;
	setDefaultGame: (value: string | undefined) => void;
}
