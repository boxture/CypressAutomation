const dayjs = require('dayjs')
let purchase_order

let purchase_order_number = dayjs().format('ssYYDDmm')
let customer_reference_number = dayjs().format('DDmmssYY')
let inbound_tracking_number = dayjs().format('AWBMMDDHHmm')
let forwarder = 'DHL'
let other_reference_number = dayjs().format('ssYYmmDD')
let shipping_container_number = dayjs().format('DDYYmmss')
let destination_location = 'BTX-ALM-NEW'
let vendor = 'Boxture Store'
let outbound_product = 'BTX-SNO88711'
let full_product = 'BXT-SNF99981'

let notes = 'To be received today.'


describe('Verify initial and updated data is saved.', () => {
  
  beforeEach(() => {
    cy.login({email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})

  })
  
  describe('Create', () => {
    
    it('1. Fill in all input fields.', () => {
      
      // 1. Navigate to Purchase Orders
      cy.visit('orders/new?type=purchase_order')

      // 2. Fill in Purchase Order Number
      cy.get('[id^=orders_purchase_order_purchase_order_number]').type(purchase_order_number)

      // 3. Fill in Customer Reference
      cy.get('[id^=orders_purchase_order_customer_reference_number]').type(customer_reference_number)

      // 4. Fill in Inbound Tracking Number
      cy.get('[id^=orders_purchase_order_inbound_tracking_number]').type(inbound_tracking_number)

      // 5. Fill in Forwarder
      cy.get('[id^=orders_purchase_order_forwarder]').type(forwarder)

      // 6. Fill in Other Reference Number
      cy.get('[id^=orders_purchase_order_other_reference_number]').type(other_reference_number)

      // 7.1 Enable Shipping Container Number
      cy.get('.satis-switch > .form-label > span').click()

      // 7.2 Fill in Shipping Container
      cy.get('[id="orders_purchase_order_shipping_container_number"]')
        .should('be.visible')
        .type(shipping_container_number)

      // 8. Fill in Destination location
      cy.get('[placeholder="Destination location"]').type(destination_location,{ delay: 200 })

      // 9. Fill in Vendor
      cy.get('[placeholder="Vendor"]').type(vendor,{ delay: 200 })

      // 10. Fill in Product
      cy.get('[placeholder="Product"]').eq(0).type(outbound_product,{ delay: 200 })

      // 12. Fill in quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)

      // 12.1 Fill in product 2nd line
      cy.get('[placeholder="Product"]').eq(1).type(full_product,{ delay: 200 })

      // 12.2 Fill in quantity 2nd line
      cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(2)

      // 13. Fill in Notes
      cy.get('#tab_label_notes').click()
      cy.get('#orders_purchase_order_notes').type(notes)

      // Submit form
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
  
  describe('Show', () => {
    
    it('** 2. Verify all input has been saved correctly.', () => {
      cy.visit(`/orders/${purchase_order}/edit`)
      cy.contains('.pr-1', 'Show').click({ force: true })

      // Assert State
      cy.get('.state-info-item')
        .find('dd')
        .should('contain.text', 'concept')

      // Account
      cy.get('.account-info-item')
        .find('dd')
        .should('contain.text', 'Boxture Acceptance Test')

      // Assert Customer Reference Number
      cy.get('.customer-reference-number-info-item')
        .find('dd')
        .should('contain.text', customer_reference_number)

      // Assert Other Reference Number
      cy.get('.other-reference-number-info-item')
        .find('dd')
        .should('contain.text', other_reference_number)
      
      // Assert Purchase Order Number
      cy.get('.purchase-order-number-info-item')
        .find('dd')
        .should('contain.text', purchase_order_number)

      // Inbound Tracking Number
      cy.get('.inbound-tracking-number-info-item')
        .find('dd')
        .should('contain.text', inbound_tracking_number)

      // Forwarder
      cy.get('.forwarder-info-item')
        .find('dd')
        .should('contain.text', forwarder)
      
      // Shipping Container
      cy.get('.shipping-container-info-item > .text-sm')
        .should('contain.text', 'Yes')

      // Shipping Container Number
        cy.get('.shipping-container-number-info-item')
          .should('contain.text', shipping_container_number)
      
      // Assert Location
      cy.get('#location-content')
        .should('exist')
        .and('contain', 'BTX-ALM-NEW')
        .and('contain', 'Boxture')
        .and('contain', 'Rapid Logistics')
        .and('contain', 'Incheonweg 7')
        .and('contain', '1437 EK Rozenburg')
        .and('contain', 'Netherlands')
        .and('contain', 'user_acceptance-test@boxture.com')
        .and('contain', '+31 6 12345678')
      
      // Assert Outbound Product Number
      cy.get('a[href*="products"]')
        .should('exist')
        .and('contain', outbound_product)
      
      // Assert Quantity Outbound Product
      cy.get('.cursor-pointer')
        .find('td').eq(5)
        .should('contain.text', '3')

      // Assert Full Product Number
      cy.get('a[href*="products"]')
        .should('exist')
        .and('contain', full_product)

      // Assert Full Product Quantity
      cy.get('.cursor-pointer')
      .find('td').eq(28)
      .should('contain.text', '2')

      // Assert Notes
      cy.get('.notes-info-item > .text-sm')
        .should('contain.text', notes)

  })
})
  
  describe('Edit and Update', () => {
    
    it('3. Update all input fields to a different value.', () => {
      
      cy.visit(`/orders/${purchase_order}`)
      cy.url().should('include', `/${purchase_order}`)

      // 1. Edit Purchase Orders
      cy.contains('.pr-1', 'Edit').click({ force: true })

      // 2. Update Purchase Order Number
      cy.get('[id^=orders_purchase_order_purchase_order_number]').clear().type(purchase_order_number+1)

      // 3. Update Customer Reference
      cy.get('[id^=orders_purchase_order_customer_reference_number]').clear().type(customer_reference_number+2)

      // 4. Update Inbound Tracking Number
      cy.get('[id^=orders_purchase_order_inbound_tracking_number]').clear().type(inbound_tracking_number+3)

      // 5. Update Forwarder
      cy.get('[id^=orders_purchase_order_forwarder]').clear().type('FEDEX')

      // 6. Update Other Reference Number
      cy.get('[id^=orders_purchase_order_other_reference_number]').clear().type(other_reference_number+4)

      // 7. Disable Shipping Container
      cy.get('.satis-switch > .form-label > span').click()

      // 8. Update Destination location
      cy.get('[placeholder="Destination location"]').clear().type('BXT-RET-NEW',{ delay: 200 })

      // 9. Update Vendor
      cy.get('[placeholder="Vendor"]').clear().type("How it's made",{ delay: 200 })

      // 10. Update Product
      cy.get('[placeholder="Product"]').eq(0).clear().type('BXT-SNO09856',{ delay: 200 })

      // 12. Update quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(10)

      // 12.1 Update product 2nd line
      cy.get('[placeholder="Product"]').eq(1).clear().type('BXT-SNF100150',{ delay: 200 })

      // 12.2 Update quantity 2nd line
      cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(20)

      // Update Notes
      cy.get('#tab_label_notes').click()
      cy.get('#orders_purchase_order_notes').clear().type('To be received tomorrow.')

      // Submit form
      cy.get('.button').contains('Update Purchase order').click()
    
    })
    
    it('** 4. Verify all updated input has been saved correctly.', () => {

      cy.visit(`/orders/${purchase_order}`)
      cy.url().should('include', `/${purchase_order}`)
      
      // Assert State
      cy.get('.state-info-item')
        .find('dd')
        .should('contain.text', 'concept')

      // Account
      cy.get('.account-info-item')
        .find('dd')
        .should('contain.text', 'Boxture Acceptance Test')

      // Assert Customer Reference Number
      cy.get('.customer-reference-number-info-item')
        .find('dd')
        .should('contain.text', customer_reference_number+2)

      // Assert Other Reference Number
      cy.get('.other-reference-number-info-item')
        .find('dd')
        .should('contain.text', other_reference_number+4)
      
      // Assert Purchase Order Number
      cy.get('.purchase-order-number-info-item')
        .find('dd')
        .should('contain.text', purchase_order_number+1)

      // Inbound Tracking Number
      cy.get('.inbound-tracking-number-info-item')
        .find('dd')
        .should('contain.text', inbound_tracking_number+3)

      // Forwarder
      cy.get('.forwarder-info-item')
        .find('dd')
        .should('contain.text', 'FEDEX')
      
      // Shipping Container
      cy.get('.shipping-container-info-item > .text-sm')
        .should('contain.text', 'No')

      // Shipping Container Number
        cy.get('.shipping-container-number-info-item')
          .should('not.exist')
      
      // Assert Location
      cy.get('#location-content')
        .should('exist')
        .and('contain', 'BXT-RET-NEW')
        .and('contain', 'Return Company')
        .and('contain', 'Test User')
        .and('contain', 'Return Loc Street 72')
        .and('contain', '1234SL Almere')
        .and('contain', 'Netherlands')
      
      // Assert Outbound Product Number
      cy.get('a[href*="products"]')
        .should('exist')
        .and('contain', 'BXT-SNO09856')
      
      // Assert Quantity Outbound Product
      cy.get('.cursor-pointer')
        .find('td').eq(5)
        .should('contain.text', '10')

      // Assert Full Product Number
      cy.get('a[href*="products"]')
        .should('exist')
        .and('contain', 'BXT-SNF100150')

      // Assert Full Product Quantity
      cy.get('.cursor-pointer')
      .find('td').eq(28)
      .should('contain.text', '20')

      // Assert Notes
      cy.get('.notes-info-item > .text-sm')
        .should('contain.text', 'To be received tomorrow.')
      })
    })

  describe('Confirm', () => {
    
    it('5. Verify if order is confirmed.', () => {
      cy.visit(`/orders/${purchase_order}`)
      cy.url().should('include', `/${purchase_order}`)
      cy.contains('.pr-1', 'Confirm').click({ force: true })

      // Assert State
      cy.get('.cursor-pointer')
        .find('td').eq(1)
        .should('not.contain.text', 'concept', {timeout:15000})
      })
  })

  describe('Hold', () => {
    
    it('6. Verify if purchase order is put on hold.', () => {
      cy.visit(`/orders/${purchase_order}`)
      cy.url().should('include', `/${purchase_order}`)
      cy.contains('.pr-1', 'Hold').click({ force: true })

      // Assert State
      cy.get('.state-info-item')
        .find('dd')
        .should('contain.text', 'hold')
      })
    })

  describe('Release', () => {
    
    it('7. Verify purchase order from is released from hold.', () => {
      
      cy.visit(`/orders/${purchase_order}`)
      cy.url().should('include', `/${purchase_order}`)

      cy.get('[id*="tab_label"]').contains("Tickets").scrollIntoView().should('be.visible').click()
      cy.get('.selected td:nth-child(5)').eq(2).should('have.text', 'Manual hold for order '+`#${purchase_order}`.toUpperCase().substring(0,9)).click()

      // Release from Hold
      cy.get('.p-4 > .button').click()
      cy.get('.edit_task').contains('Update Task').click()
      cy.get('.signum-notification-body__mb').should('be.visible').contains('Activity successfully completed')

      // Assert if order is released
      cy.visit(`/orders/${purchase_order}`)
      cy.url().should('include', `/${purchase_order}`)
      
      cy.get('.state-info-item')
        .find('dd')
        .should('contain.text', 'pending')
      })
    })
  
    describe('Cancel', () => {
      
      it('8. Verify the purchase order is cancelled.', () => {

      cy.visit(`/orders/${purchase_order}`)
      cy.url().should('include', `/${purchase_order}`)
      
      cy.contains('.pr-1', 'Cancel').click({ force: true })
      cy.url().should('include', `/${purchase_order}/cancel/new`)

      cy.get('.button').contains('Cancel').click()

      // Assert if order is cancelled
      cy.get('#basic-content')
        .find('dd')
        .should('contain.text', 'cancelled')
      
      })
    })
  })
