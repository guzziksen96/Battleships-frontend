import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/type'

const pendingGame = 0;
const playerWon = 1;
const computerWon = 2;

const GameInfo = () => {
    const sunkShips = useSelector((state: AppState) => state.gameState.computerBoard.sunkShips)
    const gameResult = useSelector((state: AppState) => state.gameState.result)
    return (
        <div>
            
            <h1>Sunk ships</h1>
            {sunkShips && sunkShips.map(s => (<div> {s} </div>))}
        </div>
    )
}

export default GameInfo
