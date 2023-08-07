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
import { homePage } from "../support/pageObjects/HomePage";

Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  // cy.visit(Cypress.env("baseUrl"));
  cy.visit("/");
  cy.url().should("include", "oms.staging.boxture.com");
  cy.get("#user_email").type(username);
  cy.get("#user_password").type(password);
  cy.get("form.mt-2 > .w-full").click();
});

Cypress.Commands.add("loginUppababy", (username, password) => {
  // cy.visit(Cypress.env("baseUrl"));
  cy.visit(
    "https://1190042-sb1.app.netsuite.com/app/center/card.nl?sc=-29&whence="
  );
  cy.get("#email").type(username);
  cy.get("#password").type(password);
  cy.get("#login-submit").click();
});

Cypress.Commands.add("order", (OrderElement) => {
  cy.get(".-ml-4 div:nth-child(2)").then(function (logoelement) {
    // const order= logoelement.text()
    //cy.log(logoelement.text());
    expect(logoelement.text()).to.equal(OrderElement);
  });
});

//we can give this as a function.
Cypress.Commands.add("BAT_Account", (OrderElement) => {
  cy.get(
    ":nth-child(1) > :nth-child(2) > :nth-child(1) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1"
  )
    .clear()
    .type(this.data.account);
  cy.contains("Boxture Acceptance Test").click();
  cy.get(
    ":nth-child(2) > :nth-child(2) > :nth-child(1) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1"
  )
    .clear()
    .type(this.data.location);
});

Cypress.Commands.add("createSO1", () => {
  cy.url().should("include", "https://oms.staging.boxture.com/");
  cy.wait(2000);
  homePage.getOrdersClick().dblclick({ force: true });
  cy.wait(3000);
  homePage.getCreateOrder().click();
  cy.wait(2000);
  homePage.getcreateSales().click();

  cy.url().should("include", "type=sales_order");
});
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
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
