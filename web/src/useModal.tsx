import { useState } from "react";

interface Modal {
	open: boolean;
	id: string;
}
export const useModal = ({ open, id }: Modal) => {
	console.log("hook iniciado");
	const [modalOpen, setModalOpen] = useState(open);
	const [modalId, setModalId] = useState(id);
	const modal = { open: modalOpen, id: modalId };

	function changeModal(value: Modal) {
		console.log(":: changeModal was called! ::");
		if (value.id !== modal.id) setModalId(value.id);
		setModalOpen(value.open);
	}

	return [modal, changeModal] as const;
};
