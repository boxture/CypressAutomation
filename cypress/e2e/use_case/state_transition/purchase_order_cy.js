describe('State Transition', () => {

    describe('Purchase Order', () => {

        beforeEach('login', () => {
            cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
        })

        it('Purchase order create', () => {
              
            // 1. Navigate to Purchase Orders
            cy.visit('orders/new?type=purchase_order')
      
            // 2. Fill in Destination location
            cy.get('[placeholder="Destination location"]').type('NLD-A',{ delay: 200 })
      
            // 3. Fill in Product
            cy.get('[placeholder="Product"]').eq(0).type(outbound_product,{ delay: 200 })
      
            // 4. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
      
            // 5. Submit form
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

})
