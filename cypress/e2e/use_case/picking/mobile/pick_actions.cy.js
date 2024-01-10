const outbound_serial_number = Math.floor((Math.random() * 1000000000000) + 1);
const full_serial_number = Math.floor((Math.random() * 1000000000000) + 1);
const full_product = 'BXT-SNF78252'
const outbound_product = 'BXT-SNO78354'
const tote = 'TOTE-100068'

let pickable_container
let non_pickable_container
let sales_order
let barcode

/*

TEST CASES

1. Pick a pickable container
2. Pick from a non pickable container
3. Pick by Serial Number
4. Pick by Product Number
5. Pick by EAN or UPC
6. Pick by alias Product Number
7. Pick by alias Product Name
8. Pick by alias EAN or UPC

*/


describe("Picking scenario's", () => {

  before(() => {
    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    })

    describe('Inventory', () => {
        
        it('1. Create a pickable and non-pickable, container containing full and outbound products, create outbound products loose on a bin', () => {

    // Create pickable container

        // 1. Navigate to Containers
        cy.visit('/containers')
        cy.url().should('include', '/containers')

        // 2. Click Create
        cy.get('[href="/containers/new"]').click({force: true})

        // 3. Fill in Packing Material
        cy.get('[placeholder="Packing material"]').type('6474849091', {delay:200})

        // 4. Fill in bin location
        cy.get('[placeholder="Bin location"]').type('PICKING',{delay:200})
        cy.get('[data-satis-dropdown-item-text="PICKING"]').click()

        // 5. Click Create Container
        cy.get('[type="submit"]').click()

        cy.get('.signum-notification-body').then(e1 =>{
            pickable_container = e1.text().substring(11,19)
            cy.log(pickable_container)

        cy.wait(5000)

        
    // Create non-pickable container

        // 1. Click Create
        cy.get('[href="/containers/new"]').click({force: true})

        // 2. Fill in Packing Material
        cy.get('[placeholder="Packing material"]').type('9836389850', {delay:200})

        // 3. Fill in bin location
        cy.get('[placeholder="Bin location"]').type('PICKING',{delay:200})
        cy.get('[data-satis-dropdown-item-text="PICKING"]').click()

        // 4. Click Create Container
        cy.get('[type="submit"]').click()

        cy.get('.signum-notification-body').then(e1 =>{
            non_pickable_container = e1.text().substring(11,19)
            cy.log(non_pickable_container)

        cy.wait(5000)


    // Adjust inventory for pickable container

        // 6. Navigate to Inventory Adjust
        cy.visit('/inventories/new')
        cy.url().should('include', '/inventories/new')

        // 7. Fill in a container
        cy.get('[placeholder="Container"]').type(`${pickable_container}`, {delay:200})

        /* 8. Fill in a Bin location
        Note: Bin location is filled in automatically based on the container */

        // 9. Fill in Product
        cy.get('[placeholder="Product"]').type(full_product, {delay:200})

        // 10a. Fill in a Serial Number
        cy.get('#inventory_adjust_serial_number').type(full_serial_number+1).type('{enter}')

        // 10b. Fill in a 2nd Serial Number
        cy.get('#inventory_adjust_serial_number').type(full_serial_number+2)

        // 12. Fill in a Status
        cy.get('#inventory_adjust_status').select('New')

        // 13. Click Adjust
        cy.get('.button').click()

        cy.wait(5000)

    // Adjust inventory for non-pickable container

        // 7. Fill in a container
        cy.get('[placeholder="Container"]').type(`${non_pickable_container}`, {delay:200})

        /* 8. Fill in a Bin location
        Note: Bin location is filled in automatically based on the container */

        // 9. Fill in Product
        cy.get('[placeholder="Product"]').type(full_product, {delay:200})

        // 10a. Fill in a Serial Number
        cy.get('#inventory_adjust_serial_number').type(full_serial_number+3).type('{enter}')

        // 10b. Fill in a 2nd Serial Number
        cy.get('#inventory_adjust_serial_number').type(full_serial_number+4).type('{enter}')

        // 12. Fill in a Status
        cy.get('#inventory_adjust_status').select('New')

        // 13. Click Adjust
        cy.get('.button').click()

        cy.wait(5000)

        })


    // Adjust inventory loose on a bin

        // 1. Fill in Product
        cy.get('[placeholder="Product"]').type(outbound_product, {delay:200})

        // 2. Fill in a Bin location
        cy.get('[placeholder="Bin location"]').type('PICKING', {delay:200})
        cy.get('[data-satis-dropdown-item-text="PICKING"]').click({force:true})

        // 3. Fill in Adjustment Quantity
        cy.get('[id="inventory_adjust_quantity"]').type(10)

        // 4. Fill in a Status
        cy.get('#inventory_adjust_status').select('New')

        // 5. Click Adjust
        cy.get('.button').click()

        })

    })

})

describe('Order', () => {

    before(() => {
        cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
    
    })
    
    it('2. Create Sales order for all items', () => {
    
        // 1. Navigate to Sales Order
        cy.visit('/orders/new?type=sales_order')
    
        // 2. Select Customer
        cy.get('[placeholder=Customer]').type('Soylent', {delay:200})
    
        // 3. Fill in Product with serialization mode is full
        cy.get('[placeholder="Product"]').type(full_product, {delay:200})
    
        // 4. Fill in quantity
        cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(4)

        // 5. Fill in Product with serialization mode is outbound
        cy.get('[placeholder="Product"]').eq(1).type(outbound_product, {delay:200})

        // 6. Fill in quantity
        cy.get('[data-order-line-target="quantity"]').eq(1).clear().type(10)
    
        // 7. Submit form
        cy.get('.button').contains('Create and continue editing').click()
        cy.url().should('include', '/edit')
    
        // Get sales order
        cy.url().then(($url) => {
        const url = $url.split('/')
        sales_order = url[4]
        cy.log(sales_order)
    
        // Confirm Sales order
        cy.visit(`/orders/${sales_order}`)
        cy.contains('.pr-1', 'Confirm').click({ force: true })
        for (let i = 0; i < 40; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                statusElement => {
                    let status = statusElement.text()
                    if (status !== 'processing') {
                        cy.wait(500)
                        }
                    }
                )
            }
    
        })
    
    })
    
})

describe('Pick list', () => {
    
    before(() => {

        cy.login({email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})
    })

    it('3. Generate a pick list', () => {
        
        cy.visit(`/orders/${sales_order}`)

        cy.contains('.pr-1', 'Pick').click({ force: true })
        cy.url().should('include', `/orders/${sales_order}/pick/new`)

        cy.get('.primary').contains('Pick').click()
        cy.get('[id*="tab_label"]').contains('Pick Lists')

    })

})
    
describe("** Pick scenario's", () => {
    
    it('4. Pick container, from non-pickable container, by serial number, product number, ean or upc, aliases and swipe pickOne', () => {

        // 1. Login on Mobile.
        cy.visit('/mobile')
        cy.url().should('include', '/mobile')

        // Assert login screen
        cy.url().should('include', '/mobile')
        cy.get('.login-screen-title').contains('Login')
  
        // 2. Fill in credentials.
        cy.get('#user_email').type('wrap-it_picker@wrap-it.com')
        cy.get('#user_password').type('picking')
  
        // 3. Click Log in.
        cy.get('button').click()
  
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
        // 6. Scan pickable container
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns(pickable_container)

        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        // 7. Scan non-pickable container
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns(non_pickable_container)

        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        // 8. Scan serial number from the non-pickable container
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns(full_serial_number+3)

        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        // 9. Scan 2nd serial number from the non-pickable container
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns(full_serial_number+4)

        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        // 10. Scan product
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns(outbound_product)

        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        // 11. Scan ean or upc
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns(9990000010021)

        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        // 12. Scan alias product number
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('45387ONS-TXB')
    
        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        // 13. Scan alias ean or upc
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns('1200100000999')
    
        cy.wait(2500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        // 14. Swipe PickOne
        cy.wait(2500)
        cy.get('.swipeout-content > .item-link > .item-inner')
        .trigger('pointerdown')
        cy.wait(500)

        cy.get('.swipeout-content > .item-link > .item-inner')
        .trigger('pointermove', 'right')
        cy.wait(500)

        cy.get('.swipeout-content > .item-link > .item-inner')
        .trigger('pointerup', { force: true })
        cy.wait(500)

        // 15. pickAll
        cy.contains('Pick all').click({force:true})
        
        })

      })

    })

describe('Release tote', () => {

    before(() => {
        cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})
    
        })

    it('5. Pack', () => {

        // 1. Navigate to Packs
        cy.visit(`/orders/${sales_order}/pack/new`)

        // 2. Scan tote
        cy.get('[placeholder="Tote"]').eq(1).type(tote, {delay:200})

        // 3. Scan picked container
        cy.get('[placeholder="Container"]').eq(1).type(pickable_container, {delay:200})

        // 4. Scan full product from the picked container
        cy.get('[placeholder="Product"]').eq(0).type(full_product, {delay:200})

        // 5. Scan serial number from picked container
        cy.get('[id*="serial_number"]').type(full_serial_number+1).type('{enter}')

        // 6. Scan 2nd serial number from picked container
        cy.get('[id*="serial_number"]').type(full_serial_number+2)

        // 7. Scan tote
        cy.get('[placeholder="Tote"]').eq(2).type(tote, {delay:200})

        // 8. Scan full product from non-pickable container
        cy.get('[placeholder="Product"]').eq(1).type(full_product, {delay:200})

        // 9. Scan serial number from non-pickable container
        cy.get('[id*="serial_number"]').eq(1).type(full_serial_number+3).type('{enter}')

        // 10. Scan 2nd serial number from non-pickable container
        cy.get('[id*="serial_number"]').eq(1).type(full_serial_number+4)

        // 11. Scan tote
        cy.get('[placeholder="Tote"]').eq(3).type(tote, {delay:200})

        // 12. Scan full product from non-pickable container
        cy.get('[placeholder="Product"]').eq(2).type(outbound_product, {delay:200})

        // 13. Scan outbound serial numbers
        cy.get('[id*="serial_number"]').eq(2).type(outbound_serial_number+1).type('{enter}')
        cy.get('[id*="serial_number"]').eq(2).type(outbound_serial_number+2).type('{enter}')
        cy.get('[id*="serial_number"]').eq(2).type(outbound_serial_number+3).type('{enter}')
        cy.get('[id*="serial_number"]').eq(2).type(outbound_serial_number+4).type('{enter}')
        cy.get('[id*="serial_number"]').eq(2).type(outbound_serial_number+5).type('{enter}')
        cy.get('[id*="serial_number"]').eq(2).type(outbound_serial_number+6)

        // 14. Enter quantity (automatically)
        cy.get('[id*="quantity"]').eq(2).click()

        // 15. Click Pack
        cy.get('.button').contains('Pack').click()

        })

    })

})