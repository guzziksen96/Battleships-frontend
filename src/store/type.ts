import { GameState } from './../model/GameState';
import { Coordinate } from './../model/Coordinate';
import { PlacedShip } from './../model/PlacedShip';
export type AppState = {
    activeStepIndex: number,
    activeSelectShipName: string,
    placedShips: PlacedShip[],
    selectedShipCoordinates: Coordinate[],
    gameState: GameState,
    gameId: string,
    isLoading: boolean
}

export type AppAction = {
    type: string,
    payload: any
}


export type DispatchType = (args: AppAction) => AppAction