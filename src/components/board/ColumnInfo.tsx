import React from 'react'
import { Grid } from 'semantic-ui-react'
import { getColumns } from '../../util/CommonUtil'

const columns = getColumns(true)

const ColumnInfo = () => {
    return (
        <Grid.Row>
            <Grid.Column />
             {columns.map(c => (
            <Grid.Column className="column-info" key={c}>
                {c}
            </Grid.Column>
        ))} 
        </Grid.Row>
    )
}

export default ColumnInfo
