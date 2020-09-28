import { Coordinate } from "./Coordinate";

export type ComputerBoard = {
    hitShots: Coordinate[],
    missShots: Coordinate[],
    sunkShips: string[]
}