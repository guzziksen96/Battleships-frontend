import React from 'react'
import { Button } from 'semantic-ui-react'
import './Styles.css'
import Stepper from './Stepper'
import { useHistory } from "react-router-dom";
import { Dispatch } from "redux"
import { AppState } from '../../store/type'
import { useDispatch, useSelector } from "react-redux"
import Client from '../../api/Client'
import Board from '../../components/board'
import { Coordinate } from '../../model/Coordinate'
import { addSelectedShipCoordinate } from '../../store/actionCreators'


const NewGame = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const history = useHistory();
    const selectedShipPositions = useSelector((state: AppState) => state.selectedShipCoordinates);
    const placedShips = useSelector((state: AppState) => state.placedShips)

    const isButtonDisabled = (): boolean => selectedShipPositions.length <= 16;
    const startGame = async () => {
        const gameId =  await Client.startNewGame(placedShips)
        console.log(gameId);
        history.push(`/game/${gameId}`)
    }

    const getCellstate = (row: number, column: string): string => {

        const selectedCoord = selectedShipPositions.filter(c => c.column == column && c.row == row)[0];
        if(selectedCoord) {
            return "selected"
        }

        return "none";
    }

    const onCellClick = (row: number, column: string) => {

        const coord = { row: row, column: column } as Coordinate
        dispatch(addSelectedShipCoordinate(coord))

    }
    return (
        <div className="new-game-page">
            <Button onClick={() => startGame()} className="start-new-game-button" disabled={isButtonDisabled()} content="Start new game" />
            <Stepper />
            <Board onCellClick={onCellClick} getCellstate={getCellstate}/>


        </div>
    )
}
export default NewGame;