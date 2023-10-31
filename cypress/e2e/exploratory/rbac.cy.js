// TEST CASES:

// The test cases below, will check the accessibility and actions for each role and combined.

// 1. Login as: [BUSY]
//    - Super Admin          2FA
//    - Admin                2FA
//    - Billing Admin        2FA
//    - Billing
//    - Regular User
//    - Account Owner
//    - Reporting
//    - Warehouse associate
//    - Receiver
//    - Pick list planner
//    - Picker
//    - Packer
//    - Shipper
// 2. Assert all accessible options for each role. [BUSY]
// 3. Assert all allowed actions for each role. [BUSY]
// 4. Page doesn't crash updating a non accessible url. [PENDING]
// 5. Login using combine roles: [PENDING]
//    - roles, picker, packer, shipper
//    - account owner, billing, reporting
//    - receiver, regular
//    - pick list planner, warehouse associate
// 6. Assert all accessible options for each user with combining roles [PENDING]
// 7. Assert all allowed actions for each role with combining roles [PENDING]

// KNOWN ISSUES:
// https://github.com/boxture/oms/issues/3035: role account owner has access to the Inventory overview
// https://github.com/boxture/oms/issues/3372: account owner and reporting have access to Inventory adjust
// https://github.com/boxture/oms/issues/3375: simplify side-bar
// https://github.com/boxture/oms/issues/3379: receiver ability to Adjust Inventory
// https://github.com/boxture/oms/issues/3381: shipper able to create an order
// https://github.com/boxture/oms/issues/3382: billing not access to Reports
// https://github.com/boxture/oms/issues/3394: no 2FA for role Super User
// No ticket                                 : automate 2FA (Super User, Admin and Billing Admin)
// https://github.com/boxture/oms/issues/3516: role account owner is able to create a Transfer


describe('RBAC visibility', () => {
    it('Super User', () => {
      cy.login({ email: 'wrap-it_super_user@wrap-it.com', password: 'cipceg-xihpUr-pebbu4'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('contain', 'Pick lists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('contain', 'Adjust')
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products
        .and('contain', 'Products')
        .and('contain', 'Import')
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Bin location movements')
        .and('contain', 'Container Bin Location Movements')
        .and('contain', 'Container Inventory Adjustments')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Inventory on hand')
        .and('contain', 'Manual inventory adjustments')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
        .and('contain', 'Replenishment items')
        .and('contain', 'Shipped products')
        .and('contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('contain', 'Billing')                        // This should refer to Billing
        .and('contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('contain', 'Transaction logs')

        // Audits
        .and('contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('contain', 'Admin')
        .and('contain', 'Users & Accounts')
        .and('contain', 'Accounts')
        .and('contain', 'Users')

        // Admin > Carriers & Services
        .and('contain', 'Carriers & Services')
        .and('contain', 'Carriers')
        .and('contain', 'Channels')
        .and('contain', 'Service types')
        .and('contain', 'Shipping methods')
        .and('contain', 'Holidays')
        .and('contain', 'Reasons')

        // Admin > Warehousing
        .and('contain', 'Warehousing')
        .and('contain', 'Locations')
        .and('contain', 'Bin locations')
        .and('contain', 'Totes')
        .and('contain', 'Packing materials')

        // Admin > Settings
        .and('contain', 'Settings')

        // Admin > Integration
        .and('contain', 'Integration')
        .and('contain', 'Flows')
        .and('contain', 'Messages')
        .and('contain', 'Credentials')
        .and('contain', 'Oauth')
        .and('contain', 'Authorized')
        .and('contain', 'Applications')
        .and('contain', 'Third party')

        // Admin > Imports
        .and('contain', 'Imports')                // this should refer to Admin > Imports
        .and('contain', 'Bin-locations')
        .and('contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('contain', 'Totes')
        .and('contain', 'Users')
        .and('contain', 'Adjust Inventory')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Orders
        .and('contain', 'Purchase order')         // this should refer to Admin > Imports > Orders
        .and('contain', 'Transfer order')         // this should refer to Admin > Imports > Orders
        .and('contain', 'Return order')           // this should refer to Admin > Imports > Orders
        .and('contain', 'Scrap order')            // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('contain', 'Messaging')
        .and('contain', 'Messages')
        .and('contain', 'Templates')              // this should refer to Messaging Template
        .and('contain', 'Layouts')
        .and('contain', 'Locales')                // this should refer to Messaging Locales
        .and('contain', 'Campaigns')
        .and('contain', 'Lists')

        // Admin > Papers
        .and('contain', 'Papers')
        .and('contain', 'Templates')              // this should refer to Papers Template
        .and('contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('contain', 'Sites')

        // Admin > Apps
        .and('contain', 'Apps')

        // Admin > Billing
        .and('contain', 'Billing')                // this should refer to Admin > Billing
        .and('contain', 'Sources')
        .and('contain', 'Event types')
        .and('contain', 'Rate groups')
        .and('contain', 'Rate types')
        .and('contain', 'Rates')

        // Admin > Exceptions
        .and('contain', 'Exceptions')

    }),
    it.skip('Admin visiblilty', () => {  // tc fails 2FA to be automated

      cy.login({ email: 'wrap-it_admin_user@wrap-it.com', password: 'nuzgu5-hatpuh-pisqyD'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // 2FA to be implemented.

    }),
    it.skip('Billing Admin', () => {    // tc fails 2FA to be automated
      cy.login({ email: 'wrap-it_billing_admin@wrap-it.com', password: '.Q@9x]LgdLP#g>D'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

    }),
    it('Billing', () => {
      cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('not.contain', 'Pick lists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        //Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products #3375
        .and('contain', 'Products')
        .and('not.contain', 'Import')                     // this should refer to the product import
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting #3382
      //.and('contain', 'Reporting')
      //.and('contain', 'Bin location movements')
      //.and('contain', 'Container Bin Location Movements')
      //.and('contain', 'Container Inventory Adjustments')
      //.and('contain', 'Inbounded inventory items')
      //.and('contain', 'Inventory on hand')
      //.and('contain', 'Manual inventory adjustments')
      //.and('contain', 'Open sales orders')
      //.and('contain', 'Open receives')
      //.and('contain', 'Replenishment items')
      //.and('contain', 'Shipped products')
      //.and('contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('contain', 'Billing')                        // This should refer to Billing
        .and('contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
      //.and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')        // this should refer to Papers Template
        .and('not.contain', 'Locales')          // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
      //.and('contain', 'Billing')          // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Regular User', () => {
      cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('not.contain', 'Pick lists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        //Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Move')

        // Containers
        .and('not.contain', 'Containers')

        // Products #3375
        .and('contain', 'Products')
        .and('not.contain', 'Import')                     // this should refer to the product import
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Bin location movements')
        .and('not.contain', 'Container Bin Location Movements')
        .and('not.contain', 'Container Inventory Adjustments')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Inventory on hand')
        .and('not.contain', 'Manual inventory adjustments')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
        .and('not.contain', 'Replenishment items')
        .and('not.contain', 'Shipped products')
        .and('not.contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('not.contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
      //.and('not.contain', 'Imports')                   // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')                  // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')                    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')            // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')            // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')              // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')               // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')        // this should refer to Papers Template
        .and('not.contain', 'Locales')          // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
      //.and('contain', 'Billing')          // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Account Owner', () => {
      cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('not.contain', 'Pick lists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
      //.and('not.contain', 'Consolidated')         // #3291
        .and('contain', 'Kits')
      //.and('not.contain', 'Adjust')               // #3372
      //.and('not.contain', 'Move')                 // script failure, it is found, but not visible in the ui and url crashes for role account owner.

        // Containers
        .and('not.contain', 'Containers')

        // Products #3375
        .and('contain', 'Products')
        .and('contain', 'Import')                     // this should refer to the product import
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Bin location movements')
        .and('contain', 'Container Bin Location Movements')
        .and('contain', 'Container Inventory Adjustments')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Inventory on hand')
        .and('contain', 'Manual inventory adjustments')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
        .and('contain', 'Replenishment items')
        .and('contain', 'Shipped products')
        .and('contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('contain', 'Billing')                        // This should refer to Billing
        .and('contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('not.contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
      //.and('not.contain', 'Templates')        // this should refer to Papers Template
      //.and('not.contain', 'Locales')          // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
      //.and('not.contain', 'Billing')          // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Reporting', () => {
      cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')


      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('not.contain', 'Pick lists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        //.and('not.contain', 'Adjust')                   // #3372
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products #3375
        .and('contain', 'Products')
        .and('not.contain', 'Import')                     // this should refer to the product import
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Bin location movements')
        .and('contain', 'Container Bin Location Movements')
        .and('contain', 'Container Inventory Adjustments')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Inventory on hand')
        .and('contain', 'Manual inventory adjustments')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
        .and('contain', 'Replenishment items')
        .and('contain', 'Shipped products')
        .and('contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
      //.and('not.contain', 'Imports')                   // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')                  // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')                    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')            // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')            // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')              // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')               // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')        // this should refer to Papers Template
        .and('not.contain', 'Locales')          // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
      //.and('contain', 'Billing')          // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Warehouse associate', () => {
      cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('contain', 'Pick lists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('contain', 'Adjust')
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products #3375
        .and('contain', 'Products')
        .and('not.contain', 'Import')                     // this should refer to the product import
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Bin location movements')
        .and('contain', 'Container Bin Location Movements')
        .and('contain', 'Container Inventory Adjustments')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Inventory on hand')
        .and('contain', 'Manual inventory adjustments')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
        .and('contain', 'Replenishment items')
        .and('contain', 'Shipped products')
        .and('contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts #3375
      //.and('contain', 'Admin')                                 // #3375
      //.and('contain', 'Users & Accounts')                      // #3375
      //.and('contain', 'Accounts')                              // #3375
      //.and('contain', 'Users')                                 // #3375

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
      //.and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')        // this should refer to Papers Template
        .and('not.contain', 'Locales')          // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
        .and('not.contain', 'Billing')          // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Receiver', () => {
      cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('not.contain', 'Pick lists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
      //.and('not.contain', 'Adjust')            // #3379
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products #3375
        .and('contain', 'Products')
        .and('not.contain', 'Import')               // #3375
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Bin location movements')
        .and('not.contain', 'Container Bin Location Movements')
        .and('not.contain', 'Container Inventory Adjustments')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Inventory on hand')
        .and('not.contain', 'Manual inventory adjustments')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
        .and('not.contain', 'Replenishment items')
        .and('not.contain', 'Shipped products')
        .and('not.contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')           // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')          // this should refer to Papers Template
        .and('not.contain', 'Locales')            // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
        .and('not.contain', 'Billing')            // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Pick list planner', () => {
      cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('contain', 'Pick lists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products
        .and('contain', 'Products')
        .and('not.contain', 'Import')
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Bin location movements')
        .and('not.contain', 'Container Bin Location Movements')
        .and('not.contain', 'Container Inventory Adjustments')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Inventory on hand')
        .and('not.contain', 'Manual inventory adjustments')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
        .and('not.contain', 'Replenishment items')
        .and('not.contain', 'Shipped products')
        .and('not.contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')           // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')          // this should refer to Papers Template
        .and('not.contain', 'Locales')            // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
        .and('not.contain', 'Billing')            // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Picker', () => {
      cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('contain', 'Pick lists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products #3375, #3378
        .and('contain', 'Products')
        .and('not.contain', 'Import')               // #3375
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Bin location movements')
        .and('not.contain', 'Container Bin Location Movements')
        .and('not.contain', 'Container Inventory Adjustments')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Inventory on hand')
        .and('not.contain', 'Manual inventory adjustments')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
        .and('not.contain', 'Replenishment items')
        .and('not.contain', 'Shipped products')
        .and('not.contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')           // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')          // this should refer to Papers Template
        .and('not.contain', 'Locales')            // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
        .and('not.contain', 'Billing')            // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Packer', () => {
      cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Pick lists
        .and('not.contain', 'Pick lists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('contain', 'Move')

        // Containers
        .and('contain', 'Containers')

        // Products #3375, #3378
        .and('contain', 'Products')
        .and('not.contain', 'Import')               // #3375
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Bin location movements')
        .and('not.contain', 'Container Bin Location Movements')
        .and('not.contain', 'Container Inventory Adjustments')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Inventory on hand')
        .and('not.contain', 'Manual inventory adjustments')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
        .and('not.contain', 'Replenishment items')
        .and('not.contain', 'Shipped products')
        .and('not.contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')           // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')          // this should refer to Papers Template
        .and('not.contain', 'Locales')            // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
        .and('not.contain', 'Billing')            // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    }),
    it('Shipper', () => {
      cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        //  Pick lists
        .and('not.contain', 'Pick lists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')

        // Inventory
        .and('contain', 'Inventory')
        .and('contain', 'Consolidated')         // #3291
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')           // #3372
        .and('contain', 'Move')                 // script failure, it is found, but not visible in the ui and url crashes for role account owner.

        // Containers
        .and('contain', 'Containers')

        // Products #3375
        .and('contain', 'Products')
        .and('not.contain', 'Import')                     // this should refer to the product import
        .and('contain', 'Product categories')

        // Customers
        .and('contain', 'Customer')

        // Vendor
        .and('contain', 'Vendor')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Bin location movements')
        .and('not.contain', 'Container Bin Location Movements')
        .and('not.contain', 'Container Inventory Adjustments')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Inventory on hand')
        .and('not.contain', 'Manual inventory adjustments')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
        .and('not.contain', 'Replenishment items')
        .and('not.contain', 'Shipped products')
        .and('not.contain', 'Shipped serial numbers')

        // Tickets
        .and('contain', 'Tickets')
        .and('contain', 'Work orders')
        .and('contain', 'Problems')
        .and('contain', 'Groups')
        .and('contain', 'Contacts')
        .and('contain', 'Organizations')

        // Billing
        .and('not.contain', 'Billing')                        // This should refer to Billing
        .and('not.contain', 'Events')                         // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Audits
        .and('not.contain', 'Audits')

        // Mobile
        .and('contain', 'Mobile apps')

        // Admin > Users & Accounts > Accounts
        .and('not.contain', 'Admin')
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')

        // Admin > Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Admin > Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Admin > Settings
        .and('not.contain', 'Settings')

        // Admin > Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Oauth')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
      //.and('not.contain', 'Products')        // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('not.contain', 'Adjust Inventory')
      //.and('not.contain', 'Orders')          // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Purchase order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Transfer order')  // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Return order')    // this should refer to Admin > Imports > Orders
      //.and('not.contain', 'Scrap order')     // this should refer to Admin > Imports > Orders

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')          // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')            // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')        // this should refer to Papers Template
        .and('not.contain', 'Locales')          // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Admin > Apps
        .and('not.contain', 'Apps')

        // Admin > Billing
        .and('not.contain', 'Billing')          // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event types')
        .and('not.contain', 'Rate groups')
        .and('not.contain', 'Rate types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')

    })

})
describe('RBAC Actions - Create a sales order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').contains('Sales order')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Reporting - Not allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Billing - Not allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Warehouse associate - Not allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Receiver - Not allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Pick list planner - Not allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Picker - Not allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Packer - Not allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
  it('Shipper - Not allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // New sales order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New sales order')

    // New sales order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New sales order')

    // Import - Sales Order - Overview dropdown
    cy.get('.sts-card__header .pr-1 .flex-1 .text-gray-500').should('not.exist')

    // URL accessible
    cy.visit('/orders/new?type=sales_order').contains('h3', 'Sales order')
    cy.get('.primary').contains('Create Sales order')

  })
})

describe('RBAC Actions - Create a purchase order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Reporting - Allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Billing - Allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Warehouse associate - Allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Receiver - Allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Pick list planner - Allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Picker - Allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Packer - Allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
  it('Shipper - Allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // New purchase order - Sidebar
    cy.visit('/')
    cy.get('[href="/orders"]').eq(1).click()
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(1).contains('New purchase order')

    // New purchase order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New purchase order')

    // URL accessible
    cy.visit('/orders/new?type=purchase_order').contains('h3', 'Purchase order')
    cy.get('.primary').contains('Create Purchase order')

  })
})

describe('RBAC Actions - Create a return order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Reporting - Allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Billing - Allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Warehouse associate - Allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Receiver - Allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Pick list planner - Allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Picker - Allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(3).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Packer - Allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
  it('Shipper - Allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // New return order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New return order')

    // New return order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New return order')

    // URL accessible
    cy.visit('/orders/new?type=return_order').contains('h3', 'Return order')
    cy.get('.primary').contains('Create Return order')

    // Order detail - Context menu

  })
})

describe('RBAC Actions - Create a transfer order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // New tranfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible // #3516
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order') // << it should not contain this button but redirect to the home page

  })
  it('Reporting - Allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order')

  })
  it.skip('Billing - Not allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').should('not.exist') // find unique element

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').should('not.exist') // find unique element

    // URL accessible
    cy.visit('/orders/new?type=transfer_order')
    cy.get('.primary').should('not.exist')

  })
  it('Warehouse associate - Allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order')

  })
  it('Receiver - Allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order')

  })
  it('Pick list planner - Allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order')

  })
  it.skip('Picker - Not allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').should('not.exist') // find unique element

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').should('not.exist') // find unique element

    // URL accessible
    cy.visit('/orders/new?type=transfer_order')
    cy.get('.primary').should('not.exist')

  })
  it('Packer - Allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order')

  })
  it('Shipper - Allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // New transfer order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(2).contains('New transfer order')

    // New transfer order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New transfer order')

    // URL accessible
    cy.visit('/orders/new?type=transfer_order').contains('h3', 'Transfer order')
    cy.get('.primary').contains('Create Transfer order')

  })
})

describe('RBAC Actions - Create a scrap order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Reporting - Allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Billing - Allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Warehouse associate - Allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Receiver - Allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Pick list planner - Allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Picker - Allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(4).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Packer - Allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })
  it('Shipper - Allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // New scrap order - Sidebar
    cy.visit('/')
    cy.get('[data-satis-sidebar-menu-item-target="submenu"] .sts-sidebar-menu-item__label').eq(5).contains('New scrap order')

    // New scrap order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-popper-placement="bottom"]').contains('New scrap order')

    // URL accessible
    cy.visit('/orders/new?type=scrap_order').contains('h3', 'Scrap order')
    cy.get('.primary').contains('Create Scrap order')

  })

})
describe('RBAC Actions - Import a sales order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').contains('Sales order')

  })
  it('Reporting - Not allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Billing - Not allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Warehouse associate - Not allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Receiver - Not allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Pick list planner - Not allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Picker - Not allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Packer - Not allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
  it('Shipper - Not allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // Import - Sales Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Sales order')

  })
})

describe('RBAC Actions - Import a purchase order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').contains('Purchase order')

  })
  it('Reporting - Not allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Billing - Not allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Warehouse associate - Not allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Receiver - Not allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Pick list planner - Not allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Picker - Not allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Packer - Not allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
  it('Shipper - Not allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // Import - Purchase Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Purchase order')

  })
})

describe('RBAC Actions - Import a return order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').contains('Return order')

  })
  it('Reporting - Not allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Billing - Not allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Warehouse associate - Not allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Receiver - Not allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Pick list planner - Not allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Picker - Not allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Packer - Not allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
  it('Shipper - Not allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // Import - Return Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Return order')

  })
})

describe('RBAC Actions - Import a transfer order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').contains('Transfer order')

  })
  it('Reporting - Not allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Billing - Not allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Warehouse associate - Not allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Receiver - Not allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Pick list planner - Not allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Picker - Not allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Packer - Not allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
  it('Shipper - Not allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // Import - Transfer Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Transfer order')

  })
})

describe('RBAC Actions - Import a scrap order', () => {
  it('Regular - Allowed', () => {

    cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Account Owner - Allowed', () => {

    cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').contains('Scrap order')

  })
  it('Reporting - Not allowed', () => {

    cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Billing - Not allowed', () => {

    cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Warehouse associate - Not allowed', () => {

    cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Receiver - Not allowed', () => {

    cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Pick list planner - Not allowed', () => {

    cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Picker - Not allowed', () => {

    cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Packer - Not allowed', () => {

    cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
  it('Shipper - Not allowed', () => {

    cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir'})

    // Import - Scrap Order - Overview dropdown
    cy.visit('/orders')
    cy.get('.sts-card__header [data-satis-menu-submenu-placement="bottom"] [data-satis-menu-target="submenu"]').should('not.contain','Scrap order')

  })
})