import { RefObject, useEffect, useRef, useState } from "react";
import {
	useForm,
	SubmitHandler,
	Controller,
	FieldErrorsImpl,
} from "react-hook-form";

import { BsJoystick } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

import { GameSelector } from "./GameSelector";
import { DayButton } from "./DayButton";

import { AdTypes, Game } from "../types/types";

export const AdFormInput = ({
	list,
	firstFocusableElementRef,
}: {
	list: Game[];
	firstFocusableElementRef: RefObject<HTMLLabelElement>;
}) => {
	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<AdTypes>();

	const onSubmit: SubmitHandler<AdTypes> = (data: AdTypes) => {
		const output = {
			...data,
			id: Math.floor(Math.random() * 100),
		};
		if (!output.experience) output.experience = 0;
		console.log(output);
	};

	const [daysSelected, setDaysSelected] = useState([0, 0, 0, 0, 0, 0, 0]);

	function setDays(days: number[]) {
		setValue("days", days);
		setDaysSelected(days);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit, (e) => {
				console.log(e);
			})}
			name='adInput'
			id='adFormInput'
			className='flex flex-col gap-3 font-medium'>
			<label
				className='flex flex-col gap-1 font-semibold text-base mb-2'
				ref={firstFocusableElementRef}>
				Qual o game?
				<Controller
					name='game'
					control={control}
					rules={{ required: "É necessário informar um jogo." }}
					render={({ field: { name, ref, onChange, onBlur } }) => (
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
					{...register("author", {
						required: "Informe um nome.",
						pattern: {
							value: /[A-Za-z_\d]/,
							message:
								"Revise o nome digitado. Use letras, números e _",
						},
					})}
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
				<label className='flex flex-col gap-1 font-semibold text-base mb-2 flex-1'>
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
			<Errors errors={errors} />
		</form>
	);
};

const Errors = ({ errors }: { errors: FieldErrorsImpl<AdTypes> }) => {
	const errorStrings: () => string[] = () => {
		const errorsFound = Object.getOwnPropertyNames(errors);

		if (errorsFound.length > 1)
			return errorsFound.map((value) => {
				if (value === "game") return "jogo";
				if (value === "author") return "nome";
				if (value === "contact") return "discord";
				else return value;
			});

		return [];
	};

	return (
		<div>
			{(Object.getOwnPropertyNames(errors).length > 1 && (
				<p
					role='alert'
					className='text-xs text-red-500 text-center'>
					{`Preencha os campos: ${
						errorStrings() && errorStrings().join(", ")
					}`}
				</p>
			)) ||
				(Object.getOwnPropertyNames(errors).length == 1 && (
					<p
						role='alert'
						className='text-xs text-red-500 text-center'>
						{`${
							errors.game?.message ||
							errors.author?.message ||
							errors.contact?.message
						}`}
					</p>
				)) ||
				""}
		</div>
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
