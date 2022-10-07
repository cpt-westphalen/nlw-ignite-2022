import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const iconClassNames =
	"text-zinc-300 hover:text-zinc-500 hover:duration-100 group-disabled:text-zinc-700 group-disabled:hover:text-zinc-700";

type ArrowButtonProps = {
	direction: "left" | "right";
	onClick: React.MouseEventHandler;
	disabled?: boolean;
};

export const ArrowButton = ({
	direction,
	onClick,
	disabled,
}: ArrowButtonProps) => {
	return (
		<button
			className='bg-transparent hover:bg-zinc-900 hover:bg-transparent group'
			onClick={onClick}
			disabled={disabled || false}
			aria-hidden
			tabIndex={-1}>
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
