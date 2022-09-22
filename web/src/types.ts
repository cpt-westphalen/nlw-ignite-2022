interface Game {
    id: string,
    imgUrl: string,
    title: string,
    ads: number
}

interface AdTypes {
    id: string;
	game: string;
	author: string;
	experience: number;
	contact: string;
	days: number[];
	time: number;
	voice: boolean;
}

interface AddAdModalProps {
	modalOpen: boolean;
	setModalOpen: (arg: boolean) => void;
	list: Game[];
}


export type { Game, AdTypes, AddAdModalProps }