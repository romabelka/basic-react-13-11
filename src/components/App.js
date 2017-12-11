import React, {Component} from 'react'
import {Route, Switch, NavLink} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <div>
                    <div><NavLink to="/counter" activeStyle={{color: 'red'}}>counter</NavLink></div>
                    <div><NavLink to="/articles" activeStyle={{color: 'red'}}>articles</NavLink></div>
                    <div><NavLink to="/filters" activeStyle={{color: 'red'}}>filters</NavLink></div>
                </div>
                <Switch>
                    <Route path="/counter" component={Counter} strict exact/>
                    <Route path="/filters" component={Filters}/>
                    <Route path="/articles" component={ArticlesPage}/>
                </Switch>
            </div>
        )
    }
}

export default App