import React, {Component} from 'react'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'

class App extends Component {
    render() {
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Menu>
                    <MenuItem url="/counter">Counter</MenuItem>
                    <MenuItem url="/articles">Articles</MenuItem>
                    <MenuItem url="/filters">Filters</MenuItem>
                    <MenuItem url="/comments/1">Comments</MenuItem>
                </Menu>
                <Switch>
                    <Redirect from="/" exact to="/articles"/>
                    <Route path="/counter" component={Counter} strict exact/>
                    <Route path="/filters" component={Filters}/>
                    <Route path="/articles/new" render={() => <h1>New Article</h1>}/>
                    <Route path="/articles" component={ArticlesPage}/>
                    <Route path="/comments" component = {CommentsPage}/>
                    <Route path="/error" component = {() => <h1>Oooops!</h1>}/>
                    <Route path="*" render={() => <h1>Not found</h1>}/>
                </Switch>
            </div>
        )
    }
}

export default App