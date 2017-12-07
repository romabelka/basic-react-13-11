import {Record} from 'immutable'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS } from '../constants'
import {arrToImmutableMap} from './utils'

const ArticleRecord = Record({
    id: null,
    title: '',
    text: null,
    date: null,
    comments: []
})

const ReducerRecord = Record({
    entities: arrToImmutableMap([], ArticleRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (articles = new ReducerRecord(), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articles.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('loading', false)
                .set('entities', arrToImmutableMap(response, ArticleRecord))
    }

    return articles
}