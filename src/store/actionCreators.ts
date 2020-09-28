import { GameState } from './../model/GameState';
import { Coordinate } from './../model/Coordinate';
import * as actionTypes from "./actionTypes"
import { DispatchType, AppAction } from "./type";

export function setActiveShipSelector(index: number) {
    const action = {
      type: actionTypes.SET_ACTIVE_SHIP_SELECTOR_INDEX,
      payload: index
    } as AppAction
  
    return (dispatch: DispatchType) => dispatch(action);
}

export function setGameId(gameId: number) {
  const action = {
    type: actionTypes.SET_GAME_ID,
    payload: gameId
  } as AppAction

  return (dispatch: DispatchType) => dispatch(action);
}

export function setLoading(loading: boolean) {
  const action = {
    type: actionTypes.SET_LOADING,
    payload: loading
  } as AppAction

  return (dispatch: DispatchType) => dispatch(action);
}
export function setGameState(gameState: GameState) {
  const action = {
    type: actionTypes.SET_GAME_STATE,
    payload: gameState
  } as AppAction

  return (dispatch: DispatchType) => dispatch(action);
}

export function addSelectedShipCoordinate(coordinate: Coordinate) {
  const action = {
    type: actionTypes.ADD_SELECTED_SHIP_COORDINATE,
    payload: coordinate
  } as AppAction

  return (dispatch: DispatchType) => dispatch(action);
}
