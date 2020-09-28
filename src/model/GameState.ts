import { ComputerBoard } from './ComputerBoard';
import { PlayerBoard } from './PlayerBoard';
export type GameState = {
    playerBoard: PlayerBoard,
    computerBoard: ComputerBoard,
    result: string
}

