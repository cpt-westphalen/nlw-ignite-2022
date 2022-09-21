import * as Select from "@radix-ui/react-select";
import { Game } from "../../types";
import "./styles.css";

const Content = ({ list }: { list: Game[] }) => (
	<Select.Portal>
		<Select.Content className='overflow-hidden bg-zinc-800 rounded-md shadow-md shadow-zinc-900'>
			<Select.ScrollUpButton />
			<Select.Viewport className='p-2'>
				{list.map((game) => (
					<Select.Item
						className='select-item'
						value={game.id}
						key={`${game.id}-selector`}>
						<Select.ItemText>{game.title}</Select.ItemText>
						<Select.ItemIndicator className='select-item-indicator'>
							x
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
