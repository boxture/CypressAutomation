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
    cy.wait(500);
    cy.contains("Open Sales-orders per account")
      .should("be.visible")
      .should("exist");
    cy.contains("Inventory (value) by location")
      .should("be.visible")
      .should("exist");
    cy.get("rect.legendtoggle").should("be.visible").should("exist");
    cy.get(".surface").should("exist");
    cy.get("[placeholder='Location']").clear().type("cpr-ind");
    cy.wait(500);
    cy.get(
      '.border-r > .mt-5 > .flex-1 > :nth-child(2) > [href="/orders"] > .sts-sidebar-menu-item__label'
    )
      .should("be.visible")
      .click();
    cy.get(
      ".border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .sts-sidebar-menu-item__label"
    ).click();
    cy.get(
      '.border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > [data-satis-sidebar-menu-item-target="submenu"] > :nth-child(3) > .sts-sidebar-menu-item__link > .sts-sidebar-menu-item__label'
    ).click();
    cy.url().should("include", "type=sales_order");
    cy.get('[placeholder="Customer"]')
      .type("cypress")
      .should("have.value", "CYPRESS COMPANY");
    cy.get('[placeholder="Product"]')
      .type("BXT-SNXX000000002")
      .should(
        "have.value",
        "[Cypress] BXT-SNXX000000002 BXT-SNXX000000002 Name"
      );
    cy.get('input[data-order-line-target*="quantity"]').eq(1).clear().type("1");

    cy.get(".secondary").scrollIntoView().should("be.visible").click();
    cy.pause();
    cy.get(".-ml-4")
      .find(".font-semibold")
      .then((ele) => {
        let lengt = ele.length;
        cy.log(lengt);

        for (let i = 0; i < 3; i++) {
          if (lengt == 1) {
            cy.wrap(ele).click();
            return;
          } else {
            cy.wait(1000);
          }
        }
      });
    cy.get(".font-semibold").trigger("mouseover");
    cy.contains(".pr-1", "Confirm").should("be.visible").click({ force: true });
    cy.contains("Pricing and values");
  });
});
