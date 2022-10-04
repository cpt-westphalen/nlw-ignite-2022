import { useState } from "react";

import { ModalType, SetModalType } from "../types/types";

export const useModal = ({ open, id }: ModalType) => {
	const [modalOpen, setModalOpen] = useState(open);
	const [modalId, setModalId] = useState(id);
	const modal = { open: modalOpen, id: modalId };

	const changeModal: SetModalType = (value) => {
		if (value.id !== modal.id) setModalId(value.id);
		setModalOpen(value.open);
	};

	return [modal, changeModal] as const;
};
