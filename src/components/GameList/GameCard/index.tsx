import { Game } from "../../../types";

export const GameCard = ({ game }: { game: Game }) => {
	return (
		<div className='w-[180px] h-[240px] relative rounded-lg overflow-hidden group border-solid border-2s border-zinc-900'>
			<img
				src={game.imgUrl}
				alt='Game cover'
				className='group-hover:opacity-70'
			/>
			<div className='bg-overlay-theme absolute bottom-0 w-full h-full flex flex-col justify-end p-3'>
				<span className='font-bold tracking-xsm'>{game.title}</span>
				<span className='text-sm text-zinc-300'>{`${
					game.ads.length
				} anúncio${game.ads.length === 1 ? "" : "s"}`}</span>
			</div>
		</div>
	);
};
