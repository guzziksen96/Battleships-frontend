import React from 'react'
import { Grid } from 'semantic-ui-react'
import ColumnInfo from './ColumnInfo';
import './Board.css'
import Cell from './Cell';

const boardRange = 10;
const rows = Array.from(Array(boardRange).keys());
const columns = Array.from(Array(boardRange).keys());

const toColumnName = (intValue: number) => String.fromCharCode(97 + intValue);

interface BoardProps {
    getCellstate: Function,
    onCellClick: Function
}

const Board = ({getCellstate, onCellClick }: BoardProps) => {

    return (
        <div className="grid-wrapper">
            <Grid columns='equal'>
                <ColumnInfo />
                {rows.map(r => (
                    <Grid.Row>
                        <Grid.Column> {r+1} </Grid.Column>
                        {columns.map(c => (
                            <Grid.Column>
                                <Cell state={getCellstate(r+1, toColumnName(c))} onClick={onCellClick} row={r+1} column={toColumnName(c)} />
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                ))}
            </Grid>
        </div>

    )
}

export default Board
