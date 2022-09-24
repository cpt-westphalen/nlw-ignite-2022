import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { BsJoystick } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

import { GameSelector } from "./GameSelector";
import { DayButton } from "./DayButton";

import { AdTypes, Game } from "../types";

const defaultFormValues: AdTypes = {
	id: "",
	author: "",
	contact: "",
	game: "",
	experience: 0,
	time: { start: "", end: "" },
	days: [0, 0, 0, 0, 0, 0, 0],
	voice: false,
};

export const AdFormInput = ({ list }: { list: Game[] }) => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<AdTypes>({ defaultValues: defaultFormValues });

	const onSubmit: SubmitHandler<AdTypes> = (data: AdTypes) => {
		const output = {
			...data,
			id: Math.floor(Math.random() * 100),
		};
		console.log(output);
	};

	const focusElement = useRef<HTMLSelectElement>(null);

	const [daysSelected, setDaysSelected] = useState([0, 0, 0, 0, 0, 0, 0]);

	function setDays(days: number[]) {
		setValue("days", days);
		setDaysSelected(days);
	}

	useEffect(() => {
		if (focusElement.current) focusElement.current.focus();
		return () => {
			if (focusElement.current) focusElement.current.blur();
		};
	}, []);

	return (
		<form
			onSubmit={handleSubmit(onSubmit, (e) => {
				console.log(e);
			})}
			name='adInput'
			id='adFormInput'
			className='flex flex-col gap-3 font-medium'>
			<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
				Qual o game?
				<Controller
					name='game'
					control={control}
					rules={{ required: true }}
					render={({
						field: { name, ref, value, onChange, onBlur },
					}) => (
						<GameSelector.Root
							name={name}
							onValueChange={onChange}>
							<GameSelector.Trigger
								onBlur={onBlur}
								id='gameSelect'
								className='flex items-center justify-start gap-5 bg-zinc-900'>
								<GameSelector.Icon>
									<BsJoystick size={16} />
								</GameSelector.Icon>
								<GameSelector.Value
									placeholder='Selecione o jogo'
									ref={ref}
									defaultValue={value}
								/>
								<GameSelector.Icon className='ml-auto'>
									<FaAngleDown size={16} />
								</GameSelector.Icon>
							</GameSelector.Trigger>
							<GameSelector.Content list={list} />
						</GameSelector.Root>
					)}
				/>
			</label>
			<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
				Seu nome (ou nickname)
				<input
					type='text'
					placeholder='Como te chamam dentro do game?'
					{...register("author")}
				/>
			</label>
			<div className='flex gap-6'>
				<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
					Joga há quantos anos?
					<input
						type='text'
						placeholder='Tudo bem se for zero!'
						{...register("experience", {
							maxLength: 2,
							onChange: (e) => {
								e.target.value = e.target.value.replace(
									/\D/i,
									""
								);
							},
						})}
					/>
				</label>
				<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
					Qual seu discord?
					<input
						type='text'
						placeholder='username#0000'
						{...register("contact", {
							required: "Por favor, informe seu contato",
						})}
					/>
				</label>
			</div>
			<div className='flex gap-2 justify-between'>
				<div className='flex flex-col gap-1 font-semibold text-base mb-2'>
					<label id='dayInput'>Quando costuma jogar?</label>
					<div className='flex gap-1 flex-wrap'>
						<DayButton
							day={1}
							days={daysSelected}
							setDays={setDays}
						/>
						<DayButton
							day={2}
							days={daysSelected}
							setDays={setDays}
						/>
						<DayButton
							day={3}
							days={daysSelected}
							setDays={setDays}
						/>
						<DayButton
							day={4}
							days={daysSelected}
							setDays={setDays}
						/>
						<DayButton
							day={5}
							days={daysSelected}
							setDays={setDays}
						/>
						<DayButton
							day={6}
							days={daysSelected}
							setDays={setDays}
						/>
						<DayButton
							day={7}
							days={daysSelected}
							setDays={setDays}
						/>
					</div>
				</div>
				<label className='flex flex-col gap-1 font-semibold text-base mb-2'>
					Qual horário do dia?
					<div className='flex items-start gap-1'>
						<input
							type='time'
							placeholder='De:'
							className='m-0 p-2 text-sm'
							{...register("time.start")}
						/>
						<input
							type='time'
							placeholder='Até:'
							className='m-0 p-2 text-sm'
							{...register("time.end")}
						/>
					</div>
				</label>
			</div>
			<label className='flex gap-2 items-center font-semibold text-base mb-2 hover:cursor-pointer'>
				<input
					type='checkbox'
					{...register("voice")}
				/>{" "}
				Costumo me conectar ao chat de voz
			</label>
			{(errors.game && (
				<p
					role='alert'
					className='text-xs text-red-500 text-center'>
					Por favor, informe um jogo.
				</p>
			)) ||
				(errors.contact && (
					<p
						role='alert'
						className='text-xs text-red-500 text-center'>
						Por favor, informe um contato.
					</p>
				))}
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
