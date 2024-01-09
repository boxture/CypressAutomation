const outbound_product = ('BXT-SNO') + Math.floor((Math.random() * 100000) + 1)
let product_id

describe('State Transition', () => {
    
    describe('Product', () => {

    beforeEach(() => {
    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})
        
    })

        it(' --> concept', () => {

            // 1. Navigate to products and click New product.
            cy.visit('/products/new')
            cy.url().should('eq', 'https://oms.staging.boxture.com/products/new')

            // 2. Fill in a product number.
            cy.get('[id="product_number"]').type(outbound_product)

            // 3. /Fill in a product name.
            cy.get('[id="product_name"]').type(outbound_product.substring(4,12))

            // 4. Fill in a product description.
            cy.get('[id="product_description"]').type('This is a demo product.')

            // 5. Click Create Product.
            cy.get('.button').contains('Create and continue editing').click()

            cy.wait(2000)

            //Get product id
            cy.url().then(($url) => {
            const url = $url.split('/')
            product_id = url[4]
            cy.log(product_id)
            cy.visit(`/products/${product_id}`)

            })

            // 6. Search the product created.
            cy.visit('/products')
            cy.resetView()
            cy.get('[placeholder="Search"]').type(outbound_product).type('{enter}')
            cy.wait(1000)

            // 7. Verify state.
            cy.get('.selected [data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
            cy.get('td').eq(14).contains('concept')

        })
        
        it('concept --> active', () => {

            // 1. Navigate to products.
            cy.visit(`/products/${product_id}`)
            cy.url().should('include', product_id)

            // 2. Publish product
            cy.contains('.pr-1', 'Publish').click({ force: true })

            // 3. Verify state.
            cy.visit('/products/')
            cy.url().should('include', '/products')

            cy.get('.selected [data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
            cy.get('td').eq(14).contains('active')

        })

        it('active --> expired', () => {

            // 1. Navigate to products.
            cy.visit(`/products/${product_id}`)
            cy.url().should('include', product_id)

            // 2. Expire  product
            cy.contains('.pr-1', 'Expire').click({ force: true })

            // 3. Navigate to products
            cy.visit('/products/')
            cy.url().should('include', '/products')

            // 4. Verify state.
            cy.get('.selected [data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
            cy.get('td').eq(14).contains('expired')

        })

        it('expired --> active', () => {

            // 1. Navigate to products.
            cy.visit(`/products/${product_id}`)
            cy.url().should('include', product_id)

            // 2. Expire  product
            cy.contains('.pr-1', 'Republish').click({ force: true })

            // 3. Navigate to products
            cy.visit('/products/')
            cy.url().should('include', '/products')

            // 3. Verify state.
            cy.get('.selected [data-act-table-target="column"][data-column="state"]').scrollIntoView().should('be.visible')
            cy.get('td').eq(14).contains('active')

        })

    })
    
})