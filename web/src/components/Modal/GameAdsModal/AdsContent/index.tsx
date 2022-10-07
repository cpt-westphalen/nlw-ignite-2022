import { Game, SetModalType } from "../../../../types";

import { AdCard } from "./AdCard";

export const AdsContent = ({
	game,
}: {
	game: Game;
	setModal: SetModalType;
}) => {
	return (
		<div className='flex flex-col gap-4 justify-center items-center'>
			<div className='flex gap-4 items-center'>
				<div
					style={{ backgroundImage: `url('./${game.imgUrl}')` }}
					className='overflow-clip bg-top flex-shrink-0 w-20 h-20 rounded-50 border-solid border-zinc-800 border-2'
				/>
				<div>
					<h2
						className='font-black text-4xl mb-0'
						id='modalTitle'>
						{game.title}
					</h2>
					<p className='text-zinc-400 text-lg'>
						Conecte-se e comece a jogar!
					</p>
				</div>
			</div>
			<div className='flex flex-row flex-shrink-0 gap-2 overflow-x-scroll max-w-2xl'>
				{game.ads.length > 0 ? (
					game.ads.map((ad) => {
						return <AdCard ad={ad} />;
					})
				) : (
					<CreateAdFallback />
				)}
			</div>
		</div>
	);
};
const CreateAdFallback = () => (
	<div className='flex flex-col items-center gap-3 my-10 mx-3'>
		<p>{"Não foram encontrados anúncios para este jogo."}</p>
		<p>{"Deseja criar um novo anúncio?"}</p>
	</div>
);
