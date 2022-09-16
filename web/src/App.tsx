import logo from "./assets/logo.svg";
import { GameList } from "./components/GameList";
import { mockList } from "./mockList";
import { AddAdArea } from "./components/AddAdArea";
import { useState } from "react";

function App() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<main className='bg-galaxy bg-cover min-h-screen flex flex-col justify-center items-center font-inter'>
			<div className='max-w-[1344px] flex flex-col items-center'>
				<Logo />
				<Heading />
				<GameList list={mockList} />
				<AddAdArea setModalOpen={setModalOpen} />
			</div>
			{modalOpen && <AddAdModal setModalOpen={setModalOpen} />}
		</main>
	);
}

const Logo = () => {
	return (
		<img
			src={logo}
			alt='NLW eSport Logo'
		/>
	);
};

const Heading = () => {
	return (
		<h1 className='mt-[80px] mb-16 text-6xl font-black'>
			Seu{" "}
			<span className='bg-gradient-theme bg-clip-text text-transparent'>
				duo
			</span>{" "}
			está aqui.
		</h1>
	);
};

const AddAdModal = ({
	setModalOpen,
}: {
	setModalOpen: (arg: boolean) => void;
}) => {
	return (
		<div className='bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center'>
			<section className='px-10 py-8 bg-[#2A2634] rounded-lg flex flex-col max-w-2xl'>
				<h2 className='font-black text-4xl'>Publique um anúncio</h2>
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
				<button
					onClick={() => {
						setModalOpen(false);
					}}>
					Cancelar
				</button>
				<button
					type='submit'
					form='adInput'>
					<img />
					Encontrar duo
				</button>
			</section>
		</div>
	);
};

export default App;
