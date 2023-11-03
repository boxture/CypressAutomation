// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login', (user) => {
  cy.session(user, () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/')

    // Assert login page
    cy.url().should('include', '/users/sign_in')
    cy.title().should('eq', 'Boxture OMS')
    cy.contains('Log in to your account').click()

    // Get an input, type into it
    cy.get('[id^=user_email]').type(user.email)
    cy.get('[id^=user_password]').type(user.password)

    // Click Log in button
    cy.get('button').click()
    cy.url().should('include', '/')

    // Verify login screen
    cy.contains('Powered by Boxture') //IF THIS COMMAND IS REMOVED THE SCRIPT WILL FAIL
  })
})

Cypress.Commands.add('resetView', (OrderElement) => {
  cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()
  cy.wait(500)
  cy.get('[aria-label="Tabs"] .sts-menu__items').eq(0).then(($e1) => {
    cy.wrap($e1).find('li').then($e2=>{
    const text1 = $e2.text()
    if (text1.includes('Reset view')) {
      cy.log(text1)
      cy.contains('Reset view').click()
      cy.get('.title').contains('Account')
    } else {
      cy.get('.border-r > .items-center > img').click()
    }
    })

  })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
