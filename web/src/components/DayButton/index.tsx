import React, { useState } from "react";

interface DayButtonProps {
	day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
	days: number[];
	setDays: React.Dispatch<number[]>;
}

export const DayButton = ({ day, days, setDays }: DayButtonProps) => {
	const [isSelected, setIsSelected] = useState(false);

	function label() {
		switch (day) {
			case 1:
				return "domingo";
			case 2:
				return "segunda-feira";
			case 3:
				return "terça-feira";
			case 4:
				return "quarta-feira";
			case 5:
				return "quinta-feira";
			case 6:
				return "sexta-feira";
			case 7:
				return "sábado";
		}
	}
	function name() {
		switch (day) {
			case 1:
				return "sunday";
			case 2:
				return "monday";
			case 3:
				return "tuesday";
			case 4:
				return "wednesday";
			case 5:
				return "thursday";
			case 6:
				return "friday";
			case 7:
				return "saturday";
		}
	}

	function handleClick(e: React.MouseEvent) {
		e.preventDefault();
		if (!isSelected) {
			setIsSelected(true);
			days[day - 1] = day;
			setDays(days);
		} else {
			setIsSelected(false);
			days[day - 1] = 0;
			setDays(days);
		}
	}

	return (
		<button
			className={`py-1 px-3 ${
				isSelected
					? "bg-violet-500 hover:bg-violet-600"
					: "bg-zinc-900 hover:bg-zinc-600"
			}`}
			type='button'
			aria-label={label()}
			name={name()}
			onClick={handleClick}>
			{label()[0].toUpperCase()}
		</button>
	);
};
