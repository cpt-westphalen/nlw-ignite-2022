import { AddAdModalProps, ModalType } from "../../types/types";

import { AddAdModal } from "../AddAdModal";
import { GameAdsModal } from "../GameAdsModal";

interface ModalProps {
	modal: ModalType;
	props: AddAdModalProps;
}

export const Modal = ({ modal, props }: ModalProps) => {
	if (modal.id === "0") {
		return (
			<AddAdModal
				list={props.list}
				setModal={props.setModal}
				onCloseFocusRef={props.onCloseFocusRef}
			/>
		);
	} else if (modal.id) {
		return (
			<GameAdsModal
				setModal={props.setModal}
				gameId={modal.id}
				onCloseFocusRef={props.onCloseFocusRef}
			/>
		);
	} else {
		return null;
	}
};
