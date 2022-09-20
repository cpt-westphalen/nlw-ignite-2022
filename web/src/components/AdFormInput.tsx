import { useEffect, useRef } from "react";

export const AdFormInput = () => {
	const focusElement = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (focusElement.current) focusElement.current.focus();
		return () => {
			if (focusElement.current) focusElement.current.blur();
		};
	}, []);

	return (
		<form
			action=''
			method='post'
			name='adInput'
			id='adFormInput'
			className='flex flex-col gap-3 font-medium'>
			<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
				Qual o game?
				<input
					type='selector'
					name='game'
					id='adGameInput'
					placeholder='Selecione o game que deseja jogar'
					ref={focusElement}
				/>
			</label>
			<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
				Seu nome (ou nickname)
				<input
					type='text'
					name='author'
					id='adAuthorInput'
					placeholder='Como te chamam dentro do game?'
				/>
			</label>
			<div className='flex gap-6'>
				<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
					Joga há quantos anos?
					<input
						type='text'
						maxLength={2}
						name='experience'
						id='adExperienceInput'
						placeholder='Tudo bem se for zero!'
						onChange={(e) => {
							e.target.value = e.target.value.replace(/\D/i, "");
						}}
					/>
				</label>
				<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
					Qual seu discord?
					<input
						type='text'
						name='discord'
						id='adDiscordInput'
						placeholder='username#0000'
					/>
				</label>
			</div>
			<div className='flex gap-6 justify-between'>
				<div className='flex flex-col gap-1 font-semibold text-base mb-2'>
					<label id='dayInput'>Quando costuma jogar?</label>
					<div className='flex gap-1'>
						<button
							className={`p-2 bg-zinc-800 hover:bg-zinc-900`}
							type='button'
							aria-label='segunda-feira'
							name='monday'
							id='adMondayInput'
							aria-labelledby='dayInput'>
							S
						</button>
						<button
							className={`p-2 bg-zinc-800 hover:bg-zinc-900`}
							type='button'
							aria-label='terça-feira'
							name='tuesday'
							id='adTuesdayInput'>
							T
						</button>
						<button
							className={`p-2 bg-zinc-800 hover:bg-zinc-900`}
							type='button'
							aria-label='quarta-feira'
							name='wednesday'
							id='adWednesdayInput'>
							Q
						</button>
						<button
							className={`p-2 bg-zinc-800 hover:bg-zinc-900`}
							type='button'
							aria-label='quinta-feira'
							name='thursday'
							id='adThursdayInput'>
							Q
						</button>
						<button
							className={`p-2 bg-zinc-800 hover:bg-zinc-900`}
							type='button'
							aria-label='sexta-feira'
							name='friday'
							id='adFridayInput'>
							S
						</button>
						<button
							className={`p-2 bg-zinc-800 hover:bg-zinc-900`}
							type='button'
							aria-label='sábado'
							name='saturday'
							id='adSaturdayInput'>
							S
						</button>
						<button
							className={`p-2 bg-zinc-800 hover:bg-zinc-900`}
							type='button'
							aria-label='domingo'
							name='sunday'
							id='adSundayInput'>
							D
						</button>
					</div>
				</div>
				<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
					Qual horário do dia?
					<input
						type='text'
						name='discord'
						id='adDiscordInput'
						placeholder='username#0000'
					/>
				</label>
			</div>
			<label className='flex gap-2 items-center font-semibold text-base mb-2'>
				<input
					type='checkbox'
					name='voice'
					id='adVoiceInput'
				/>{" "}
				Costumo me conectar ao chat de voz
			</label>
		</form>
	);
};
