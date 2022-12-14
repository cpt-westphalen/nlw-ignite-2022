import { useMemo } from "react";

import { AdTypes } from "../../../../../types";

import { ContactButton } from "./ContactButton";

export const AdCard = ({ ad }: { ad: AdTypes }) => {
	const isRecent = useMemo(() => {
		// checks if ad was placed less than N days ago.
		if (ad.createdAt) {
			const NUM_OF_DAYS = 7;
			const now = new Date();

			const today = [
				now.getFullYear(),
				now.getMonth() + 1,
				now.getDate(),
			];
			const compareDate = ad.createdAt
				.split(/\D/)
				.map((v) => parseInt(v));

			const result = () => {
				if (today[0] === compareDate[0]) {
					if (today[1] === compareDate[1]) {
						return today[2] - compareDate[2] < NUM_OF_DAYS;
					} else if (today[1] - compareDate[1] === 1) {
						return today[2] + 30 - compareDate[2] < NUM_OF_DAYS;
					}
				} else if (today[0] - compareDate[0] === 1) {
					if (today[1] + 12 - compareDate[1] <= 1) {
						return today[2] + 30 - compareDate[2] < NUM_OF_DAYS;
					}
				}
				return false;
			};
			return result();
		} else {
			return false;
		}
	}, [ad.createdAt]);

	const adDaysToString = useMemo(() => {
		const eachToString = (d: number) => {
			// ad.days = [1 | 0, 2 | 0, 3 | 0, 4 | 0, 5 | 0, 6 | 0, 7 | 0];
			const dayString =
				d == 0 ? "" : d == 1 ? "dom." : d == 7 ? "sáb." : `${d}ª`;
			return dayString;
		};
		return ad.days
			.filter((d) => d !== 0)
			.map(eachToString)
			.join(", ");
	}, [ad.days]);

	const adTimes =
		ad.time.start && ad.time.end ? `, ${ad.time.start}-${ad.time.end}` : "";

	return (
		<article
			tabIndex={0}
			className='flex flex-col flex-grow relative min-h-full w-64 my-2 py-3 px-4 flex-shrink-0 gap-2 rounded bg-zinc-900'>
			{ad.createdAt && isRecent && (
				<span className='absolute text-sm text-yellow-600 right-3'>
					Novo!
				</span>
			)}
			<label className='block text-sm text-zinc-400'>
				Nome
				<p className='text-base text-white'>{ad.author}</p>
			</label>
			<label className='block text-sm text-zinc-400'>
				Experiência de jogo
				<p className='text-base text-white'>
					{ad.experience == 0
						? "< 1 ano"
						: `${ad.experience} ano${
								ad.experience === 1 ? "" : "s"
						  }`}
				</p>
			</label>
			<label className='block text-sm text-zinc-400'>
				Disponibilidade
				<p className='text-base text-white'>
					{ad.days.filter((n) => n !== 0).length > 0
						? `${adDaysToString}${adTimes}`
						: "Não informado"}
				</p>
			</label>
			<label className='block text-sm text-zinc-400'>
				Chamada de Áudio
				<p
					className={`text-base ${
						ad.voice ? "text-green-600 font-bold" : "text-white"
					}`}>
					{ad.voice ? "sim" : "não"}
				</p>
			</label>
			<ContactButton contact={ad.contact} />
		</article>
	);
};
