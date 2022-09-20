// import ArrowIconLeft from "../assets/arrow-left.svg";
// import ArrowIconRight from "../assets/arrow-right.svg";

import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

export const ArrowButton = ({ direction }: { direction: "left" | "right" }) => {
	return (
		<button className='bg-transparent hover:bg-zinc-900 hover:bg-transparent group'>
			{direction === "left" ? (
				<HiChevronLeft
					size={54}
					className='text-zinc-300 hover:text-zinc-500'
				/>
			) : (
				<HiChevronRight
					size={54}
					className='text-zinc-300 hover:text-zinc-500'
				/>
			)}
		</button>
	);
};
