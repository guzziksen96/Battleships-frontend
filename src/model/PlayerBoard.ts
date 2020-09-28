import { PlacedShip } from './PlacedShip';
import { Coordinate } from './Coordinate';
export type PlayerBoard = {
    hitShots: Coordinate[],
    missShots: Coordinate[],
    ships: PlacedShip[]
}