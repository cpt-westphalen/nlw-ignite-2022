import { useState } from "react";
import { AddAdModalProps, ModalType } from "../../types/types";

import { AddAdModal } from "../AddAdModal";
import { GameAdsModal } from "../GameAdsModal";

interface ModalProps {
	modal: ModalType;
	props: AddAdModalProps;
}

export const Modal = ({ modal, props }: ModalProps) => {
	const [defaultGame, setDefaultGame] = useState<string>();

	if (modal.id === "0") {
		return (
			<AddAdModal
				list={props.list}
				setModal={props.setModal}
				onCloseFocusRef={props.onCloseFocusRef}
				defaultGame={defaultGame}
			/>
		);
	} else if (modal.id) {
		return (
			<GameAdsModal
				setModal={props.setModal}
				gameId={modal.id}
				onCloseFocusRef={props.onCloseFocusRef}
				setDefaultGame={setDefaultGame}
			/>
		);
	} else {
		return null;
	}
};
