import React, { ReactElement } from 'react'
import { Step } from 'semantic-ui-react'
import Ships from '../../consts/Ships'
import { useSelector } from "react-redux"
import { AppState } from '../../store/type'


const Stepper = () => {

    const selectedShipCoordinatesCount = useSelector((state: AppState) => state.selectedShipCoordinates.length)
    const getActiveIndex = (): number => {

        if(selectedShipCoordinatesCount < 5) {
            return 0;
        }
        if(selectedShipCoordinatesCount >= 5 && selectedShipCoordinatesCount < 9 ) {
            return 1;
        }
        if(selectedShipCoordinatesCount >= 9 && selectedShipCoordinatesCount < 12 ) {
            return 2;
        }
        if(selectedShipCoordinatesCount >= 12 && selectedShipCoordinatesCount < 15 ) {
            return 3;
        }
        if(selectedShipCoordinatesCount >=  15 && selectedShipCoordinatesCount < 17 ) {
            return 4;
        } 
        else{
            return 5;
        }

        return -1;
    }

    return (
        <Step.Group ordered>
            {Ships.map((s, index) => (
                <Step completed={index < getActiveIndex()} active={index == getActiveIndex()} >
                    <Step.Content>
                        <Step.Title>Place {s.name}</Step.Title>
                        <Step.Description>{s.width} width ship</Step.Description>
                    </Step.Content>
                </Step>
            ))}

        </Step.Group>
    )
}

export default Stepper
