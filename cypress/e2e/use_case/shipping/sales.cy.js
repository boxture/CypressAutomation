let purchase_order
let container
let sales_order
let sales_order_shipping_method = 'DHL Express'
let barcode


const outbound_serial_number = Math.floor((Math.random() * 1000000000000) + 1);
const outbound_product = 'BXT-SNO35360' // lot and expirty flag enabled
//const outbound_product = 'BXT-SNO35361'
const lot = '1234AB'
const tote = 'TOTE-21'


describe('Ship an outbound product in a picked container.', () => {

  describe('Inbound', () => {

    describe('Inventory', () => {
      
      before(() => {
        cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
      
      })
      
      it('1. Create and confirm purchase order.', () => {
        
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
        //cy.get('[id^=orders_purchase_order_forwarder]').type('DHL')

        // 6. Fill in Destination location
        cy.get('[placeholder="Destination location"]').type('NLD-A',{ delay: 200 })

        // 7. Fill in Product
        cy.get('[placeholder="Product"]').eq(0).type(outbound_product,{ delay: 200 })

        // 8. Fill in quantity
        cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)

        // 9. Fill in product 2nd line
        //cy.get('[placeholder="Product"]').eq(1).type('outbound_product',{ delay: 500 })

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

        cy.contains('.pr-1', 'Confirm').click({ force: true })
        for (let i = 0; i < 600; i++) {
              cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                  statusElement => {
                      let status = statusElement.text()
                      if (status !== 'pending') {
                          cy.wait(1000)
                          cy.log(i)
                        }
                    }
                )
            }

      })

  })
    describe('Receive', () => {

      before(() => {
        cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

      })

      it('2. Receive purchase order in a pickable container.', () => {

        cy.visit(`/orders/${purchase_order}`)

        cy.wait(1000)
        cy.contains('.pr-1', 'Receive').click({ force: true })
        cy.get('[placeholder="Packing material"]').should('be.visible').type('a3',{ delay: 200 })
        cy.get('[placeholder="Product"]').eq(0).type(outbound_product, {delay:200})

        if('[id*="_lot"]'){
          cy.get('[id*="_lot"]').eq(0).type(lot)
        }

        if('[id*=_expires_on]'){
          const date = new Date()
          let current_day = date.getDate()
          let expires_on = current_day+1

          cy.get('[id*=_expires_on]').click
          cy.get('.satis-date-time-picker').click()
          cy.get('[data-satis-date-time-picker-target="days"]').contains(expires_on).click()
        }
        
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


    describe('Move', () => {

      before(() => {
        cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
      })

      it('3. Move container to pickable bin-location.', () => {

        cy.visit(`/orders/${purchase_order}`)
        cy.url().should('include', `/orders/${purchase_order}`)

        cy.get('.text-lg').contains('Lines').should('be.visible')
        cy.get('[id*="tab_label"]').contains('Items').should('be.visible')
        cy.get('[id*="tab_label"]').contains('Items').click({ force: true })
        cy.get('.selected [data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')

        //cy.get('[href*="/containers/"]').eq(0).click()
        cy.get('[id*="tab_label"]').contains('Items').click()
        cy.get('.cursor-pointer > :nth-child(13) > a').click()
        cy.url().should('include', `/containers`)

        cy.url().then(($url) => {
          const url = $url.split('/')
          container = url[4]
          cy.log(container)
          cy.visit(`/containers/${container}`)
          cy.url().should('include', `/containers/${container}`)

        // Get from bin location
        //cy.get('.bin-location-info-item a').then($bin => {
        //    from_bin_location = $bin.text()
        //    cy.log(from_bin_location)

        // Move container
        cy.visit('/inventory_moves/new')
        cy.url().should('include', '/inventory_moves/new')
        cy.get('[placeholder="Container"]').type(`${container}`.substring(0,8), {delay:200})

        cy.get('[placeholder="To bin location"]').type('PICKING', {delay:200})
        cy.get(`[data-satis-dropdown-item-text="PICKING"]`).click({force:true})

        cy.get('.primary').contains('Move').click()})
      })
    })
  })

  describe('Order', () => {
    
    describe('Sales', () => {
      before(() => {
        cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
      })
      
      it('4. Create and confirm sales order.', () => {
        
        // CREATE A SALES ORDER

        // 1. Navigate to Sales Order
        cy.visit('/orders/new?type=sales_order')

        const dayjs = require('dayjs')
        cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('DDmmssYY'))

        // 2. Select Customer
        cy.get('[placeholder=Customer]').type('Soylent Green', {delay:200})

        // 2b Fill in shipping method
        cy.get('[placeholder="Shipping method"]').type(sales_order_shipping_method, {delay:200})  // use customer Soylent Green

        // 3. Fill in Product
        cy.get('[placeholder="Product"]').type(outbound_product, {delay:200})

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
        for (let i = 0; i < 60; i++) {
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
    })
  })
    describe('Pick', () => {
      
      describe('Picklist', () => {
        
        before(() => {
          cy.login({email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})
        })
        
        it('5. Generate picklist.', () => {
          
          cy.visit(`/orders/${sales_order}`)

          cy.wait(2000)
          cy.contains('.pr-1', 'Pick').click({ force: true })
          cy.url().should('include', `/orders/${sales_order}/pick/new`)

          cy.get('.primary').contains('Pick').click()
          cy.get('[id*="tab_label"]').contains('Picklists')

          cy.wait(2500)
          cy.log(`sales order ${sales_order.substring(0,8)}`)
          cy.log(`tote ${tote}`)
          cy.log(`picked container ${container.substring(0,8)}`)
          cy.pause()

        })
    })



    describe.skip("Pick inventory", () => {
        
      it('6. Pick container.', () => {

          // 1. Login on Mobile.
          cy.visit('/mobile')
          cy.url().should('include', '/mobile')

          //cy.viewport(415, 705)

          // Assert login screen
          cy.url().should('include', '/mobile')
          cy.get('.login-screen-title').contains('Login')

          // 2. Fill in credentials.
          cy.get('#user_email').type('wrap-it_picker@wrap-it.com')
          cy.get('#user_password').type('picking')

          // 3. Click Log in.
          cy.get('button').click()
          cy.get('.toast-text', {timeout:30000}).contains('Logged in').should('exist')

          // Assert login page.
          cy.get('.icon').should('be.visible')
          cy.get(':nth-child(1) > .item-link > .item-inner > .item-title', {visible:true}).click() // << All

          cy.get(':nth-child(1) > .item-link > .item-inner > .item-title', {visible:true}).eq(1).click() // << Ready To Pick
          cy.wait(2500)
          
          // 4. Scroll and click the last (most recent) order.
          //cy.get('.item-link').contains('20557E00').scrollIntoView().click()
          cy.get('.item-link').contains(`#${sales_order}`.toUpperCase().substring(0,9)).click()


          cy.window().then(win => win.scrollTo = cy.stub())

          // 5. Scan tote
          cy.window().then(win => {
          barcode = cy.stub(win, 'prompt')
          barcode.returns(tote)

          cy.get('[id="scan"]').eq(0).click()
          //cy.get('.page-current a#scan_barcode.fab-button.scan-barcode-link').eq(0).click( {force:true} )
          //cy.get('[id="scan_barcode"]').eq(1).click( {force:true} )
          //cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
          cy.get('.toast-text', {timeout:30000}).contains(`Using tote ${tote}`).should('exist')
          
          })
          // 6. Container
          cy.window().then(win => {
          barcode.restore()
          cy.stub(win, 'prompt').returns(container)

          cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
          cy.get('.toast-text', {timeout:30000}).contains('Pick list fully picked, next pick list opened').should('exist')

          })
        })
      })
    })

describe('Outbound', ()  => {

  describe('Pack', () => {

  before(() => {
      cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})
  
      })

  it('7. Pack picked container.', () => {

      // 1. Navigate to Packs
      cy.visit(`/orders/${sales_order}/pack/new`)
      cy.wait(2500)

      // 2. Scan tote
      cy.get('[placeholder="Tote"]').eq(1).type(tote, {delay:200})

      // 3. Scan picked container
      cy.get('[placeholder="Container"]').eq(1).type(container.substring(0,8), {delay:200})

      // 4. Scan outbound product from the picked container
      cy.get('[placeholder="Product"]').eq(0).type(outbound_product, {delay:200})

      // 5. Scan serial number
      cy.get('[id="orders_pack_parcels_attributes_0_items_attributes_0_serial_number"]').type(outbound_serial_number)

      // 6. Fill in lot (optional)
      if ('[id*="lot"]') {
        cy.get('#orders_pack_parcels_attributes_0_items_attributes_0_lot').type(lot, {force:true})
      }

      // 7. Fill in expires on (optional)
      if('[id*=expires_on]'){
        const date = new Date()
        let current_day = date.getDate()
        let expires_on = current_day+1

        cy.get('[id*=_expires_on]').click
        cy.get('.satis-date-time-picker').click()
        cy.get('[data-satis-date-time-picker-target="days"]').contains(expires_on).click()
      }

      // 6. Enter quantity
      cy.get('[id*="quantity"]').eq(0).clear().type(1)

      // 7. Click Pack
      cy.get('.button').contains('Pack').click()

      cy.wait(2500)

      })
    })

describe('Ship', () => {

  before(() => {
    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})
  
  })

  it('** 8. Ship an outbound product in a picked container.', () => {

      // 1. Navigate to Sales Order
      cy.visit(`/orders/${sales_order}`)

      cy.wait(1000)
      cy.get('[id*="tab_label"]').contains("Picklists").scrollIntoView().should('be.visible')
      cy.get('[id*="tab_label"]').contains("Shipments").should('be.visible')
      cy.get('[id*="tab_label"]').contains("Papers").should('be.visible')
      cy.wait(2500)
      
      cy.get('[id*="tab_label"]').contains('Shipments').click()
      cy.get('.selected td:nth-child(8)').eq(1).should('have.text', `#${sales_order}`.toUpperCase().substring(0,9)).click()


      cy.get('.sts-card__header').contains('Shipment').should('be.visible')
      cy.contains('.pr-1', 'Ship').click({ force: true })

      for (let i = 0; i < 60; i++) {
        cy.get('.state-info-item > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'shipped') {
                    cy.wait(1000)
                  }
              }
          )
      }

  })

})
})
})

