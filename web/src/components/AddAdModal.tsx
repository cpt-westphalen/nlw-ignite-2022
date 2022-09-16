import { AdFormInput } from "./AdFormInput";

export const AddAdModal = ({
	setModalOpen,
}: {
	setModalOpen: (arg: boolean) => void;
}) => {
	return (
		<div className='bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center'>
			<section className='px-10 py-8 bg-[#2A2634] rounded-lg flex flex-col max-w-2xl'>
				<h2 className='font-black text-4xl'>Publique um anúncio</h2>
				<AdFormInput />
				<button
					onClick={() => {
						setModalOpen(false);
					}}>
					Cancelar
				</button>
				<button
					type='submit'
					form='adInput'>
					<img />
					Encontrar duo
				</button>
			</section>
		</div>
	);
};
