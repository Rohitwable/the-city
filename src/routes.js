import React from 'react'
import Layout from './hoc/layout'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'

const Routes = () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </Layout>
)

export default Routes