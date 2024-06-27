const non_serialized_product = 'BXT-SNO78356'
const tote = 'TOTE-100129'

let non_pickable_container
let sales_order
let barcode
let inventory_adjust_quantity = 1001

/*

TEST CASES

1. Pick a high volume from a non pickable container

*/


describe('Pick high volume', () => {

  before(() => {
    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    })

    describe('Inventory', () => {

        it('1. Create a non-pickable container containing non serialized products', () => {

    // Create non-pickable container

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
            non_pickable_container = e1.text().substring(11,19)
        cy.log(non_pickable_container)

        cy.wait(5000)


    // Adjust inventory for non-pickable container

        // 6. Navigate to Inventory Adjust
        cy.visit('/inventories/new')
        cy.url().should('include', '/inventories/new')

        // 6. Fill in a container
        cy.get('[placeholder="Container"]').type(`${non_pickable_container}`, {delay:200})

        /* 7. Fill in a Bin location
        Note: Bin location is filled in automatically based on the container */

        // 8. Fill in Product
        cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})

        // 9. Fill in an Adjustment Quanity
        cy.get('[id="inventory_adjust_quantity"]').clear().type(inventory_adjust_quantity)

        // 12. Fill in a Status
        cy.get('#inventory_adjust_status').select('New')

        // 13. Click Adjust
        cy.get('.button').click()

        cy.wait(5000)

        })
    })
})


describe('Order', () => {

    before(() => {
        cy.login({email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    })

    it('2. Create Sales order ', () => {

        // 1. Navigate to Sales Order
        cy.visit('/orders/new?type=sales_order')

        // 2. Select Customer
        cy.get('[placeholder=Customer]').type('Looney Tunes', {delay:200})

        // 5. Fill in Product with serialization mode is outbound
        cy.get('[placeholder="Product"]').eq(0).type(non_serialized_product, {delay:200})

        // 6. Fill in quantity
        cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(inventory_adjust_quantity-1)

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
        for (let i = 0; i < 600; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                statusElement => {
                    let status = statusElement.text()
                    if (status !== 'processing') {
                        cy.wait(1000)
                        cy.log(i)
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
        cy.get('[id*="tab_label"]').contains('Picklists')

        cy.log(`sales order ${sales_order}`)
        cy.log(`tote ${tote}`)
        cy.log(`container ${non_pickable_container}`)

        cy.wait(2500)
        cy.pause()

    })

})

describe.skip("** Pick high volume", () => {


    it('4. Swipe pickAll', () => {

        // 1. Login on Mobile.
        cy.visit('/mobile')
        cy.url().should('include', '/mobile')

        cy.pause()

        // Assert login screen
        cy.url().should('include', '/mobile')
        cy.get('.login-screen-title').contains('Login')

        // 2. Fill in credentials.
        cy.get('#user_email').type('wrap-it_picker@wrap-it.com')
        cy.get('#user_password').type('picking')

        // 3. Click Log in.
        cy.get('button').click()
        cy.get('.toast-text', {timeout:30000}).contains('Logged in').should('exist')

        // Assert login page.
        cy.get('.icon').should('be.visible')
        cy.get(':nth-child(1) > .item-link > .item-inner > .item-title').click() // << All

        cy.get(':nth-child(1) > .item-link > .item-inner > .item-title', {visible:true}).eq(1).click() // << Ready To Pick
        cy.wait(2500)

        // 4. Scroll and click the last (most recent) order.
        cy.get('.item-link > .item-inner').last().click()

        // 5. Scan tote
        cy.window().then(win => {
        barcode = cy.stub(win, 'prompt')
        barcode.returns(tote)

        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
        cy.get('.toast-text', {timeout:30000}).contains(`Using tote ${tote}`).should('exist')

        })
        // 1. Scan non-pickable container
        cy.window().then(win => {
        barcode.restore()
        cy.stub(win, 'prompt').returns(non_pickable_container)

        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
        cy.get('.toast-text', {timeout:30000}).contains('Container contains too many products, take products from the container').should('exist')

        })
        // 2. pickAll
        cy.contains('Pick all').click({force:true})
        cy.get('.toast-text', {timeout:30000}).contains('Pick list fully picked, next pick list opened').should('exist')

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

        // 3. Fill in Product
        cy.get('[placeholder="Product"]').eq(0).type(non_serialized_product, {delay:200})

        // 4. Enter quantity (automatically)
        cy.get('[id*="quantity"]').eq(0).click().eq(0).type(inventory_adjust_quantity-1)

        // 5. Click Pack
        cy.get('.button').contains('Pack').click()

        })

    })

})