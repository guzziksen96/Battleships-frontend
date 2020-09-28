import React from 'react'

interface Props {
    onClick: Function;
    row: number;
    column: string;
    state: string;
}

const Cell = ({onClick, row, column, state} :Props) => {
    return (
        <div onClick={() => onClick(row, column)} className={"cell " + state}/>
    )
}

export default Cell
