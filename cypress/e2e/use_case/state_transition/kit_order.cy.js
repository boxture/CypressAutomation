let purchase_order
const outbound_product = 'BXT-SNO78354'

describe('State Transition - Kit order', () => {

    describe('Create', () => {

         beforeEach('login', () => {
             cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
        
         })

        it('[order] . --> concept', () => {
              
            // 1. Navigate to Purchase Orders
            cy.visit('orders/new?type=kit_order')
      
            // 2. Fill in Destination location
            cy.get('[placeholder="Destination location"]').type('NLD-A',{ delay: 200 })
      
            // 3. Fill in Product
            cy.get('[placeholder="Product"]').eq(0).type(outbound_product,{ delay: 200 })
      
            // 4. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
      
            // 5. Submit form
            cy.get('.button').contains('Create Purchase order').click()

            cy.wait(2000)
      
            // Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                purchase_order = url[4]
                cy.log(purchase_order)
                cy.url().should('include', `/orders/${purchase_order}`)

            })

            // 4. Verify order state
            cy.get('td').eq(1).contains('concept')

        })

        it('[order line] . --> concept', () => {
            
            // 1. Verify order line state
            cy.visit(`/orders/${purchase_order}`)
            cy.get('dd').eq(0).contains('concept')

        })
    })

    describe('Confirm', () => {

        beforeEach('login', () => {
            cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
        
        })

        it('[order] concept --> pending', () => {

            // 1. Navigate to purchase order
            cy.visit(`/orders/${purchase_order}`)

            // 2. Confirm purchase order
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // 3. Verify order state
            cy.get('td').eq(1).contains('pending')
        
        })

        it('[order line] concept --> pending', () => {

            // 1. Navigate to purchase order
            cy.visit(`/orders/${purchase_order}`)

            // 2. Verify order line state
            cy.get('dd').eq(0).contains('pending')

        })

        it('[order line item] . expected', () => {
            
            // 1. Navigate to purchase order
            cy.visit(`/orders/${purchase_order}`)

            // 2. Verify order line state
            cy.get('[id*="tab_label"]').contains('Items').click({ force: true })
            cy.get('td').eq(1).contains('expected')


        })

    })

    describe('Receive', () => {

        beforeEach(() => {
            cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})
        
        })
        
        it('[order] pending --> completed', () => {
    
            // 1. Navigate to Purchase Order
            cy.visit(`/orders/${purchase_order}`)
            cy.url().should('include', `/orders/${purchase_order}`)
        
            // 2. Click Receive from the context menu
            cy.contains('.pr-1', 'Receive').click({ force: true })
        
            // 2. Fill in a packing material
            cy.get('[placeholder="Packing material"]').type('6474849091', {delay:200})
        
            // 3. Fill in product 
            cy.get('[placeholder="Product"]').eq(0).type(outbound_product, {delay:200})
        
            // 4. Fill in a quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).type(1)
        
            // 7. Click Receive
            cy.get('.button').click()

            // 8. Verify order state
            cy.get('td').eq(1).contains('completed')

        })

        it('[order line] pending --> completed', () => {

            // 1. Navigate to purchase order
            cy.visit(`/orders/${purchase_order}`)

            // 2. Verify order line state
            cy.get('dd').eq(0).contains('completed')

        })

        it('[order line item] expected --> received', () => {

            // 1. Navigate to purchase order
            cy.visit(`/orders/${purchase_order}`)

            // 2. Verify order line state
            cy.get('[id*="tab_label"]').contains('Items').click({ force: true })
            cy.get('td').eq(1).contains('received')

        })

    })
})
