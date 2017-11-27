import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Filters from './Filters'

class App extends Component {
    render() {
        const {articles} = this.props
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Filters articles = {articles}/>
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}

export default App