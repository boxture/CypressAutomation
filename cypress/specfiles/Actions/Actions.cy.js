/// <reference types="cypress" />
let data1;
import { homePage } from "../../support/pageObjects/HomePage";

const username = "pavirajuv+3@gmail.com";
const password = "Qwerty@123";

// Cypress._.times(10, () => {
describe("CREATE SALES ORDER", () => {
  before(() => {
    cy.fixture("fix").then(function (data) {
      data1 = data;
    });
  });
  beforeEach("visit login page", () => {
    window.logCalls = 1;
    window.testFlow = [];
    cy.login(username, password);
  });

  it("Create sales order", () => {
    homePage.getAccount().clear().type(data1.account);
    cy.url().should("include", "https://oms.staging.boxture.com/");
    cy.wait(1000);
    homePage.getOrdersClick().dblclick({ force: true });
    cy.wait(2000);
    homePage.getCreateOrder().click();
    cy.wait(1000);
    homePage.getcreateSales().click();

    cy.url().should("include", "type=sales_order");

    homePage
      .getCustomer()
      .type(data1.customer)
      .should("have.value", "CYPRESS COMPANY");

    homePage
      .getProduct()
      .type(data1.product1)
      .should("have.value", "[Cypress] BXT-SNXX000000000 Chair");

    homePage.getSalesQuantityOne().eq(0).clear().type("1");

    homePage
      .getProduct()
      .eq(1)
      .type(data1.product2)
      .should("have.value", "[Cypress] BXT-SNYX00000000 BXT-SNYX00000000 Name");

    homePage.getSalesQuantityOne().eq(1).clear().type("1");

    homePage.createAndContinueEditing().should("be.visible").click();

    homePage.getSalesOrderNum();

    homePage.getAction1();

    homePage.getConfirm();

    cy.contains("Pricing and values");

    for (let i = 0; i < 100; i++) {
      cy.get("#basic-content > .grid > :nth-child(1) > .text-sm").then(
        (statusElement) => {
          let status00 = statusElement.text();
          if (status00 === "confirming") {
            cy.wait(1000);
          }
          for (let i = 0; i < 1; i++) {
            if (status00 === "processing") {
              break;
            }
          }
        }
      );
    }
  });
  it("Cancel sales order", () => {
    homePage.getAccount().clear().type(data1.account);
    cy.url().should("include", "https://oms.staging.boxture.com/");
    cy.wait(1000);
    homePage.getOrdersClick().dblclick({ force: true });
    cy.wait(2000);
    homePage.getCreateOrder().click();
    cy.wait(1000);
    homePage.getcreateSales().click();

    cy.url().should("include", "type=sales_order");

    homePage
      .getCustomer()
      .type(data1.customer)
      .should("have.value", "CYPRESS COMPANY");

    homePage
      .getProduct()
      .type(data1.product1)
      .should("have.value", "[Cypress] BXT-SNXX000000000 Chair");

    homePage.getSalesQuantityOne().eq(0).clear().type("1");

    homePage
      .getProduct()
      .eq(1)
      .type(data1.product2)
      .should("have.value", "[Cypress] BXT-SNYX00000000 BXT-SNYX00000000 Name");

    homePage.getSalesQuantityOne().eq(1).clear().type("1");

    homePage.createAndContinueEditing().should("be.visible").click();

    homePage.getSalesOrderNum();

    homePage.getAction1();

    homePage.getConfirm();

    cy.contains("Pricing and values");

    for (let i = 0; i < 100; i++) {
      cy.get("#basic-content > .grid > :nth-child(1) > .text-sm").then(
        (statusElement) => {
          let status00 = statusElement.text();
          if (status00 === "confirming") {
            cy.wait(1000);
          }
          for (let i = 0; i < 1; i++) {
            if (status00 === "processing") {
              break;
            }
          }
        }
      );
    }
    cy.get(".mt-2 > .sts-menu > .sts-menu__button > .font-semibold").trigger(
      "mouseover"
    );
    cy.wait(3000);
    cy.get(
      ".mt-2 > .sts-menu > .sts-menu__items > :nth-child(2) > .cursor-pointer > .flex-1"
    ).click({ force: true });
    cy.wait(2000);
    cy.get(".button").click();
    for (let i = 0; i < 100; i++) {
      cy.get("#basic-content > .grid > :nth-child(1) > .text-sm").then(
        (statusElement) => {
          let status00 = statusElement.text();
          if (status00 === "processing") {
            cy.wait(1000);
          }
          for (let i = 0; i < 1; i++) {
            if (status00 === "cancelled") {
              break;
            }
          }
        }
      );
    }
  });
});
