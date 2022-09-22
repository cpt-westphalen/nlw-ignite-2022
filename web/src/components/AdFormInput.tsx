import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { BsJoystick } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

import { GameSelector } from "./GameSelector";

import { AdTypes, Game } from "../types";

export const AdFormInput = ({ list }: { list: Game[] }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AdTypes>();
	const focusElement = useRef<HTMLSelectElement>(null);

	const onSubmit: SubmitHandler<AdTypes> = (data) => console.log(data);

	useEffect(() => {
		if (focusElement.current) focusElement.current.focus();
		return () => {
			if (focusElement.current) focusElement.current.blur();
		};
	}, []);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action=''
			method='post'
			name='adInput'
			id='adFormInput'
			className='flex flex-col gap-3 font-medium'>
			<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
				Qual o game?
				<GameSelector.Root>
					<GameSelector.Trigger className='flex items-center justify-start gap-5 bg-zinc-900'>
						<GameSelector.Icon>
							<BsJoystick size={16} />
						</GameSelector.Icon>
						<GameSelector.Value placeholder='Selecione o jogo' />
						<GameSelector.Icon className='ml-auto'>
							<FaAngleDown size={16} />
						</GameSelector.Icon>
					</GameSelector.Trigger>
					<GameSelector.Content list={list} />
				</GameSelector.Root>
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
						type='time'
						name='discord'
						id='adDiscordInput'
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

const uncontrolledSelector = (
	<select
		name='game'
		id='adGameInput'
		placeholder='Selecione o game que deseja jogar'>
		<option>League of Legends</option>
		<option>Dota 2</option>
		<option>CS:GO</option>
		<option>Apex Legends</option>
	</select>
);
