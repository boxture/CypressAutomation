// TEST CASES:
// 1. verify if the page does not return a 500 failure [DONE]
// 2  title of page is present [PENDING]
// 3. url is returning the correct endpoint [DONE]
// 4. all columns are present [DONE]
// 5. infinite scroll is working [PENDING]
// 6. no failures displayed on page e.g. 'undefined method' , 'Content missing'... [PENDING]

// KNOWN ISSUES:
// https://github.com/boxture/oms/issues/3291: /audits is only reachable for the role admin super user.
// https://github.com/boxture/oms/issues/3292: /reporting/manual_inventory_adjustments is taking 10+ seconds to load.
// https://github.com/boxture/oms/issues/3211: /holiday returns a undefined method `iso8601'.
// https://github.com/boxture/oms/issues/3293: /messaging href: Action table export missing.
// https://github.com/boxture/oms/issues/3040: /settings Inventory: Restrict transactions to setup complete slow.

beforeEach(() => {
  cy.login({ email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})
})

describe('Views', () => {
  it('Orders ', () => {
    // Orders
    cy.visit('/orders')
    cy.url().should('include', '/orders')
    cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

    cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
      const text = $e1.text()
      if (text.includes('Reset view')) {
        cy.contains('Reset view').click()
        cy.contains('.translation_missing', 'Orders').click()
      } else {
        cy.contains('[title*="index.orders"]', 'Orders').click()
      }
    })
    cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="id"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="type"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="channel"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="business_model"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ship_at"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expected"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pending"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="received"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="backordered"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picking"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipped"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="cancelled"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="vendor"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="origin_locations"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="destination_location"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="received_at"]').should('be.visible')
    });
    cy.get('[data-act-table-target="column"][data-column="account"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="id"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="type"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="state"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="channel"]').should(
      "be.visible"
    );
    cy.get(
      '[data-act-table-target="column"][data-column="business_model"]'
    ).should("be.visible");
    cy.get('[data-act-table-target="column"][data-column="ship_at"]').should(
      "be.visible"
    );
    cy.get(
      '[data-act-table-target="column"][data-column="customer_reference_number"]'
    ).should("be.visible");
    cy.get(
      '[data-act-table-target="column"][data-column="purchase_order_number"]'
    )
      .scrollIntoView()
      .should("be.visible");
    cy.get(
      '[data-act-table-target="column"][data-column="purchase_order_number"]'
    ).should("be.visible");
    cy.get('[data-act-table-target="column"][data-column="expected"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="pending"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="received"]').should(
      "be.visible"
    );
    cy.get(
      '[data-act-table-target="column"][data-column="backordered"]'
    ).should("be.visible");
    cy.get('[data-act-table-target="column"][data-column="allocated"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="picking"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="picked"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="packed"]')
      .scrollIntoView()
      .should("be.visible");
    cy.get('[data-act-table-target="column"][data-column="packed"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="shipped"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="hold"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="cancelled"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="customer"]').should(
      "be.visible"
    );
    cy.get('[data-act-table-target="column"][data-column="vendor"]').should(
      "be.visible"
    );
    cy.get(
      '[data-act-table-target="column"][data-column="origin_locations"]'
    ).should("be.visible");
    
    cy.get(
      '[data-act-table-target="column"][data-column="destination_location"]'
    ).should("be.visible");
    
    cy.get('[data-act-table-target="column"][data-column="created_at"]')
      .scrollIntoView()
      .should("be.visible");
    cy.get(
      '[data-act-table-target="column"][data-column="received_at"]'
    ).should("be.visible");
  }),
    it('Purchase Order Lines - Basic', () => {
      // Purchase Order Lines - Basic
      cy.visit('/orders?type=Orders%3A%3APurchaseOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3APurchaseOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')

      cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pending"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="backordered"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="cancelled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').should('be.visible')
    }),
    it('Purchase Orders Lines - Items', () => {
      // Purchase Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3APurchaseOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3APurchaseOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').should('be.visible')
    }),
    it('Purchase Orders Lines - Pricing and values', () => {
      // Purchase Orders Lines - Pricing and values
      cy.visit('/orders?type=Orders%3A%3APurchaseOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3APurchaseOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').eq(1).scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').should('be.visible')
    }),
    it('Transfer Order Lines - Basic', () => {
      // Trans Order Lines - Basic
      cy.visit('/orders?type=Orders%3A%3ATransferOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ATransferOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')

      cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pending"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="backordered"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="cancelled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').should('be.visible')
    }),
    it('Transfer Orders Lines - Items', () => {
      // Transfer Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3ATransferOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ATransferOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').should('be.visible')
    }),
    it('Transfer Orders Lines - Pricing and values', () => {
      // Purchase Orders Lines - Pricing and values
      cy.visit('/orders?type=Orders%3A%3ATransferOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ATransferOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').eq(1).scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').should('be.visible')
    }),
    it('Sales Order Lines - Basic', () => {
      // Sales Order Lines - Basic
      cy.visit('/orders?type=Orders%3A%3ASalesOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ASalesOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')

      cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pending"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="backordered"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="cancelled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').should('be.visible')
    }),
    it('Sales Orders Lines - Items', () => {
      // Sales Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3ASalesOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ASalesOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').should('be.visible')
    }),
    it('Sales Orders Lines - Pricing and values', () => {
      // Sales Orders Lines - Pricing and values
      cy.visit('/orders?type=Orders%3A%3ASalesOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ASalesOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="price"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="amount"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="discount"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tax"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="line_total"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').should('be.visible')
    }),
    it('Return Order Lines - Basic', () => {
      // Return Order Lines - Basic
      cy.visit('/orders?type=Orders%3A%3AReturnOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AReturnOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')

      cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pending"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="backordered"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="cancelled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').should('be.visible')
    }),
    it('Return Orders Lines - Items', () => {
      // Return Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3AReturnOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AReturnOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').should('be.visible')
    }),
    it('Return Orders Lines - Pricing and values', () => {
      // Return Orders Lines - Pricing and values
      cy.visit('/orders?type=Orders%3A%3AReturnOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AReturnOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()
      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]')

        .scrollIntoView()
        .should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').should('be.visible')
    }),
    it('Scrap Order Lines - Basic', () => {
      // Scrap Order Lines - Basic
      cy.visit('/orders?type=Orders%3A%3AScrapOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AScrapOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')

      cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pending"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="backordered"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="cancelled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').should('be.visible')
    }),
    it('Scrap Orders Lines - Items', () => {
      // Return Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3AScrapOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AScrapOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').should('be.visible')
    }),
    it('Scrap Orders Lines - Pricing and values', () => {
      // Scrap Orders Lines - Pricing and values
      cy.visit('/orders?type=Orders%3A%3AScrapOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AScrapOrder')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.contains('[title*="index.orders"]', 'Orders').click()
        }
      })
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })

      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').should('be.visible')
    }),
    it('Pick Lists ', () => {
      // Pick Lists
      cy.visit('/pick_lists')
      cy.url().should('include', '/pick_lists')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="accounts"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="orders"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="channels"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipping_methods"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer_references"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="wave"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pick_list_plan"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picker"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity_to_pick"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ship_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    }),
    it('Plans ', () => {
      // Plans
      cy.visit('/pick_list_plans')
      cy.url().should('include', '/pick_list_plans')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pick_list_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="# applicable orders"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="# waves"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="# pick lists"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="actions"]').should('be.visible')
    }),
    it('Waves ', () => {
      // Waves
      cy.visit('/pick_list_waves')
      cy.url().should('include', '/pick_list_waves')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pick_list_plan"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pick_lists"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Shipments ', () => {
      cy.visit('/shipments')
      cy.url().should('include', '/shipments')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="id"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="carrier"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="service_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcels"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="orders"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer_reference_numbers"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tracking_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="return_tracking_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Inventory ', () => {
      // Inventory
      cy.visit('/inventories')
      cy.url().should('include', '/inventories')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location_purpose"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="available"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expired"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="total"]').should('be.visible')
    }),
    it('Consolidated ', () => {
      // Consolidated
      cy.visit('/inventories/consolidated')
      cy.url().should('include', '/inventories/consolidated')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="available"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expired"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="total"]').should('be.visible')
    }),
    it('Kits ', () => {
      // Kits
      cy.visit('inventories/kits')
      cy.url().should('include', '/inventories/kits')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="available"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_locations"]').should('be.visible')
    }),
    it('License plates ', () => {
      // License plates
      cy.visit('/inventory_license_plates')
      cy.url().should('include', '/inventory_license_plates')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="license_plate"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serial_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expires_on"]').should('be.visible')
    }),
    it('Containers ', () => {
      // Containers
      cy.visit('/containers')
      cy.url().should('include', '/containers')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="in_container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="contents"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="license_plate"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="open_or_closed"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Products ', () => {
      // Products
      cy.visit('/products')
      cy.url().should('include', '/products')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ean_or_upc"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="category"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="kit"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot_tracked"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot_pattern"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serialized"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serialization_mode"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serial_number_pattern"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expirable"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="weight"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_country_code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="standard_bin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="actions"]').should('be.visible')
    }),
    it('Customers ', () => {
      // Customers
      cy.visit('/customers')
      cy.url().should('include', '/customers')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="contact"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="company"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="email"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="phone"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="State/Province"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="country"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Vendors ', () => {
      // Vendors
      cy.visit('/vendors')
      cy.url().should('include', '/vendors')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="contact"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="company"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="email"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="phone"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="State/Province"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="country"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Reporting - Bin location movements ', () => {
      // Reporting - Bin location movements
      cy.visit('/reporting/bin_location_movements')
      cy.url().should('include', '/reporting/bin_location_movements')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="transacted_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="user"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="from_location_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="from_bin_location_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_bin_location_purpose"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_location_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_bin_location_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_bin_location_purpose"]').should('be.visible')
    }),
    it('Reporting - Container Bin Location Movements ', () => {
      // Reporting - Container Bin Location Movements
      cy.visit('/reporting/container_bin_location_movements')
      cy.url().should('include', '/reporting/container_bin_location_movements')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="user"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="from_location_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="from_bin_location_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="from_bin_location_purpose"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_location_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_bin_location_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_bin_location_purpose"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="transacted_at"]').should('be.visible')
    }),
    it('Reporting - Container Inventory Adjustments ', () => {
      // Reporting - Container Inventory Adjustments
      cy.visit('/reporting/container_inventory_adjustments')
      cy.url().should('include', '/reporting/container_inventory_adjustments')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="user"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory_adjust"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="total_inventory_count"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="transacted_at"]').should('be.visible')
    }),
    it('Reporting - Inbounded inventory items', () => {
      // Reporting - Inbounded inventory items
      cy.visit('/reporting/inbounded_inventory_items')
      cy.url().should('include', '/reporting/inbounded_inventory_items')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="received_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received_by"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="delivery_terms"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="vendor"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipping_container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipping_container_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received_quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_category"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="un_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packing_material_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packing_material_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="total_weight"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serial"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').should('be.visible')
    }),
    it('Reporting - Inventory on hand', () => {
      // Reporting - Inventory on hand
      cy.visit('/reporting/inventory_on_hand')
      cy.url().should('include', '/reporting/inventory_on_hand')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="outer_container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inner_container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="license_plate"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serial_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inbounded_at"]').should('be.visible')
    }),
    it.skip('Reporting - Manual inventory adjustments', () => {
      // Reporting - Manual inventory adjustments - #3292
      cy.visit('/reporting/manual_inventory_adjustments')
      cy.url().should('include', '/reporting/manual_inventory_adjustments')

      cy.get('[data-act-table-target="column"][data-column="order"]', {
        timeout: 20000,
      }).should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serial_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="license_plate"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="comments"]').should('be.visible')
    }),
    it('Reporting - Open sales orders', () => {
      // Reporting - Open sales orders
      cy.visit('/reporting/open_sales_orders')
      cy.url().should('include', '/reporting/open_sales_orders')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="channel"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="business_model"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="to_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="address"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="city"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="postal_code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="country"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ship_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="country_of_origin"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="value"]').should('be.visible')
    }),
    it('Reporting - Open receives', () => {
      // Reporting - Open receives
      cy.visit('/reporting/open_receives')
      cy.url().should('include', '/reporting/open_receives')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inbound_tracking_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="forwarder"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipping_container"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipping_container_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="vendor_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity_ordered"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity_received"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="last_received_at"]').should('be.visible')
    }),
    it('Reporting - Replenishment items', () => {
      // Reporting - Replenishment items
      cy.visit('/reporting/replenishment_items')
      cy.url().should('include', '/reporting/replenishment_items')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking_available"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="reorder_level"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="reorder_quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="receiving_available"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="replenishment_available"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="replenishment_needed_for_orders_today"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="replenishment_needed_for_orders"]').should('be.visible')
    }),
    it('Reporting - Shipped products', () => {
      // Reporting - Shipped products
      cy.visit('/reporting/shipped_products')
      cy.url().should('include', '/reporting/shipped_products')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="shipped_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipment"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="business_model"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="delivery_terms"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipping_method"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ship_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ship_earliest_on"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="company_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="contact"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="address"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="postal_code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="country"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tracking_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="carrier"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="from_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="country_of_origin"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="currency"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="value"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packing_material_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packing_material_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packaging_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="weight"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="weight_unit"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="length"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="width"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="height"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="dimension_unit"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serial"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_category"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="un_number"]').should('be.visible')
    }),
    it('Reporting - Shipped serial numbers', () => {
      // Reporting - Shipped serial numbers
      cy.visit('/reporting/shipped_serial_numbers')
      cy.url().should('include', '/reporting/shipped_serial_numbers')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="shipped_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipment"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="destination_contact"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="destination_country"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="carrier"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tracking_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="serial_number"]').should('be.visible')
    }),
    it('Tickets', () => {
      // Tickets
      cy.visit('/agent/tickets')
      cy.url().should('include', '/agent/tickets')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="priority"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="subject"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="group"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="assignee"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="requester"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="updated_at"]').should('be.visible')
    }),
    it('Tickets - Work order', () => {
      // Tickets - Work order
      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('include', '/agent/tickets?kind=manual')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="priority"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="subject"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="group"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="assignee"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="requester"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="updated_at"]').should('be.visible')
    }),
    it('Tickets - Problems', () => {
      // Tickets - Problems
      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('include', '/agent/tickets?kind=automated')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="priority"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="subject"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="group"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="assignee"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="requester"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="updated_at"]').should('be.visible')
    }),
    it('Tickets - Groups', () => {
      // Tickets - Groups
      cy.visit('/agent/groups')
      cy.url().should('include', '/agent/groups')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="updated_at"]').should('be.visible')
    }),
    it('Tickets - Contacts', () => {
      // Tickets - Contacts
      cy.visit('/agent/contacts')
      cy.url().should('include', '/agent/contacts')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="email"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="phone"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="twitter"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="time_zone"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="group"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="owner"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="suspended"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="updated_at"]').should('be.visible')
    }),
    it('Tickets - Organisations', () => {
      // Tickets - Organisations
      cy.visit('/agent/organizations')
      cy.url().should('include', '/agent/organizations')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="owner"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="url"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="domains"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="updated_at"]').should('be.visible')
    }),
    it('Billing', () => {
      // Billing
      cy.visit('/billing')
      cy.url().should('include', '/billing')
    }),
    it('Billing - Events', () => {
      // Billing - Events
      cy.visit('/billing/events')
      cy.url().should('include', '/billing/events')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })

      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="event_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="fields"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').should('be.visible')
    }),
    it('Transaction Logs', () => {
      // Transaction Logs
      cy.visit('/transaction_logs')
      cy.url().should('include', '/transaction_logs')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="transaction"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="user"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it.skip('Audits', () => {
      // Audits - #3291
      cy.visit('/audits')
      cy.url().should('include', '/audits')

      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Mobile Apps', () => {
      // Mobile Apps
      cy.visit('/distribution/apps')
      cy.url().should('include', '/distribution/apps')
    }),
    it('Accounts', () => {
      // Admin - Users & Accounts - Accounts
      cy.visit('/admin/accounts')
      cy.url().should('include', '/admin/accounts')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parent_account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Users', () => {
      // Admin - Users & Accounts - Users
      cy.visit('/admin/users')
      cy.url().should('include', '/admin/users')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="first_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="last_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="company"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="email"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="roles"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="time_zone"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Carriers', () => {
      // Admin - Carriers & Services - Carriers
      cy.visit('/admin/carriers')
      cy.url().should('include', '/admin/carriers')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="countries"]').should('be.visible')
    }),
    it('Channels', () => {
      // Admin - Carriers & Services - Channels
      cy.visit('/admin/channels')
      cy.url().should('include', '/admin/channels')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

          cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
            const text = $e1.text()
            if (text.includes('Reset view')) {
              cy.contains('Reset view').click()
              cy.contains('.translation_missing', 'Orders').click()
            } else {
              cy.get('.border-r > .items-center > img').click()
            }
          })
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="url"]').should('be.visible')
    }),
    it('Service Types', () => {
      // Admin - Carriers & Services - Service Types
      cy.visit('/admin/service_types')
      cy.url().should('include', '/admin/service_types')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="carrier"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="code"]').should('be.visible')
    }),
    it('Shipping methods', () => {
      // Admin - Carriers & Services - Shipping methods
      cy.visit('/admin/shipping_methods')
      cy.url().should('include', '/admin/shipping_methods')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="carrier"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="service_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="default_packing_material"]').should('be.visible')
    }),
    it.skip('Holidays', () => {
      // Admin - Carriers & Services - Holidays - #3211
      cy.visit('/admin/holidays')
      cy.url().should('include', '/admin/holidays')

      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="start_on"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="end_on"]').should('be.visible')
    }),
    it('Reasons', () => {
      // Admin - Carriers & Services - Reasons
      cy.visit('/admin/reasons')
      cy.url().should('include', '/admin/reasons')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="use"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
    }),
    it('Locations', () => {
      // Admin - Warehousing - Locations
      cy.visit('/admin/locations')
      cy.url().should('include', '/admin/locations')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="company_name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="address_lines"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="postal_code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="city"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state_or_province_code"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="country_code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
    }),
    it('Bin locations', () => {
      // Admin - Warehousing - Bin locations
      cy.visit('/admin/bin_locations')
      cy.url().should('include', '/admin/bin_locations')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="purpose"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="zone"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="walkway"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="aisle"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rack"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shelf"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="section"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="standard_for_product"]').should('be.visible')
    }),
    it('Totes', () => {
      // Admin - Warehousing - Totes
      cy.visit('/admin/totes')
      cy.url().should('include', '/admin/totes')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="order"]').should('be.visible')
    }),
    it('Packing Materials', () => {
      // Admin - Warehousing - Packing Material
      cy.visit('/admin/packing_materials')
      cy.url().should('include', '/admin/packing_materials')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="level"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="number"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="physical_packaging"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="physical_qualifier"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pickable"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    }),
    it('Settings', () => {
      // Settings
      cy.visit(
        'https://oms.staging.boxture.com/settings/settings?settable=BAh7CEkiCGdpZAY6BkVUSSI7Z2lkOi8vb21zL0FjY291bnQvZTY4YzllMWYtMjExOC00MDVmLTgzNWQtZTM0ODUzMWRlZTc2BjsAVEkiDHB1cnBvc2UGOwBUSSIKVmFyaW8GOwBUSSIPZXhwaXJlc19hdAY7AFRJIh0yMDIzLTA1LTE0VDExOjE1OjQ3LjM5NFoGOwBU--45a4ed9be250d510b978b83ee3e8540a1a12f23c'
      )
      cy.url().should('include', 'settings/settings?settable=')
    }),
    it('Accounts: Billing contact required', () => {
      // Settings - Accounts: Billing contact required
      cy.visit('/settings/settings/032c9750-5de2-4fd5-9af2-080d688c8b75')
      cy.url().should('include', '/settings/settings/032c9750-5de2-4fd5-9af2-080d688c8b75')
    }),
    it('Accounts: Contact kinds', () => {
      // Settings - Accounts: Contact kinds
      cy.visit('/settings/settings/ef211fd0-8ec1-4c59-be79-121f7bc16741')
      cy.url().should('include', '/settings/settings/ef211fd0-8ec1-4c59-be79-121f7bc16741')
    }),
    it('Allocation: Auto allocate', () => {
      // Settings - Allocation: Auto allocate
      cy.visit('/settings/settings/d0394d0b-1f7d-4648-aa96-6732f5b13962')
      cy.url().should('include', '/settings/settings/d0394d0b-1f7d-4648-aa96-6732f5b13962')
    }),
    it('Allocation: Auto allocate backorders', () => {
      // Settings - Allocation: Auto allocate backorders
      cy.visit('/settings/settings/0ae6f06f-d81d-4a14-8c0d-5014d68bf4da')
      cy.url().should('include', '/settings/settings/0ae6f06f-d81d-4a14-8c0d-5014d68bf4da')
    }),
    it('Allocation: Backorder allowed', () => {
      // Settings - Allocation: Backorder allowed
      cy.visit('/settings/settings/fa21530d-87a5-41af-858a-dcd662556fef')
      cy.url().should('include', '/settings/settings/fa21530d-87a5-41af-858a-dcd662556fef')
    }),
    it('Allocation: Partial allocation', () => {
      // Settings - Allocation: Partial allocation
      cy.visit('/settings/settings/f079109f-fe69-4e72-a7b9-2e4012904ad6')
      cy.url().should('include', '/settings/settings/f079109f-fe69-4e72-a7b9-2e4012904ad6')
    }),
    it('Carrier: Account number', () => {
      // Settings - Carrier: Account number
      cy.visit('/settings/settings/c65ca118-f1e2-4130-a1c3-88c1dfbd1379')
      cy.url().should('include', '/settings/settings/c65ca118-f1e2-4130-a1c3-88c1dfbd1379')
    }),
    it('Carrier: Api endpoint', () => {
      // Settings - Carrier: Api endpoint
      cy.visit('/settings/settings/bf90a20d-89da-4502-9857-050b0f67d331')
      cy.url().should('include', '/settings/settings/bf90a20d-89da-4502-9857-050b0f67d331')
    }),
    it('Carrier: Authentication key', () => {
      // Settings - Carrier: Authentication key
      cy.visit('/settings/settings/54bd2994-606d-4c4a-93cf-cc9c33f965fe')
      cy.url().should('include', '/settings/settings/54bd2994-606d-4c4a-93cf-cc9c33f965fe')
    }),
    it('Carrier: Authentication password', () => {
      // Settings - Carrier: Authentication password
      cy.visit('/settings/settings/aaeed576-796b-4e1c-83e5-822869ca9dd5')
      cy.url().should('include', '/settings/settings/aaeed576-796b-4e1c-83e5-822869ca9dd5')
    }),
    it('Carrier:  Integration method', () => {
      // Settings - Carrier:  Integration method
      cy.visit('/settings/settings/6fc044ed-1302-49d2-b30d-a828f43b254c')
      cy.url().should('include', '/settings/settings/6fc044ed-1302-49d2-b30d-a828f43b254c')
    }),
    it('Carrier: Pickup time', () => {
      // Settings - Carrier: Pickup time
      cy.visit('/settings/settings/3e3185c8-29b7-43a4-8845-99f7a20156cc')
      cy.url().should('include', '/settings/settings/3e3185c8-29b7-43a4-8845-99f7a20156cc')
    }),
    it('Data protection and privacy: Order anonymize period', () => {
      // Settings - Data protection and privacy: Order anonymize period
      cy.visit('/settings/settings/003da152-ac02-4f35-aca9-1244e5fb7d10')
      cy.url().should('include', '/settings/settings/003da152-ac02-4f35-aca9-1244e5fb7d10')
    }),
    it('Data protection and privacy: Shipment anonymize period', () => {
      // Settings - Data protection and privacy: Shipment anonymize period
      cy.visit('/settings/settings/987e87c8-f004-415a-b1cf-c7c24e81fe96')
      cy.url().should('include', '/settings/settings/987e87c8-f004-415a-b1cf-c7c24e81fe96')
    }),
    it('i18n: Working days', () => {
      // Settings - i18n: Working days
      cy.visit('/settings/settings/a6def0ad-37ff-4c26-8cab-2c2348576232')
      cy.url().should('include', '/settings/settings/a6def0ad-37ff-4c26-8cab-2c2348576232')
    }),
    it('Internationalization: Default currency', () => {
      // Settings - Internationalization: Default currency
      cy.visit('/settings/settings/3e4e5efc-f4fa-4635-9831-adcaa15c9bd1')
      cy.url().should('include', '/settings/settings/3e4e5efc-f4fa-4635-9831-adcaa15c9bd1')
    }),
    it('Internationalization: Week start', () => {
      // Settings - Internationalization: Week start
      cy.visit('/settings/settings/1d299c7e-8b7e-4773-930b-cd6d832a343b')
      cy.url().should('include', '/settings/settings/1d299c7e-8b7e-4773-930b-cd6d832a343b')
    }),
    it('Internationalization: Working days', () => {
      // Settings - Internationalization: Working days
      cy.visit('/settings/settings/6fef5d8b-aa85-40a7-a028-5f736ad2b8b2')
      cy.url().should('include', '/settings/settings/6fef5d8b-aa85-40a7-a028-5f736ad2b8b2')
    }),
    it('Inventory: Allow kit to inventory', () => {
      // Settings - Inventory: Allow kit to inventory
      cy.visit('/settings/settings/5b341bc6-185a-4a03-a0fb-a0e97cb9330a')
      cy.url().should('include', '/settings/settings/5b341bc6-185a-4a03-a0fb-a0e97cb9330a')
    }),
    it('Inventory: Container required', () => {
      // Settings - Inventory: Container required
      cy.visit('/settings/settings/7fa11f93-5195-4828-b27b-808dab698a3d')
      cy.url().should('include', '/settings/settings/7fa11f93-5195-4828-b27b-808dab698a3d')
    }),
    it('Inventory: Ignore container levels', () => {
      // Settings - Inventory: Ignore container levels
      cy.visit('/settings/settings/67df40f4-4827-4ca9-adb8-ee6fe2bfdefc')
      cy.url().should('include', '/settings/settings/67df40f4-4827-4ca9-adb8-ee6fe2bfdefc')
    }),
    it('Inventory: Multiple products per container', () => {
      // Settings - Inventory: Multiple products per container
      cy.visit('/settings/settings/722389f0-2500-424e-bb82-46fd2b981022')
      cy.url().should('include', '/settings/settings/722389f0-2500-424e-bb82-46fd2b981022')
    }),
    it('Inventory: Recycle serial numbers', () => {
      // Settings - Inventory: Recycle serial numbers
      cy.visit('/settings/settings/a33536c2-1d92-4528-bfd7-6529e53aa6da')
      cy.url().should('include', '/settings/settings/a33536c2-1d92-4528-bfd7-6529e53aa6da')
    }),
    it('Inventory: Reorder quantity', () => {
      // Settings - Inventory: Reorder quantity
      cy.visit('/settings/settings/0e68e0c8-d328-43ab-a860-5fb7dd6da7a0')
      cy.url().should('include', '/settings/settings/0e68e0c8-d328-43ab-a860-5fb7dd6da7a0')
    }),
    it('Inventory: Reporting percent', () => {
      // Settings - Inventory: Reporting percent
      cy.visit('/settings/settings/fb4c4826-b930-48aa-84d5-62bfc3691871')
      cy.url().should('include', '/settings/settings/fb4c4826-b930-48aa-84d5-62bfc3691871')
    }),
    it('Inventory: Restrict transactions to setup complete', () => {
      // Settings - Inventory: Restrict transactions to setup complete - #3040
      cy.visit('/settings/settings/cf3d8cce-166e-43c5-a6a6-1c7d5220a714')
      cy.url().should('include', '/settings/settings/cf3d8cce-166e-43c5-a6a6-1c7d5220a714')
    }),
    it('Inventory: Target stock level', () => {
      // Settings - Inventory: Target stock level
      cy.visit('/settings/settings/9fd4a450-3478-4408-b07a-9526e2ac1aa0')
      cy.url().should('include', '/settings/settings/9fd4a450-3478-4408-b07a-9526e2ac1aa0')
    }),
    it('Modules: Async picking', () => {
      // Settings - Modules: Async picking
      cy.visit('/settings/settings/78bd91e5-a9e5-41a6-b4d5-fc61dc1f2b6a')
      cy.url().should('include', '/settings/settings/78bd91e5-a9e5-41a6-b4d5-fc61dc1f2b6a')
    }),
    it('Modules: Shopify', () => {
      // Settings - Modules: Shopify
      cy.visit('/settings/settings/113c7044-240e-461f-85a4-0ca577284c49')
      cy.url().should('include', '/settings/settings/113c7044-240e-461f-85a4-0ca577284c49')
    }),
    it('Packing: Add to open shipment', () => {
      // Settings - Packing: Add to open shipment
      cy.visit('/settings/settings/d0c85323-63aa-4856-9817-5bff1e4dbe61')
      cy.url().should('include', '/settings/settings/d0c85323-63aa-4856-9817-5bff1e4dbe61')
    }),
    it('Packing: Auto ship', () => {
      // Settings - Packing: Auto ship
      cy.visit('/settings/settings/1eff10f6-070b-41b8-9a7d-b4994b2981a0')
      cy.url().should('include', '/settings/settings/1eff10f6-070b-41b8-9a7d-b4994b2981a0')
    }),
    it('Packing: Consume product packing materials', () => {
      // Settings - Packing: Consume product packing materials
      cy.visit('/settings/settings/358318de-2843-4e5b-b81a-79f59cf7719e')
      cy.url().should('include', '/settings/settings/358318de-2843-4e5b-b81a-79f59cf7719e')
    }),
    it('Packing: Default packing material', () => {
      // Settings - Packing: Default packing material
      cy.visit('/settings/settings/46bb6bb8-120a-414d-bb4c-f33f61428aca')
      cy.url().should('include', '/settings/settings/46bb6bb8-120a-414d-bb4c-f33f61428aca')
    }),
    it('Packing: Select product packing materials', () => {
      // Settings - Packing: Select product packing materials
      cy.visit('/settings/settings/edc8145f-660e-465d-b428-89f3526aeffc')
      cy.url().should('include', '/settings/settings/edc8145f-660e-465d-b428-89f3526aeffc')
    }),
    it('Picking: Auto pack', () => {
      // Settings - Picking: Auto pack
      cy.visit('/settings/settings/15207ed5-8368-40eb-a680-5fbb5849ed4a')
      cy.url().should('include', '/settings/settings/15207ed5-8368-40eb-a680-5fbb5849ed4a')
    }),
    it('Picking: Auto retire containers', () => {
      // Settings - Picking: Auto retire containers
      cy.visit('/settings/settings/e86415d3-73dd-4b27-9942-2101e69a89ed')
      cy.url().should('include', '/settings/settings/e86415d3-73dd-4b27-9942-2101e69a89ed')
    }),
    it('Bulk strategy', () => {
      // Settings - Picking: Bulk strategy
      cy.visit('/settings/settings/2e0c43a4-ec0d-4c8a-95bf-a8e6b95121ea')
      cy.url().should('include', '/settings/settings/2e0c43a4-ec0d-4c8a-95bf-a8e6b95121ea')
    }),
    it('Picking: Display product description', () => {
      // Settings - Picking: Display product description
      cy.visit('/settings/settings/eb40444c-7c95-4613-9875-a1e9a4232f90')
      cy.url().should('include', '/settings/settings/eb40444c-7c95-4613-9875-a1e9a4232f90')
    }),
    it('Picking: Pending picking allowed', () => {
      // Settings - Picking: Pending picking allowed
      cy.visit('/settings/settings/9dbe3c40-1510-4190-b84c-30efbb120327')
      cy.url().should('include', '/settings/settings/9dbe3c40-1510-4190-b84c-30efbb120327')
    }),
    it('Purging: Completed orders', () => {
      // Settings - Purging: Completed orders
      cy.visit('/settings/settings/c84f8a88-7ca3-43ca-a3be-5cefbf289c87')
      cy.url().should('include', '/settings/settings/c84f8a88-7ca3-43ca-a3be-5cefbf289c87')
    }),
    it('Purging: Concept orders', () => {
      // Settings - Purging: Concept orders
      cy.visit('/settings/settings/55435ef6-02fe-4c21-b2e1-66ddf0fd98d7')
      cy.url().should('include', '/settings/settings/55435ef6-02fe-4c21-b2e1-66ddf0fd98d7')
    }),
    it('Purging: Importo imports', () => {
      // Settings - Purging: Importo imports
      cy.visit('/settings/settings/2a5f9ff8-1efb-4d69-8db0-8a66e7ed4471')
      cy.url().should('include', '/settings/settings/2a5f9ff8-1efb-4d69-8db0-8a66e7ed4471')
    }),
    it('Purging: Nuntius messages', () => {
      // Settings - Purging: Nuntius messages
      cy.visit('/settings/settings/8ce00b2b-0b4d-48d0-ba74-09da1d60848c')
      cy.url().should('include', '/settings/settings/8ce00b2b-0b4d-48d0-ba74-09da1d60848c')
    }),
    it('Purging: Retired inventory', () => {
      // Settings - Purging: Retired inventory
      cy.visit('/settings/settings/fb8630c2-78dd-486f-926f-f213e6999107')
      cy.url().should('include', '/settings/settings/fb8630c2-78dd-486f-926f-f213e6999107')
    }),
    it('Purging: Vorto messages', () => {
      // Settings - Purging: Vorto messages
      cy.visit('/settings/settings/21531303-c1d8-4ed1-9550-e65060a66717')
      cy.url().should('include', '/settings/settings/21531303-c1d8-4ed1-9550-e65060a66717')
    }),
    it('Receiving: Over receive', () => {
      // Settings - Receiving: Over receive
      cy.visit('/settings/settings/263c703a-36d9-4689-8153-ba861ed9f3b0')
      cy.url().should('include', '/settings/settings/263c703a-36d9-4689-8153-ba861ed9f3b0')
    }),
    it('Receiving: Over receive different product', () => {
      // Settings - Receiving: Over receive different product
      cy.visit('/settings/settings/1c538a0b-ca60-40bb-a10c-069521c54497')
      cy.url().should('include', '/settings/settings/1c538a0b-ca60-40bb-a10c-069521c54497')
    }),
    it('Sales Orders: Required delivery contact fields	', () => {
      // Settings - Sales Orders: Required delivery contact fields
      cy.visit('/settings/settings/1fc04935-7c4e-49d9-8b5f-ba8c4f44cd2a')
      cy.url().should('include', '/settings/settings/1fc04935-7c4e-49d9-8b5f-ba8c4f44cd2a')
    }),
    it('Shipping: Backorder shipping method', () => {
      // Settings - Shipping: Backorder shipping method
      cy.visit('/settings/settings/f0af7fc7-305b-4ea3-9f98-3a41ebad7c94')
      cy.url().should('include', '/settings/settings/f0af7fc7-305b-4ea3-9f98-3a41ebad7c94')
    }),
    it('Shipping: Cutoff time', () => {
      // Settings - Shipping: Cutoff time
      cy.visit('/settings/settings/70f4bafe-a060-4183-b328-f04d6ce99ca2')
      cy.url().should('include', '/settings/settings/70f4bafe-a060-4183-b328-f04d6ce99ca2')
    }),
    it('Shipping: Default business model', () => {
      // Settings - Shipping: Default business model
      cy.visit('/settings/settings/9f6ee91d-7cfc-4172-baec-0dacf586b2a1')
      cy.url().should('include', '/settings/settings/9f6ee91d-7cfc-4172-baec-0dacf586b2a1')
    }),
    it('Shipping: Default delivery terms', () => {
      // Settings - Shipping: Default delivery terms
      cy.visit('/settings/settings/9e389941-3a5b-4372-b923-076255ecfb01')
      cy.url().should('include', '/settings/settings/9e389941-3a5b-4372-b923-076255ecfb01')
    }),
    it('Shipping: Default shipping method', () => {
      // Settings - Shipping: Default shipping method
      cy.visit('/settings/settings/c4a5d331-960f-4b48-84a9-e01d92771455')
      cy.url().should('include', '/settings/settings/c4a5d331-960f-4b48-84a9-e01d92771455')
    }),
    it('Shipping: Partial shipping', () => {
      // Settings - Shipping: Partial shipping
      cy.visit('/settings/settings/39eb1980-be31-4043-8035-f53828b46656')
      cy.url().should('include', '/settings/settings/39eb1980-be31-4043-8035-f53828b46656')
    }),
    it('Shipping: Shipping method required', () => {
      // Settings - Shipping: Shipping method required
      cy.visit('/settings/settings/b4550206-c0b6-4204-aa80-684100277239')
      cy.url().should('include', '/settings/settings/b4550206-c0b6-4204-aa80-684100277239')
    }),
    it('Shipping: Sla days', () => {
      // Settings - Shipping: Sla days
      cy.visit('/settings/settings/9571719d-4fa3-4e1a-b4ac-9454386870b5')
      cy.url().should('include', '/settings/settings/9571719d-4fa3-4e1a-b4ac-9454386870b5')
    }),
    it('Warehousing: Picking bin location name', () => {
      // Settings - Warehousing: Picking bin location name
      cy.visit('/settings/settings/161f98d2-ab23-4425-81b7-289e9bb14404')
      cy.url().should('include', '/settings/settings/161f98d2-ab23-4425-81b7-289e9bb14404')
    }),
    it('Warehousing: Problem bin location name', () => {
      // Settings - Warehousing: Problem bin location name
      cy.visit('/settings/settings/e3ba6913-182b-47a3-b7c7-94f4a4616d9a')
      cy.url().should('include', '/settings/settings/e3ba6913-182b-47a3-b7c7-94f4a4616d9a')
    }),
    it('Warehousing: Receiving bin location', () => {
      // Settings - Warehousing: Receiving bin location
      cy.visit('/settings/settings/dac325c2-70d0-42c7-9455-eb4aae78bc47')
      cy.url().should('include', '/settings/settings/dac325c2-70d0-42c7-9455-eb4aae78bc47')
    }),
    it('Warehousing: Receiving bin location name', () => {
      // Settings - Warehousing: Receiving bin location name
      cy.visit('/settings/settings/46315817-da8d-4152-ac04-c1a2c4c3ebc1')
      cy.url().should('include', '/settings/settings/46315817-da8d-4152-ac04-c1a2c4c3ebc1')
    }),
    it('Warehousing: Shipping bin location', () => {
      // Settings - Warehousing: Shipping bin location
      cy.visit('/settings/settings/12a15265-d981-4a3c-940d-cbc0428fbcbb')
      cy.url().should('include', '/settings/settings/12a15265-d981-4a3c-940d-cbc0428fbcbb')
    }),
    it('Integration', () => {
      // Admin - Integration
      cy.visit('/integration')
      cy.url().should('include', '/integration')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })

      cy.get('[data-act-table-target="column"][data-column="id"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="flow"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="extract"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="subject"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="children"]').scrollIntoView().should('be.visible')
    }),
    it('Integration - Flows', () => {
      // Admin - Integration - Flows
      cy.visit('/integration/flows')
      cy.url().should('include', '/integration/flows')

      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="enabled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="klass"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="event"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="trigger"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    }),
    it('Integration - Messages', () => {
      // Admin - Integration - Messages
      cy.visit('/integration/messages')
      cy.url().should('include', '/integration/messages')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="id"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="flow"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="extract"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="subject"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="children"]').scrollIntoView().should('be.visible')
    }),
    it('Integration - Credentials', () => {
      // Admin - Integration - Credentials
      cy.visit('/integration/credentials')
      cy.url().should('include', '/integration/credentials')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="key"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Integration - Oauth - Authorized', () => {
      // Admin - Integration - Oauth - Authorized
      cy.visit('/oauth/authorized_applications')
      cy.url().should('include', '/oauth/authorized_applications')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="scopes"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="#"]').should('be.visible')
    }),
    it('Integration - Oauth - Applications', () => {
      // Admin - Integration - Oauth - Applications
      cy.visit('/oauth/applications')
      cy.url().should('include', '/oauth/applications')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="uid"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="redirect_uri"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="scopes"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="confidential"]').scrollIntoView().should('be.visible')
    }),
    it('Integration - Third Party', () => {
      // Admin - Integration - Third Party
      cy.visit('/admin/integrations')
      cy.url().should('include', '/admin/integrations')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="integration_account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="endpoint"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="last_order_at"]').should('be.visible')
    }),
    it('Imports', () => {
      // Imports
      cy.visit('/importing')
      cy.url().should('include', '/importing')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="user"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="kind"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="original"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="result"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="extra_links"]').scrollIntoView().should('be.visible')
    }),
    it.skip('Messaging', () => {
      // Admin - Messaging - #3293
      cy.visit('/messaging/')
      cy.url().should('include', '/messaging')

      cy.get('a[href*="Action table export"]').should('be.visible')
    }),
    it('Messages', () => {
      // Admin - Messaging - Messages
      cy.visit('/messaging/admin/messages')
      cy.url().should('include', '/messaging/admin/messages')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="to"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="last_sent_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="subject"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
    }),
    it('Messaging - Templates', () => {
      // Admin - Messaging - Templates
      cy.visit('/messaging/admin/templates')
      cy.url().should('include', '/messaging/admin/templates')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="enabled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="klass"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="event"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="messages"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    }),
    it('Messaging - Layout', () => {
      // Admin - Messaging - Layout
      cy.visit('/messaging/admin/layouts')
      cy.url().should('include', '/messaging/admin/layouts')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
    }),
    it('Messaging - Locales', () => {
      // Admin - Messaging - Locales
      cy.visit('/messaging/admin/locales')
      cy.url().should('include', '/messaging/admin/locales')

      cy.get('[data-act-table-target="column"][data-column="key"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
    }),
    it('Messaging Campaigns', () => {
      // Admin - Messaging Campaigns
      cy.visit('/messaging/admin/campaigns')
      cy.url().should('include', '/messaging/admin/campaigns')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="transport"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="list"]').should('be.visible')
    }),
    it('Messaging Lists', () => {
      // Admin - Messaging Lists
      cy.visit('/messaging/admin/lists')
      cy.url().should('include', '/messaging/admin/lists')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="subscribers"]').should('be.visible')
    }),
    it('Papers', () => {
      // Admin - Papers
      cy.visit('/papers')
      cy.url().should('include', '/papers')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="owner"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="template"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="attachment"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="actions"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="consolidation_id"]').scrollIntoView().should('be.visible')
    }),
    it('Papers Templates', () => {
      // Admin - Papers Templates
      cy.visit('/papers/admin/templates')
      cy.url().should('include', '/papers/admin/templates')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="enabled"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="klass"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="event"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="papers_count"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="kind"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="use"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="copies"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Papers Locales', () => {
      // Admin - Papers Locales
      cy.visit('/papers/admin/locales')
      cy.url().should('include', '/papers/admin/locales')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="key"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="metadata"]').should('be.visible')
    }),
    it('Sites', () => {
      // Admin - Sites
      cy.visit('/sites')
      cy.url().should('include', '/sites')
    }),
    it('Admin - Apps', () => {
      // Admin - Apps
      cy.visit('/distribution/admin/apps')
      cy.url().should('include', '/distribution/admin/apps')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="icon"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="release_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="operating_system"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="created_at"]').should('be.visible')
    }),
    it('Billing - Sources', () => {
      // Admin - Billing - Sources
      cy.visit('/admin/billing/sources')
      cy.url().should('include', '/admin/billing/sources')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
    }),
    it('Event types', () => {
      // Admin - Billing - Event types
      cy.visit('/admin/billing/event_types')
      cy.url().should('include', '/admin/billing/event_types')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
    }),
    it('Billing Rate groups', () => {
      // Admin - Billing Rate groups
      cy.visit('/admin/billing/rate_groups')
      cy.url().should('include', '/admin/billing/rate_groups')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rate_group"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').should('be.visible')
    }),
    it('Billing Rate types', () => {
      // Admin - Billing Rate types
      cy.visit('/admin/billing/rate_types')
      cy.url().should('include', '/admin/billing/rate_types')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="name"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rate_group"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="event_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="charge_code"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="recent_events"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rate_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rate_period"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rate_count"]').should('be.visible')
    }),
    it('Billing Rates', () => {
      // Admin - Billing Rates
      cy.visit('/admin/billing/rates')
      cy.url().should('include', '/admin/billing/rates')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="account"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rate_group"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="rate_type"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="valid_from"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="valid_until"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="price"]').should('be.visible')
    }),
    it('Exceptions', () => {
      // Admin - Exceptions
      cy.visit('/exceptions')
      cy.url().should('include', '/exceptions')
      cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()

      cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
        const text = $e1.text()
        if (text.includes('Reset view')) {
          cy.contains('Reset view').click()
          cy.contains('.translation_missing', 'Orders').click()
        } else {
          cy.get('.border-r > .items-center > img').click()
        }
      })
      cy.get('[data-act-table-target="column"][data-column="exception_class"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="message"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="code_location"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="count"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="last_occurence"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="actions"]').scrollIntoView().should('be.visible')
    })
})
