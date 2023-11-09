  let po

  describe('purchase orders', () => {

    before(() => {
    cy.login({
    email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

  })

    it('create a purchase order', () => {
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
      cy.get('[placeholder="Destination location"]').type('NLD-A',{ delay: 200 })

      // 7. Fill in Product
      cy.get('[placeholder="Product"]').eq(0).type('BXT-SNO23245',{ delay: 200 })

      // 8. Fill in quantity
      cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)

      // 9. Fill in product 2nd line
      cy.get('[placeholder="Product"]').eq(1).type('BXT-SNO23245',{ delay: 500 })

      // 9.1 Fill in quantity 2nd line
      cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(2)

      // 10. Submit form
      cy.get('.button').contains('Create and continue editing').click()
      cy.url().should('include', '/edit')

      //Get purchase order
      cy.url().then(($url) => {
        let url = $url.split('/')
        po = url[4]
        cy.log(po)
        cy.visit(`/orders/${po}`)
      })

      // Click logout button
      cy.get('span').contains('Logout').click({force: true})

      // Verify logged out
      cy.contains('Log in to your account')
      cy.url().should('include', '/users/sign_in')

      })

    })

  describe('purchase orders', () => {

    before(() => {
    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
  })

    it('Confirm the purchase order', () => {
      // CREATE A PURCHASE ORDER
      // 1. Navigate to Purchase Orders
      cy.visit(`/orders/${po}`)
      cy.contains('.pr-1', 'Confirm').click({ force: true })
      for (let i = 0; i < 20; i++) {
			cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
				statusElement => {
					let status = statusElement.text()
					if (status === 'concept') {
						cy.wait(500)
					  }
				  }
			  )
		  }

      // LOGOUT

      // Click logout button
      cy.get('span').contains('Logout').click({force: true})

      // Verify logged out
      cy.contains('Log in to your account')
      cy.url().should('include', '/users/sign_in')

      })

    })

  describe('purchase orders', () => {

    before(() => {
    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})
  })

    it('Receive the purchase order', () => {

      cy.visit(`/orders/${po}`)
      cy.contains('.pr-1', 'Receive').click({ force: true })
      cy.pause()
      cy.get('[placeholder="Packing material"]').type('a3',{ delay: 200 })
      cy.get('[placeholder="Product"]').eq(0).type('BXT-SNO23245', {delay:200})
      cy.get('[data-order-line-target="quantity"]').eq(0).type(5)
      cy.get('[data-action="focus->satis-date-time-picker#showCalendar input->satis-date-time-picker#dateTimeEntered"]').click()
      cy.get('[data-action="satis-date-time-picker#selectDay"]').contains('29').click()
      cy.get('.button').click()

      })

    })