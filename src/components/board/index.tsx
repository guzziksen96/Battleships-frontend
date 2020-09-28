import React from 'react'
import { Grid } from 'semantic-ui-react'
import ColumnInfo from './ColumnInfo';
import './Board.css'
import Cell from './Cell';
import { getColumns, rows } from '../../util/CommonUtil';

interface BoardProps {
    getCellstate: Function,
    onCellClick: Function
}
const columns = getColumns()
const Board = ({getCellstate, onCellClick }: BoardProps) => {

    return (
        <div className="grid-wrapper">
            <Grid columns='equal'>
                <ColumnInfo />
                {rows.map(r => (
                    <Grid.Row key={r}>
                        <Grid.Column> {r+1} </Grid.Column>
                        {columns.map(c => (
                            <Grid.Column key={r+c}>
                                <Cell state={getCellstate(r+1, c)} onClick={onCellClick} row={r+1} column={c} />
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                ))}
            </Grid>
        </div>

    )
}

export default Board
