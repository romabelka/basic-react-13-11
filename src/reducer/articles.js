import {Record} from 'immutable'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToImmutableMap} from './utils'

const ArticleRecord = Record({
    id: null,
    title: '',
    text: null,
    date: null,
    comments: []
})

export default (articles = arrToImmutableMap(defaultArticles, ArticleRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)

        case ADD_COMMENT:
            return articles.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId))
    }

    return articles
}