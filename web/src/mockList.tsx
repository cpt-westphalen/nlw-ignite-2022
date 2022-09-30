import { Game } from "./types/types";

export const mockList: Game[] = [
	{
		id: "1",
		imgUrl: "/games/game-1.png",
		title: "League of Legends",
		ads: [
			{
				id: "389385",
				game: "1",
				author: "Fulano de Souza",
				experience: 2,
				contact: "test#0000",
				days: [0, 0, 3, 0, 5, 6, 7],
				time: { start: "18:30", end: "22:00" },
				voice: true,
			},
			{
				id: "2124124",
				game: "1",
				author: "Ciclano D'tal",
				experience: 2,
				contact: "test#0000",
				days: [0, 0, 0, 0, 0, 0, 0],
				time: { start: "", end: "" },
				voice: true,
			},
			{
				id: "1251251",
				game: "1",
				author: "Beltrano",
				experience: 0,
				contact: "test#0000",
				days: [0, 0, 3, 0, 5, 6, 7],
				time: { start: "18:30", end: "22:00" },
				voice: false,
			},
			{
				id: "1251351351",
				game: "1",
				author: "Nome do Fulano",
				experience: 2,
				contact: "test#0000",
				days: [0, 0, 3, 0, 5, 6, 7],
				time: { start: "18:30", end: "22:00" },
				voice: true,
			},
		],
	},
	{ id: "2", imgUrl: "/games/game-2.png", title: "Dota 2", ads: [] },
	{ id: "3", imgUrl: "/games/game-3.png", title: "CS:GO", ads: [] },
	{
		id: "4",
		imgUrl: "/games/game-4.jpg",
		title: "COD: Modern Warfare",
		ads: [],
	},
	{
		id: "5",
		imgUrl: "/games/game-5.png",
		title: "Apex Legends",
		ads: [],
	},
	{
		id: "6",
		imgUrl: "/games/game-6.png",
		title: "Fortnite",
		ads: [],
	},
	{
		id: "7",
		imgUrl: "/games/game-7.png",
		title: "World of Warcraft",
		ads: [],
	},
	{
		id: "8",
		imgUrl: "/games/game-8.png",
		title: "Valorant",
		ads: [],
	},
	{
		id: "9",
		imgUrl: "/games/game-9.png",
		title: "FIFA 23",
		ads: [],
	},
];
