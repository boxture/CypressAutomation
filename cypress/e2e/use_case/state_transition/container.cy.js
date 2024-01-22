let container
let packing_material = 'Box 1'
let bin_location='picking'
let product = 'BXT-SNXX29999477'
let sales_order
let barcode

 describe('State Transition', ()=>{

    beforeEach(() => {
    cy.login({ email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})
     })

    it('--> available',()=>{


    // 1. Navigate to Containers
    cy.visit('/containers')
    cy.url().should('include', '/containers')

    // 2. Click Create
    cy.get('[href="/containers/new"]').click({force: true})

    // 3. Fill in Packing Material
    cy.get('[placeholder="Packing material"]').type(packing_material, {delay:200})

    // 4. Fill in bin location
    cy.get('[placeholder="Bin location"]').type(bin_location,{delay:200})
    cy.get('[data-satis-dropdown-item-text="PICKING"]').click()

    // 5. Click Create Container
    cy.get('[type="submit"]').click()
    cy.wait(2000)
    cy.get('.signum-notification-drawer-tray .py-1').first().find('a').click({force:true})
    cy.wait(5000)
    cy.url().then(($url) => {
    const url = $url.split('/')
    container = url[4]
    cy.log(container)


    })


})



describe('available --> picked',()=>{
    it('Adjust Inventory',()=>{

    cy.visit('/inventories/new')
    cy.get('[placeholder="Bin location"]').type(bin_location,{delay:200})
    cy.get('[data-satis-dropdown-item-text="PICKING"]').click()
    cy.get('[placeholder="Container"]').type(container.substring(0,8),{delay:200})
        // 3. Fill in Product
    cy.get('[placeholder="Product"]').type(product, {delay:200})
    cy.get('[data-satis-dropdown-item-text="[Boxture Acceptance Test] BXT-SNXX29999477 BXT-SNXX 20221 Demo Product"]').click()
    cy.wait(1000)
    cy.get('#inventory_adjust_quantity').type('1', {delay:200})
    // 5. Fill in a Status
    cy.get('#inventory_adjust_status').select('New')

    // 6. Click Adjust
    cy.get('.button').click()
    cy.contains('Adding inventory')
    cy.contains('Inventory Added for BXT-SNXX29999477')

    })

    it('Create a sales order', () => {

    // CREATE A SALES ORDER

    // 1. Navigate to Sales Order
    cy.visit('/orders/new?type=sales_order')

    // 2. Select Customer
    cy.get('[placeholder=Customer]').type('Boxture', {delay:200})

    // 3. Fill in Product
    cy.get('[placeholder="Product"]').type(product, {delay:200})

    // 4. Fill in quantity
    //cy.get('[id^=orders_sales_order_order_lines_attributes_TEMPLATE_quantity').clear().type(1)
    cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)

    //Submit form
    cy.get('.button').contains('Create and continue editing').click()
    cy.url().should('include', '/edit')
    //Get sales order
    cy.url().then(($url) => {
    const url = $url.split('/')
    sales_order = url[4]
    cy.log(sales_order)
    })
    cy.contains('.pr-1', 'Confirm').click({ force: true })
    for (let i = 0; i < 20; i++) {
			cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
				statusElement => {
					let status = statusElement.text()
					if (status === 'confirming') {
						cy.wait(500)
					  }
				  }
			  )
		  }

    })

    it('Generate a pick list', () => {

        // 1. Navigate to the kit order created.
        cy.visit(`/orders/${sales_order}`)
        cy.url().should('include', `/orders/${sales_order}`)

        // 2. Click Pick from the context menu.
        cy.contains('.pr-1', 'Pick').click({ force: true })
        // 3. Click Pick.
        cy.get('.primary').contains('Pick').click()

        for (let i = 0; i < 300; i++) {
            cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
                statusElement => {
                    let status = statusElement.text()
                    if (status === 'allocated') {
                        cy.wait(1000)
                      }
                  }
              )
          }

        cy.get('[id*="tab_label"]').contains('Pick Lists')

    })

    it('Pick Sales Order', () => {

        // 1. Login on Mobile.
        cy.visit('/mobile')
        cy.url().should('include', '/mobile')

        // Assert login screen
        // cy.url().should('include', '/mobile')
        // cy.get('.login-screen-title').contains('Login')

        // // 2. Fill in credentials.
        // cy.get('#user_email').type('pavirajuv+5@gmail.com')
        // cy.get('#user_password').type('Giftofgod@123')

        // 3. Click Log in.
        // cy.get('button').click()

        // Assert login page.
        // cy.get('.icon').should('be.visible')
        cy.get(':nth-child(1) > .item-link > .item-inner > .item-title').contains('All').click() // << All
        cy.wait(1500)

        // 4. Scroll and click the last (most recent) order.
        cy.get('.page-current > .page-content > .list > ul > li > .item-link > .item-inner').last().click()
        cy.log(container)
        // 5. Fill in a Tote.
        cy.wait(1500)
        cy.window().then(win => {
        barcode = cy.stub(win, 'prompt')
        barcode.returns('TOTE-100091')

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()

        })
        cy.window().then(container1 => {
        barcode.restore()
        cy.stub(container1, 'prompt').returns(container.substring(0,8))

        cy.wait(1500)
        cy.get('.page-current > .toolbar > .toolbar-inner svg').click()
        cy.wait(1500)

        })

    })

    it('picked status of container', ()=>{
        cy.visit(`/containers/${container}`)
        cy.contains('picked')
    })
    })

})


