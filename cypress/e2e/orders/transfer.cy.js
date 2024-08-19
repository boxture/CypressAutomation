const customer_reference_number = Math.floor((Math.random() * 1000000))
const other_reference_number = Math.floor((Math.random() * 1000000))
const shipping_method = 'WRAP-IT OWN TRANSPORT'
const destination_location = 'NLD-UTRECHT'
const origin_location = 'NLD-AMSTERDAM'
const packing_material = '8767893341'
const quantity = 10
const status = 'defective'
const notes = 'Transfer dunnage packing material to Utrecht.'

let transfer_order

describe('Transfer Order', () => {
  
    beforeEach(() => {
      cy.login({email: 'account_owner@wrap-it.com', password: 'fosmi1-jiccuv-tiGfir'})
    
    })
  
    it('Create', () => {
  
      // CREATE A TRANSFER ORDER
  
      // 1. Navigate to Transfer Order
      cy.visit('/orders/new?type=transfer_order')
      cy.get('[id="tab_label_basics"]').scrollIntoView()

      // 2. Fill in Customer Reference Number
      cy.get('[id^="orders_transfer_order_customer_reference_number"]').type(customer_reference_number)

      // 3. Fill in Other Reference Number
      cy.get('[id="orders_transfer_order_other_reference_number"]').type(other_reference_number)

      // 4. Fill in Shipping Method
      cy.get('[placeholder="Shipping method"]').type(shipping_method)  // use customer Soylent Green

      // 5. Fill in Destination location
      cy.get('[placeholder="Destination location"]').type(destination_location)

      // 6. Fill in Product
      cy.wait(1000)
      cy.get('[placeholder="Product"]').type(packing_material, {delay:200})

      // 7. Fill in Original location
      cy.get('[id*="origin_location_id"]').select(origin_location)
  
      // 8. Fill in quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(quantity)

      // 9. Status
      cy.get('[id*="status"]').eq(0).select(status)

      // 10. Navigate to Notes
      cy.get('[id="tab_label_notes"]').scrollIntoView().click()

      // 11. Fill in Notes
      cy.get('[id="orders_transfer_order_notes"]').type(notes)

  
       //Submit form
       cy.get('.button').contains('Create and continue editing').click()
       cy.url().should('include', '/edit')
  
       //Get sales order
       cy.url().then(($url) => {
         const url = $url.split('/')
         transfer_order = url[4]
         cy.log(transfer_order)

       })
     })

     it('Confirm', () => {
          
       cy.visit(`/orders/${transfer_order}`)
       cy.url().should('include', `/${transfer_order}`)
       cy.contains('.pr-1', 'Confirm').click({ force: true })

       // Assert Quantity
       cy.get('.cursor-pointer')
         .find('td').eq(1)
         .should('not.contain.text', 'concept', {timeout:15000})
     })

     it('Show', () => {
        
     cy.visit(`/orders/${transfer_order}/edit`)
     cy.contains('.pr-1', 'Show').click({ force: true })

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

     // Assert Location
     cy.get('[id="location-content"]')
         .should('exist')
         .and('contain', 'NLD-UTRECHT')
         .and('contain', 'WRAP-IT')
         .and('contain', 'Test User')
         .and('contain', 'Laan van Brabant 13')
         .and('contain', '4701 Utrecht')
         .and('contain', 'Netherlands')
         .and('contain', 'info@boxture.com')


//     // Assert Product
       cy.get('.cursor-pointer > :nth-child(3) > a')
         .should('exist')
         .and('contain', packing_material)

//     // Assert Quantity
     cy.get('.cursor-pointer')
         .find('td').eq(5)
         .should('contain.text', '1')

//     // Assert Notes
     cy.get('.notes-info-item')
         .find('dd')
         .should('contain.text', notes)


        })
    
     it('Edit and Update', () => {

       cy.visit(`/orders/${transfer_order}`)

       // 1 Edit Sales Order
       cy.contains('.pr-1', 'Edit').click({ force: true })

       // 2. Fill in Customer Reference Number
      cy.get('[id^="orders_transfer_order_customer_reference_number"]').clear().type(customer_reference_number+1)

      // 3. Fill in Other Reference Number
      cy.get('[id="orders_transfer_order_other_reference_number"]').clear().type(other_reference_number+1)

      // 4. Fill in Shipping Method
      cy.get('[placeholder="Shipping method"]').clear().type('Freight')

      // 5. Fill in Destination location
      cy.get('[placeholder="Destination location"]').clear().type('NLD-ROTTERDAM')

      // 6. Fill in Product
      cy.wait(1000)
      cy.get('[placeholder="Product"]').eq(0).clear().type('7464520092', {delay:200})

      // 7. Fill in Original location
      cy.get('[id*="origin_location_id"]').eq(0).select(origin_location)
  
      // 8. Fill in quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(20)

      // 9. Status
      cy.get('[id*="status"]').eq(0).select('New')

      // 10. Navigate to Notes
      cy.get('[id="tab_label_notes"]').scrollIntoView().click()

      // 11. Fill in Notes
      cy.get('[id="orders_transfer_order_notes"]').clear().type('Transfer gift box packing material to Rotterdam.')

      //Submit form
      cy.get('.button').contains('Update Transfer order').click()
      cy.url().should('include', `/${transfer_order}`)


      // Assert Other Reference
      cy.get('.other-reference-number-info-item')
        .find('dd')
        .should('contain.text', other_reference_number+1)

      // Assert Customer Reference Number
      cy.get('.customer-reference-number-info-item')
        .find('dd')
        .should('contain.text', customer_reference_number+1)

      // Assert Shipping Method
      cy.get('.shipping-method-info-item')
        .find('dd')
        .should('contain.text', 'Freight')

       // Assert Location
       cy.get('[id="location-content"]')
         .should('exist')
         .and('contain', 'NLD-ROTTERDAM')
         .and('contain', 'WRAP-IT')
         .and('contain', 'Test User')
         .and('contain', 'Terweeweg 4')
         .and('contain', '456777 Oegstgeest')
         .and('contain', 'Netherlands')
         .and('contain', 'nobody@info.com')

       // Assert Product
         cy.get('a[href*="packing_materials"]')
           .should('exist')
           .and('contain', '7464520092')

       // Assert Quantity
       cy.get('.cursor-pointer')
         .find('td').eq(5)
         .should('contain.text', '20')

       // Assert Notes
       cy.get('.notes-info-item')
         .find('dd')
         .should('contain.text', 'Transfer gift box packing material to Rotterdam.')
    
     })
    
     it('Hold', () => {
       cy.visit(`/orders/${transfer_order}`)
       cy.url().should('include', `/${transfer_order}`)
       cy.contains('.pr-1', 'Hold').click({ force: true })

       cy.get('#basic-content')
         .find('dd')
         .should('contain.text', 'hold')

     })

     it('Release', () => {
       cy.visit(`/orders/${transfer_order}`)
       cy.url().should('include', `/${transfer_order}`)

       cy.get('[id*="tab_label"]').contains("Tickets").scrollIntoView().should('be.visible').click()
       cy.get('.selected td:nth-child(5)').eq(1).should('have.text', 'Manual hold for order '+`#${transfer_order}`.toUpperCase().substring(0,9)).click()

       // Release from Hold
       cy.get('.p-4 > .button').click()
       cy.get('.edit_task').contains('Update Task').click()
       cy.get('.signum-notification-body__mb').should('be.visible').contains('Activity successfully completed')

       // Assert if order is released
       cy.visit(`/orders/${transfer_order}`)
       cy.url().should('include', `/${transfer_order}`)

       cy.get('.state-info-item')
         .find('.text-sm')
         .should('not.contain.text', 'hold')

     })

     it('Cancel', () => {
       
       cy.visit(`/orders/${transfer_order}`)
       cy.url().should('include', `/${transfer_order}`)
        
       cy.contains('.pr-1', 'Cancel').click({ force: true })
       cy.url().should('include', `/${transfer_order}/cancel/new`)

       cy.get('.button').contains('Cancel').click()

       // Assert if order is cancelled
       cy.get('#basic-content')
         .find('dd')
         .should('contain.text', 'cancelled')

     })
     
    })
