interface GameListProps {
    list: Array<Game>
}

interface GameProps {
    game: Game
  }
  
interface Game {
    id: string,
    imgUrl: string,
    title: string,
    ads: number
}

export type { GameListProps, GameProps, Game }