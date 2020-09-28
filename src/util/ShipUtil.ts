import Ships from '../consts/Ships'

export const GetActiveShipName = (shipName: string, currentWidth: number) => {
    const currentShip = Ships.filter(s => s.name === shipName)[0];

    if(!currentShip){
        return "";
    }

    if(currentWidth < currentShip.width) {
        return currentShip.name
    }
    else{
        const currentShipIndex = Ships.indexOf(currentShip);

        if(currentShipIndex === Ships.length - 1){
            return "";
        }

        const newActiveShipName = Ships[currentShipIndex + 1].name;

        return newActiveShipName
    }

}