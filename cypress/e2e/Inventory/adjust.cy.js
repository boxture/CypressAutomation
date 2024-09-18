const full_product = 'BXT-SNF78252'
const outbound_product = 'BXT-SNO45975'
const serial_number_1 = Math.floor((Math.random() * 1000000000000));
const serial_number_2 = Math.floor((Math.random() * 1000000000000));



describe('Inventory Adjust', () => {

    beforeEach(() => {
        cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
    })

    it('Add two serial numbers - full products', () => {

        // 1. Navigate to Inventory Adjust
        cy.visit('/inventories/new')
        cy.url().should('include', '/inventories/new')

        // 2. Fill in Product
        cy.get('[placeholder="Product"]').type(full_product, {delay:200})

        // 3. Fill in a Bin location
        cy.get('[placeholder="Bin location"]').type('RECEIVING', {delay:200})
        cy.get('[data-satis-dropdown-item-text="RECEIVING"]').click({force:true})

        // 4. Fill in the serial numbrers
        cy.get('#inventory_adjust_serial_number').type(serial_number_1).type('{enter}')
        cy.get('#inventory_adjust_serial_number').type(serial_number_2).type('{enter}')

        // 5. Fill in a Status
        cy.get('#inventory_adjust_status').select('New')

        // 6. Click Adjust
        cy.get('.button').click()
        cy.log(`Adding ${serial_number_1} and ${serial_number_1}`)


    }),

    it('Remove two serial numbers added - full products', () => {

        // 1. Navigate to Inventory Adjust
        cy.visit('/inventories/new')
        cy.url().should('include', '/inventories/new')

        // 1. Fill in Product
        cy.get('[placeholder="Product"]').type(full_product, {delay:200})

        // 2. Fill in a Bin location
        cy.get('[placeholder="Bin location"]').type('RECEIVING', {delay:200})
        cy.get('[data-satis-dropdown-item-text="RECEIVING"]').click({force:true})

        // 3. Fill in a Serial Numbers created in previous test
        cy.get('#inventory_adjust_serial_number').type(serial_number_1).type('{enter}')
        cy.get('#inventory_adjust_serial_number').type(serial_number_2).type('{enter}')

        // 4. Remove inventory quantity
        cy.get('[id="inventory_adjust_quantity"]').type('{backspace}'+ -2)

        // 5. Fill in a Status
        cy.get('#inventory_adjust_status').select('New')

        // 6. Click Adjust
        cy.get('.button').click()
        cy.log(`Removing ${serial_number_1} and ${serial_number_1}`)

    })
    it('Add two outbound products', () => {

        // 1. Navigate to Inventory Adjust
        cy.visit('/inventories/new')
        cy.url().should('include', '/inventories/new')

        // 1. Fill in Product
        cy.get('[placeholder="Product"]').type(outbound_product, {delay:200})

        // 2. Fill in a Bin location
        cy.get('[placeholder="Bin location"]').type('PICKING', {delay:200})
        cy.get('[data-satis-dropdown-item-text="PICKING"]').click({force:true})

        // 4. Fill in a Status
        cy.get('#inventory_adjust_status').select('Defective')

        // 5. Fill in quantity
        cy.get('[id="inventory_adjust_quantity"]').type(2)

        // 6. Click Adjust
        cy.get('.button').click()

    })
    it('Remove two outbound products', () => {

        // 1. Navigate to Inventory Adjust
        cy.visit('/inventories/new')
        cy.url().should('include', '/inventories/new')

        // 2. Fill in Product
        cy.get('[placeholder="Product"]').type(outbound_product, {delay:200})

        // 3. Fill in a Bin location
        cy.get('[placeholder="Bin location"]').type('PICKING', {delay:200})
        cy.get('[data-satis-dropdown-item-text="PICKING"]').click({force:true})

        // 4. Fill in a Status
        cy.get('#inventory_adjust_status').select('Defective')

        // 5. Fill in target qty for this bin
        cy.get('[id="inventory_adjust_target_quantity"]').type(0)

        // 6. Click Adjust
        cy.get('.button').click()



    })


})