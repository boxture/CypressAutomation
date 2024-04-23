const dayjs = require('dayjs')

// Basics
const business_model = 'Business to business'
const channel = 'Amazon'
const ship_earliest_on = `${dayjs().format(('DD'))}`
const ship_latest_on = `${dayjs().format(('DD'))}`
const other_reference_number = Math.floor((Math.random() * 1000000))
const purchase_order_number = Math.floor((Math.random() * 1000000))
const customer_reference_number = Math.floor((Math.random() * 1000000))
const delivery_terms = 'DAP'
const shipping_method = 'DHL'
const customer = 'Soylent'

// Notes
const notes = 'Need to be shipped today.'
const packing_instructions = 'Fragile, handle with care.'
const gift_message = 'Congratulations!'

// Basic Lines
const outbound_product = 'BXT-SNO78354'
const quantity = 1

let sales_order

describe('Sales Order', () => {
  
    beforeEach(() => {
      cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
    
    })
  
    it('Create', () => {
  
      // CREATE A SALES ORDER
  
      // 1. Navigate to Sales Order
      cy.visit('/orders/new?type=sales_order')
      cy.get('[id="tab_label_basics"]').scrollIntoView()

      // 2. Select Business Model
      cy.get('[placeholder="Business model"]').type(business_model)
      
      // 3. Select Channel
      cy.get('[placeholder="Channel"]').type(channel)
      
      // 4. Enter Ship Earliest On
      cy.get('.satis-date-time-picker').eq(0).click()
      cy.get('[data-satis-date-time-picker-target="days"]').eq(0).contains(ship_earliest_on).click()
      
      // 5. Enter Ship Latest On
      cy.get('.satis-date-time-picker').eq(1).click()
      cy.get('[data-satis-date-time-picker-target="days"]').eq(1).contains(ship_latest_on).click()

      // 6. Fill in Other Reference Number
      cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

      // 7. Select Delivery Terms
      cy.get('[placeholder="Delivery terms"]').type(delivery_terms)

      // 8. Fill in Purchase Order Number
      cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
  
      // 9. Fill in Customer Reference Number
      cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number)
  
      // 10. Fill in Shipping Method
      cy.get('[placeholder="Shipping method"]').type(shipping_method, {delay:200})  // use customer Soylent Green

      // 11. Select Customer
      cy.get('[placeholder=Customer]').type(customer, {delay:200})
  
      // 12. Fill in Product
      cy.get('[placeholder="Product"]').type(outbound_product, {delay:200})
  
      // 13. Fill in quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(quantity)

      // 14. Navigate to Notes
      cy.get('[id="tab_label_notes"]').scrollIntoView().click()

      // 15. Fill in Notes
      cy.get('[id="orders_sales_order_notes"]').type(notes)

      // 16. Fill in Packing Instructions 
      cy.get('[id="orders_sales_order_packing_instructions"]').type(packing_instructions)

      // 17. Fill in Gift Message
      cy.get('[id="orders_sales_order_gift_message"]').type(gift_message)
  
      //Submit form
      cy.get('.button').contains('Create and continue editing').click()
      cy.url().should('include', '/edit')
  
      //Get sales order
      cy.url().then(($url) => {
        const url = $url.split('/')
        sales_order = url[4]
        cy.log(sales_order)

      })
    })
    
    it('Show', () => {
        
    cy.visit(`/orders/${sales_order}`)
    cy.contains('.pr-1', 'Show').click({ force: true })

    // Assert Business Model
    cy.get('.business-model-info-item')
        .find('dd')
        .should('contain.text', business_model)
    
    // Assert Channel
    cy.get('.channel-info-item')
        .find('dd')
        .should('contain.text', channel)

    // Assert Ship Earliest On
    cy.get('.ship-earliest-on-info-item')
        .find('dd')
        .should('contain.text', `${dayjs().format(('MMM D'))}`)

    // Assert Ship Latest On
    cy.get('.ship-latest-on-info-item')
        .find('dd')
        .should('contain.text', `${dayjs().format(('MMM D'))}`)

    // Assert Other Reference
    cy.get('.other-reference-number-info-item')
        .find('dd')
        .should('contain.text', other_reference_number)

    // Assert Delivery Terms
    cy.get('.delivery-terms-info-item')
        .find('dd')
        .should('contain.text', delivery_terms)

    // Assert Purchase Order Number
    cy.get('.purchase-order-number-info-item')
        .find('dd')
        .should('contain.text', purchase_order_number)

    // Assert Customer Reference Number
    cy.get('.customer-reference-number-info-item')
        .find('dd')
        .should('contain.text', customer_reference_number)

    // Assert Shipping Method
    cy.get('.shipping-method-info-item')
        .find('dd')
        .should('contain.text', shipping_method)

    // Assert Billing
    cy.get('[id="Billing-content"]')
        .should('exist')
        .and('contain', 'Billing Contact')
        .and('contain', 'Boxture')
        .and('contain', 'Vijzelstraat 68')
        .and('contain', '1017HL Amsterdam')
        .and('contain', 'Netherlands')
        .and('contain', '+31 6 12345678')

    // Assert Delivery
    cy.get('[id=Delivery-content]')
        .should('exist')
        .and('contain', 'Other Contact')
        .and('contain', 'ERICKA')
        .and('contain', 'Tassilostr. 15')
        .and('contain', '90429 Nürnberg')
        .and('contain', 'Germany')
        .and('contain', 'Wintheiser@gmail.com')
        .and('contain', '+49 4462 956047')

    // Assert Customer
    cy.get('[id="customer-content"]')
        .should('exist')
        .and('contain', customer)
        .and('contain', 'Test Company')
        .and('contain', 'Attributes Contact')
        .and('contain', 'Kaiserstrasse 29')
        .and('contain', '63065 Offenbach am Main')
        .and('contain', 'Germany')
        .and('contain', '+49 4462 956047')

    // Assert Product
    cy.get('a[href*="products"]')
        .should('exist')
        .and('contain', outbound_product)

    // Assert Quantity
    cy.get('.cursor-pointer')
        .find('td').eq(5)
        .should('contain.text', '1')

    // Assert Notes
    cy.get('.notes-info-item')
        .find('dd')
        .should('contain.text', notes)

    // Assert Packing Instructions
    cy.get('.packing-instructions-info-item')
        .find('dd')
        .should('contain.text', packing_instructions)

    // Assert Gift Message
    cy.get('.gift-message-info-item')
        .find('dd')
        .should('contain.text', gift_message)

    })
    it('Edit and Update', () => {

      cy.visit(`/orders/${sales_order}`)

      // 1 Edit Sales Order
      cy.contains('.pr-1', 'Edit').click({ force: true })

      // 2. Update Business Model
      cy.get('[placeholder="Business model"]').clear().type('Business to consumer')

      // 3. Update Channel
      cy.get('[placeholder="Channel"]').clear().type('BigCommerce')

      // 4. Clear Ship Earliest On
      cy.get('[data-action="click->satis-date-time-picker#clear"]').eq(0).click()

      // 5. Clear Ship Latest On
      cy.get('[data-action="click->satis-date-time-picker#clear"]').eq(1).click()

      // 6. Update in Other Reference Number
      cy.get('[id="orders_sales_order_other_reference_number"]').clear().type(other_reference_number+1)

      // 7. Update Delivery Terms
      cy.get('[placeholder="Delivery terms"]').clear().type('EXW')

      // 8. Update in Purchase Order Number
      cy.get('[id="orders_sales_order_purchase_order_number"]').clear().type(purchase_order_number+1)
        
      // 9. Update in Customer Reference Number
      cy.get('[id^="orders_sales_order_customer_reference_number"]').clear().type(customer_reference_number+1)

      // 10. Update in Shipping Method
      cy.get('[placeholder="Shipping method"]').clear().type('Standard', {delay:200})

      // 11. Select Customer
      cy.get('[placeholder=Customer]').clear().type('Simpsons', {delay:200})
        
      // 12. Update in Product
      cy.get('[placeholder="Product"]').eq(0).clear().type('BXT-SNO78355', {delay:200})

      // 13. Update in quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(2)

      // 14. Navigate to Notes
      cy.get('[id="tab_label_notes"]').scrollIntoView().click()

      // 15. Update in Notes
      cy.get('[id="orders_sales_order_notes"]').clear().type('Could be shipped tomorrow.')

      // 16. Update in Packing Instructions 
      cy.get('[id="orders_sales_order_packing_instructions"]').clear().type('Please note, package is fragile.')

      // 17. Update in Gift Message
      cy.get('[id="orders_sales_order_gift_message"]').clear().type('Thank you!')

      //Submit form
      cy.get('.button').contains('Update Sales order').click()
      cy.url().should('include', `/${sales_order}`)


      // Assert Business Model
        cy.get('.business-model-info-item')
          .find('dd')
          .should('contain.text', 'Business to consumer')
              
      // Assert Channel
      cy.get('.channel-info-item')
        .find('dd')
        .should('contain.text', 'BigCommerce')
      
      // Assert Ship Earliest On
      cy.get('.ship-earliest-on-info-item')
        .find('dd')
        .should('contain.text', `${dayjs().format(('MMM D'))}`)

      // Assert Ship Latest On
      cy.get('.ship-latest-on-info-item').should('not.exist')

      // Assert Other Reference
      cy.get('.other-reference-number-info-item')
        .find('dd')
        .should('contain.text', other_reference_number+1)

      // Assert Delivery Terms
      cy.get('.delivery-terms-info-item')
          .find('dd')
        .should('contain.text', 'EXW')

      // Assert Purchase Order Number
      cy.get('.purchase-order-number-info-item')
        .find('dd')
        .should('contain.text', purchase_order_number+1)

      // Assert Customer Reference Number
      cy.get('.customer-reference-number-info-item')
      .find('dd')
      .should('contain.text', customer_reference_number+1)

      // Assert Shipping Method
      cy.get('.shipping-method-info-item')
        .find('dd')
        .should('contain.text', 'Standard')

      // Assert Billing
      cy.get('[id="Billing-content"]')
        .should('exist')
        .and('contain', 'Test User')
        .and('contain', 'Globex Corporation')
        .and('contain', '450 Mindoro St.')
        .and('contain', 'Morro Bay  93442')
        .and('contain', 'United States of America')
        .and('contain', '+1 805-772-3961')

      // Assert Delivery
      cy.get('[id=Delivery-content]')
        .should('exist')
        .and('contain', 'Test User')
        .and('contain', 'Globex Corporation')
        .and('contain', '450 Mindoro St.')
        .and('contain', 'Morro Bay  93442')
        .and('contain', 'United States of America')
        .and('not.contain', 'Wintheiser@gmail.com')
        .and('contain', '+1 805-772-3961')

      // Assert Customer
      cy.get('[id="customer-content"]')
        .should('exist')
        .and('contain', 'Test User')
        .and('contain', 'Globex Corporation')
        .and('contain', '450 Mindoro St.')
        .and('contain', 'Morro Bay  93442')
        .and('contain', 'United States of America')
        .and('not.contain', 'Wintheiser@gmail.com')
        .and('contain', '+1 805-772-3961')

      // Assert Product
      cy.get('a[href*="products"]')
        .should('exist')
        .and('contain', 'BXT-SNO78355')

      // Assert Quantity
      cy.get('.cursor-pointer')
        .find('td').eq(5)
        .should('contain.text', '2')

      // Assert Notes
      cy.get('.notes-info-item')
        .find('dd')
        .should('contain.text', 'Could be shipped tomorrow.')

      // Assert Packing Instructions
      cy.get('.packing-instructions-info-item')
        .find('dd')
        .should('contain.text', 'Please note, package is fragile.')

      // Assert Gift Message
      cy.get('.gift-message-info-item')
        .find('dd')
        .should('contain.text', 'Thank you!')
    
    
    })
    it('Confirm', () => {
          
      cy.visit(`/orders/${sales_order}`)
      cy.url().should('include', `/${sales_order}`)
      cy.contains('.pr-1', 'Confirm').click({ force: true })

      // Assert Quantity
      cy.get('.cursor-pointer')
        .find('td').eq(1)
        .should('not.contain.text', 'concept', {timeout:15000})
    })
    
    it('Hold', () => {

      cy.visit(`/orders/${sales_order}`)
      cy.url().should('include', `/${sales_order}`)
      cy.contains('.pr-1', 'Hold').click({ force: true })

      cy.get('#basic-content')
        .find('dd')
        .should('contain.text', 'hold')

    })

    it('Release', () => {

        cy.visit(`/orders/${sales_order}`)
        cy.url().should('include', `/${sales_order}`)

        cy.get('[id*="tab_label"]').contains("Tickets").scrollIntoView().should('be.visible').click()
        cy.get('.selected td:nth-child(5)').eq(1).should('have.text', 'Manual hold for order '+`#${sales_order}`.toUpperCase().substring(0,9)).click()

        // Release from Hold
        cy.get('.p-4 > .button').click()
        cy.get('.edit_task').contains('Update Task').click()
        cy.get('.signum-notification-body__mb').should('be.visible').contains('Activity successfully completed')

        // Assert if order is released
        cy.visit(`/orders/${sales_order}`)
        cy.url().should('include', `/${sales_order}`)

        cy.get('.state-info-item')
          .find('.text-sm')
          .should('not.contain.text', 'hold')


    })
    it('Cancel', () => {

        cy.visit(`/orders/${sales_order}`)
        cy.url().should('include', `/${sales_order}`)
        
        cy.contains('.pr-1', 'Cancel').click({ force: true })
        cy.url().should('include', `/${sales_order}/cancel/new`)

        cy.get('.button').contains('Cancel').click()

        // Assert if order is cancelled
        cy.get('#basic-content')
          .find('dd')
          .should('contain.text', 'cancelled')

    })
})

