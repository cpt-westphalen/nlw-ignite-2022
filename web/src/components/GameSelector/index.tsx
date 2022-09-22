import * as Select from "@radix-ui/react-select";

import { GoCheck } from "react-icons/go";

import { Game } from "../../types";
import "./styles.css";

const Content = ({ list }: { list: Game[] }) => (
	<Select.Portal className='z-20'>
		<Select.Content className='overflow-hidden bg-zinc-800 rounded-md shadow-md shadow-zinc-900'>
			<Select.ScrollUpButton />
			<Select.Viewport className='rounded bg-zinc-900'>
				{list.map((game) => (
					<Select.Item
						className='select-item hover:bg-zinc-500'
						value={game.id}
						key={`${game.id}-selector`}>
						<Select.ItemText>{game.title}</Select.ItemText>
						<Select.ItemIndicator className='select-item-indicator'>
							<GoCheck size={14} />
						</Select.ItemIndicator>
					</Select.Item>
				))}
			</Select.Viewport>
			<Select.ScrollDownButton />
		</Select.Content>
	</Select.Portal>
);

export const GameSelector = {
	Root: Select.Root,
	Trigger: Select.Trigger,
	Value: Select.Value,
	Icon: Select.Icon,
	Content: Content,
};
