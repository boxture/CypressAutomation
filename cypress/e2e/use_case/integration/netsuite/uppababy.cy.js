describe('Create Sales order', () => {

    
    // beforeEach(() => {
    //     cy.get('[email]').type('info@boxture.com')
    //     cy.get('[password]').type('BoxRap2022!')

    it('Create Sales order', () => {

        cy.visit('https://1190042-sb2.app.netsuite.com/app/accounting/transactions/salesord.nl?whence=')
        cy.get('#email').type('info@boxture.com')
        cy.get('#password').type('BoxRap2022!')
        cy.get('#login-submit').click()
        cy.pause()
        cy.get('#entity_display').type('Neth4817 Jamak')


    })
})

