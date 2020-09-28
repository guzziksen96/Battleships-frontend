import React, { ReactElement } from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const boardRange = 10;
const columns = Array.from(Array(boardRange).keys());

const toColumnName = (intValue: number) => String.fromCharCode(97 + intValue).toLocaleUpperCase();

const ColumnInfo = () => {
    return (
        <Grid.Row>
            <Grid.Column />
             {columns.map(c => (
            <Grid.Column className="column-info">
                {toColumnName(c)}
            </Grid.Column>
        ))} 
        </Grid.Row>
    )
}

export default ColumnInfo
