import { useEffect, useState } from "react";

import { BsCheck2 } from "react-icons/bs";
import { MdOutlineCopyAll } from "react-icons/md";

export const ContactButton = ({ contact }: { contact: string }) => {
	const [showContact, setShowContact] = useState(false);
	const [contactCopied, setContactCopied] = useState(false);

	const handleClickContact = (e: React.MouseEvent<HTMLButtonElement>) => {
		setShowContact(true);
	};

	const handleCopyContact = (e: React.MouseEvent<HTMLButtonElement>) => {
		navigator.clipboard.writeText(contact).then(() => {
			console.log("copied!");
		});
		setContactCopied(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setContactCopied(false);
		}, 2000);

		return () => {
			clearTimeout(timeout);
		};
	}, [contactCopied]);

	if (showContact) {
		return (
			<div className='flex bg-zinc-900 border-solid border-2 rounded-xl border-zinc-800 py-2 px-3 mt-3 mb-2 self-center justify-self-end justify-center items-center gap-2'>
				<address className='text-sm text-zinc-300'>{contact}</address>
				<button
					className={`m-0 p-1 border border-solid  ${
						!contactCopied
							? "border-zinc-700"
							: "border-transparent"
					} text-zinc-500 hover:text-zinc-50`}
					title='Copiar contato'
					onClick={handleCopyContact}>
					{contactCopied ? (
						<BsCheck2
							size={18}
							className={"text-white"}
						/>
					) : (
						<MdOutlineCopyAll size={18} />
					)}
				</button>
			</div>
		);
	} else {
		return (
			<button
				title='Ver informações de contato'
				onClick={handleClickContact}
				className='bg-green-700 hover:bg-green-800 py-2 px-3 mt-3 mb-2 self-center justify-self-end'>
				Conectar!
			</button>
		);
	}
};
