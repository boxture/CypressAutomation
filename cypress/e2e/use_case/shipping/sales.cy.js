let purchase_order
let container
let from_bin_location
let sales_order

describe('Ship a sales order', () => {

  before(() => {
    cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    })

    it('Purchase orderrder create', () => {

    // CREATE A PURCHASE ORDER

    // 1. Navigate to Purchase Orders
    cy.visit('orders/new?type=purchase_order')

    // 2. Fill in Customer Reference
    const dayjs = require('dayjs')
    cy.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss'))
    cy.get('[id^=orders_purchase_order_customer_reference_number]').type(dayjs().format('DDmmssYY'))

    // 3. Fill in Purchase Order Number
    cy.get('[id^=orders_purchase_order_purchase_order_number]').type(dayjs().format('ssYYDDmm'))

    // 4. Fill in Inbound Tracking Number
    cy.get('[id^=orders_purchase_order_inbound_tracking_number]').type(dayjs().format('AWBMMDDHHmm'))

    // 5. Fill in Forwarder
    cy.get('[id^=orders_purchase_order_forwarder]').type('DHL')

    // 6. Fill in Destination location
    cy.get('[placeholder="Destination location"]').type('NLD-A',{ delay: 200 })

    // 7. Fill in Product
    cy.get('[placeholder="Product"]').eq(0).type('BXT-SNO98304',{ delay: 200 })

    // 8. Fill in quantity
    cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)

    // 9. Fill in product 2nd line
    //cy.get('[placeholder="Product"]').eq(1).type('BXT-SNO23245',{ delay: 500 })

    // 9.1 Fill in quantity 2nd line
    //cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(2)

    // 10. Submit form
    cy.get('.button').contains('Create and continue editing').click()
    cy.url().should('include', '/edit')

    //Get purchase order
    cy.url().then(($url) => {
      let url = $url.split('/')
      purchase_order = url[4]
      cy.log(purchase_order)
      cy.visit(`/orders/${purchase_order}`)
    })

    // Click logout button
    cy.get('span').contains('Logout').click({force: true})

    // Verify logged out
    cy.contains('Log in to your account')
    cy.url().should('include', '/users/sign_in')

    })

  })

describe('Purchase order confirm', () => {

  before(() => {
    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

  })

  it('Confirm the purchase order', () => {

    cy.visit(`/orders/${purchase_order}`)
    cy.contains('.pr-1', 'Confirm').click({ force: true })
    for (let i = 0; i < 40; i++) {
          cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
              statusElement => {
                  let status = statusElement.text()
                  if (status === 'concept') {
                      cy.wait(500)
                    }
                }
            )
        }

    })

  })

describe('Purchase orders receive', () => {

  before(() => {
    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

  })

  it('Receive the purchase order', () => {

    cy.visit(`/orders/${purchase_order}`)

    cy.contains('.pr-1', 'Receive').click({ force: true })
    cy.get('[placeholder="Packing material"]').should('be.visible').type('a3',{ delay: 200 })
    cy.get('[placeholder="Product"]').eq(0).type('BXT-SNO98304', {delay:200})
    cy.get('[data-order-line-target="quantity"]').eq(0).type(1)
    //cy.get('[data-action="focus->satis-date-time-picker#showCalendar input->satis-date-time-picker#dateTimeEntered"]').click()
    //cy.get('[data-action="satis-date-time-picker#selectDay"]').contains('29').click()
    cy.get('.button').click()

    for (let i = 0; i < 40; i++) {
          cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
              statusElement => {
                  let status = statusElement.text()
                  if (status === 'completed') {
                      cy.wait(500)
                    }
                }
            )
        }

    })

  })


describe('Inventory move', () => {

  before(() => {
    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
  })

  it('Move inventory', () => {

    cy.visit(`/orders/${purchase_order}`)
    cy.url().should('include', `/orders/${purchase_order}`)
    cy.get('.text-lg').contains('Lines').should('be.visible')
    cy.get('[id*="tab_label"]').contains('Items').click({ force: true })
    cy.get('.selected [data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')

    cy.get('[href*="/containers/"]').eq(1).click()
    cy.url().should('include', `/containers`)

    cy.url().then(($url) => {
      const url = $url.split('/')
      container = url[4]
      cy.log(container)
      cy.visit(`/containers/${container}`)
      cy.url().should('include', `/containers/${container}`)

    // Get from bin location
    cy.get('.bin-location-info-item a').then($bin => {
        from_bin_location = $bin.text()
        cy.log(from_bin_location)

    // Move container
    cy.visit('/inventory_moves/new')
    cy.url().should('include', '/inventory_moves/new')
    cy.get('[placeholder="Container"]').type(`${container}`.substring(0,8), {delay:200})

    cy.get('[placeholder="From bin location"]').type(`${from_bin_location}`, {delay:200})
    cy.get(`[data-satis-dropdown-item-text="${from_bin_location}"]`).click({force:true})

    cy.get('[placeholder="To bin location"]').type('PICKING', {delay:200})
    cy.get(`[data-satis-dropdown-item-text="PICKING"]`).click({force:true})

    cy.get('.primary').contains('Move').click()})

    })

  })

})

describe('Sales order create', () => {
  
  before(() => {
    cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
  
  })

  it('Create a sales order', () => {

    // CREATE A SALES ORDER

    // 1. Navigate to Sales Order
    cy.visit('/orders/new?type=sales_order')

    // 2. Select Customer
    cy.get('[placeholder=Customer]').type('Soylent', {delay:200})

    // 3. Fill in Product
    cy.get('[placeholder="Product"]').type('BXT-SNO98304', {delay:200})

    // 4. Fill in quantity
    //cy.get('[id^=orders_sales_order_order_lines_attributes_TEMPLATE_quantity').clear().type(1)
    cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)

    //Submit form
    cy.get('.button').contains('Create and continue editing').click()
    cy.url().should('include', '/edit')

    //Get sales order
    cy.url().then(($url) => {
    const url = $url.split('/')
    sales_order = url[4]
    cy.log(sales_order)

    //Confirm Sales order
    cy.visit(`/orders/${sales_order}`)
    cy.contains('.pr-1', 'Confirm').click({ force: true })
    for (let i = 0; i < 40; i++) {
          cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
              statusElement => {
                  let status = statusElement.text()
                  if (status === 'concept') {
                      cy.wait(500)
                    }
                }
            )
        }

    })

  })

})
describe('Sales order create', () => {

  before(() => {
    cy.login({email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    })

    it('Generate a pick list', () => {

      cy.visit(`/orders/${sales_order}`)

      cy.contains('.pr-1', 'Pick').click({ force: true })
      cy.url().should('include', `/orders/${sales_order}/pick/new`)

      cy.get('.primary').contains('Pick').click()
      cy.get('[id*="tab_label"]').contains('Pick Lists')

    })

  })

describe('Pick order', () => {

    it.only('Pick Order', () => {

    // Login on Mobile
    cy.visit('/mobile')

    // Verify login screen
    cy.url().should('include', '/mobile')
    cy.get('.login-screen-title').contains('Login')

    cy.get('#user_email').type('wrap-it_picker@wrap-it.com')
    cy.get('#user_password').type('picking')

    // Click Log in button
    cy.get('button').click()

    // Assert login page
    cy.get('.icon').should('be.visible')
    cy.get(':nth-child(1) > .item-link > .item-inner > .item-title').click() // << All

    cy.wait(1500)

		cy.get('.page-current > .page-content > .list > ul > li > .item-link > .item-inner').last().click()
    cy.pause()
    cy.window().then(tote => {
      //stubbing prompt window
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
      const stub1 = cy.stub(tote, 'prompt')
      stub1.returns('AUTOTE')
      })

    cy.window().then(container => {
      //stubbing prompt window
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
      const stub = cy.stub(container, 'prompt')
      stub.returns('`${container}`')
      })

		})
  
  })


describe('Pack order', () => {

  before(() => {
    cy.pick({email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    })
    it('Pack Order', () => {

      cy.contains('.item-title', 'My').click()
		  cy.get(
			'.page-current > .page-content > .list > ul > li > .item-link > .item-inner'
		  ).click()
      		cy.wait(2000)

		  cy.window().then(win => {
			//stubbing prompt window
			cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
			const stub = cy.stub(win, 'prompt')
    // Get from bin location
			stub.returns('')
		  })

   })

})