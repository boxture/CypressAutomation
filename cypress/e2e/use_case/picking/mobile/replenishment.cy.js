const outbound_product_standard_bin = 'BXT-SNX09843'
const outbound_product_no_standard_bin = 'BXT-SNO74652'
const inventory_adjust_quantity = '20'
const sales_order_quantity = '10'
const other_reference_number = Math.floor((Math.random() * 1000000))
const purchase_order_number = Math.floor((Math.random() * 1000000))
const customer_reference_number = Math.floor((Math.random() * 1000000))
const shipping_method = 'DHL'
const customer = 'Soylent'

let non_pickable_container_1
let non_pickable_container_2
let sales_order
let picklist

describe('Replenish a picklist line', () => {

    before(() => {
        cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
    })

    describe('Inventory', () => {

        it('1. Adjust inventory for two products whose bin is not the standard.', () => {
            
            
            // Create 2 non-pickable container

            // 1. Navigate to Containers
            cy.visit('/containers')
            cy.url().should('include', '/containers')

            // 2. Click Create
            cy.get('[href="/containers/new"]').click({force: true})

            // 3. Fill in Packing Material
            cy.get('[placeholder="Packing material"]').type('9836389850', {delay:200})

            // 4. Fill in bin location
            cy.get('[placeholder="Bin location"]').type('PICKING',{delay:200})
            cy.get('[data-satis-dropdown-item-text="PICKING"]').click()

            // 5. Click Create Container
            cy.get('[type="submit"]').click()
            cy.wait(1000)
            
            cy.get('.signum-notification-body').then(e1 =>{
                non_pickable_container_1 = e1.text().substring(11,19)
            cy.log(non_pickable_container_1)

            cy.wait(1000)

            // Creating 2nd container

            // 1. Navigate to Containers
            cy.visit('/containers')
            cy.url().should('include', '/containers')

            // 2. Click Create
            cy.get('[href="/containers/new"]').click({force: true})

            // 3. Fill in Packing Material
            cy.get('[placeholder="Packing material"]').type('9836389850', {delay:200})

            // 4. Fill in bin location
            cy.get('[placeholder="Bin location"]').type('PICKING',{delay:200})
            cy.get('[data-satis-dropdown-item-text="PICKING"]').click()

            // 5. Click Create Container
            cy.get('[type="submit"]').click()
            cy.wait(1000)
            
            cy.get('.signum-notification-body').then(e1 =>{
                non_pickable_container_2 = e1.text().substring(11,19)
            cy.log(non_pickable_container_2)

            cy.wait(1000)


        // Adjust inventory for both containers

            // 1. Navigate to Inventory Adjust
            cy.visit('/inventories/new')
            cy.url().should('include', '/inventories/new')

            // 2. Fill in a container
            cy.get('[placeholder="Container"]').type(non_pickable_container_1, {delay:200})

            /* 3. Fill in a Bin location
            Note: Bin location is filled in automatically based on the container */

            // 4. Fill in Product
            cy.get('[placeholder="Product"]').type(outbound_product_standard_bin, {delay:200})
            cy.wait(1000)

            // 5. Fill in an Adjustment Quantity
            cy.get('[id="inventory_adjust_quantity"]').clear().type(inventory_adjust_quantity)

            // 6. Fill in a Status
            cy.get('#inventory_adjust_status').select('New')

            // 6. Click Adjust
            cy.get('.button').click()

            cy.wait(1000)

        // Adjust inventory for the 2nd container created.

            // 1. Fill in a container
            cy.get('[placeholder="Container"]').type(non_pickable_container_2, {delay:200})

            /* 2. Fill in a Bin location
            Note: Bin location is filled in automatically based on the container */

            // 3. Fill in Product
            cy.get('[placeholder="Product"]').type(outbound_product_no_standard_bin, {delay:200})
            cy.wait(1000)

            // 4. Fill in an Adjustment Quanity
            cy.get('[id="inventory_adjust_quantity"]').clear().type(inventory_adjust_quantity)

            // 5. Fill in a Status
            cy.get('#inventory_adjust_status').select('New')

            // 6. Click Adjust
            cy.get('.button').click()

            cy.wait(1000)

            })
        })
    })
})

    describe('Order', () => {

        beforeEach(() => {
            cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
          
        })

        it('2. Create a sales order for a both products, with one product configured with a standard bin.', () => {
            
            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()
    
            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)
    
            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number)
        
            // 5. Fill in Shipping Method
            cy.get('[placeholder="Shipping method"]').type(shipping_method, {delay:200})  // use customer Soylent Green
    
            // 6. Select Customer
            cy.get('[placeholder=Customer]').type(customer, {delay:200})
        
            // 7. Fill in Product configured with a standard bin
            cy.get('[placeholder="Product"]').type(outbound_product_standard_bin, {delay:200})
            cy.wait(1000)
        
            // 8. Fill in quantity first product
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(sales_order_quantity)

            // 10. Fill in Product that has no standard bin configured.
            cy.get('[placeholder="Product"]').eq(1).type(outbound_product_no_standard_bin, {delay:200})
            
            // 8. Fill in quantity 2nd product
            cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(sales_order_quantity)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
            const url = $url.split('/')
            sales_order = url[4]
            cy.log(sales_order)

            //Confirm Sales order
            cy.visit(`/orders/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })
            for (let i = 0; i < 600; i++) {
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



    describe('Generate a picklist', () => {

        before(() => {
          cy.login({email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})
      
        })
      
          it('** 3. Replenish the picklist-line', () => {
      
            cy.visit(`/orders/${sales_order}`)
      
            cy.wait(2000)
            cy.contains('.pr-1', 'Pick').click({ force: true })
            cy.url().should('include', `/orders/${sales_order}/pick/new`)

            cy.wait(2000)
            cy.get('.primary').contains('Pick').click()
            cy.get('[id*="tab_label"]').contains('Picklists').scrollIntoView().click()
            cy.get('.selected td:nth-child(5)').eq(2).should('have.text', 'pending').click()

            cy.wait(2000)
            cy.get('[id*="tab_label"]').contains('Lines').scrollIntoView().click()
            cy.get('.selected td:nth-child(6)').eq(0).should('have.text', 'replenish').click()
            cy.get('.selected td:nth-child(6)').eq(1).should('have.text', 'pending').click()

      
            })
        })
        describe('Empty bin-locations', () => {
            
            before(() => {
              cy.login({email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
            
            })
            
            it('4. Downadjust the remaining items for both containers', () => {
              cy.visit('/inventories/new')
              cy.url().should('include', '/inventories/new')

              // Fill in container the 1st container
              cy.get('[placeholder="Container"]').type(non_pickable_container_1, {delay:200})
              cy.wait(1000)

              // Fill in the remaining items to downadjust
              cy.get('[id="inventory_adjust_quantity"]').type('{backspace}'+ -10)

              // Submit page
              cy.get('.button').click()

              cy.wait(2000)

              // Fill in the 2nd container
              cy.get('[placeholder="Container"]').type(non_pickable_container_2, {delay:200})
              cy.wait(1000)

              // Fill in the remaining items to downadjust
              cy.get('[id="inventory_adjust_quantity"]').type('{backspace}'+ -10)

              // Submit page
              cy.get('.button').click()

            })
          })
        })
