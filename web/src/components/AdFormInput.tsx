export const AdFormInput = () => {
	return (
		<form
			action=''
			method='post'
			name='adInput'
			id='adInput'
			className='flex flex-col gap-3 font-medium mt-8'>
			<label className=''>
				Qual o game?
				<input
					type='selector'
					name='game'
					id='adGameInput'
				/>
			</label>
			<label>
				Seu nome (ou nickname)
				<input
					type='text'
					name='author'
					id='adAuthorInput'
				/>
			</label>
			<label>
				Joga há quantos anos?
				<input
					type='number'
					name='experience'
					id='adExperienceInput'
					placeholder='Tudo bem se for zero!'
				/>
			</label>
			<label>
				Qual seu discord?
				<input
					type='text'
					name='discord'
					id='adDiscordInput'
					placeholder='username#0000'
				/>
			</label>
			<label id='dayInput'>
				Quando costuma jogar?
				<input
					type='checkbox'
					aria-label='segunda-feira'
					name='monday'
					id='adMondayInput'
					aria-labelledby='dayInput'
				/>
				<input
					type='checkbox'
					aria-label='terça-feira'
					name='tuesday'
					id='adTuesdayInput'
				/>
				<input
					type='checkbox'
					aria-label='quarta-feira'
					name='wednesday'
					id='adWednesdayInput'
				/>
				<input
					type='checkbox'
					aria-label='quinta-feira'
					name='thursday'
					id='adThursdayInput'
				/>
				<input
					type='checkbox'
					aria-label='sexta-feira'
					name='friday'
					id='adFridayInput'
				/>
				<input
					type='checkbox'
					aria-label='sábado'
					name='saturday'
					id='adSaturdayInput'
				/>
				<input
					type='checkbox'
					aria-label='domingo'
					name='sunday'
					id='adSundayInput'
				/>
			</label>
			<label>
				Qual horário do dia?
				<input
					type='text'
					name='discord'
					id='adDiscordInput'
					placeholder='username#0000'
				/>
			</label>
			<label>
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
