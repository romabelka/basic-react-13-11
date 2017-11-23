import React from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'

function App({ articles }) {
    return (
        <div>
            <h1>App name</h1>
            <ArticleList articles = {articles} />
            <ArticlesChart articles = {articles} />
        </div>
    )
}

export default App