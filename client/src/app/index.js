import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { addrInsertPage, addrUpdate, addrList } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/addr/list" exact component={addrList} />
                <Route path="/addr/insert" exact component={addrInsertPage} />
                <Route 
                    path="/addr/update/:id" 
                    exact
                    component={addrUpdate}
                /> 
            </Switch>
        </Router>
    )
} 

export default App