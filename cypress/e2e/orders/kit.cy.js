let kit_order

const kit_product = 'BXT-KIT88721'
const kit_product_qty = 2
const kit_component_a = 'BXT-CPNT-Y513A'
const kit_component_a_qty = 2
const kit_component_b = 'BXT-CPNT-Y513B'
const kit_component_b_qty = 2
const kits_to_build_qty = 2


describe('Kit order create', () => {

    before(() => {
      cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
  
    })
  
    it('Create Kit order', () => {
  
      // 1. Navigate to Kit Order.
      cy.visit('/orders/new?type=kit_order')
      cy.url().should('include', '/orders/new?type=kit_order')
  
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

      cy.contains('.pr-1', 'Show').click({ force: true })
  
      })
   })
})
