// import ArrowIconLeft from "../assets/arrow-left.svg";
// import ArrowIconRight from "../assets/arrow-right.svg";

import { MouseEventHandler } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const iconClassNames =
	"text-zinc-300 hover:text-zinc-500 hover:duration-100 group-disabled:text-zinc-700 group-disabled:hover:text-zinc-700";

export const ArrowButton = ({
	direction,
	onClick,
	disabled,
}: {
	direction: "left" | "right";
	onClick: MouseEventHandler;
	disabled?: boolean;
}) => {
	return (
		<button
			className='bg-transparent hover:bg-zinc-900 hover:bg-transparent group'
			onClick={onClick}
			disabled={disabled || false}>
			{direction === "left" ? (
				<HiChevronLeft
					size={54}
					className={iconClassNames}
				/>
			) : (
				<HiChevronRight
					size={54}
					className={iconClassNames}
				/>
			)}
		</button>
	);
};
