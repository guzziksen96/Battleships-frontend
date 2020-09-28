import { PlacedShip } from './../model/PlacedShip';
import { Coordinate } from './../model/Coordinate';
import { GameState } from './../model/GameState';
import { AppState, AppAction } from './type';
import * as actionTypes from "./actionTypes"
import { GetActiveShipName } from '../util/ShipUtil'

const initGameState = {
 computerBoard: {
    hitShots: [] as Coordinate[],
    missShots: [] as Coordinate[],
    sunkShips: [] as string[]
 },
 playerBoard: {
     hitShots: [] as Coordinate[],
     missShots: [] as Coordinate[],
     ships: [] as PlacedShip[]
 },
 result: 0
} as GameState

const initialState = {
    activeStepIndex: 0,
    activeSelectShipName: "Carrier",
    placedShips: [],
    selectedShipCoordinates: [],
    gameState: initGameState,
    gameId: "",
    isLoading: false
} as AppState

const appReducer = (
    state: AppState = initialState,
    action: AppAction
  ) : AppState => {

      switch(action.type) {
        case actionTypes.SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }


        case actionTypes.SET_GAME_ID:
            return {
                ...state,
                gameId: action.payload
            }

          case actionTypes.SET_GAME_STATE:
              return {
                  ...state,
                  gameState: action.payload
              }
          case actionTypes.SET_ACTIVE_SHIP_SELECTOR_INDEX:
            return {
                ...state,
                activeStepIndex: action.payload
            }
            case actionTypes.ADD_SELECTED_SHIP_COORDINATE:

                const coordinate = action.payload
                const shipName = state.activeSelectShipName;

                let ship = state.placedShips.filter(s => s.name == shipName)[0];
                if(ship){
                    ship.shipPositions = ship.shipPositions.concat(coordinate);
                }
                else {
                    ship = { shipPositions: [coordinate], name: shipName}
                }

                const otherShips = state.placedShips.filter(s => s.name != shipName)
                const newPlacedShips = [ship].concat(otherShips);

                const activeShipName = GetActiveShipName(shipName, ship.shipPositions.length);
                const newSelectedShipCoordinates = state.selectedShipCoordinates.concat(coordinate)
                return {
                    ...state,
                    placedShips: newPlacedShips,
                    activeSelectShipName: activeShipName,
                    selectedShipCoordinates: newSelectedShipCoordinates
                }

      }

      return state;
  }

  export default appReducer;