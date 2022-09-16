import { GameCard } from './GameCard';
import { GameListProps } from '../types';
import { ArrowButton } from './ArrowButton';

export const GameList = ({ list }: GameListProps) => {
  return (
    <div className='flex gap-6'>
      <ArrowButton direction='left'/>
      {list.map(g => <GameCard game={g} key={g.id} />)}
      <ArrowButton direction='right'/>
    </div>
  );
};
