import { ShipDto } from "../model/ShipDto"

const ships = [
    {
        name: "Carrier",
        width: 5
    },
    {
        name: "Battleship",
        width: 4
    },
    {
        name: "Cruiser",
        width: 3
    },
    {
        name: "Submarine",
        width: 3
    },
    {
        name: "Destroyer",
        width: 2
    },
] as ShipDto[]

export const ShipsWidthDictionary = {
    "Carrier": 5,
    "Battleship": 4,
    "Cruiser": 3,
    "Submarine": 3,
    "Destroyer": 2,
}

export default ships