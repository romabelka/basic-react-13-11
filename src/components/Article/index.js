import React, {Component, PureComponent} from 'react'
import {connect} from 'react-redux'
import {findDOMNode} from 'react-dom'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import {deleteArticle, loadArticleById} from '../../AC'
import Loader from '../common/Loader'
import {articleSelector} from '../../selectors'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from connect
        article: PropTypes.shape({
            title: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array
        })
    }

    constructor(props) {
        super(props)

        this.state = {
            error: null,
            counter: 0
        }
    }
    componentDidMount() {
        const {id, article, loadArticleById} = this.props
        if (!article || (!article.loading && !article.text)) loadArticleById(id)
    }

    componentDidCatch(err) {
        this.setState({
            error: 'can`t display an article'
        })
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
/*

    shouldComponentUpdate(nextProps, nextState) {
        return !Object.keys(nextProps).every(prop => this.props[prop] === nextProps[prop])
    }
*/

    render() {
        console.log('---', 4)
        if (this.state.error) return <h1>{this.state.error}</h1>

        const {article, isOpen, toggleOpen} = this.props
        if (!article) return null

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick = {this.handleDelete}>delete me</button>
                </h2>
                <CSSTransition
                    transitionName = 'article'
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {500}
                    transitionAppear
                    component = 'div'
                >
                    {this.getBody()}
                </CSSTransition>
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader />
        return (
            <div>
                <button onClick = {this.increment}>increment</button>
                <section>{article.text}</section>
                <CommentList article = {article}
                             key = {this.state.counter}/>
            </div>
        )
    }

    handleDelete = () => {
        const {article, deleteArticle} = this.props
        deleteArticle(article.id)
    }
}


export default connect((state, props) => ({
    article: articleSelector(state, props)
}), { deleteArticle, loadArticleById }, null, { pure: false })(Article)