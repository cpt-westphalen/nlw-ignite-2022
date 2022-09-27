import { useEffect, useRef, useState } from "react";

import { GameCard } from "./GameCard";
import { Game } from "../types";
import { ArrowButton } from "./ArrowButton";

export const GameList = ({ list }: { list: Game[] }) => {
	const [overflowActive, setOverflowActive] = useState(false);

	const listAreaDiv = useRef<HTMLDivElement>(null);

	function isOverflowing(element: HTMLElement) {
		return element.offsetWidth < element.scrollWidth;
	}

	useEffect(() => {
		if (listAreaDiv.current)
			isOverflowing(listAreaDiv.current)
				? setOverflowActive(true)
				: setOverflowActive(false);
	}, [list]);

	return (
		<div className='flex gap-6 flex-grow-0'>
			<ArrowButton direction='left' />
			<div
				className='max-w-7xl overflow-hidden flex gap-6 flex-grow-0 flex-shrink-0 relative'
				ref={listAreaDiv}>
				{overflowActive && (
					<div className='absolute w-20 right-0 top-0 bottom-0 bg-gradient-to-l from-[#110D11] to-transparent z-10'></div>
				)}
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
			</div>
			<ArrowButton direction='right' />
		</div>
	);
};
