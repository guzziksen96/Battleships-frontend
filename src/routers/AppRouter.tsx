import React, { ReactElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import StartNewGame from '../pages/newGame'
import Layout from '../layout'
import Game from '../pages/game'

export default function AppRouter(): ReactElement {
    return (
        <Layout>
            <Switch>
                <Route exact path={"/"} component={StartNewGame} />
                <Route exact path={"/game/:id"} component={Game} />
            </Switch>

        </Layout>

    )
}
