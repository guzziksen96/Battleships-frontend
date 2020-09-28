import { Coordinate } from './../model/Coordinate';
import { PlacedShip } from './../model/PlacedShip';
import axios from 'axios'
import { GameState } from '../model/GameState';
const baseUrl = 'https://localhost:44396'

const Client = {
    async startNewGame(ships: PlacedShip[]): Promise<string> {
        
        const requestBody = {
            ships
        }
        const response = await axios.post<string>(baseUrl + "/api/game", requestBody);

        return response.data;
    },

    async getGameState(gameId: string): Promise<GameState> {
        
        const response = await axios.get<GameState>(baseUrl +`/api/game/${gameId}/state`);

        return response.data;
    },

    async fireNewShot(gameId: string, coordinate: Coordinate): Promise<number> {
        
        const requestBody = {
            coordinate
        }
        const response = await axios.post(baseUrl +`/api/game/${gameId}/shot`, requestBody);

        return response.data;
    },

}


export default Client;