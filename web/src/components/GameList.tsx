import { GameCard } from './GameCard';
import { GameListProps } from './types';

export const GameList = ({ list }: GameListProps) => {
  return (
    <div className='flex gap-6'>
      {'<'}
      {list.map(g => <GameCard game={g} key={g.id} />)}
      {'>'}
    </div>
  );
};
