import React from 'react'
import Board from '../../components/board'
import { useSelector } from "react-redux"
import { AppState } from '../../store/type'
import { selectMany } from '../../util/ArrayUtil'
import { Coordinate } from '../../model/Coordinate'


const noop = () => { }

const PlayerBoard = () => {

    const playerBoardState = useSelector((state: AppState) => state.gameState.playerBoard)

    const getCellstate = (row: number, column: string) => {

        if(!playerBoardState) {
            return "none"
        }
        const misses = playerBoardState.missShots;
        const missCoord = misses.filter(c => c.column === column && c.row === row)[0];
        if (missCoord) {
            return "miss"
        }

        const hits = playerBoardState.hitShots;
        const hitCoord = hits.filter(c => c.column === column && c.row === row)[0];
        if (hitCoord) {
            return "hit"
        }

        const playShipsPositions = selectMany(playerBoardState.ships.map(s => s.shipPositions)) as Coordinate[]
        const selectedCoord = playShipsPositions.filter(c => c.column === column && c.row === row)[0];
        if (selectedCoord) {
            return "selected"
        }

        return "none";
    }

    return (
        <div>
            <h1>Your board</h1>
            <Board onCellClick={noop} getCellstate={getCellstate} />
        </div>
    )
}

export default PlayerBoard
