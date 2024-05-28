const dayjs = require('dayjs')

// Basics
const customer_reference_number = Math.floor((Math.random() * 1000000))
const other_reference_number = Math.floor((Math.random() * 1000000))
const shipping_method = 'Fedex'
const vendor = "Scrap Vendor"

// Notes
const notes = 'Product is no longer sold and can be destroyed.'

// Basic Lines
const outbound_product = 'BXT-SNX09841'
const original_location = 'NLD-AMSTERDAM'
const quantity = 1

let scrap_order

describe('Scrap Order', () => {
  
    beforeEach(() => {
      cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
    
    })
  
    it('Create', () => {
  
      // CREATE A SCRAP ORDER
  
      // 1. Navigate to Sales Order
      cy.visit('/orders/new?type=scrap_order')
      cy.get('[id="tab_label_basics"]').scrollIntoView()

      // 2. Fill in Customer Reference Number
      cy.get('[id^="orders_scrap_order_customer_reference_number"]').type(customer_reference_number)
     
      // 3. Fill in Other Reference Number
      cy.get('[id="orders_scrap_order_other_reference_number"]').type(other_reference_number)

      // 4. Fill in Shipping Method
      cy.get('[placeholder="Shipping method"]').type(shipping_method)

      // 5. Fill in Vendor
      cy.get('[placeholder="Vendor"]').type(vendor)

      // 6. Fill in Product
      cy.get('[placeholder="Product"]').type(outbound_product, {delay:200})

      // 7. Fill in Original location
      cy.get('[id*="origin_location_id"]').eq(0).select(original_location)

      // 7. Fill in Quantity
      cy.get('[id*="quantity"]').eq(0).clear().type(1)

      // 14. Navigate to Notes
      cy.get('[id="tab_label_notes"]').scrollIntoView().click()

      // 15. Fill in Notes
      cy.get('[id="orders_scrap_order_notes"]').type(notes)

      //Submit form
      cy.get('.button').contains('Create and continue editing').click()
      cy.url().should('include', '/edit')
  
       //Get scrap order
       cy.url().then(($url) => {
         const url = $url.split('/')
         scrap_order = url[4]
         cy.log(scrap_order)

      })
    })

      it('Show', () => {

        
        cy.visit(`/orders/${scrap_order}/edit`)
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
    
        // Assert Vendor
        cy.get('#vendor-content > .relative')
          .should('exist')
          .and('contain', 'Scrap Vendor')
          .and('contain', 'AST Amsterdam Scrap Terminal')
          .and('contain', 'Scrap Vendor')
          .and('contain', 'Vlothavenweg 1')
          .and('contain', '1013BJ Amsterdam')
          .and('contain', 'Netherlands')
          .and('contain', 'h.scrap@rapidlogistics.com')
          .and('contain', '+31 6 12345678')
    
        // Assert Product
        cy.get('a[href*="products"]')
          .should('exist')
          .and('contain', outbound_product)
    
        // Assert Quantity
        cy.get('.cursor-pointer')
          .find('td').eq(5)
          .should('contain.text', '1')

        // Assert Origin Location
        cy.get('.cursor-pointer')
          .find('td').eq(18)
          .should('contain.text', 'NLD-AMSTERDAM')
    
        // Assert Notes
        cy.get('.notes-info-item')
          .find('dd')
          .should('contain.text', notes)
    
        })
        
        it('Edit and Update', () => {

          cy.visit(`/orders/${scrap_order}`)
    
          // 1 Edit Return Order
          cy.contains('.pr-1', 'Edit').click({ force: true })
         
          // 2. Update Customer Reference Number
          cy.get('[id^="orders_scrap_order_customer_reference_number"]').type(customer_reference_number+1)
        
          // 3. Update in Other Reference Number
          cy.get('[id="orders_scrap_order_other_reference_number"]').type(other_reference_number+1)

          // 4. Update Shipping Method
          cy.get('[placeholder="Shipping method"]').clear()

          // 5. Update in Vendor
          // cy.get('[placeholder="Vendor"]').clear() // Vendor cannot be blank

          // 6. Update in Product
          cy.get('[placeholder="Product"]').eq(0).clear().type('BXT-CPNT-C768D', {delay:200})

          // 7. Update quantity
          cy.get('[id*="quantity"]').eq(0).clear().type(2)

          // 8. Update in Original location
          cy.get('[id*=origin_location_id]').eq(0).select('NLD-UTRECHT')

          // 9. Update to Notes
          cy.get('[id="tab_label_notes"]').scrollIntoView().click()

          // 10. Update in Notes
          cy.get('[id="orders_scrap_order_notes"]').clear().type('No longer used.')

          // Submit form
          cy.wait(1000)
          cy.get('.button').contains('Update Scrap order').click()
          cy.url().should('include', `/${scrap_order}`)


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
            .should('not.exist')
      
          // Assert Vendor
          cy.get('#vendor-content > .relative')
            .should('exist')
            .and('contain', 'Scrap Vendor')
            .and('contain', 'AST Amsterdam Scrap Terminal')
            .and('contain', 'Scrap Vendor')
            .and('contain', 'Vlothavenweg 1')
            .and('contain', '1013BJ Amsterdam')
            .and('contain', 'Netherlands')
            .and('contain', 'h.scrap@rapidlogistics.com')
            .and('contain', '+31 6 12345678')
      
          // Assert Product
          cy.get('a[href*="products"]')
            .should('exist')
            .and('contain', 'BXT-CPNT-C768D')

          // Assert Origin Location
          cy.get('.cursor-pointer')
            .find('td').eq(18)
            .should('contain.text', 'NLD-UTRECHT')
      
          // Assert Quantity
          cy.get('.cursor-pointer')
            .find('td').eq(5)
            .should('contain.text', '2')
      
          // Assert Notes
          cy.get('.notes-info-item')
            .find('dd')
            .should('contain.text', 'No longer used')
    
          
          })

        it('Confirm & Cancel', () => {

          // If there is no inventory this order type will be cancelled automatically.
        
          cy.visit(`/orders/${scrap_order}`)
          cy.url().should('include', `/${scrap_order}`)
          cy.contains('.pr-1', 'Confirm').click({ force: true })
    
          // Assert Quantity
          cy.get('.cursor-pointer')
            .find('td').eq(1)
            .should('contain.text', 'cancelled', {timeout:15000})

          for (let i = 0; i < 60; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                statusElement => {
                    let status = statusElement.text()
                    cy.log(status)
                    if (status !== 'cancelled') {
                        cy.wait(1000)
                      }
                  }
              )
          }
        

    })
})