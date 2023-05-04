export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'test' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'user',
            age: 55,
            currency: 'RUB',
            country: 'Russia',
            city: 'Perm',
            username: 'test_user',
            avatar: 'https://m.economictimes.com/thumb/msid-98683708,width-1200,height-900,resizemode-4,imgsize-99158/russian-hacktivist-group-phoenix-targets-indias-health-ministry-website-cloudsek.jpg'
        }
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile (firstname: string, lastname: string): Chainable<void>

            resetProfile (profileId: string): Chainable<void>
        }
    }
}
