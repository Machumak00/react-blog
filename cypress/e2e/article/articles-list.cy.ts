describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit('articles')
        })
    })
    it('И они успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
    it('И вводит в поиск', () => {
        // TODO
    })
    it('И сортирует по названию', () => {
        // TODO
    })
})
