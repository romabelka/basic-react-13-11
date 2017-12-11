import {createSelector} from 'reselect'

export const articlesMapSelector = state => state.articles.entities
export const articlesLoadingSelector = state => state.articles.loading
export const filtersSelector = state => state.filters
export const commentListSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())
export const articleSelector = createSelector(articlesMapSelector, idSelector, (articlesMap, id) => articlesMap.get(id))

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
    return comments.getIn(['entities', id])
})