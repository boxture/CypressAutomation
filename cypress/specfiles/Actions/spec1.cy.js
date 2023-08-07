describe("SO", () => {
  it("Create SO", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("baseUrl"));
    cy.url().should("include", "oms.staging.boxture.com");
    cy.get("#user_email").type(Cypress.env("username"));
    cy.get("#user_password").type(Cypress.env("password"));
    cy.get("form.mt-2 > .w-full").click();
    cy.get('[placeholder="Account"]').clear().type("Cypress");
    cy.wait(2000);
    cy.contains("Open Sales-orders per account")
      .should("be.visible")
      .should("exist");
    cy.contains("Inventory (value) by location")
      .should("be.visible")
      .should("exist");
    cy.get("rect.legendtoggle").should("be.visible").should("exist");
    cy.get(".surface").should("exist");
    cy.get("[placeholder='Location']").clear().type("cpr-ind");
    cy.pause();
    cy.get("Orders").click({ force: true });
    cy.contains("Create").click();
    cy.contains("New sales order").click();
  });
});
