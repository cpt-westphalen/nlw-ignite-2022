import { RefObject } from "react";

type Modal = {
	open: boolean;
	id: string;
}

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
	setModal: (value: Modal) => void;
	list: Game[];
	onCloseFocusRef: RefObject<HTMLButtonElement>;	
}


export type { Game, AdTypes, AddAdModalProps, Modal }