import React from 'react'
import { AppState } from '../../store/type';
import { useSelector, useDispatch } from 'react-redux';
import Board from '../../components/board';
import Client from '../../api/Client'
import { Coordinate } from '../../model/Coordinate';
import { Dispatch } from "redux"
import { setGameState, setLoading } from '../../store/actionCreators';


const ComputerBoard = () => {

    const gameId = useSelector((state: AppState) => state.gameId)
    const dispatch: Dispatch<any> = useDispatch()

    const fire = async (row: number, column: string) => {

        async function fireAsync(row: number, column: string) {
            const coord = { row, column } as Coordinate
            dispatch(setLoading(true))

            await Client.fireNewShot(gameId, coord)
        
            const newGameState = await Client.getGameState(gameId)

            dispatch(setGameState(newGameState))

            dispatch(setLoading(false))
        }
        fireAsync(row, column);

    }

    const computerBoardState = useSelector((state: AppState) => state.gameState.computerBoard)

    const getCellstate = (row: number, column: string) => {

        if (!computerBoardState) {
            return "none";
        }
        const misses = computerBoardState.missShots;
        const missCoord = misses.filter(c => c.column == column && c.row == row)[0];
        if (missCoord) {
            return "miss"
        }

        const hites = computerBoardState.hitShots;
        const hitCoord = hites.filter(c => c.column == column && c.row == row)[0];
        if (hitCoord) {
            return "hit"
        }

        return "none";
    }


    return (
        <div>
            <h1>Computer board</h1>
            <Board onCellClick={fire} getCellstate={getCellstate} />
        </div>
    )
}

export default ComputerBoard
