let container_1
let container_2
let purchase_order
let kit_order
let barcode
let kit_container

const kit_product = 'KITPROD786'
const kit_product_qty = 1
const kit_component_a = 'KIT-CMP-PROD001'
const kit_component_a_qty = 1
const kit_component_b = 'KIT-CMP-PROD002'
const kit_component_b_qty = 1
const kits_to_build_qty = 1

describe('State Transition', () => {

  beforeEach(() => {
    cy.login({email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})

    })

     describe('Kit Order',()=>{

    describe('available > picked > retired',()=>{

    it('--> available',()=>{
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
      cy.get('[placeholder="Destination location"]').type('ALM',{ delay: 200 })

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


    cy.visit(`/orders/${purchase_order}`)
    cy.contains('.pr-1', 'Confirm').click({ force: true })
    for (let i = 0; i < 300; i++) {
          cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
              statusElement => {
                  let status = statusElement.text()
                  if (status !== 'pending') {
                      cy.wait(1000)
                    }
                }
            )
        }


    // 1. Navigate to Purchase Order
    cy.visit(`/orders/${purchase_order}`)
    cy.url().should('include', `/orders/${purchase_order}`)

    // 2. Click Receive from the context menu
    cy.contains('.pr-1', 'Receive').click({ force: true })

    // 2b. Fill in a packing material
    cy.get('[placeholder="Packing material"]').type('BOX 1', {delay:200})

    // 3. Fill in a kit component
    cy.get('[placeholder="Product"]').eq(0).type(kit_component_a, {delay:200})

    // 4. Fill in a quantity
    cy.get('[data-order-line-target="quantity"]').eq(0).type(kit_component_a_qty)

    // 4b. Fill in packig material
    cy.get('[placeholder="Packing material"]').eq(1).type('BOX 1', {delay:200})

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
                      cy.reload()

                      cy.wait(1000)
                    }
                }
            )
        }
    // Get container 1st id
    // cy.get('[data-column="position"]', {timeout:30000}).should('be.visible')
    cy.get('[data-action="click->satis-tabs#select"]').contains('Items').click()
    cy.get('.selected [data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
        cy.wait(1000)
    cy.get('[href*="/containers/"]').eq(1).click()
    cy.url().should('include', `/containers`)

    cy.url().then(($url) => {
        const url = $url.split('/')
        container_1 = url[4]
        cy.log(container_1)
        cy.visit(`/containers/${container_1}`)
        cy.url().should('include', `/containers/${container_1}`)
        cy.wait(2000)
        cy.visit(`/containers/${container_1}`)
        cy.get('.state-info-item dd').contains('available')
        cy.wait(2000)


    })
    // 1. Navigate to Purchase Order
    cy.visit(`/orders/${purchase_order}`)
    cy.url().should('include', `/orders/${purchase_order}`)
    cy.wait(1500)

    // 2. Get container 2nd container id
    cy.get('[id*="tab_label"]').contains('Items').click({ force: true })
    cy.get('[data-column="position"]', {timeout:30000}).should('be.visible')
    cy.get('.selected [data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')

    cy.get('[href*="/containers/"]').last().click()
    cy.url().should('include', `/containers`)

    cy.url().then(($url) => {
        const url = $url.split('/')
        container_2 = url[4]
        cy.log(container_2)
        cy.visit(`/containers/${container_2}`)
        cy.url().should('include', `/containers/${container_2}`)


        cy.visit(`/containers/${container_2}`)
        cy.get('.state-info-item dd').contains('available')


    })


    })

      })

    it('available --> picked',()=>{

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
      cy.get('.signum-notification-body__mb').should('be.visible').contains('Moving inventory')
      cy.get('.signum-notification-body__mb').should('be.visible').contains('Inventory has been moved')





    // 1. Navigate to Kit Order.
    cy.visit('/orders/new?type=kit_order')
    cy.url().should('include', '/orders/new?type=kit_order')

    // 2. Select Destination location.
    cy.get('[placeholder="Destination location"]').type('BTX-ALM', {delay:200})

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

    // 1. Navigate to the kit order created.
    cy.visit(`/orders/${kit_order}`)
    cy.url().should('include', `/orders/${kit_order}`)

    // 2. Click Confirm from the context menu
    cy.contains('.pr-1', 'Confirm').click({ force: true })

    for (let i = 0; i < 40; i++) {
      cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
        statusElement => {
          let status = statusElement.text()
          if (status !== 'processing') {
            cy.wait(500)
                    }
                }
            )
        }
        cy.reload()

        // 1. Navigate to the kit order created.
        cy.visit(`/orders/${kit_order}`)
        cy.url().should('include', `/orders/${kit_order}`)

        // 2. Click Pick from the context menu.
        cy.contains('.pr-1', 'Pick').click({ force: true })
        cy.url().should('include', `/orders/${kit_order}/pick/new`)

        // 3. Click Pick.
        cy.get('.primary').contains('Pick').click()

        for (let i = 0; i < 300; i++) {
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

        cy.visit('/mobile')
        cy.url().should('include', '/mobile')

        cy.get(':nth-child(1) > .item-link > .item-inner > .item-title').contains('All').click() // << All
        cy.wait(1500)

        // 4. Scroll and click the last (most recent) order.
        cy.get('.page-current > .page-content > .list > ul > li > .item-link > .item-inner').last().click()

        // 5. Fill in a Tote.
        cy.wait(1500)
        cy.window().then(win => {
        barcode = cy.stub(win, 'prompt')
        barcode.returns('KITTOTE')

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        cy.window().then(container => {
        barcode.restore()
        cy.stub(container, 'prompt').returns(container_2)

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        cy.window().then(container => {
        barcode.restore()
        cy.stub(container, 'prompt').returns(container_1)

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
        cy.wait(1500)

        cy.visit(`/containers/${container_2}`)
        cy.get('.state-info-item dd').contains('picked')


        cy.visit(`/containers/${container_1}`)
        cy.get('.state-info-item dd').contains('picked')
})
    })

  })
   it('picked --> retired',()=>{


    cy.visit('/containers')
        cy.url().should('include', '/containers')

        // 2. Click Create
        cy.get('[href="/containers/new"]').click({force: true})

        // 4. Fill in bin location
        cy.get('[placeholder="Bin location"]').type('KITTING',{delay:200})

        // 3. Fill in Packing Material
        cy.get('[placeholder="Packing material"]').type('Box 1', {delay:200})

        // 5. Click Create Container
        cy.get('[type="submit"]').click()


        cy.wait(1000)
        cy.get('.signum-notification-body__mb').then(e1 =>{
          kit_container = e1.text().substring(11,19)
          cy.log(kit_container)
        cy.wait(5000)
        // 1. Navigate to the kit order created.
        cy.visit(`/orders/${kit_order}`)
        cy.url().should('include', `/orders/${kit_order}`)

        // 2. Click Build from the context menu.
        cy.contains('.pr-1', 'Build').click({ force: true })
        cy.url().should('include', `/orders/${kit_order}/build/new`)

        // 3. Fill in Bin location
        cy.get('[placeholder="Bin location"]').type('KITTING', {delay:200})

        // 4. Fill in container
        cy.get('[placeholder="Container"]').eq(0).type(kit_container, {delay:200})

        // 5. Fill in Product
        cy.get('[placeholder="Product"]').eq(0).type(kit_product, {delay:200})

        // 6. Fill in Quantity
        cy.get('[id*="quantity"]').eq(0).type(kits_to_build_qty, {force:true})

        // 7. Click Build
        cy.get('.primary').click()

        for (let i = 0; i < 300; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                statusElement => {
                    let status = statusElement.text()
                    if (status !== 'completed') {
                        cy.reload()

                        cy.wait(1000)
                        }
                    }
                )
            }

        cy.visit(`/containers/${container_1}`)
        cy.get('.state-info-item dd').contains('retired')

        cy.visit(`/containers/${container_2}`)
        cy.get('.state-info-item dd').contains('retired')

        })



    })
        })

    })
})

