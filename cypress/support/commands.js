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
    Cypress.session.clearAllSavedSessions()
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/')

    // Assert login page
    cy.url().should('include', '/users/sign_in')
    cy.title().should('eq', 'Boxture OMS')
    cy.contains('Log in to your account').click()

    // Get an input, type into it
    cy.get('[id^=user_email]').type(user.email)
    //cy.wait(1000)
    cy.get('[id^=user_password]').type(user.password)
    //cy.wait(5000)

    // Click Log in button
    cy.get('button').click()
    cy.url().should('include', '/')

    // Verify login screen
    cy.contains('Powered by Boxture') //IF THIS COMMAND IS REMOVED THE SCRIPT WILL FAIL
  })
})

Cypress.Commands.add('login_mobile', (user) => {
  cy.session(user, () => {
    Cypress.session.clearAllSavedSessions()
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/mobile')

    // Verify login screen
    cy.url().should('include', '/mobile')
    cy.get('.login-screen-title').contains('Login')

    cy.get('#user_email').type(user.email)
    cy.get('#user_password').type(user.password)
    cy.getCookie('_sessions_development').should('exist')

    // Click Log in button
    cy.get('button').click()
    cy.wait(2000)

    // Assert login page
    cy.get('.icon').should('be.visible')
    
  })
})

Cypress.Commands.add('logout',() => {
  cy.get('span').contains('Logout').click({force: true})
  cy.contains('Log in to your account')
  cy.url().should('include', '/users/sign_in')
})

Cypress.Commands.add('resetView', () => {
  cy.get('[data-act-table-target="header"]', { timeout:12000 })
  cy.get('[data-action="click->satis-menu#show"]').first().click()
  cy.get('[aria-label="Tabs"] .sts-menu__items').eq(0).then(($e1) => {
    cy.wrap($e1).find('li').then($e2=>{
    const text1 = $e2.text()
    if (text1.includes('Reset view')) {
      cy.contains('[data-card_key]','Reset view').click()
      cy.wait(1000)
    } else {
      cy.get('.ml-4.flex-1 > .text-lg').click()
    }
    })
    cy.get('[data-act-table-target="header"]')
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
