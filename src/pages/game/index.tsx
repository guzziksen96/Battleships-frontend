import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from "redux"
import './Styles.css'
import Client from '../../api/Client'
import { setGameState, setGameId } from '../../store/actionCreators'
import { useDispatch } from "react-redux"
import PlayerBoard from './PlayerBoard';
import ComputerBoard from './ComputerBoard';
import GameInfo from './GameInfo';

const Game = (props: RouteComponentProps) => {
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        const { id } = props.match.params as any;
        async function loadGameState() {
            const gameState = await Client.getGameState(id)
            dispatch(setGameState(gameState));
            dispatch(setGameId(id))
        }

        loadGameState();
    }, [props.match.params]);

    return (
        <div className="game-page">
            <div className="player-board">
                <PlayerBoard />
            </div>
            <div className="computer-board">
                <ComputerBoard />
            </div>
            <div className="info-messages">
                <GameInfo />
            </div>
        </div>
    )
}

export default Game
