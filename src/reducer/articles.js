import {Record} from 'immutable'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
import {arrToImmutableMap} from './utils'

const ArticleRecord = Record({
    id: null,
    title: '',
    text: null,
    date: null,
    comments: []
})

export default (articles = arrToImmutableMap([], ArticleRecord), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)

        case ADD_COMMENT:
            return articles.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES:
            return arrToImmutableMap(response)
    }

    return articles
}