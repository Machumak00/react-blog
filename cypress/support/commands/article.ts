import { Article } from '@/entities/Article'

const defaultArticle = {
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: []
}

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { authorization: 'test' },
        body: article ?? defaultArticle
    }).then((resp) => resp.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'test' }
    })
}

export const search = (searchQuery: string = 'test_article') => {
    cy.getByTestId('ArticlesPageFilters.Search').clear()
    cy.getByTestId('ArticlesPageFilters.Search').type(searchQuery)
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle (article?: Article): Chainable<Article>

            removeArticle (articleId: string): Chainable<void>

            search (searchQuery: string): Chainable<void>

            sort (sort: string, order: string): Chainable<void>
        }
    }
}
