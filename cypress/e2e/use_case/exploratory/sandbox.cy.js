const dayjs = require('dayjs')
const qty_adjust = '5'
const tote = 'AUTOTE'

let sales_order
let barcode

describe('Bulk picking', () => {

  describe('Inventory', () => {

    before(() => {
      cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
  
    })
    
    it('Add inventory to pickable bins', () => {

      // 1. Navigate to Inventory Adjust
      cy.visit('/inventories/new')
      cy.url().should('include', '/inventories/new')

      // 2. Update current location
      cy.get('.form-group-location').click().focused().clear().type('NLD-UTRECHT', {delay:200})
      cy.get('.signum-notification-body__mb').should('be.visible').contains('Switched location to NLD-UTRECHT', { timeout:5000 })

      // 3. Upadjust inventory in the following containers
      cy.get('[placeholder="Container"]').type('9DDBF7AA', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('3A6BEC7E', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('DA807713', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('A395CDA8', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('0EC2C109', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('C5C65CA1', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('7933BEB7', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('67CF15B1', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('31FA615A', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('6A6D1BAF', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('F5AA71BF', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('03D877E8', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('09D7CA74', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

      cy.get('[placeholder="Container"]').type('340FFF04', {delay:200})
      cy.wait(1000)
      cy.get('[id="inventory_adjust_quantity"]').type(qty_adjust)
      cy.get('.button').click()
      cy.wait(4000)

    })
})

describe('Orders', () => {

  before(() => {
    cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
  
  })
  it('Create sales orders', () => {

  // Create Sales orders for bulk picking

  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'01'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658K', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658L', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(1)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658C', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(1)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
             )
          }
        })

  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'02'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658B', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658D', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(1)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658M', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(1)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
             )
          }
        })
  
    cy.visit('/orders/new?type=sales_order')
    cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'03'))
    cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
    cy.get('[placeholder="Product"]').type('SNO-74658J', {delay:200})
    cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
    cy.get('[placeholder="Product"]').eq(1).type('SNO-74658N', {delay:200})
    cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(1)
    cy.get('[placeholder="Product"]').eq(2).type('SNO-74658A', {delay:200})
    cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(1)
    cy.get('.button').contains('Create and continue editing').click()
    cy.url().should('include', '/edit')
  
    // Get sales order
    cy.url().then(($url) => {
    const url = $url.split('/')
    sales_order = url[4]
    cy.log(sales_order)
  
    //Confirm Sales order
    cy.visit(`/orders/${sales_order}`)
    cy.contains('.pr-1', 'Confirm').click({ force: true })
    for (let i = 0; i < 60; i++) {
          cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
              statusElement => {
                  let status = statusElement.text()
                  if (status !== 'processing') {
                      cy.wait(1000)
                    }
                  }
               )
            }
          })
    
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'04'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658E', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658I', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(1)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658G', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(1)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
             )
          }
        })
    
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'05'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658F', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658H', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(1)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })
  
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'06'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658M', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(2)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658A', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(2)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658B', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(2)
  cy.get('[placeholder="Product"]').eq(3).type('SNO-74658G', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(3).clear().type(2)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'07'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658C', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(2)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658E', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(2)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'08'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658D', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(2)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658J', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(2)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658L', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(2)
  cy.get('[placeholder="Product"]').eq(3).type('SNO-74658H', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(3).clear().type(2)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'09'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658F', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658I', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(3)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658K', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(3)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'10'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658N', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'11'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658N', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658M', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(3)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658A', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(3)
  cy.get('[placeholder="Product"]').eq(3).type('SNO-74658B', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(3).clear().type(3)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'12'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658C', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658E', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(3)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658L', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(3)
  cy.get('[placeholder="Product"]').eq(3).type('SNO-74658K', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(3).clear().type(3)
  cy.get('[placeholder="Product"]').eq(4).type('SNO-74658G', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(3).clear().type(3)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'13'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658J', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)
  cy.get('[placeholder="Product"]').eq(1).type('SNO-74658H', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(3)
  cy.get('[placeholder="Product"]').eq(2).type('SNO-74658F', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(2).clear().type(3)
  cy.get('[placeholder="Product"]').eq(3).type('SNO-74658D', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(3).clear().type(3)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
          }
        })

      
  cy.visit('/orders/new?type=sales_order')
  cy.get('[id^="orders_sales_order_customer_reference_number"]').type(dayjs().format('YYDDmmss'+'14'))
  cy.get('[placeholder=Customer]').type('Simpsons', {delay:200})
  cy.get('[placeholder="Product"]').type('SNO-74658I', {delay:200})
  cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(3)
  cy.get('.button').contains('Create and continue editing').click()
  cy.url().should('include', '/edit')

  // Get sales order
  cy.url().then(($url) => {
  const url = $url.split('/')
  sales_order = url[4]
  cy.log(sales_order)

  //Confirm Sales order
  cy.visit(`/orders/${sales_order}`)
  cy.contains('.pr-1', 'Confirm').click({ force: true })
  for (let i = 0; i < 60; i++) {
        cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
            statusElement => {
                let status = statusElement.text()
                if (status !== 'processing') {
                    cy.wait(1000)
                  }
                }
              )
           }
        })
    })
})

describe('Picklist plan', () => {
  
  before(() => {
    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})
  })
  
  it('Configure picklist type for Bulk picking', () => {
    
    // 1. Navigate to Today's picklist plan
    cy.visit('pick_list_plans/97997ca8-064f-45a6-b6b9-2702b66df9c3')
    cy.url().should('include', '/pick_list_plans/97997ca8-064f-45a6-b6b9-2702b66df9c3')

    // 2. Update current location
    cy.get('.form-group-location').click().focused().clear().type('NLD-UTRECHT', {delay:200})

    // 3. Configure pick list type
    cy.get('[name="pick_list_plan[pick_list_type]"').select('Bulk')

    // 4. Configure Release Policy
    cy.get('[name="pick_list_plan[release_policy]"').select('Complete')
    
    // 5. Configure Only Fully Allocated
    cy.get('[name="pick_list_plan[only_fully_allocated]"').invoke('prop','value').then((fully_allocated) => {
      if (fully_allocated === '0') {
        cy.get('.satis-switch > .form-label > span').click()
      } else {

      }

  })

    // 6. Remove Lines
    cy.get('[data-icon="trash"]').eq(0).click()

    // 7. Configure Condition
    cy.get('#pick_list_plan_pick_list_plan_rule_groups_attributes_0_condition').select('OR')

    // 8. Configure Field
    cy.get('#pick_list_plan_pick_list_plan_rule_groups_attributes_0_pick_list_plan_rules_attributes_TEMPLATE_field').select('account')

    // 9. Configure Operator
    cy.get('#pick_list_plan_pick_list_plan_rule_groups_attributes_0_pick_list_plan_rules_attributes_TEMPLATE_operator').select('is')

    // 10. Configure Value
    cy.get('#pick_list_plan_pick_list_plan_rule_groups_attributes_0_pick_list_plan_rules_attributes_TEMPLATE_value').select('EMOE')

    // 11. Click on the + (this is a bit if a hack and should be resolved in ticket #4010)
    cy.get('[data-icon="plus"]').eq(0).click()

    // 12. Submit the page
    cy.get('.button').contains('Update and continue editing').click()
    cy.get('.signum-notification-body__mb').should('be.visible').contains('Pick list plan was successfully updated.', { timeout:5000 })

    // 13. Release plan
    cy.contains('.pr-1', 'Release').click({ force: true })

})
})


describe("Picking", () => {

  before('Set location', () => {
    
    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking' })
    cy.visit('/')
    cy.url().should('eq', 'https://oms.staging.boxture.com/')

    // Update current location
    cy.get('.form-group-location').click().focused().clear().type('NLD-UTRECHT', {delay:200})
    //cy.get('.signum-notification-body__mb').should('be.visible').contains('Switched location to NLD-UTRECHT', { timeout:5000 })

  })

  it('Bulk pick inventory', () => {

      // // 1. Login on Mobile.
      cy.visit('/mobile')
      cy.url().should('include', '/mobile')

      // // Assert login screen
      // cy.url().should('include', '/mobile')
      // cy.get('.login-screen-title').contains('Login')

      // // 2. Fill in credentials.
      // cy.get('#user_email').type('wrap-it_picker@wrap-it.com')
      // cy.get('#user_password').type('picking')

      // // 3. Click Log in.
      // cy.get('button').click()

      // Assert login page.
      cy.get('.icon').should('be.visible')
      cy.get(':nth-child(1) > .item-link > .item-inner > .item-title').click() // << All
      cy.wait(2500)

      // 4. Scroll and click the last (most recent) order.
      cy.get('.page-current > .page-content > .list > ul > li > .item-link > .item-inner').last().click()

      // 5. Scan tote
      cy.wait(2500)
      cy.window().then(win => {
      barcode = cy.stub(win, 'prompt')
      barcode.returns(tote)

      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
      
      })

      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('9DDBF7AA') // SNO-74658A U1111111
      
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })

      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('DA807713') // SNO-74658C U1121118
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('3A6BEC7E') // SNO-74658B U1113118
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('A395CDA8') // SNO-74658D U1123111
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('67CF15B1') // SNO-74658H U1243111
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('C5C65CA1') // SNO-74658F U1233118
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('7933BEB7') // SNO-74658G U1241118
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('0EC2C109') // SNO-74658E U1231111
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('31FA615A') // SNO-74658I U1351111
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('F5AA71BF') // SNO-74658K U1361118
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('6A6D1BAF') // SNO-74658J U1353118
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('03D877E8') // SNO-74658L U1363111
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('340FFF04') // SNO-74658N U1473111
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)

      })
      // Pick from container
      cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('09D7CA74') // SNO-74658M U1471111
  
      cy.wait(2500)
      cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
  
      cy.wait(2500)
      cy.contains('Pick all').click({force:true})
      cy.wait(2500)


      })
    })
  })


    })