export class HomePage {
  getAccount() {
    return cy
      .get(
        ":nth-child(1) > :nth-child(2) > :nth-child(1) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1"
      )
      .should("be.visible");
  }

  getAccountName() {
    return cy.contains("Boxture Acceptance Test").should("be.visible").click();
  }
  getLocation() {
    return cy.get(
      ":nth-child(2) > :nth-child(2) > :nth-child(1) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1"
    );
  }

  getOrdersClick() {
    return cy.get('[href="/orders"]', { timeout: 2000 }).should("be.visible");
  }
  getCreateOrder() {
    return cy
      .get(
        ".border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .sts-sidebar-menu-item__label",
        { timeout: 2000 }
      )
      .should("be.visible");
  }
  getPicklists() {
    return cy
      .get(
        '.border-r > .mt-5 > .flex-1 > :nth-child(3) > [href="/pick_lists"] > .sts-sidebar-menu-item__label'
      )
      .should("be.visible");
  }

  getcreateSales() {
    return cy.get(
      '.border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > [data-satis-sidebar-menu-item-target="submenu"] > :nth-child(3) > .sts-sidebar-menu-item__link > .sts-sidebar-menu-item__label'
    );
  }
  getcreateScrap() {
    return cy.get(
      '.border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > [data-satis-sidebar-menu-item-target="submenu"] > :nth-child(4) > .sts-sidebar-menu-item__link > .sts-sidebar-menu-item__label'
    );
  }
  getcreatePurchase() {
    return cy
      .get(
        '.border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > [data-satis-sidebar-menu-item-target="submenu"] > :nth-child(1) > .sts-sidebar-menu-item__link > .sts-sidebar-menu-item__label'
      )
      .should("be.visible");
  }
  getDestinationLocation() {
    return cy.get(
      ":nth-child(5) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1",
      { timeout: 1000 }
    );
  }
  // getProduct() {
  // 	return cy.get(
  // 		'#basic-content > .grid > .col-span-12 > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1'
  // 	)
  // }

  getCustomer() {
    return cy.get('[placeholder="Customer"]');
  }
  getScrapVendor() {
    return cy.get(
      ":nth-child(3) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1"
    );
  }
  getProduct() {
    return cy.get('[placeholder="Product"]', { timeout: 2000 });
  }
  getScrapOriginLoc() {
    return cy.get(".form-select");
  }

  getPurchaseQuantity() {
    return cy.get(
      "#orders_purchase_order_order_lines_attributes_TEMPLATE_quantity"
    );
  }
  getSalesQuantityOne() {
    return cy.get('input[data-order-line-target*="quantity"]');
  }

  getSalesQuantityTwoTest() {
    return cy.get('[id^="orders_sales_order_order_lines_"]');
  }
  getReceiveQuantity() {
    return cy.get("#orders_receive_items_attributes_TEMPLATE_quantity");
  }

  createAndContinueEditing() {
    return cy.get(".secondary").scrollIntoView();
  }
  createSalesOrder() {
    return cy.get(".button.primary").scrollIntoView();
  }
  getAction1() {
    // cy.get('.font-semibold').then(e1 => {
    // 	for (let i = 0; i <= 10; i++) {
    // 		if (e1.length > 0) {
    // 			cy.log('inside')
    // 			cy.wrap(e1).trigger('mouseover')
    // 			return
    // 		} else cy.wait(1000)
    // 	}
    // })
    cy.wait(3000);
    cy.get(".font-semibold").trigger("mouseover");
  }

  getConfirm() {
    return cy
      .contains(".pr-1", "Confirm")

      .click({ force: true });
  }
  getShow() {
    return cy
      .contains(".pr-1", "Show", { timeout: 2000 })
      .should("be.visible")

      .click({ force: true });
  }

  getAction2() {
    return cy.get(".font-semibold");
  }

  getPickClick() {
    return cy.get('[placeholder="Customer"]');
  }
  getProduct() {
    return cy.get('[placeholder="Product"]');
  }
  // orderNum() {
  // 	cy.get('.text-lg.leading-6.font-medium.text-gray-900 satis-copyable').then(
  // 		element => {
  // 			let orderNum = element.text()
  // 			let k = orderNum.split('#')
  // 			let number = k[1].trim()
  // 			return number
  // 		}
  // 	)
  // }
  getSalesOrderNum() {
    cy.get(".ml-4.mt-4.flex-1 h3").then((element) => {
      let orderNum = element.text();
      cy.log(orderNum);
      for (let i = 0; i <= 10; i++) {
        if (orderNum.trim().length > 15) {
          cy.log(orderNum);
          let k = orderNum.split("#");
          cy.log(orderNum);
          let number = k[1].trim();
          cy.log(number);
          // cy.get('tr td:nth-child(4)').click()
          cy.url().should("include", "/edit");
          return;
        } else {
          cy.wait(1000);
        }
        return;
      }
    });
  }

  getSalesOrderNum1() {
    cy.get(".ml-4.mt-4.flex-1 h3").then((element) => {
      let orderNum = element.text();

      let k = orderNum.split("#");
      cy.log(orderNum);
      let number = k[1].trim().substring(0, 8);
      cy.log(number);
      cy.contains("span.translation_missing", "Pick Lists").click();
      cy.contains("[data-controller=satis-link]", "#" + number)
        .scrollIntoView()
        .click();
      // cy.get('tr td:nth-child(4)').click()
    });
  }
  getPurchaseOrderNum() {
    cy.get(".text-lg.leading-6.font-medium.text-gray-900 satis-copyable").then(
      (element) => {
        let orderNum = element.text();
        let k = orderNum.split("#");
        let number = k[1].trim();
        cy.log(number);
      }
    );
  }
  getPackingMaterial() {
    return cy.get(
      ":nth-child(2) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1"
    );
  }
  getPackingMaterial1() {
    return cy.get('[placeholder="Packing material"]');
  }
  getProductDetails() {
    return cy.get(
      ":nth-child(1) > .grid-cols-12 > .col-span-11 > .grid > .sm:col-span-3 > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1"
    );
  }
  getReceiveButton() {
    return cy.contains(".button", "Receive").scrollIntoView().click();
  }
  getTote() {
    return cy.get('[placeholder = "Tote"]');
  }

  enterTote() {
    return cy.get(".border-none").clear().type("001{enter}");
  }
  getPackButton() {
    return cy.get('[type="submit"]');
  }
  getPicker() {
    cy.get(".-ml-4 div:nth-child(3)", { timeout: 2000 })
      .should("be.visible")
      .trigger("mouseover");
    cy.contains(".pr-1", "Assign", { timeout: 2000 })
      .should("be.visible")
      .click();
    cy.get(".form-label");
    cy.get('[placeholder="User"]', { timeout: 2000 })
      .should("be.visible")
      .type("Cypress ");
    // .should('have.value', 'Cypress Picker')
    cy.wait(1000);

    cy.contains(".translation_missing", "Assign", { timeout: 2000 })
      .should("be.visible")
      .click();
    cy.wait(1000);
  }
  statusChangeFromConfirmToProcessing() {
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
  }
  statusChangeFromProcessingToCancelled() {
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
  }
}

export const homePage = new HomePage();
