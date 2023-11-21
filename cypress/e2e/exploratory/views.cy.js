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
// https://github.com/boxture/oms/issues/3464: /Oauth > authorised - Content missing
// https://github.com/boxture/oms/issues/3463: /Order details - Basic tab returns a 500

beforeEach(() => {
  cy.login({ email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib' })
})

describe('Views', () => {

  it('Orders ', () => {

    // Orders
    cy.visit('/orders')
    cy.url().should('include', '/orders')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="id"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="channel"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="business_model"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ship_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pending"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="received"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="backordered"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="allocated"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picking"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picked"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="hold"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="cancelled"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="vendor"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="origin_locations"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="destination_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="received_at"]').scrollIntoView().should('be.visible')

  })
  it('Purchase Order Lines - Basic', () => {

      // Purchase Order Lines - Basic  - #3463
      cy.visit('/orders?type=Orders%3A%3APurchaseOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3APurchaseOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pending"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="backordered"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="cancelled"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').scrollIntoView().should('be.visible')

  })
  it('Purchase Orders Lines - Items', () => {

      // Purchase Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3APurchaseOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3APurchaseOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').scrollIntoView().should('be.visible')

  })
  it('Purchase Orders Lines - Pricing and values', () => {

      // Purchase Orders Lines - Pricing and values - #3463
      cy.visit('/orders?type=Orders%3A%3APurchaseOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3APurchaseOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').eq(1).scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').scrollIntoView().should('be.visible')

  })
  it('Transfer Order Lines - Basic', () => {

      // Trans Order Lines - Basic - #3463
      cy.visit('/orders?type=Orders%3A%3ATransferOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ATransferOrder')

      cy.resetView()
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

  })
  it('Transfer Orders Lines - Items', () => {

      // Transfer Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3ATransferOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ATransferOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').scrollIntoView().should('be.visible')

  })
  it('Transfer Orders Lines - Pricing and values', () => {

      // Purchase Orders Lines - Pricing and values
      cy.visit('/orders?type=Orders%3A%3ATransferOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ATransferOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').eq(1).scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').scrollIntoView().should('be.visible')

  })
  it('Sales Order Lines - Basic', () => {

      // Sales Order Lines - Basic - #3463
      cy.visit('/orders?type=Orders%3A%3ASalesOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ASalesOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="pending"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="received"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="backordered"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="allocated"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picking"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="picked"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="hold"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="cancelled"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="inventory"]').scrollIntoView().should('be.visible')

  })
  it('Sales Orders Lines - Items', () => {

      // Sales Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3ASalesOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ASalesOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').scrollIntoView().should('be.visible')

  })
  it('Sales Orders Lines - Pricing and values', () => {

      // Sales Orders Lines - Pricing and values - #3463
      cy.visit('/orders?type=Orders%3A%3ASalesOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3ASalesOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').eq(1).scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="price"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').eq(1).scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="amount"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="discount"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tax"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="line_total"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').scrollIntoView().scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').scrollIntoView().should('be.visible')

  })
  it('Return Order Lines - Basic', () => {

      // Return Order Lines - Basic - #3463
      cy.visit('/orders?type=Orders%3A%3AReturnOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AReturnOrder')

      cy.resetView()
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

  })
  it('Return Orders Lines - Items', () => {

      // Return Orders Lines - Items
      cy.visit('/orders?type=Orders%3A%3AReturnOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AReturnOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="sn"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="tote"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="parcel"]').scrollIntoView().should('be.visible')

  })
  it('Return Orders Lines - Pricing and values', () => {

      // Return Orders Lines - Pricing and values
      cy.visit('/orders?type=Orders%3A%3AReturnOrder')
      cy.url().should('include', '/orders?type=Orders%3A%3AReturnOrder')

      cy.resetView()
      cy.get('tr').last().click({ force: true })
      cy.contains('h3', 'Lines')
      cy.contains('h3', 'Addresses')
      cy.contains('h2', 'Comments')
      cy.contains('h3', 'Other')
      cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })
      cy.get('[data-act-table-target="column"][data-column="position"]').eq(1).scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_description"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').scrollIntoView().should('be.visible')
      cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').scrollIntoView().should('be.visible')

  })
  it('Scrap Order Lines - Basic', () => {

    // Scrap Order Lines - Basic - #3463
    cy.visit('/orders?type=Orders%3A%3AScrapOrder')
    cy.url().should('include', '/orders?type=Orders%3A%3AScrapOrder')

    cy.resetView()
    cy.get('tr').last().click({ force: true })
    cy.contains('h3', 'Lines')
    cy.contains('h3', 'Addresses')
    cy.contains('h2', 'Comments')
    cy.contains('h3', 'Other')
    cy.get('[title*=".tabs.basic"]').eq(1).contains('Basic').click({ force: true })
    cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_name"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pending"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="received"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="backordered"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="allocated"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picking"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picked"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipped"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="hold"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="cancelled"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="inventory"]').scrollIntoView().should('be.visible')

  })
  it('Scrap Orders Lines - Items', () => {

    // Return Orders Lines - Items
    cy.visit('/orders?type=Orders%3A%3AScrapOrder')
    cy.url().should('include', '/orders?type=Orders%3A%3AScrapOrder')

    cy.resetView()
    cy.get('tr').last().click({ force: true })
    cy.contains('h3', 'Lines')
    cy.contains('h3', 'Addresses')
    cy.contains('h2', 'Comments')
    cy.contains('h3', 'Other')
    cy.get('[title*=".tabs.items"]').contains('Items').click({ force: true })
    cy.get('[data-act-table-target="column"][data-column="position"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ordered_sn"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="sn"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="origin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="tote"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="parcel"]').scrollIntoView().should('be.visible')

  })
  it('Scrap Orders Lines - Pricing and values', () => {

    // Scrap Orders Lines - Pricing and values
    cy.visit('/orders?type=Orders%3A%3AScrapOrder')
    cy.url().should('include', '/orders?type=Orders%3A%3AScrapOrder')

    cy.resetView()
    cy.get('tr').last().click({ force: true })
    cy.contains('h3', 'Lines')
    cy.contains('h3', 'Addresses')
    cy.contains('h2', 'Comments')
    cy.contains('h3', 'Other')
    cy.get('[id*="tab_label"]').contains('Pricing and values').click({ force: true })
    cy.get('[data-act-table-target="column"][data-column="position"]').eq(1).scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customs_description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customs_currency"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customs_value"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customs_value_amount"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="declared_insurance_currency"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="declared_insurance_value"]').scrollIntoView().should('be.visible')

  })
  it('Pick Lists ', () => {

    // Pick Lists
    cy.visit('/pick_lists')
    cy.url().should('include', '/pick_lists')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="accounts"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="orders"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="channels"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipping_methods"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_references"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="wave"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pick_list_plan"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picker"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity_to_pick"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ship_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Plans ', () => {

    // Plans
    cy.visit('/pick_list_plans')
    cy.url().should('include', '/pick_list_plans')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pick_list_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="applicable_orders"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="waves"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pick_lists"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="actions"]').scrollIntoView().should('be.visible')

  })
  it('Waves ', () => {

    // Waves
    cy.visit('/pick_list_waves')
    cy.url().should('include', '/pick_list_waves')
    cy.get('[data-satis-menu-submenu-placement="bottom"] li').then(($e1) => {
      const text = $e1.text()
      if (text.includes('Reset view')) {
        cy.contains('Reset view').click()
        cy.contains('.translation_missing', 'Orders').click()
      } else {
        cy.get('.border-r > .items-center > img').click()
      }
    })
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pick_list_plan"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pick_lists"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
  })
  it('Shipments ', () => {

    cy.visit('/shipments')
    cy.url().should('include', '/shipments')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="id"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="carrier"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="service_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="parcels"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="orders"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_numbers"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="tracking_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="return_tracking_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Inventory ', () => {

    // Inventory
    cy.visit('/inventories')
    cy.url().should('include', '/inventories')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location_purpose"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="available"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="allocated"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picked"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="hold"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expired"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="total"]').scrollIntoView().should('be.visible')

  })
  it('Consolidated ', () => {

    // Consolidated
    cy.visit('/inventories/consolidated')
    cy.url().should('include', '/inventories/consolidated')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="available"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expected"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="allocated"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picked"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packed"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="hold"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expired"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="total"]').scrollIntoView().should('be.visible')

  })
  it('Kits ', () => {

    // Kits
    cy.visit('inventories/kits')
    cy.url().should('include', '/inventories/kits')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="available"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_locations"]').scrollIntoView().should('be.visible')

  })
  it('License plates ', () => {

    // License plates
    cy.visit('/inventory_license_plates')
    cy.url().should('include', '/inventory_license_plates')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="license_plate"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serial_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expires_on"]').scrollIntoView().should('be.visible')

  })
  it('Containers ', () => {
    // Containers
    cy.visit('/containers')
    cy.url().should('include', '/containers')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="in_container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="contents"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="license_plate"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="open_or_closed"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Products ', () => {

    // Products
    cy.visit('/products')
    cy.url().should('include', '/products')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ean_or_upc"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="category"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="kit"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="lot_tracked"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="lot_pattern"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serialized"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serialization_mode"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serial_number_pattern"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="expirable"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="weight"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="origin_country_code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="standard_bin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="actions"]').scrollIntoView().should('be.visible')

  })
  it('Customers ', () => {

    // Customers
    cy.visit('/customers')
    cy.url().should('include', '/customers')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="contact"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="company"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="email"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="phone"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state_province"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="country"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Vendors ', () => {

    // Vendors
    cy.visit('/vendors')
    cy.url().should('include', '/vendors')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="contact"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="company"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="email"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="phone"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state_province"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="country"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Bin location movements ', () => {

    // Reporting - Bin location movements
    cy.visit('/reporting/bin_location_movements')
    cy.url().should('include', '/reporting/bin_location_movements')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="transacted_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="user"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="from_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="from_bin_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_bin_location_purpose"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_bin_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_bin_location_purpose"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Container Bin Location Movements ', () => {

    // Reporting - Container Bin Location Movements
    cy.visit('/reporting/container_bin_location_movements')
    cy.url().should('include', '/reporting/container_bin_location_movements')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="user"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="container_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="from_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="from_bin_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="from_bin_location_purpose"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_bin_location_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_bin_location_purpose"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="transacted_at"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Container Inventory Adjustments ', () => {

    // Reporting - Container Inventory Adjustments
    cy.visit('/reporting/container_inventory_adjustments')
    cy.url().should('include', '/reporting/container_inventory_adjustments')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="user"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="container_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="inventory_adjust"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="total_inventory_count"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="transacted_at"]').scrollIntoView().should('be.visible')
  })
  it('Reporting - Inbounded inventory items', () => {

    // Reporting - Inbounded inventory items
    cy.visit('/reporting/inbounded_inventory_items')
    cy.url().should('include', '/reporting/inbounded_inventory_items')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="received_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="received_by"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="delivery_terms"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="vendor"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipping_container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipping_container_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="received_quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_category"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="un_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packing_material_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packing_material_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="total_weight"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serial"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Inventory on hand', () => {

    // Reporting - Inventory on hand
    cy.visit('/reporting/inventory_on_hand')
    cy.url().should('include', '/reporting/inventory_on_hand')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="outer_container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="inner_container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="license_plate"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serial_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="inbounded_at"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Manual inventory adjustments', () => {

    // Reporting - Manual inventory adjustments - #3292
    cy.visit('/reporting/manual_inventory_adjustments')
    cy.url().should('include', '/reporting/manual_inventory_adjustments')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="order"]', { timeout: 20000 }).scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serial_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="license_plate"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="comments"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Open sales orders', () => {

    // Reporting - Open sales orders
    cy.visit('/reporting/open_sales_orders')
    cy.url().should('include', '/reporting/open_sales_orders')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="channel"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="business_model"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="to_location"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="address"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="postal_code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="country"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="allocated_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ship_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="country_of_origin"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="currency"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="value"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Open receives', () => {

    // Reporting - Open receives
    cy.visit('/reporting/open_receives')
    cy.url().should('include', '/reporting/open_receives')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="purchase_order_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="inbound_tracking_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="forwarder"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipping_container"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipping_container_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="vendor_name"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity_ordered"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity_received"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="last_received_at"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Replenishment items', () => {

    // Reporting - Replenishment items
    cy.visit('/reporting/replenishment_items')
    cy.url().should('include', '/reporting/replenishment_items')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="picking_available"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="reorder_level"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="reorder_quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="receiving_available"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="replenishment_available"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="replenishment_needed_for_orders_today"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="replenishment_needed_for_orders"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Shipped products', () => {

    // Reporting - Shipped products
    cy.visit('/reporting/shipped_products')
    cy.url().should('include', '/reporting/shipped_products')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="shipped_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipment"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="business_model"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="delivery_terms"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipping_method"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ship_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="ship_earliest_on"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="company_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="contact"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="address"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="postal_code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="country"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="tracking_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="carrier"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="from_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="country_of_origin"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="currency"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="value"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packing_material_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packing_material_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="packaging_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="weight"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="weight_unit"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="length"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="width"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="height"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="dimension_unit"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serial"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="lot"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_category"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="un_number"]').scrollIntoView().should('be.visible')

  })
  it('Reporting - Shipped serial numbers', () => {

    // Reporting - Shipped serial numbers
    cy.visit('/reporting/shipped_serial_numbers')
    cy.url().should('include', '/reporting/shipped_serial_numbers')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="shipped_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shipment"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="customer_reference_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="destination_contact"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="destination_country"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="carrier"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="tracking_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="product_description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="serial_number"]').scrollIntoView().should('be.visible')

  })
  it('Tickets', () => {

    // Tickets
    cy.visit('/agent/tickets')
    cy.url().should('include', '/agent/tickets')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="priority"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="subject"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="group"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="assignee"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="requester"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="updated_at"]').scrollIntoView().should('be.visible')

  })
  it('Tickets - Work order', () => {

    // Tickets - Work order
    cy.visit('/agent/tickets?kind=manual')
    cy.url().should('include', '/agent/tickets?kind=manual')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="priority"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="subject"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="group"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="assignee"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="requester"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="updated_at"]').scrollIntoView().should('be.visible')

  })
  it('Tickets - Problems', () => {

    // Tickets - Problems
    cy.visit('/agent/tickets?kind=automated')
    cy.url().should('include', '/agent/tickets?kind=automated')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="priority"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="subject"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="group"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="assignee"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="requester"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="updated_at"]').scrollIntoView().should('be.visible')

  })
  it('Tickets - Groups', () => {

    // Tickets - Groups
    cy.visit('/agent/groups')
    cy.url().should('include', '/agent/groups')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="updated_at"]').scrollIntoView().should('be.visible')

  })
  it('Tickets - Contacts', () => {

    // Tickets - Contacts
    cy.visit('/agent/contacts')
    cy.url().should('include', '/agent/contacts')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="email"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="phone"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="twitter"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="time_zone"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="group"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="organization"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="owner"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="suspended"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="updated_at"]').scrollIntoView().should('be.visible')

  })
  it('Tickets - Organisations', () => {

    // Tickets - Organisations
    cy.visit('/agent/organizations')
    cy.url().should('include', '/agent/organizations')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="owner"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="url"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="domains"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="updated_at"]').scrollIntoView().should('be.visible')

  })
  it('Billing', () => {

    // Billing
    cy.visit('/billing')
    cy.url().should('include', '/billing')

  })
  it('Billing - Events', () => {

    // Billing - Events
    cy.visit('/billing/events')
    cy.url().should('include', '/billing/events')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="event_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="fields"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="quantity"]').scrollIntoView().should('be.visible')

  })
  it('Transaction Logs', () => {

    // Transaction Logs
    cy.visit('/transaction_logs')
    cy.url().should('include', '/transaction_logs')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="transaction"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="user"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Audits', () => {

    // Audits - #3291
    cy.visit('/audits')
    cy.url().should('include', '/audits')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Mobile Apps', () => {

    // Mobile Apps
    cy.visit('/distribution/apps')
    cy.url().should('include', '/distribution/apps')

  })
  it('Accounts', () => {

    // Admin - Users & Accounts - Accounts
    cy.visit('/admin/accounts')
    cy.url().should('include', '/admin/accounts')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="parent_account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Users', () => {

    // Admin - Users & Accounts - Users
    cy.visit('/admin/users')
    cy.url().should('include', '/admin/users')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="first_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="last_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="company"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="email"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="roles"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="time_zone"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Carriers', () => {

    // Admin - Carriers & Services - Carriers
    cy.visit('/admin/carriers')
    cy.url().should('include', '/admin/carriers')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="countries"]').scrollIntoView().should('be.visible')

  })
  it('Channels', () => {

    // Admin - Carriers & Services - Channels
    cy.visit('/admin/channels')
    cy.url().should('include', '/admin/channels')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="url"]').scrollIntoView().should('be.visible')

  })
  it('Service Types', () => {

    // Admin - Carriers & Services - Service Types
    cy.visit('/admin/service_types')
    cy.url().should('include', '/admin/service_types')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="carrier"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="code"]').scrollIntoView().should('be.visible')

  })
  it('Shipping methods', () => {

    // Admin - Carriers & Services - Shipping methods
    cy.visit('/admin/shipping_methods')
    cy.url().should('include', '/admin/shipping_methods')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="carrier"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="service_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="default_packing_material"]').scrollIntoView().should('be.visible')

  })
  it('Holidays', () => {

    // Admin - Carriers & Services - Holidays - #3211
    cy.visit('/admin/holidays')
    cy.url().should('include', '/admin/holidays')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="start_on"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="end_on"]').scrollIntoView().should('be.visible')

  })
  it('Reasons', () => {

    // Admin - Carriers & Services - Reasons
    cy.visit('/admin/reasons')
    cy.url().should('include', '/admin/reasons')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="use"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')

  })
  it('Locations', () => {

    // Admin - Warehousing - Locations
    cy.visit('/admin/locations')
    cy.url().should('include', '/admin/locations')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="company_name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="address_lines"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="postal_code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="city"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state_or_province_code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="country_code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')

  })
  it('Bin locations', () => {

    // Admin - Warehousing - Bin locations
    cy.visit('/admin/bin_locations')
    cy.url().should('include', '/admin/bin_locations')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="purpose"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="zone"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="walkway"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="aisle"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rack"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="shelf"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="section"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="bin"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="inventory"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="standard_for_product"]').scrollIntoView().should('be.visible')

  })
  it('Totes', () => {

    // Admin - Warehousing - Totes
    cy.visit('/admin/totes')
    cy.url().should('include', '/admin/totes')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="order"]').scrollIntoView().should('be.visible')

  })
  it('Packing Materials', () => {

    // Admin - Warehousing - Packing Material
    cy.visit('/admin/packing_materials')
    cy.url().should('include', '/admin/packing_materials')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="level"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="number"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="physical_packaging"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="physical_qualifier"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="pickable"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Settings', () => {

    // Settings
    cy.visit(
      'https://oms.staging.boxture.com/settings/settings?settable=BAh7CEkiCGdpZAY6BkVUSSI7Z2lkOi8vb21zL0FjY291bnQvZTY4YzllMWYtMjExOC00MDVmLTgzNWQtZTM0ODUzMWRlZTc2BjsAVEkiDHB1cnBvc2UGOwBUSSIKVmFyaW8GOwBUSSIPZXhwaXJlc19hdAY7AFRJIh0yMDIzLTA1LTE0VDExOjE1OjQ3LjM5NFoGOwBU--45a4ed9be250d510b978b83ee3e8540a1a12f23c'
    )
    cy.url().should('include', 'settings/settings?settable=')

  })
  it('Accounts: Billing contact required', () => {

    // Settings - Accounts: Billing contact required
    cy.visit('/settings/settings/032c9750-5de2-4fd5-9af2-080d688c8b75')
    cy.url().should('include', '/settings/settings/032c9750-5de2-4fd5-9af2-080d688c8b75')

  })
  it('Accounts: Contact kinds', () => {

    // Settings - Accounts: Contact kinds
    cy.visit('/settings/settings/ef211fd0-8ec1-4c59-be79-121f7bc16741')
    cy.url().should('include', '/settings/settings/ef211fd0-8ec1-4c59-be79-121f7bc16741')

  })
  it('Allocation: Auto allocate', () => {

    // Settings - Allocation: Auto allocate
    cy.visit('/settings/settings/d0394d0b-1f7d-4648-aa96-6732f5b13962')
    cy.url().should('include', '/settings/settings/d0394d0b-1f7d-4648-aa96-6732f5b13962')

  })
  it('Allocation: Auto allocate backorders', () => {

    // Settings - Allocation: Auto allocate backorders
    cy.visit('/settings/settings/0ae6f06f-d81d-4a14-8c0d-5014d68bf4da')
    cy.url().should('include', '/settings/settings/0ae6f06f-d81d-4a14-8c0d-5014d68bf4da')

  })
  it('Allocation: Backorder allowed', () => {

    // Settings - Allocation: Backorder allowed
    cy.visit('/settings/settings/fa21530d-87a5-41af-858a-dcd662556fef')
    cy.url().should('include', '/settings/settings/fa21530d-87a5-41af-858a-dcd662556fef')

  })
  it('Allocation: Partial allocation', () => {

    // Settings - Allocation: Partial allocation
    cy.visit('/settings/settings/f079109f-fe69-4e72-a7b9-2e4012904ad6')
    cy.url().should('include', '/settings/settings/f079109f-fe69-4e72-a7b9-2e4012904ad6')

  })
  it('Carrier: Account number', () => {

    // Settings - Carrier: Account number
    cy.visit('/settings/settings/c65ca118-f1e2-4130-a1c3-88c1dfbd1379')
    cy.url().should('include', '/settings/settings/c65ca118-f1e2-4130-a1c3-88c1dfbd1379')

  })
  it('Carrier: Api endpoint', () => {

    // Settings - Carrier: Api endpoint
    cy.visit('/settings/settings/bf90a20d-89da-4502-9857-050b0f67d331')
    cy.url().should('include', '/settings/settings/bf90a20d-89da-4502-9857-050b0f67d331')

  })
  it('Carrier: Authentication key', () => {

    // Settings - Carrier: Authentication key
    cy.visit('/settings/settings/54bd2994-606d-4c4a-93cf-cc9c33f965fe')
    cy.url().should('include', '/settings/settings/54bd2994-606d-4c4a-93cf-cc9c33f965fe')

  })
  it('Carrier: Authentication password', () => {

    // Settings - Carrier: Authentication password
    cy.visit('/settings/settings/aaeed576-796b-4e1c-83e5-822869ca9dd5')
    cy.url().should('include', '/settings/settings/aaeed576-796b-4e1c-83e5-822869ca9dd5')

  })
  it('Carrier:  Integration method', () => {

    // Settings - Carrier:  Integration method
    cy.visit('/settings/settings/6fc044ed-1302-49d2-b30d-a828f43b254c')
    cy.url().should('include', '/settings/settings/6fc044ed-1302-49d2-b30d-a828f43b254c')

  })
  it('Carrier: Pickup time', () => {

    // Settings - Carrier: Pickup time
    cy.visit('/settings/settings/3e3185c8-29b7-43a4-8845-99f7a20156cc')
    cy.url().should('include', '/settings/settings/3e3185c8-29b7-43a4-8845-99f7a20156cc')

  })
  it('Data protection and privacy: Order anonymize period', () => {

    // Settings - Data protection and privacy: Order anonymize period
    cy.visit('/settings/settings/003da152-ac02-4f35-aca9-1244e5fb7d10')
    cy.url().should('include', '/settings/settings/003da152-ac02-4f35-aca9-1244e5fb7d10')

  })
  it('Data protection and privacy: Shipment anonymize period', () => {

    // Settings - Data protection and privacy: Shipment anonymize period
    cy.visit('/settings/settings/987e87c8-f004-415a-b1cf-c7c24e81fe96')
    cy.url().should('include', '/settings/settings/987e87c8-f004-415a-b1cf-c7c24e81fe96')

  })
  it('i18n: Working days', () => {

    // Settings - i18n: Working days
    cy.visit('/settings/settings/a6def0ad-37ff-4c26-8cab-2c2348576232')
    cy.url().should('include', '/settings/settings/a6def0ad-37ff-4c26-8cab-2c2348576232')

  })
  it('Internationalization: Default currency', () => {

    // Settings - Internationalization: Default currency
    cy.visit('/settings/settings/3e4e5efc-f4fa-4635-9831-adcaa15c9bd1')
    cy.url().should('include', '/settings/settings/3e4e5efc-f4fa-4635-9831-adcaa15c9bd1')

  })
  it('Internationalization: Week start', () => {

    // Settings - Internationalization: Week start
    cy.visit('/settings/settings/1d299c7e-8b7e-4773-930b-cd6d832a343b')
    cy.url().should('include', '/settings/settings/1d299c7e-8b7e-4773-930b-cd6d832a343b')

  })
  it('Internationalization: Working days', () => {

    // Settings - Internationalization: Working days
    cy.visit('/settings/settings/6fef5d8b-aa85-40a7-a028-5f736ad2b8b2')
    cy.url().should('include', '/settings/settings/6fef5d8b-aa85-40a7-a028-5f736ad2b8b2')

  })
  it('Inventory: Allow kit to inventory', () => {

    // Settings - Inventory: Allow kit to inventory
    cy.visit('/settings/settings/5b341bc6-185a-4a03-a0fb-a0e97cb9330a')
    cy.url().should('include', '/settings/settings/5b341bc6-185a-4a03-a0fb-a0e97cb9330a')

  })
  it('Inventory: Container required', () => {

    // Settings - Inventory: Container required
    cy.visit('/settings/settings/7fa11f93-5195-4828-b27b-808dab698a3d')
    cy.url().should('include', '/settings/settings/7fa11f93-5195-4828-b27b-808dab698a3d')

  })
  it('Inventory: Ignore container levels', () => {

    // Settings - Inventory: Ignore container levels
    cy.visit('/settings/settings/67df40f4-4827-4ca9-adb8-ee6fe2bfdefc')
    cy.url().should('include', '/settings/settings/67df40f4-4827-4ca9-adb8-ee6fe2bfdefc')

  })
  it('Inventory: Multiple products per container', () => {

    // Settings - Inventory: Multiple products per container
    cy.visit('/settings/settings/722389f0-2500-424e-bb82-46fd2b981022')
    cy.url().should('include', '/settings/settings/722389f0-2500-424e-bb82-46fd2b981022')

  })
  it('Inventory: Recycle serial numbers', () => {

    // Settings - Inventory: Recycle serial numbers
    cy.visit('/settings/settings/a33536c2-1d92-4528-bfd7-6529e53aa6da')
    cy.url().should('include', '/settings/settings/a33536c2-1d92-4528-bfd7-6529e53aa6da')

  })
  it('Inventory: Reorder quantity', () => {

    // Settings - Inventory: Reorder quantity
    cy.visit('/settings/settings/0e68e0c8-d328-43ab-a860-5fb7dd6da7a0')
    cy.url().should('include', '/settings/settings/0e68e0c8-d328-43ab-a860-5fb7dd6da7a0')

  })
  it('Inventory: Reporting percent', () => {

    // Settings - Inventory: Reporting percent
    cy.visit('/settings/settings/fb4c4826-b930-48aa-84d5-62bfc3691871')
    cy.url().should('include', '/settings/settings/fb4c4826-b930-48aa-84d5-62bfc3691871')

  })
  it('Inventory: Restrict transactions to setup complete', () => {

    // Settings - Inventory: Restrict transactions to setup complete - #3040
    cy.visit('/settings/settings/cf3d8cce-166e-43c5-a6a6-1c7d5220a714')
    cy.url().should('include', '/settings/settings/cf3d8cce-166e-43c5-a6a6-1c7d5220a714')

  })
  it('Inventory: Target stock level', () => {

    // Settings - Inventory: Target stock level
    cy.visit('/settings/settings/9fd4a450-3478-4408-b07a-9526e2ac1aa0')
    cy.url().should('include', '/settings/settings/9fd4a450-3478-4408-b07a-9526e2ac1aa0')

  })
  it('Modules: Async picking', () => {

    // Settings - Modules: Async picking
    cy.visit('/settings/settings/78bd91e5-a9e5-41a6-b4d5-fc61dc1f2b6a')
    cy.url().should('include', '/settings/settings/78bd91e5-a9e5-41a6-b4d5-fc61dc1f2b6a')

  })
  it('Modules: Shopify', () => {

    // Settings - Modules: Shopify
    cy.visit('/settings/settings/113c7044-240e-461f-85a4-0ca577284c49')
    cy.url().should('include', '/settings/settings/113c7044-240e-461f-85a4-0ca577284c49')

  })
  it('Packing: Add to open shipment', () => {

    // Settings - Packing: Add to open shipment
    cy.visit('/settings/settings/d0c85323-63aa-4856-9817-5bff1e4dbe61')
    cy.url().should('include', '/settings/settings/d0c85323-63aa-4856-9817-5bff1e4dbe61')

  })
  it('Packing: Auto ship', () => {

    // Settings - Packing: Auto ship
    cy.visit('/settings/settings/1eff10f6-070b-41b8-9a7d-b4994b2981a0')
    cy.url().should('include', '/settings/settings/1eff10f6-070b-41b8-9a7d-b4994b2981a0')

  })
  it('Packing: Consume product packing materials', () => {

    // Settings - Packing: Consume product packing materials
    cy.visit('/settings/settings/358318de-2843-4e5b-b81a-79f59cf7719e')
    cy.url().should('include', '/settings/settings/358318de-2843-4e5b-b81a-79f59cf7719e')

  })
  it('Packing: Default packing material', () => {

    // Settings - Packing: Default packing material
    cy.visit('/settings/settings/46bb6bb8-120a-414d-bb4c-f33f61428aca')
    cy.url().should('include', '/settings/settings/46bb6bb8-120a-414d-bb4c-f33f61428aca')

  })
  it('Packing: Select product packing materials', () => {

    // Settings - Packing: Select product packing materials
    cy.visit('/settings/settings/edc8145f-660e-465d-b428-89f3526aeffc')
    cy.url().should('include', '/settings/settings/edc8145f-660e-465d-b428-89f3526aeffc')

  })
  it('Picking: Auto pack', () => {

    // Settings - Picking: Auto pack
    cy.visit('/settings/settings/15207ed5-8368-40eb-a680-5fbb5849ed4a')
    cy.url().should('include', '/settings/settings/15207ed5-8368-40eb-a680-5fbb5849ed4a')

  })
  it('Picking: Auto retire containers', () => {

    // Settings - Picking: Auto retire containers
    cy.visit('/settings/settings/e86415d3-73dd-4b27-9942-2101e69a89ed')
    cy.url().should('include', '/settings/settings/e86415d3-73dd-4b27-9942-2101e69a89ed')

  })
  it('Bulk strategy', () => {

    // Settings - Picking: Bulk strategy
    cy.visit('/settings/settings/2e0c43a4-ec0d-4c8a-95bf-a8e6b95121ea')
    cy.url().should('include', '/settings/settings/2e0c43a4-ec0d-4c8a-95bf-a8e6b95121ea')

  })
  it('Picking: Display product description', () => {

    // Settings - Picking: Display product description
    cy.visit('/settings/settings/eb40444c-7c95-4613-9875-a1e9a4232f90')
    cy.url().should('include', '/settings/settings/eb40444c-7c95-4613-9875-a1e9a4232f90')

  })
  it('Picking: Pending picking allowed', () => {

    // Settings - Picking: Pending picking allowed
    cy.visit('/settings/settings/9dbe3c40-1510-4190-b84c-30efbb120327')
    cy.url().should('include', '/settings/settings/9dbe3c40-1510-4190-b84c-30efbb120327')

  })
  it('Purging: Completed orders', () => {

    // Settings - Purging: Completed orders
    cy.visit('/settings/settings/c84f8a88-7ca3-43ca-a3be-5cefbf289c87')
    cy.url().should('include', '/settings/settings/c84f8a88-7ca3-43ca-a3be-5cefbf289c87')

  })
  it('Purging: Concept orders', () => {

    // Settings - Purging: Concept orders
    cy.visit('/settings/settings/55435ef6-02fe-4c21-b2e1-66ddf0fd98d7')
    cy.url().should('include', '/settings/settings/55435ef6-02fe-4c21-b2e1-66ddf0fd98d7')

  })
  it('Purging: Importo imports', () => {

    // Settings - Purging: Importo imports
    cy.visit('/settings/settings/2a5f9ff8-1efb-4d69-8db0-8a66e7ed4471')
    cy.url().should('include', '/settings/settings/2a5f9ff8-1efb-4d69-8db0-8a66e7ed4471')

  })
  it('Purging: Nuntius messages', () => {

    // Settings - Purging: Nuntius messages
    cy.visit('/settings/settings/8ce00b2b-0b4d-48d0-ba74-09da1d60848c')
    cy.url().should('include', '/settings/settings/8ce00b2b-0b4d-48d0-ba74-09da1d60848c')

  })
  it('Purging: Retired inventory', () => {

    // Settings - Purging: Retired inventory
    cy.visit('/settings/settings/fb8630c2-78dd-486f-926f-f213e6999107')
    cy.url().should('include', '/settings/settings/fb8630c2-78dd-486f-926f-f213e6999107')

  })
  it('Purging: Vorto messages', () => {

    // Settings - Purging: Vorto messages
    cy.visit('/settings/settings/21531303-c1d8-4ed1-9550-e65060a66717')
    cy.url().should('include', '/settings/settings/21531303-c1d8-4ed1-9550-e65060a66717')

  })
  it('Receiving: Over receive', () => {

    // Settings - Receiving: Over receive
    cy.visit('/settings/settings/263c703a-36d9-4689-8153-ba861ed9f3b0')
    cy.url().should('include', '/settings/settings/263c703a-36d9-4689-8153-ba861ed9f3b0')

  })
  it('Receiving: Over receive different product', () => {

    // Settings - Receiving: Over receive different product
    cy.visit('/settings/settings/1c538a0b-ca60-40bb-a10c-069521c54497')
    cy.url().should('include', '/settings/settings/1c538a0b-ca60-40bb-a10c-069521c54497')

  })
  it('Sales Orders: Required delivery contact fields	', () => {

    // Settings - Sales Orders: Required delivery contact fields
    cy.visit('/settings/settings/1fc04935-7c4e-49d9-8b5f-ba8c4f44cd2a')
    cy.url().should('include', '/settings/settings/1fc04935-7c4e-49d9-8b5f-ba8c4f44cd2a')

  })
  it('Shipping: Backorder shipping method', () => {

    // Settings - Shipping: Backorder shipping method
    cy.visit('/settings/settings/f0af7fc7-305b-4ea3-9f98-3a41ebad7c94')
    cy.url().should('include', '/settings/settings/f0af7fc7-305b-4ea3-9f98-3a41ebad7c94')

  })
  it('Shipping: Cutoff time', () => {

    // Settings - Shipping: Cutoff time
    cy.visit('/settings/settings/70f4bafe-a060-4183-b328-f04d6ce99ca2')
    cy.url().should('include', '/settings/settings/70f4bafe-a060-4183-b328-f04d6ce99ca2')

  })
  it('Shipping: Default business model', () => {

    // Settings - Shipping: Default business model
    cy.visit('/settings/settings/9f6ee91d-7cfc-4172-baec-0dacf586b2a1')
    cy.url().should('include', '/settings/settings/9f6ee91d-7cfc-4172-baec-0dacf586b2a1')

  })
  it('Shipping: Default delivery terms', () => {

    // Settings - Shipping: Default delivery terms
    cy.visit('/settings/settings/9e389941-3a5b-4372-b923-076255ecfb01')
    cy.url().should('include', '/settings/settings/9e389941-3a5b-4372-b923-076255ecfb01')

  })
  it('Shipping: Default shipping method', () => {

    // Settings - Shipping: Default shipping method
    cy.visit('/settings/settings/c4a5d331-960f-4b48-84a9-e01d92771455')
    cy.url().should('include', '/settings/settings/c4a5d331-960f-4b48-84a9-e01d92771455')

  })
  it('Shipping: Partial shipping', () => {

    // Settings - Shipping: Partial shipping
    cy.visit('/settings/settings/39eb1980-be31-4043-8035-f53828b46656')
    cy.url().should('include', '/settings/settings/39eb1980-be31-4043-8035-f53828b46656')

  })
  it('Shipping: Shipping method required', () => {

    // Settings - Shipping: Shipping method required
    cy.visit('/settings/settings/b4550206-c0b6-4204-aa80-684100277239')
    cy.url().should('include', '/settings/settings/b4550206-c0b6-4204-aa80-684100277239')

  })
  it('Shipping: Sla days', () => {

    // Settings - Shipping: Sla days
    cy.visit('/settings/settings/9571719d-4fa3-4e1a-b4ac-9454386870b5')
    cy.url().should('include', '/settings/settings/9571719d-4fa3-4e1a-b4ac-9454386870b5')

  })
  it('Traffic lights: Green', () => {

    // Settings - Traffic light: Green
    cy.visit('/settings/settings/cffcf114-9f92-481a-b954-1645be60b124')
    cy.url().should('include', '/settings/settings/cffcf114-9f92-481a-b954-1645be60b124')

  })
  it('Traffic lights: Orange', () => {

    // Settings - Traffic lightes: Orange
    cy.visit('/settings/settings/6c87c8d9-cf9d-41b6-9725-77bd1d2dc437')
    cy.url().should('include', '/settings/settings/6c87c8d9-cf9d-41b6-9725-77bd1d2dc437')

  })
  it('Traffic lights: Red', () => {

    // Settings - Traffic lights: Red
    cy.visit('/settings/settings/6bf54617-a6b2-424b-92e7-a3527f1d3538')
    cy.url().should('include', '/settings/settings/6bf54617-a6b2-424b-92e7-a3527f1d3538')

  })
  it('Warehousing: Picking bin location name', () => {

    // Settings - Warehousing: Picking bin location name
    cy.visit('/settings/settings/161f98d2-ab23-4425-81b7-289e9bb14404')
    cy.url().should('include', '/settings/settings/161f98d2-ab23-4425-81b7-289e9bb14404')

  })
  it('Warehousing: Problem bin location name', () => {

    // Settings - Warehousing: Problem bin location name
    cy.visit('/settings/settings/e3ba6913-182b-47a3-b7c7-94f4a4616d9a')
    cy.url().should('include', '/settings/settings/e3ba6913-182b-47a3-b7c7-94f4a4616d9a')

  })
  it('Warehousing: Receiving bin location', () => {

    // Settings - Warehousing: Receiving bin location
    cy.visit('/settings/settings/dac325c2-70d0-42c7-9455-eb4aae78bc47')
    cy.url().should('include', '/settings/settings/dac325c2-70d0-42c7-9455-eb4aae78bc47')

  })
  it('Warehousing: Receiving bin location name', () => {

    // Settings - Warehousing: Receiving bin location name
    cy.visit('/settings/settings/46315817-da8d-4152-ac04-c1a2c4c3ebc1')
    cy.url().should('include', '/settings/settings/46315817-da8d-4152-ac04-c1a2c4c3ebc1')

  })
  it('Warehousing: Shipping bin location', () => {

    // Settings - Warehousing: Shipping bin location
    cy.visit('/settings/settings/12a15265-d981-4a3c-940d-cbc0428fbcbb')
    cy.url().should('include', '/settings/settings/12a15265-d981-4a3c-940d-cbc0428fbcbb')

  })
  it('Integration', () => {

    // Admin - Integration
    cy.visit('/integration')
    cy.url().should('include', '/integration')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="id"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="flow"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="extract"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="subject"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="children"]').scrollIntoView().should('be.visible')

  })
  it('Integration - Flows', () => {

    // Admin - Integration - Flows
    cy.visit('/integration/flows')
    cy.url().should('include', '/integration/flows')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="enabled"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="klass"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="event"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="trigger"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Integration - Messages', () => {

    // Admin - Integration - Messages
    cy.visit('/integration/messages')
    cy.url().should('include', '/integration/messages')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="id"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="flow"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="extract"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="subject"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="children"]').scrollIntoView().should('be.visible')

  })
  it('Integration - Credentials', () => {

    // Admin - Integration - Credentials
    cy.visit('/integration/credentials')
    cy.url().should('include', '/integration/credentials')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="key"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Integration - Oauth - Authorized', () => {

    // Admin - Integration - Oauth - Authorized #3464
    cy.visit('/oauth/authorized_applications')
    cy.url().should('include', '/oauth/authorized_applications')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="scopes"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="#"]').scrollIntoView().should('be.visible')

  })
  it('Integration - Oauth - Applications', () => {

    // Admin - Integration - Oauth - Applications
    cy.visit('/oauth/applications')
    cy.url().should('include', '/oauth/applications')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="uid"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="redirect_uri"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="scopes"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="confidential"]').scrollIntoView().should('be.visible')

  })
  it('Integration - Third Party', () => {

    // Admin - Integration - Third Party
    cy.visit('/admin/integrations')
    cy.url().should('include', '/admin/integrations')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="integration_account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="endpoint"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="last_order_at"]').scrollIntoView().should('be.visible')

  })
  it('Imports', () => {

    // Imports
    cy.visit('/importing')
    cy.url().should('include', '/importing')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="user"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="kind"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="original"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="result"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="extra_links"]').scrollIntoView().should('be.visible')

  })
  it('Messaging', () => {

    // Admin - Messaging - #3293
    cy.visit('/messaging/')
    cy.url().should('include', '/messaging')
    cy.get('a[href*="Action table export"]').should('be.visible')

  })
  it('Messages', () => {

    // Admin - Messaging - Messages
    cy.visit('/messaging/admin/messages')
    cy.url().should('include', '/messaging/admin/messages')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="to"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="last_sent_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="origin"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="subject"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="status"]').scrollIntoView().should('be.visible')

  })
  it('Messaging - Templates', () => {

    // Admin - Messaging - Templates
    cy.visit('/messaging/admin/templates')
    cy.url().should('include', '/messaging/admin/templates')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="enabled"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="klass"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="event"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="messages"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Messaging - Layout', () => {

    // Admin - Messaging - Layout
    cy.visit('/messaging/admin/layouts')
    cy.url().should('include', '/messaging/admin/layouts')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')

  })
  it('Messaging - Locales', () => {

    // Admin - Messaging - Locales
    cy.visit('/messaging/admin/locales')
    cy.url().should('include', '/messaging/admin/locales')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="key"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')

  })
  it('Messaging Campaigns', () => {

    // Admin - Messaging Campaigns
    cy.visit('/messaging/admin/campaigns')
    cy.url().should('include', '/messaging/admin/campaigns')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="transport"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="list"]').scrollIntoView().should('be.visible')

  })
  it('Messaging Lists', () => {

    // Admin - Messaging Lists
    cy.visit('/messaging/admin/lists')
    cy.url().should('include', '/messaging/admin/lists')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="subscribers"]').scrollIntoView().should('be.visible')

  })
  it('Papers', () => {

    // Admin - Papers
    cy.visit('/papers')
    cy.url().should('include', '/papers')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="owner"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="template"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="attachment"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="actions"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="consolidation_id"]').scrollIntoView().should('be.visible')

  })
  it('Papers Templates', () => {

    // Admin - Papers Templates
    cy.visit('/papers/admin/templates')
    cy.url().should('include', '/papers/admin/templates')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="enabled"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="klass"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="event"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="papers_count"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="kind"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="use"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="copies"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Papers Locales', () => {

    // Admin - Papers Locales
    cy.visit('/papers/admin/locales')
    cy.url().should('include', '/papers/admin/locales')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="key"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="metadata"]').scrollIntoView().should('be.visible')

  })
  it('Sites', () => {

    // Admin - Sites
    cy.visit('/sites')
    cy.url().should('include', '/sites')

  })
  it('Admin - Apps', () => {

    // Admin - Apps
    cy.visit('/distribution/admin/apps')
    cy.url().should('include', '/distribution/admin/apps')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="icon"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="release_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="operating_system"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="created_at"]').scrollIntoView().should('be.visible')

  })
  it('Billing - Sources', () => {

    // Admin - Billing - Sources
    cy.visit('/admin/billing/sources')
    cy.url().should('include', '/admin/billing/sources')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')

  })
  it('Event types', () => {

    // Admin - Billing - Event types
    cy.visit('/admin/billing/event_types')
    cy.url().should('include', '/admin/billing/event_types')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')

  })
  it('Billing Rate groups', () => {

    // Admin - Billing Rate groups
    cy.visit('/admin/billing/rate_groups')
    cy.url().should('include', '/admin/billing/rate_groups')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rate_group"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="description"]').scrollIntoView().should('be.visible')

  })
  it('Billing Rate types', () => {

    // Admin - Billing Rate types
    cy.visit('/admin/billing/rate_types')
    cy.url().should('include', '/admin/billing/rate_types')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="name"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rate_group"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="event_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="charge_code"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="recent_events"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rate_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rate_period"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rate_count"]').scrollIntoView().should('be.visible')

  })
  it('Billing Rates', () => {

    // Admin - Billing Rates
    cy.visit('/admin/billing/rates')
    cy.url().should('include', '/admin/billing/rates')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="account"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rate_group"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="rate_type"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="valid_from"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="valid_until"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="price"]').scrollIntoView().should('be.visible')

  })
  it('Exceptions', () => {

    // Admin - Exceptions
    cy.visit('/exceptions')
    cy.url().should('include', '/exceptions')

    cy.resetView()
    cy.get('[data-act-table-target="column"][data-column="exception_class"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="message"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="code_location"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="count"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="last_occurence"]').scrollIntoView().should('be.visible')
    cy.get('[data-act-table-target="column"][data-column="actions"]').scrollIntoView().should('be.visible')

  })
})
