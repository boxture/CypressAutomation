let return_order
const dayjs = require('dayjs')

// Basics
const delivery_terms = 'FCA'
const reason = 'Other'
const customer_reference_number = Math.floor((Math.random() * 1000000))
const other_reference_number = Math.floor((Math.random() * 1000000))
const shipping_method = 'DHL'
const destination_location = 'NLD-AMSTERDAM'

// Notes
const notes = 'Please pickup the package today.'

// Pickup
const pickup_company_name = 'Test Company'
const pickup_first_name = 'Helena'
const pickup_last_name = 'Bouwmann'
const pickup_address_lines = 'Kaiserstrasse 29'
const pickup_postal_code = '63065'
const pickup_city = 'Offenbach am Main'
const pickup_state_or_province = 'Hesse'
const pickup_country = 'Germany'
const pickup_phone_number = '+49365345565'
const pickup_fax_number = '+49365345566'
const pickup_email = 'h.bouwmann@anywhere.com'
const pickup_vatin = 'DE1234567890'
const pickup_eori_number = 'DE0987654321'
const pickup_chamber_of_commerce_number = '9982234534'

// Billing
const billing_company_name = 'Boxture B.V.'
const billing_first_name = 'Bram'
const billing_last_name = 'Schilder'
const billing_address_lines = 'Vijzelstraat 68'
const billing_postal_code = '1017HL'
const billing_city = 'Amsterdam'
const billing_state_or_province = 'NH'
const billing_country = 'Netherlands'
const billing_phone_number = '+31365345565'
const billing_fax_number = '+31365347506'
const billing_email = 'b.contact@info.com'
const billing_vatin = 'NL1234567890'
const billing_eori_number = 'NL0987654321'
const billing_chamber_of_commerce_number = '2328455729'

// Basic Lines
const outbound_product = 'BXT-SNO78354'
const quantity = 1


describe('Return Order', () => {
  
    beforeEach(() => {
      cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG' })
    
    })
  
    it('Create', () => {
  
      // CREATE A RETURN ORDER
  
      // 1. Navigate to Return Order
      cy.visit('/orders/new?type=return_order')
      cy.get('[id="tab_label_basics"]').scrollIntoView()

      // 2. Select Delivery Terms
      cy.get('[placeholder="Delivery terms"]').eq(0).type(delivery_terms)  // ticket 4138
      
      // 3. Select Reason
      cy.get('[placeholder="Reason"]').type(reason)

      // 4. Fill in Customer Reference Number
      cy.get('[id^="orders_return_order_customer_reference_number"]').type(customer_reference_number)

      // 5. Fill in Other Reference Number
     cy.get('[id^="orders_return_order_other_reference_number"]').type(other_reference_number)
  
      // 6. Fill in Shipping Method
      cy.get('[placeholder="Shipping method"]').type(shipping_method, {delay:200})

      // 7. Fill in Destination location
      cy.get('[placeholder="Destination location"]').type(destination_location)
  
      // 8. Fill in Product
      cy.wait(1000)
      cy.get('[placeholder="Product"]').type(outbound_product, {delay:200})
  
      // 9. Fill in quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(quantity)

      // 10. Navigate to Notes
      cy.get('[id="tab_label_notes"]').scrollIntoView().click()

      // 11. Fill in Notes
      cy.get('[id="orders_return_order_notes"]').type(notes)

      // 12. Fill in Pickup details
      cy.get('[id="tab_label_pickup"]').scrollIntoView().click()

      cy.get('[id="orders_return_order_contacts_attributes_0_company_name"]').type(pickup_company_name)
      cy.get('[id="orders_return_order_contacts_attributes_0_first_name"]').type(pickup_first_name)
      cy.get('[id="orders_return_order_contacts_attributes_0_last_name"]').type(pickup_last_name)
      cy.get('[id="orders_return_order_contacts_attributes_0_address_lines"]').type(pickup_address_lines)
      cy.get('[id="orders_return_order_contacts_attributes_0_postal_code"]').type(pickup_postal_code)
      cy.get('[id="orders_return_order_contacts_attributes_0_city"]').type(pickup_city)
      cy.get('[id="orders_return_order_contacts_attributes_0_state_or_province_code"]').type(pickup_state_or_province)
      cy.get('[placeholder="Country"]').eq(0).type(pickup_country, {delay:200})
      cy.get('#pickup-content > :nth-child(1) > :nth-child(7) > .grid > :nth-child(1) > .form-group > [data-controller="phone-number"] > .iti > #dummy').type(pickup_phone_number)
      cy.get('[id="orders_return_order_contacts_attributes_0_fax_number"]').type(pickup_fax_number)
      cy.get('[id="orders_return_order_contacts_attributes_0_email"]').type(pickup_email)
      cy.get('[id="orders_return_order_contacts_attributes_0_vatin"]').type(pickup_vatin)
      cy.get('[id="orders_return_order_contacts_attributes_0_eori_number"]').type(pickup_eori_number)
      cy.get('[id="orders_return_order_contacts_attributes_0_chamber_of_commerce_number"]').type(pickup_chamber_of_commerce_number)

      // 12. Fill in Billing details
      cy.get('[id="tab_label_billing"]').scrollIntoView().click()

      cy.get('[id="orders_return_order_contacts_attributes_1_company_name"]').type(billing_company_name)
      cy.get('[id="orders_return_order_contacts_attributes_1_first_name"]').type(billing_first_name)
      cy.get('[id="orders_return_order_contacts_attributes_1_last_name"]').type(billing_last_name)
      cy.get('[id="orders_return_order_contacts_attributes_1_address_lines"]').type(billing_address_lines)
      cy.get('[id="orders_return_order_contacts_attributes_1_postal_code"]').type(billing_postal_code)
      cy.get('[id="orders_return_order_contacts_attributes_1_city"]').type(billing_city)
      cy.get('[id="orders_return_order_contacts_attributes_1_state_or_province_code"]').type(billing_state_or_province)
      cy.get('[placeholder="Country"]').eq(1).type(billing_country, {delay:200})
      cy.get('#billing-content > :nth-child(1) > :nth-child(7) > .grid > :nth-child(1) > .form-group > [data-controller="phone-number"] > .iti > #dummy').type(billing_phone_number)
      cy.get('[id="orders_return_order_contacts_attributes_1_fax_number"]').type(billing_fax_number)
      cy.get('[id="orders_return_order_contacts_attributes_1_email"]').type(billing_email)
      cy.get('[id="orders_return_order_contacts_attributes_1_vatin"]').type(billing_vatin)
      cy.get('[id="orders_return_order_contacts_attributes_1_eori_number"]').type(billing_eori_number)
      cy.get('[id="orders_return_order_contacts_attributes_1_chamber_of_commerce_number"]').type(billing_chamber_of_commerce_number)

    // Submit form
    cy.get('.button').contains('Create and continue editing').click()
    cy.url().should('include', '/edit')
  
       //Get return order
       cy.url().then(($url) => {
         const url = $url.split('/')
         return_order = url[4]
         cy.log(return_order)

       })
    })

    it('Show', () => {
        
      cy.visit(`/orders/${return_order}/edit`)
      cy.contains('.pr-1', 'Show').click({ force: true })

    //   // Assert Delivery Terms  // ticket #4138
    //     cy.get('.delivery-terms-info-item')
    //     .find('dd')
    //     .should('contain.text', delivery_terms)
      
      // Assert Other Reference
      cy.get('.reason-info-item')
        .find('dd')
        .should('contain.text', reason) 

       // Assert Customer Reference Number
       cy.get('.customer-reference-number-info-item')
       .find('dd')
       .should('contain.text', customer_reference_number)
    
       // Assert Other Reference
       cy.get('.other-reference-number-info-item')
         .find('dd')
         .should('contain.text', other_reference_number)
    
       // Assert Shipping Method
       cy.get('.shipping-method-info-item')
         .find('dd')
         .should('contain.text', shipping_method)

       // Billing
       cy.get('[id="Billing-content"]')
         .should('exist')
         .and('contain', 'Bram Schilder')
         .and('contain', 'Boxture B.V.')
         .and('contain', 'Vijzelstraat 68')
         .and('contain', '1017HL Amsterdam')
         .and('contain', 'Netherlands')
         .and('contain', 'b.contact@info.com')
         .and('contain', '+31 36 534 5565')
    
       // Assert Pickup
       cy.get('[id="Pickup-content"]')
         .should('exist')
         .and('contain', 'Test Company')
         .and('contain', 'Helena Bouwmann')
         .and('contain', 'Kaiserstrasse 29')
         .and('contain', '63065 Offenbach am Main')
         // .and('contain', 'Hesse')  // ticket #4139
         .and('contain', 'Germany') 
         .and('contain', '+49 365 345565')
         //.and('contain', '+49 365 345566')  // ticket #4139
         .and('contain', 'h.bouwmann@anywhere.com')

        // Assert Location
        cy.get('[id="location-content"]')
          .should('exist')
          .and('contain', 'NLD-AMSTERDAM')
          .and('contain', 'WRAP-IT')
          .and('contain', 'Wrap It')
          .and('contain', 'Vijzelstraat 68')
          .and('contain', '1017HL Amsterdam')
          .and('contain', 'Netherlands')
          .and('contain', '+31 6 12345678')

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
    
    })

    it('Edit and Update', () => {

      cy.visit(`/orders/${return_order}`)

      // 1 Edit Return Order
      cy.contains('.pr-1', 'Edit').click({ force: true })

      // 2. Update Delivery terms  #4138
      //cy.get('[placeholder="Delivery terms"]').eq(0).clear().type('DPU')

      cy.get('[placeholder="Reason"]').clear()

      // 4. Update Customer Reference Number
      cy.get('[id^="orders_return_order_customer_reference_number"]').clear().type(customer_reference_number+1)

      // 5. Update Other Reference Number
     cy.get('[id^="orders_return_order_other_reference_number"]').clear().type(other_reference_number+1)
  
      // 6. Update Shipping Method
      cy.get('[placeholder="Shipping method"]').clear().type('Freight', {delay:200})

      // 7. Update Destination location
      cy.get('[placeholder="Destination location"]').clear().type('NLD-ROTTERDAM')
  
      // 8. Update Product
      cy.wait(1000)
      cy.get('[placeholder="Product"]').eq(0).clear().type('BXT-SNO60920', {delay:200})
  
      // 9. Update quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(2)

      // 10. Navigate to Notes
      cy.get('[id="tab_label_notes"]').scrollIntoView().click()

      // 11. Update Notes
      cy.get('[id="orders_return_order_notes"]').clear().type('Please pickup the package tomorrow.')

      // 12. Update Pickup details
      cy.get('[id="tab_label_pickup"]').scrollIntoView().click()

      cy.get('[id="orders_return_order_contacts_attributes_0_company_name"]').clear().type(billing_company_name)
      cy.get('[id="orders_return_order_contacts_attributes_0_first_name"]').clear().type(billing_first_name)
      cy.get('[id="orders_return_order_contacts_attributes_0_last_name"]').clear().type(billing_last_name)
      cy.get('[id="orders_return_order_contacts_attributes_0_address_lines"]').clear().type(billing_address_lines)
      cy.get('[id="orders_return_order_contacts_attributes_0_postal_code"]').clear().type(billing_postal_code)
      cy.get('[id="orders_return_order_contacts_attributes_0_city"]').clear().type(billing_city)
      cy.get('[id="orders_return_order_contacts_attributes_0_state_or_province_code"]').clear().type(billing_state_or_province)
      cy.get('[placeholder="Country"]').eq(0).clear().type(billing_country, {delay:200})
      cy.get('#pickup-content > :nth-child(1) > :nth-child(7) > .grid > :nth-child(1) > .form-group > [data-controller="phone-number"] > .iti > #dummy').clear().type(billing_phone_number)
      cy.get('[id="orders_return_order_contacts_attributes_0_fax_number"]').clear().type(billing_fax_number)
      cy.get('[id="orders_return_order_contacts_attributes_0_email"]').clear().type(billing_email)
      cy.get('[id="orders_return_order_contacts_attributes_0_vatin"]').clear().type(billing_vatin)
      cy.get('[id="orders_return_order_contacts_attributes_0_eori_number"]').clear().type(billing_eori_number)
      cy.get('[id="orders_return_order_contacts_attributes_0_chamber_of_commerce_number"]').clear().type(billing_chamber_of_commerce_number)

      // 12. Update Billing details
      cy.get('[id="tab_label_billing"]').scrollIntoView().click()

      cy.get('[id="orders_return_order_contacts_attributes_1_company_name"]').clear().type(pickup_company_name)
      cy.get('[id="orders_return_order_contacts_attributes_1_first_name"]').clear().type(pickup_first_name)
      cy.get('[id="orders_return_order_contacts_attributes_1_last_name"]').clear().type(pickup_last_name)
      cy.get('[id="orders_return_order_contacts_attributes_1_address_lines"]').clear().type(pickup_address_lines)
      cy.get('[id="orders_return_order_contacts_attributes_1_postal_code"]').clear().type(pickup_postal_code)
      cy.get('[id="orders_return_order_contacts_attributes_1_city"]').clear().type(pickup_city)
      cy.get('[id="orders_return_order_contacts_attributes_1_state_or_province_code"]').clear().type(pickup_state_or_province)
      cy.get('[placeholder="Country"]').eq(1).clear().type(pickup_country, {delay:200})
      cy.get('#billing-content > :nth-child(1) > :nth-child(7) > .grid > :nth-child(1) > .form-group > [data-controller="phone-number"] > .iti > #dummy').clear().type(pickup_phone_number)
      cy.get('[id="orders_return_order_contacts_attributes_1_fax_number"]').clear().type(pickup_fax_number)
      cy.get('[id="orders_return_order_contacts_attributes_1_email"]').clear().type(pickup_email)
      cy.get('[id="orders_return_order_contacts_attributes_1_vatin"]').clear().type(pickup_vatin)
      cy.get('[id="orders_return_order_contacts_attributes_1_eori_number"]').clear().type(pickup_eori_number)
      cy.get('[id="orders_return_order_contacts_attributes_1_chamber_of_commerce_number"]').clear().type(pickup_chamber_of_commerce_number)

       //Submit form
       cy.wait(1500)
       cy.get('.button').contains('Update Return order').click()
       cy.url().should('include', `/${return_order}`)
    

       // Assert Delivery Terms  // ticket #4138
       // cy.get('.delivery-terms-info-item')
       //   .find('dd')
       //   .should('contain.text', delivery_terms)
      
      // Assert Other Reference
      cy.get('.reason-info-item').should('not.exist')

     // Assert Customer Reference Number
     cy.get('.customer-reference-number-info-item')
     .find('dd')
     .should('contain.text', customer_reference_number+1)
  
     // Assert Other Reference
     cy.get('.other-reference-number-info-item')
       .find('dd')
       .should('contain.text', other_reference_number+1)
  
     // Assert Shipping Method
     cy.get('.shipping-method-info-item')
       .find('dd')
       .should('contain.text', 'Freight')

     // Billing
     cy.get('[id="Billing-content"]')
       .should('exist')
       .and('contain', 'Helena Bouwmann')
       .and('contain', 'Test Company')
       .and('contain', 'Kaiserstrasse 29')
       .and('contain', '63065 Offenbach am Main')
       .and('contain', 'Germany')
       .and('contain', 'h.bouwmann@anywhere.com')
       .and('contain', '+49 365 345565')
  
     // Assert Pickup
     cy.get('[id="Pickup-content"]')
       .should('exist')
       .and('contain', 'Boxture B.V.')
       .and('contain', 'Bram Schilder')
       .and('contain', '1017HL Amsterdam')
       .and('contain', 'Netherlands') 
       .and('contain', 'b.contact@info.com')
       .and('contain', '+31 36 534 5565')

      // Assert Location
      cy.get('[id="location-content"]')
        .should('exist')
        .and('contain', 'NLD-ROTTERDAM')
        .and('contain', 'Test User')
        .and('contain', 'Terweeweg 4')
        .and('contain', '456777 Oegstgeest')
        .and('contain', 'Netherlands')
        .and('contain', 'nobody@info.com')

      // Assert Product
      cy.get('a[href*="products"]')
        .should('exist')
        .and('contain', 'BXT-SNO60920')
  
      // Assert Quantity
      cy.get('.cursor-pointer')
        .find('td').eq(5)
        .should('contain.text', '2')
  
      // Assert Notes
      cy.get('.notes-info-item')
        .find('dd')
        .should('contain.text', 'Please pickup the package tomorrow.')
      
      })

      it('Confirm', () => {
          
        cy.visit(`/orders/${return_order}`)
        cy.url().should('include', `/${return_order}`)
        cy.contains('.pr-1', 'Confirm').click({ force: true })
  
        // Assert Quantity
        cy.get('.cursor-pointer')
          .find('td').eq(1)
          .should('not.contain.text', 'concept', {timeout:15000})
      })

      it('Hold', () => {

        cy.visit(`/orders/${return_order}`)
        cy.url().should('include', `/${return_order}`)
        cy.contains('.pr-1', 'Hold').click({ force: true })
  
        cy.get('#basic-content')
          .find('dd')
          .should('contain.text', 'hold')
  
      })
      it('Release', () => {

        cy.visit(`/orders/${return_order}`)
        cy.url().should('include', `/${return_order}`)

        cy.get('[id*="tab_label"]').contains("Tickets").scrollIntoView().should('be.visible').click()
        cy.get('.selected td:nth-child(5)').eq(1).should('have.text', 'Manual hold for order '+`#${return_order}`.toUpperCase().substring(0,9)).click()

        // Release from Hold
        cy.get('.p-4 > .button').click()
        cy.get('.edit_task').contains('Update Task').click()
        cy.get('.signum-notification-body__mb').should('be.visible').contains('Activity successfully completed')

        // Assert if order is released
        cy.visit(`/orders/${return_order}`)
        cy.url().should('include', `/${return_order}`)

        cy.get('.state-info-item')
          .find('.text-sm')
          .should('not.contain.text', 'hold')

    })
    it('Cancel', () => {

      cy.visit(`/orders/${return_order}`)
      cy.url().should('include', `/${return_order}`)
      
      cy.contains('.pr-1', 'Cancel').click({ force: true })
      cy.url().should('include', `/${return_order}/cancel/new`)

      cy.get('.button').contains('Cancel').click()

      // Assert if order is cancelled
      cy.get('#basic-content')
        .find('dd')
        .should('contain.text', 'cancelled')

  })

})