import { MouseEventHandler, useEffect, useRef, useState } from "react";

import { GameCard } from "./GameCard";
import { Game, SetModalType } from "../../types";
import { ArrowButton } from "./ArrowButton";

export const GameList = ({
	list,
	setModal,
}: {
	list: Game[];
	setModal: SetModalType;
}) => {
	const [overflowActive, setOverflowActive] = useState(false);
	const [atListPosition, setAtListPosition] = useState<
		"start" | "middle" | "end"
	>("start");

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

	const handleClickLeft: MouseEventHandler = (event): void => {
		if (listAreaDiv.current && overflowActive) {
			listAreaDiv.current.scrollLeft -= 200;
			if (listAreaDiv.current.scrollLeft === 0) {
				setAtListPosition("start");
			} else {
				setAtListPosition("middle");
			}
		}
	};
	const handleClickRight: MouseEventHandler = (event): void => {
		if (listAreaDiv.current && overflowActive) {
			listAreaDiv.current.scrollLeft += 200;
			if (
				listAreaDiv.current.offsetWidth +
					listAreaDiv.current.scrollLeft ===
				listAreaDiv.current.scrollWidth
			) {
				setAtListPosition("end");
			} else {
				setAtListPosition("middle");
			}
		}
	};

	const handleCardClick = (id: string) => {
		setModal({ open: true, id: id });
	};

	return (
		<div className='flex 2xl:gap-6 2xl:flex-grow-0'>
			<ArrowButton
				direction='left'
				onClick={handleClickLeft}
				disabled={
					overflowActive
						? atListPosition === "start"
							? true
							: false
						: true
				}
			/>
			<div className='relative'>
				<div
					className='2xl:max-w-7xl max-w-[90vw] overflow-x-scroll flex gap-6 flex-grow-0 flex-shrink-0 container-snap'
					ref={listAreaDiv}>
					{list.map((g) => (
						<button
							tabIndex={0}
							className='text-start font-normal rounded-none m-0 p-0 hover:cursor-pointer'
							onClick={(e) => {
								e.preventDefault();
								handleCardClick(g.id);
							}}
							key={`${g.id}-anchor`}>
							<GameCard game={g} />
						</button>
					))}
				</div>
				{overflowActive && !(atListPosition === "end") && (
					<div className='absolute w-20 right-0 top-0 bottom-0 bg-gradient-to-l from-[#110D11] to-transparent z-10'></div>
				)}
			</div>
			<ArrowButton
				direction='right'
				onClick={handleClickRight}
				disabled={
					overflowActive
						? atListPosition === "end"
							? true
							: false
						: true
				}
			/>
		</div>
	);
};
