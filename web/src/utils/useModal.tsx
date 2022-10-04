import { useState } from "react";

import { Modal } from "../types/types";

export const useModal = ({ open, id }: Modal) => {
	const [modalOpen, setModalOpen] = useState(open);
	const [modalId, setModalId] = useState(id);
	const modal = { open: modalOpen, id: modalId };

	function changeModal(value: Modal) {
		if (value.id !== modal.id) setModalId(value.id);
		setModalOpen(value.open);
	}

	return [modal, changeModal] as const;
};
