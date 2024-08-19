/*
RULES
For all BULK picks and replenishments as described below, the following sequence applies:

1. Pallets that are on PICKING bins but NOT on the standard BINs.
2. Opened pallets at BULK locations.
3) FIFO on BULK locations.
4) If FIFO equals -> smallest QTY.

SCENARIO

| Bin configuration            | Order QTY | QTY avbl on PICKING bin | QTY avbl on BULK bins | Picking strategy                                  
| ---------------------------- | --------- | ----------------------- | --------------------- | --------------------------------------------------
| Items DO have a standard bin |       130 |   1 x 50 (standard bin) | 1 x pallet  90 items  | 1. Pick the entire pallet according to the RULES.
|                              |           |                         | 1 x pallet 100 items  | 2. Pick the remaining from the Standard bin.
|                              |           |                         | 1 x pallet 110 items  |

TEST DATA

| Product      | bin                  | purpose | container | QTY      | open/close | Picking strategy
| ------------ | -------------------- | ------- | --------- | -------- | ---------- | ------------------------------------------------------------------
| BXT-SNO30732 | 934 320 1 (standard) | picking | #9653930B |   50 pcs | closed     | 1. First pick container #E258BADB (90 items)
| BXT-SNO30732 | 934 320 3            | bulk    | #E258BADB |   90 pcs | closed     | 2. Then pick the remaining (40 items) from container #9653930B
| BXT-SNO30732 | 934 320 3            | bulk    | #E1B9DD62 |  100 pcs | closed     | 
| BXT-SNO30732 | 934 320 3            | bulk    | #EDF44DE3 |  110 pcs | closed     | Note: 10 items remain on standard bin.

SCRIPT

1. Create a purchase order, 350 items for product BXT-SNO30732.
2. Receive, 50 + 90 + 100 + 110 at once.
3. Move 50 items to standard-, remaining to bulk bin.
4. Create sales order requesting 130 items.
5. Re-allocate inventory by generating a picklist.

Sales Order https://oms.staging.boxture.com/orders/3ad73f18-7f22-4a96-8cda-6829099c9314
*/

const outbound_product_standard_bin = 'BXT-SNO30732'
const inventory_adjust_quantity = '20'
const sales_order_quantity = '350'
const other_reference_number = Math.floor((Math.random() * 1000000))
const purchase_order_number = Math.floor((Math.random() * 1000000))
const customer_reference_number = Math.floor((Math.random() * 1000000))
const shipping_method = 'DHL'
const customer = 'Soylent'

let purchase_order
let non_pickable_container_1
let non_pickable_container_2
let non_pickable_container_3
let non_pickable_container_4
let sales_order
let picklist

describe('Replenish scenario 2', () => {

    before(() => {
        cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG' })
    })

    describe('Inventory', () => {

        it('1. Create a purchase order, 350 items for product BXT-SNO30732.', () => {
            
            // 1. Navigate to Purchase Orders
            cy.visit('orders/new?type=purchase_order')

            // 2. Fill in Customer Reference
            const dayjs = require('dayjs')
            cy.log(dayjs().format('{YYYY} MM-DDTHH:mm:ss'))
            cy.get('[id^=orders_purchase_order_customer_reference_number]').type(dayjs().format('DDmmssYY'))

            // 3. Fill in Inbound Tracking Number
            cy.get('[id^=orders_purchase_order_inbound_tracking_number]').type(dayjs().format('AWBMMDDHHmm'))

            // 4. Fill in Destination location
            cy.get('[placeholder="Destination location"]').type('NLD-AMSTERDAM')

            // 5. Fill in Product
            cy.get('[placeholder="Product"]').eq(0).type(outbound_product_standard_bin,{ delay: 200 })

            // 6. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(sales_order_quantity)

            // 7. Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')

            // Get purchase order
            cy.url().then(($url) => {
                let url = $url.split('/')
                purchase_order = url[4]
                cy.log(purchase_order)
            })
    
            // Confirm purchase order
            cy.contains('.pr-1', 'Confirm').click({ force: true })
            for (let i = 0; i < 600; i++) {
                    cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                        statusElement => {
                            let status = statusElement.text()
                            if (status !== 'pending') {
                                cy.wait(1000)
                                cy.log(i)
                            }
                        }
                    )
                }

            })
        })

        describe('Receive', () => {

            before(() => {
              cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})
      
            })
            
            it('2. Receive, 50 + 90 + 100 + 110 at once.', () => {
                
                cy.visit(`/orders/${purchase_order}`)
            
                cy.wait(1000)
                cy.contains('.pr-1', 'Receive').click({ force: true })
                cy.pause()
                cy.get('[placeholder="Packing material"]').eq(0).should('be.visible').type('9836389851',{ delay: 200 })
                cy.get('[placeholder="Product"]').eq(0).type(outbound_product_standard_bin, {delay:200})
                cy.get('[data-order-line-target="quantity"]').eq(0).type(50)

                cy.get('[placeholder="Packing material"]').eq(1).should('be.visible').type('9836389851',{ delay: 200 })
                cy.get('[placeholder="Product"]').eq(1).type(outbound_product_standard_bin, {delay:200})
                cy.get('[data-order-line-target="quantity"]').eq(1).type(90)

                cy.get('[placeholder="Packing material"]').eq(2).should('be.visible').type('9836389851',{ delay: 200 })
                cy.get('[placeholder="Product"]').eq(2).type(outbound_product_standard_bin, {delay:200})
                cy.get('[data-order-line-target="quantity"]').eq(2).type(100)

                cy.get('[placeholder="Packing material"]').eq(3).should('be.visible').type('9836389851',{ delay: 200 })
                cy.get('[placeholder="Product"]').eq(3).type(outbound_product_standard_bin, {delay:200})
                cy.get('[data-order-line-target="quantity"]').eq(3).type(110)

                cy.get('.button').click()

                for (let i = 0; i < 40; i++) {
                      cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                          statusElement => {
                              let status = statusElement.text()
                              if (status === 'completed') {
                                  cy.wait(500)
                                }
                            }
                        )
                    }

            })
        })


        describe.only('Move', () => {

            before(() => {
                cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
            })
    
            it('Move 50 items to standard-, remaining to bulk bin.', () => {
    
                //cy.visit(`/orders/${purchase_order}`)
                cy.visit('/orders/b2a6e4d3-79dc-43e6-b1d7-e9b5e374f1e6')
                //cy.url().should('include', `/orders/${purchase_order}`)
        
                cy.get('.text-lg').contains('Lines').should('be.visible')
                cy.get('[id*="tab_label"]').contains('Items').click({ force: true })
                cy.get('.selected [data-act-table-target="column"][data-column="container"]').scrollIntoView().should('be.visible')
                cy.wait(1000)

                cy.pause()

                cy.get('.cursor-pointer > :nth-child(12) > a').then(e1 =>{
                    let container_1 = e1.text().substring(11,19)
                    cy.log(container_1)
                })
                cy.get(':nth-child(16) > :nth-child(12) > a').then(e1 =>{
                    let container_2 = e1.text().substring(11,19)
                    cy.log(container_2)
                })
                cy.get(':nth-child(65) > :nth-child(12) > a').then(e1 =>{
                    let container_3 = e1.text().substring(11,19)
                    cy.log(container_3)
                })
                cy.get(':nth-child(156) > :nth-child(12) > a').then(e1 =>{
                    let container_4 = e1.text().substring(11,19)
                    cy.log(container_4)



                
                //cy.get('.cursor-pointer > :nth-child(12) > a').should('have.text', 'x 110').click()
                //cy.url().should('include', `/containers`)
        
                // Get container id's
                cy.url().then(($url) => {
                    const url = $url.split('/')
                    container = url[4]
                    cy.log(container)
                    cy.visit(`/containers/${container}`)
                    cy.url().should('include', `/containers/${container}`)
        
                // Get from bin location
                //cy.get('.bin-location-info-item a').then($bin => {
                //    from_bin_location = $bin.text()
                //    cy.log(from_bin_location)
        
                // Move container
                cy.visit('/inventory_moves/new')
                cy.url().should('include', '/inventory_moves/new')
                cy.get('[placeholder="Container"]').type(`${container}`.substring(0,8), {delay:200})
        
                cy.get('[placeholder="To bin location"]').type('PICKING', {delay:200})
                cy.get(`[data-satis-dropdown-item-text="PICKING"]`).click({force:true})
        
                cy.get('.primary').contains('Move').click()
            
            })
        })
    })
})
})