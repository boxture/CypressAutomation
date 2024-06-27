let container_1
let container_2
let purchase_order
let kit_order
let barcode

const kit_product = 'BXT-KIT998723'
const kit_product_qty = 2
const kit_component_a = 'BXT-CPNT-L543A'
const kit_component_a_qty = 2
const kit_component_b = 'BXT-CPNT-L543B'
const kit_component_b_qty = 2
const kits_to_build_qty = 2
const tote = 'AUTOTE'

describe('KITTING', () => {

  before(() => {
    cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    })

    it('Purchase order create', () => {

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
    cy.get('[placeholder="Product"]').eq(0).type(kit_component_a,{ delay: 200 })

    // 8. Fill in quantity
    cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(kit_component_a_qty)

    // 9. Fill in product 2nd line
    cy.get('[placeholder="Product"]').eq(1).type(kit_component_b,{ delay: 200 })

    // 9.1 Fill in quantity 2nd line
    cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(kit_component_b_qty)

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

    })

  })

describe('Purchase order confirm', () => {

  before(() => {
    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

  })

  it('Confirm the purchase order', () => {

    cy.visit(`/orders/${purchase_order}`)
    cy.contains('.pr-1', 'Confirm').click({ force: true })
    for (let i = 0; i < 600; i++) {
          cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
              statusElement => {
                  let status = statusElement.text()
                  if (status !== 'pending') {
                      cy.wait(1000)
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

    // 1. Navigate to Purchase Order
    cy.visit(`/orders/${purchase_order}`)
    cy.url().should('include', `/orders/${purchase_order}`)

    // 2. Click Receive from the context menu
    cy.contains('.pr-1', 'Receive').click({ force: true })

    // 2b. Fill in a packing material
    cy.get('[placeholder="Packing material"]').type('6474849091', {delay:200})

    // 3. Fill in a kit component
    cy.get('[placeholder="Product"]').eq(0).type(kit_component_a, {delay:200})

    // 4. Fill in a quantity
    cy.get('[data-order-line-target="quantity"]').eq(0).type(kit_component_a_qty)

    // 4b. Fill in packig material
    cy.get('[placeholder="Packing material"]').eq(1).type('6474849091', {delay:200})

    // 5. Fill in a kit component on the 2nd line
    cy.get('[placeholder="Product"]').eq(1).type(kit_component_b, {delay:200})

    // 6. Fill in a quantity
    cy.get('[data-order-line-target="quantity"]').eq(1).type(kit_component_b_qty)

    // 7. Click Receive
    cy.get('.button').click()

    for (let i = 0; i < 300; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
              statusElement => {
                  let status = statusElement.text()
                  if (status !== 'completed') {
                      cy.wait(1000)
                    }
                }
            )
        }

    // Get container 1st id
    cy.wait(1000)
    cy.get('[data-action="click->satis-tabs#select"]').contains('Items').click()
    // cy.get('[data-column="position"]', {timeout:30000}).should('be.visible')
    cy.get('.selected [data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')


    cy.get('[href*="/containers/"]', {timeout:30000}).eq(1).click({force:true})
    cy.url().should('include', `/containers`)

    cy.url().then(($url) => {
        const url = $url.split('/')
        container_1 = url[4]
        cy.log(container_1)
        cy.visit(`/containers/${container_1}`)
        cy.url().should('include', `/containers/${container_1}`)

    })
    // 1. Navigate to Purchase Order
    cy.visit(`/orders/${purchase_order}`)
    cy.url().should('include', `/orders/${purchase_order}`)
    cy.wait(1500)

    // 2. Get container 2nd container id
    cy.get('[id*="tab_label"]').contains('Items').click({ force: true })
    cy.get('[data-column="position"]', {timeout:30000}).should('be.visible')
    cy.get('.selected [data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')

    cy.get('[href*="/containers/"]').last().scrollIntoView().click({ force:true })
    cy.url().should('include', `/containers`)

    cy.url().then(($url) => {
        const url = $url.split('/')
        container_2 = url[4]
        cy.log(container_2)
        cy.visit(`/containers/${container_2}`)
        cy.url().should('include', `/containers/${container_2}`)
    })

  })

})

describe('Inventory move containers', () => {

    before(() => {
      cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
    })

    it('Move inventory', () => {

      // 1. Navigate to Inventory move
      cy.visit('/inventory_moves/new')
      cy.url().should('include', '/inventory_moves/new')

      // 4. Fill in the container
      cy.get('[placeholder="Container"]').type(container_2.substring(0,8), {delay:200})

      // 2. Fill in From binlocation
      cy.get('[placeholder="From bin location"]').type('RECEIVING', {delay:200})
      cy.get('[data-satis-dropdown-item-text="RECEIVING"]').click({force:true})

      // 3. Fill in To binlocation
      cy.get('[placeholder="To bin location"]').type('PICKING', {delay:200})
      cy.get('[data-satis-dropdown-item-text="PICKING"]').click({force:true})

      // 6. Click Move
      cy.get('.primary').contains('Move').click()

      cy.wait(1000)

      // Asserting on signum, but we should assert on notification tray.
      //cy.get('.py-1').should('be.visible').contains('Moving inventory')
      //cy.get('.py-1').should('be.visible').contains('Inventory has been moved')

      cy.get('.signum-notification-body__mb').should('be.visible').contains('Moving inventory')
      cy.get('.signum-notification-body__mb').should('be.visible').contains('Inventory has been moved')

      cy.wait(1500)

      // Move 2nd component to a picking bin

      // 4b. Fill in container
      cy.get('[placeholder="Container"]').type(container_1.substring(0,8), {delay:200})

      // 2b. Fill in From binlocation
      cy.get('[placeholder="From bin location"]').type('RECEIVING', {delay:200})
      cy.get('[data-satis-dropdown-item-text="RECEIVING"]').click({force:true})

      // 3b. Fill in To binlocation
      cy.get('[placeholder="To bin location"]').type('PICKING', {delay:200})
      cy.get('[data-satis-dropdown-item-text="PICKING"]').click({force:true})

      // 6b. Click Move
      cy.get('.primary').contains('Move').click()

      cy.wait(1000)

      // Asserting on signum, but we should assert on notification tray.
      //cy.get('.py-1').should('be.visible').contains('Moving inventory')
      //cy.get('.py-1').should('be.visible').contains('Inventory has been moved')

      cy.get('.signum-notification-body__mb').should('be.visible').contains('Moving inventory')
      cy.get('.signum-notification-body__mb').should('be.visible').contains('Inventory has been moved')

      })
  })

  describe('Kit order create', () => {

    before(() => {
      cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    })

    it('Create Kit order', () => {

      // 1. Navigate to Kit Order.
      cy.visit('/orders/new?type=kit_order')
      cy.url().should('include', '/orders/new?type=kit_order')

      // 2. Select Destination location.
      cy.get('[placeholder="Destination location"]').type('NLD-AMSTE', {delay:200})

      // 3. Fill in Product.
      cy.get('[placeholder="Product"]').type(kit_product, {delay:200})
      cy.wait(1000)

      // 4. Fill in quantity.
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(kit_product_qty)

      // 5. Click Create and continue editing.
      cy.get('.button').contains('Create and continue editing').click()
      cy.url().should('include', '/edit')

      //Get kit order
      cy.url().then(($url) => {
      const url = $url.split('/')
      kit_order = url[4]
      cy.log(kit_order)

      })
   })
})


describe('Kit order confirm', () => {

  before(() => {
    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

  })

  it('Confirm kit order', () => {

    // 1. Navigate to the kit order created.
    cy.visit(`/orders/${kit_order}`)
    cy.url().should('include', `/orders/${kit_order}`)

    // 2. Click Confirm from the context menu
    cy.contains('.pr-1', 'Confirm').click({ force: true })

    for (let i = 0; i < 600; i++) {
      cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
        statusElement => {
          let status = statusElement.text()
          if (status !== 'processing') {
            cy.wait(1000)
            cy.log(i)
                    }
                }
            )
        }

    })

  })

describe.skip('Allocate Kit order', () => {

    before(() => {
      cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    })

    it('Allocate kit order', () => {

      // 1. Navigate to the Kit order created.
      cy.visit(`/orders/${kit_order}`)
      cy.url().should('include', `/orders/${kit_order}`)

      // 2. Click Allocate from the context menu.
      cy.contains('.pr-1', 'Allocate').click({ force: true })

      // 3. Click the button Allocate to allocate all lines.
      cy.get('.primary').contains('Allocate').click()

      for (let i = 0; i < 600; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                statusElement => {
                    let status = statusElement.text()
                    if (status === 'pending') {
                        cy.wait(1000)
                    }
                }
            )
        }

    })

  })


describe('Create a pick list', () => {

    before(() => {
      cy.login({email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    })

      it('Generate a pick list', () => {

        // 1. Navigate to the kit order created.
        cy.visit(`/orders/${kit_order}`)
        cy.url().should('include', `/orders/${kit_order}`)

        // 2. Click Pick from the context menu.
        cy.contains('.pr-1', 'Pick').click({ force: true })
        cy.url().should('include', `/orders/${kit_order}/pick/new`)

        // 3. Click Pick.
        cy.get('.primary').contains('Pick').click()

        for (let i = 0; i < 600; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                statusElement => {
                    let status = statusElement.text()
                    if (status === 'allocated') {
                        cy.wait(1000)
                      }
                  }
              )
          }

        cy.get('[id*="tab_label"]').contains('Picklists')

      })

  })

describe('Pick kit order', () => {

    it('Pick Kit Order', () => {

        // 1. Login on Mobile.
        cy.visit('/mobile')
        cy.url().should('include', '/mobile')

        // Assert login screen
        cy.url().should('include', '/mobile')
        cy.get('.login-screen-title').contains('Login')

        // 2. Fill in credentials.
        cy.get('#user_email').type('wrap-it_picker@wrap-it.com')
        cy.get('#user_password').type('picking')

        // 3. Click Log in.
        cy.get('button').click()

        // Assert login page.
        cy.get('.icon').should('be.visible')
        cy.get(':nth-child(1) > .item-link > .item-inner > .item-title', {visible:true}).click() // << All

        cy.get(':nth-child(1) > .item-link > .item-inner > .item-title', {visible:true}).eq(1).click() // << Ready To Pick
        cy.wait(2500)

        // 4. Scroll and click the last (most recent) order.
        cy.get('.item-link > .item-inner').last().click()

        // 5. Fill in a Tote.
        cy.wait(1500)
        cy.window().then(win => {
        barcode = cy.stub(win, 'prompt')
        barcode.returns(tote)

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        cy.window().then(container => {
        barcode.restore()
        cy.stub(container, 'prompt').returns(container_1)

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        cy.window().then(container => {
        barcode.restore()
        cy.stub(container, 'prompt').returns(container_2)

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
        cy.wait(1500)

        })

    })
})

describe('Kit an order', () => {

  before(() => {
    cy.login({email: 'wrap-it_kitter@wrap-it.com', password: 'Mumvez-caxpe2-wapviv'})

  })

    it('Building Kits', () => {

    // 1. Navigate to the kit order created.
    cy.visit(`/orders/${kit_order}`)
    cy.url().should('include', `/orders/${kit_order}`)

    // 2. Click Build from the context menu.
    cy.contains('.pr-1', 'Build').click({ force: true })
    cy.url().should('include', `/orders/${kit_order}/build/new`)

    // 3. Fill in Bin location
    cy.get('[placeholder="Bin location"]').type('KIT', {delay:200})

    // 4. Fill in Packing material
    cy.get('[placeholder="Packing material"').type('C4', {delay:200})

    // 5. Fill in Product
    cy.get('[placeholder="Product"]').eq(0).type(kit_product, {delay:200})

    // 6. Fill in Quantity
    cy.get('[id*="quantity"]').eq(0).type(kits_to_build_qty, {force:true})

    // 7. Click Build
    cy.get('.primary').click()

    for (let i = 0; i < 600; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status === 'picked') {
                    cy.wait(1000)
                    }
                }
            )
        }

    })

})
