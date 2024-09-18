let kit_order

const customer_reference_number = Math.floor((Math.random() * 1000000))
const other_reference_number = Math.floor((Math.random() * 1000000))

const kit_product = 'BXT-KIT88721'
const kit_product_qty = 2
const kit_component_a = 'BXT-CPNT-Y513A'
const kit_component_a_qty = 2
const kit_component_b = 'BXT-CPNT-Y513B'
const kit_component_b_qty = 2
const kits_to_build_qty = 2

const notes = 'Kits should contain 2 components.'


describe('Verify initial and updated data is saved.', () => {

    beforeEach(() => {
      cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
  
    })

    describe('Create', () => {
      
      it('1. Fill in all input fields.', () => {
  
        // 1. Navigate to Kit Order.
        cy.visit('/orders/new?type=kit_order')
        cy.url().should('include', '/orders/new?type=kit_order')

        // Fill in Customer Reference Number.
        cy.get('[id="orders_kit_order_customer_reference_number"]').type(customer_reference_number)

        // Fill in Other Reference Number.
        cy.get('[id="orders_kit_order_other_reference_number"]').type(other_reference_number)
    
        // 2. Select Destination location.
        cy.get('[placeholder="Destination location"]').type('NLD-A', {delay:200})
    
        // 3. Fill in Product.
        cy.get('[placeholder="Product"]').type(kit_product, {delay:200})
    
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

        cy.contains('.pr-1', 'Show').click({ force: true })
    
        })
      })

      describe('Show', () => {
    
        it('** 2. Verify all input has been saved correctly.', () => {
          cy.visit(`/orders/${kit_order}/edit`)
          cy.contains('.pr-1', 'Show').click({ force: true })
    
          // Assert State
          cy.get('.state-info-item')
            .find('dd')
            .should('contain.text', 'concept')
    
          // Account
          cy.get('.account-info-item')
            .find('dd')
            .should('contain.text', 'EMOE')
    
          // Assert Customer Reference Number
          cy.get('.customer-reference-number-info-item')
            .find('dd')
            .should('contain.text', customer_reference_number)
    
          // Assert Other Reference Number
          cy.get('.other-reference-number-info-item')
            .find('dd')
            .should('contain.text', other_reference_number)
          
          // Assert Location
          cy.get('#location-content')
            .should('exist')
            .and('contain', 'NLD-AMSTERDAM')
            .and('contain', 'WRAP-IT')
            .and('contain', 'Wrap it')
            .and('contain', 'Vijzelstraat 68')
            .and('contain', '1017HL Amsterdam')
            .and('contain', 'Netherlands')
            .and('contain', '+31 6 12345678')
          
          // Assert Kit Product
          cy.get('a[href*="products"]')
            .should('exist')
            .and('contain', kit_product)
          
          // Assert Quantity Outbound Product
          cy.get('.cursor-pointer')
            .find('td').eq(5)
            .should('contain.text', kit_product_qty)
    
          // Assert Full Product Number
          cy.get('a[href*="products"]')
            .should('exist')
            .and('contain', kit_product)
    
          // Assert Full Product Quantity
          cy.get('.cursor-pointer')
          .find('td').eq(28)
          .should('contain.text', '2')
    
          // Assert Notes
          cy.get('.notes-info-item > .text-sm')
            .should('contain.text', notes)
    
      })
    })
  })