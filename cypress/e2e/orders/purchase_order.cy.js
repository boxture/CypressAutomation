describe('purchase orders', () => {

    it('create a purchase order', () => {
      cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
  
      cy.pause()
  
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
      cy.get('[placeholder="Destination location"]').type('NLD-AMSTERDAM')
      cy.wait(1000)
  
      // 7. Fill in Product
      cy.get('[placeholder="Product"]').type('BXT-SNO23245')
  
      // 8. Fill in quantity
      cy.get('[id^=orders_purchase_order_order_lines_attributes_TEMPLATE_quantity').clear().type(10)
  
      // 9. Fill in product 2nd line
      cy.get('[placeholder="Product"]').eq(1).type('BXT-SNO23245')
  
      // 9.1 Fill in quantity 2nd line
      cy.get('[id^=orders_purchase_order_order_lines_attributes_TEMPLATE_quantity').clear().type(20)
  
      //Submit form
      cy.get('.button').contains('Create and continue editing').click()
      cy.url().should('include', '/edit')
      
      //Get purchase order
      cy.url().then(($url) => {
        const url = $url.split('/')
        const po = url[4]
        cy.log(po)
        cy.visit(`/orders/${po}`)
      })
  
      // LOGOUT
  
      // Click logout button
      cy.get('span').contains('Logout').click({force: true})
        
      // Verify logged out
      cy.contains('Log in to your account')
      cy.url().should('include', '/users/sign_in')
      })
    })
  