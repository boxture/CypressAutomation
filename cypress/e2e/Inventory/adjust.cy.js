let serial_number = Math.floor((Math.random() * 1000000000000) + 1);

describe('Inventory Adjust', () => {

    before(() => {
        cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
    })

    it('serialized full product', () => {

        // 1. Navigate to Inventory Adjust
        cy.visit('/inventories/new')
        cy.url().should('include', '/inventories/new')



        // 3. Fill in Product
        cy.get('[placeholder="Product"]').type('BXT-SNF78252', {delay:200})

        // 2. Fill in a Bin location
        cy.get('[placeholder="Bin location"]').type('PICKING', {delay:200})
        cy.get('[data-satis-dropdown-item-text="PICKING"]').click({force:true})


        // 4. Fill in a Serial Number
        cy.get('#inventory_adjust_serial_number').type(serial_number)

        // 5. Fill in a Status
        cy.get('#inventory_adjust_status').select('New')

        // 6. Click Adjust
        cy.get('.button').click()

    })

})