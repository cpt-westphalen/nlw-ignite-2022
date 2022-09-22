import { GameCard } from "./GameCard";
import { Game } from "../types";
import { ArrowButton } from "./ArrowButton";

export const GameList = ({ list }: { list: Game[] }) => {
	return (
		<div className='flex gap-6'>
			<ArrowButton direction='left' />
			{list.map((g) => (
				<a
					href='#'
					key={`${g.id}-anchor`}>
					<GameCard
						game={g}
						key={g.id}
					/>
				</a>
			))}
			<ArrowButton direction='right' />
		</div>
	);
};
