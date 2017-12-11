import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ArticleList />
                <Route path={`${this.props.match.path}/:id`} render={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage