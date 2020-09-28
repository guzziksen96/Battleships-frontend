import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/type'
import { GameResult } from '../../model/GameResult'

const MapMessageGameResult = {
    [GameResult.Pending]: "Sunk ships:",
    [GameResult.PlayerWon]: "You won!",
    [GameResult.PlayerLost]: "You lost :(",
}


const GameInfo = () => {
    const sunkShips = useSelector((state: AppState) => state.gameState.computerBoard.sunkShips)
    const gameResult = useSelector((state: AppState) => state.gameState.result) as GameResult

    return (
        <>
            <div>
               <h1>{MapMessageGameResult[gameResult]}</h1> 
               {(gameResult === GameResult.Pending) && (<div>{sunkShips && sunkShips.map(s => (<div> {s} </div>))}</div>)} 
            </div>
        </>
    )
}

export default GameInfo
