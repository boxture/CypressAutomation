const non_serialized_product = 'BXT-SNX99876'
const other_reference_number = Math.floor((Math.random() * 100000))
const purchase_order_number = Math.floor((Math.random() * 100000))
const customer_reference_number = Math.floor((Math.random() * 100000))

let sales_order


describe('Packlist info per country', () => {

    before(() => {
        cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
    })

    describe('Inventory', () => {
        
        it('Add non serialized products', () => {
            
            // 1. Navigate to Inventory Adjust
            cy.visit('/inventories/new')
            cy.url().should('include', '/inventories/new')

            // 2. Fill in Product
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
            cy.wait(3000)

            // 3. Fill in a Bin location
            cy.get('[placeholder="Bin location"]').type('PICKING', {delay:200})
            cy.get('[data-satis-dropdown-item-text="PICKING"]').click({force:true})

            // 4. Fill in a Status
            cy.get('#inventory_adjust_status').select('New')

            // 5. Fill in qty 
            cy.get('#inventory_adjust_quantity').type(12)

            // 6. Click Adjust
            cy.get('.button').click()
        })
    })
    describe('Create and confirm sales orders', () => {

        beforeEach(() => {
            cy.login({ email: 'account_owner@meter.com', password: 'qumtep-gUtwe8-vyvpun'})
        
        })
        
        it('Customer in AT - Austria', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+11)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Deandre', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })
        
        it('Customer in BE - Belgium', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+12)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Kawa', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in CZ - Czech Republic', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+13)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Stanislav', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in CH - Switzerland', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+13)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Adrien', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it.only('Customer in SE - Spain', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+14)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Marjorie', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in GR - Greece', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+15)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Θεόκλητος', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in IE - Ireland', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+16)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Eddie', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it.only('Customer in IT - Italy', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+17)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Durante', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in LU - Luxembourg', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+18)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Bob', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in NL - the Netherlands', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+19)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Silicon', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in NO - Norway', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+20)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Ruben', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in PL - Poland', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+21)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Dominika', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })

        it('Customer in SE - Sweden', () => {

            // 1. Navigate to Sales Order
            cy.visit('/orders/new?type=sales_order')
            cy.get('[id="tab_label_basics"]').scrollIntoView()

            // 2. Fill in Other Reference Number
            cy.get('[id="orders_sales_order_other_reference_number"]').type(other_reference_number)

            // 3. Fill in Purchase Order Number
            cy.get('[id="orders_sales_order_purchase_order_number"]').type(purchase_order_number)
        
            // 4. Fill in Customer Reference Number
            cy.get('[id^="orders_sales_order_customer_reference_number"]').type(customer_reference_number+22)

            // 5. Select Customer
            cy.get('[placeholder=Customer]').type('Julius', {delay:200})
        
            // 6. Fill in Product
            cy.wait(1000)
            cy.get('[placeholder="Product"]').type(non_serialized_product, {delay:200})
        
            // 7. Fill in quantity
            cy.get('[data-order-line-target="quantity"]').eq(0).clear().type(1)
        
            //Submit form
            cy.get('.button').contains('Create and continue editing').click()
            cy.url().should('include', '/edit')
        
            //Get sales order
            cy.url().then(($url) => {
                const url = $url.split('/')
                sales_order = url[4]
                cy.log(sales_order)
            
            cy.visit(`/orders/${sales_order}`)
            cy.url().should('include', `/${sales_order}`)
            cy.contains('.pr-1', 'Confirm').click({ force: true })

            // Assert State
            cy.get('.cursor-pointer')
                .find('td').eq(1)
                .should('not.contain.text', 'concept', {timeout:15000})
            })
        })
    })

    describe('Picklist',() => {

        before(() => {
            cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})
          })

        it('Create Picklist plan', () => {

            // 1. Navigate to Today's picklist plan
            cy.visit('pick_list_plans/97997ca8-064f-45a6-b6b9-2702b66df9c3')
            cy.url().should('include', '/pick_list_plans/97997ca8-064f-45a6-b6b9-2702b66df9c3')

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
            cy.get('#pick_list_plan_pick_list_plan_rule_groups_attributes_0_pick_list_plan_rules_attributes_TEMPLATE_field').select('product')

            // 9. Configure Value
            //cy.get('#pick_list_plan_pick_list_plan_rule_groups_attributes_0_pick_list_plan_rules_attributes_TEMPLATE_value').type(non_serialized_product, { delay:200 })
            //cy.get('[placeholder="Value"]',).eq(0, {force:true}).type(non_serialized_product, { delay:200 })
            cy.get('[data-field-operator=""] > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > .sts-dropdown > .h-12 > .flex-auto > .p-1').type(non_serialized_product, { delay:600 })

            // 10. Submit the page
            cy.get('.button').contains('Update and continue editing').click()
            cy.get('.signum-notification-body__mb').should('be.visible').contains('Pick list plan was successfully updated.', { timeout:5000 })

            // 11. Release plan
            cy.contains('.pr-1', 'Release').click({ force: true })

        })
    })
})