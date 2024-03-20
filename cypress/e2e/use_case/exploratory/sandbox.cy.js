describe('Role Base Access Controle', () => {
  
  describe('Super User', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_super_user@wrap-it.com', password: 'cipceg-xihpUr-pebbu4' })
    
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('contain', 'Picklists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
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
        .and('contain', 'Billing')                       // This should refer to Billing
        .and('contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('contain', 'Admin')

        // Users & Accounts
        .and('contain', 'Users & Accounts')
        .and('contain', 'Accounts')
        .and('contain', 'Users')
      
        // Carriers & Services
        .and('contain', 'Carriers & Services')
        .and('contain', 'Carriers')
        .and('contain', 'Channels')
        .and('contain', 'Service types')
        .and('contain', 'Shipping methods')
        .and('contain', 'Holidays')
        .and('contain', 'Reasons')

        // Warehousing
        .and('contain', 'Warehousing')
        .and('contain', 'Locations')
        .and('contain', 'Bin-locations')
        .and('contain', 'Totes')
        .and('contain', 'Packing materials')

        // Settings
        .and('contain', 'Settings')

        // Integration
        .and('contain', 'Integration')
        .and('contain', 'Flows')
        .and('contain', 'Messages')
        .and('contain', 'Credentials')
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
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

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

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('contain', 'Billing')                // this should refer to Admin > Billing
        .and('contain', 'Sources')
        .and('contain', 'Event-types')
        .and('contain', 'Rate-groups')
        .and('contain', 'Rate-types')
        .and('contain', 'Rates')

        // Admin > Exceptions
        .and('contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('contain', 'Import')
        .and('contain', 'Sales order')
        .and('contain', 'Purchase order')
        .and('contain', 'Transfer order')
        .and('contain', 'Return order')
        .and('contain', 'Scrap order')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('contain', 'Adjust')
        .and('contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/accounts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/users')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/shipping_methods')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/holidays')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/reasons')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/locations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/bin_locations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/totes')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/packing_materials')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/integration/flows')
      cy.url().should('eq', 'https://oms.staging.boxture.com/integration/flows')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/integration/credentials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/integration/credentials')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/oauth/applications')
      cy.url().should('eq', 'https://oms.staging.boxture.com/oauth/applications')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/integrations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
      
      cy.visit('/messaging/admin/templates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/templates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/layouts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/layouts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/locales')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/locales')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/campaigns')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/campaigns')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')
        .and('contain', 'Lists')

      cy.visit('/messaging/admin/lists')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/lists')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/papers/admin/templates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/papers/admin/templates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/papers/admin/locales')
      cy.url().should('eq', 'https://oms.staging.boxture.com/papers/admin/locales')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/distribution/admin/apps')
      cy.url().should('eq', 'https://oms.staging.boxture.com/distribution/admin/apps')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/sources')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/event_types')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rate_groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rate_types')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')
        
    }),
    it('Events', () => {
      // Test which events are allowed to trigger, confirm, pick, pack etc.
    })
  })

  describe('Admin', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_admin_user@wrap-it.com', password: 'nuzgu5-hatpuh-pisqyD' })
    
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('contain', 'Picklists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
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
        .and('contain', 'Billing')                       // This should refer to Billing
        .and('contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('contain', 'Admin')

        // Users & Accounts
        .and('contain', 'Users & Accounts')
        .and('contain', 'Accounts')
        .and('contain', 'Users')
      
        // Carriers & Services
        .and('contain', 'Carriers & Services')
        .and('contain', 'Carriers')
        .and('contain', 'Channels')
        .and('contain', 'Service types')
        .and('contain', 'Shipping methods')
        .and('contain', 'Holidays')
        .and('contain', 'Reasons')

        // Warehousing
        .and('contain', 'Warehousing')
        .and('contain', 'Locations')
        .and('contain', 'Bin-locations')
        .and('contain', 'Totes')
        .and('contain', 'Packing materials')

        // Settings
        .and('contain', 'Settings')

        // Integration
        .and('contain', 'Integration')
        .and('contain', 'Flows')
        .and('contain', 'Messages')
        .and('contain', 'Credentials')
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
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

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
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('contain', 'Billing')                // this should refer to Admin > Billing
        .and('contain', 'Sources')
        .and('contain', 'Event-types')
        .and('contain', 'Rate-groups')
        .and('contain', 'Rate-types')
        .and('contain', 'Rates')

        // Admin > Exceptions
        .and('contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('contain', 'Import')
        .and('contain', 'Sales order')
        .and('contain', 'Purchase order')
        .and('contain', 'Transfer order')
        .and('contain', 'Return order')
        .and('contain', 'Scrap order')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('contain', 'Adjust')
        .and('contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/accounts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/users')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/shipping_methods')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/holidays')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/reasons')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/locations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/bin_locations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/totes')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/packing_materials')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/integration/flows')
      cy.url().should('eq', 'https://oms.staging.boxture.com/integration/flows')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/integration/credentials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/integration/credentials')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/oauth/applications')
      cy.url().should('eq', 'https://oms.staging.boxture.com/oauth/applications')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/integrations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
      
      cy.visit('/messaging/admin/templates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/templates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/layouts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/layouts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/locales')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/locales')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/campaigns')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/campaigns')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')
        .and('contain', 'Lists')

      cy.visit('/messaging/admin/lists')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/lists')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/papers/admin/templates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/papers/admin/templates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/papers/admin/locales')
      cy.url().should('eq', 'https://oms.staging.boxture.com/papers/admin/locales')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/distribution/admin/apps')
      cy.url().should('eq', 'https://oms.staging.boxture.com/distribution/admin/apps')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/sources')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/event_types')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rate_groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rate_types')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')
        
    })
  })
    
  describe('Billing admin', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_billing_admin@wrap-it.com', password: '.Q@9x]LgdLP#g>D' })
    
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('contain', 'Billing')                // this should refer to Admin > Billing
        .and('contain', 'Sources')
        .and('contain', 'Event-types')
        .and('contain', 'Rate-groups')
        .and('contain', 'Rate-types')
        .and('contain', 'Rates')

        // Admin > Exceptions
        .and('contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/accounts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/users')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/shipping_methods')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/holidays')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/reasons')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/locations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/bin_locations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/totes')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/packing_materials')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')

      cy.visit('/integration/flows')
      cy.url().should('eq', 'https://oms.staging.boxture.com/integration/flows')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/integration/credentials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/integration/credentials')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/oauth/applications')
      cy.url().should('eq', 'https://oms.staging.boxture.com/oauth/applications')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/integrations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
      
      cy.visit('/messaging/admin/templates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/templates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/layouts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/layouts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/locales')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/locales')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/messaging/admin/campaigns')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/campaigns')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')
        .and('contain', 'Lists')

      cy.visit('/messaging/admin/lists')
      cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/admin/lists')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/papers/admin/templates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/papers/admin/templates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/papers/admin/locales')
      cy.url().should('eq', 'https://oms.staging.boxture.com/papers/admin/locales')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/distribution/admin/apps')
      cy.url().should('eq', 'https://oms.staging.boxture.com/distribution/admin/apps')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/sources')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/event_types')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rate_groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rate_types')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/billing/rates')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New')
        
    })
  })
    
  describe('Billing', () => {

    beforeEach(() => {
      
      cy.login({ email: 'wrap-it_billing@wrap-it.com', password: 'tihto1-miqmyr-wimbuJ' })
    
    })
      
    it('Views', () => {
        
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        //.and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('contain', 'Billing')                       // This should refer to Billing
        .and('contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')                   // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                     // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('contain', 'Billing')                    // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
        
    }), 
        
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('not.contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
        .and('contain', 'Sales order')
        .and('contain', 'Purchase order')
        .and('not.contain', 'Transfer order')
        .and('contain', 'Return order')
        .and('contain', 'Scrap order')
            
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

    }),

    it("Non accessible url's", () => {

      // Navigate to Home

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })  
  })

  describe('Regular user', () => {
    
    beforeEach(() => {
      
      cy.login({ email: 'wrap-it_regular_user@wrap-it.com', password: 'hugzap-4comny-Sizkat'})
    
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('not.contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('not.contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')                   // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('not.contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
        .and('contain', 'Sales order')
        .and('contain', 'Purchase order')
        .and('contain', 'Transfer order')
        .and('contain', 'Return order')
        .and('contain', 'Scrap order')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('not.contain', 'License Plates')
        .and('not.contain', 'Move')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
      cy.wait(500)
        .should('not.exist')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
      
    }),

    it("Non accessible url's", () => {

      //cy.visit('/containers')
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')                    Page crash!

      //cy.visit('/integration/flows')                                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')                    Page crash!

      //cy.visit('/oauth/applications')
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')                    Page crash!

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                                       Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                                       Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')
    })
  })
    
  describe('Account Owner', () => {

    beforeEach(() => {
      cy.login({ email: 'account_owner@emoe.com', password: 'bujsaz-5norzu-zibdaG' })
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Containers
        .and('not.contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
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
        .and('contain', 'Billing')                       // This should refer to Billing
        .and('contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('not.contain', 'Mobile apps')
      
        // Admin
        .and('contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('not.contain', 'Mobile apps')

        // Admin > Billing
        .and('contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('contain', 'Import')
        .and('contain', 'Sales order')
        .and('contain', 'Purchase order')
        .and('contain', 'Transfer order')
        .and('contain', 'Return order')
        .and('contain', 'Scrap order')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('not.contain', 'License Plates')
        .and('not.contain', 'Move')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/admin/users')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'import')
        
    }),

    it("Non accessible url's", () => {

      //cy.visit('/pick_list_plans')                                               Ticket #3900
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/containers')                                                    Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/containers')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                                   Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                                                  Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                                                Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })

  describe('Reporting', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_reporting@wrap-it.com', password: 'majrir-5zozqa-vempyX'})
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('not.be.visible')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('not.be.visible')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        
    }),

    it("Non accessible url's", () => {

      // Navigate to Home

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                        Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                        Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })
    
  describe('Warehouse associate', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_warehouse_associate@wrap-it.com', password: 'xuvwi8-tojhiP-tanvyq'})
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('contain', 'Picklists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('contain', 'Reporting')
        .and('contain', 'Inbounded inventory items')
        .and('contain', 'Open sales orders')
        .and('contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('contain', 'Adjust')
        .and('contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        
    }),
    it("Non accessible url's", () => {

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                                  Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                                                 Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })
    
  describe('Receiver', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_receiver@wrap-it.com', password: 'fykja3-bobkev-Cogxyn' })
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('contain', 'Adjust')
        .and('contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

    }),

    it("Non accessible url's", () => {

      cy.visit('/importing/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                       Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                       Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })

  describe('Packer', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_packer@wrap-it.com', password: 'womje7-hEsrij-jaqhys' })
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
        .and('contain', 'Sales order')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
    }),
    it("Accessible url's", () => {

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                 Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                                Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/papers/')

      //cy.visit('/distribution/admin/apps')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })
    
  describe('Shipper', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_shipper@wrap-it.com', password: 'qokseg-rugga0-gApcir' })
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        
    }),
    
    it("Non accessible url's", () => {

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                    Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                                   Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/messaging/')

      //cy.visit('/messaging/admin/lists')                                Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                                 Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })
    
  describe('Pick list planner', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_pick_list_planner@wrap-it.com', password: 'kexwic-rAfwab-zubmu1'})
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('contain', 'Picklists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        
    }),
    
    it("Non accessible url's", () => {

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                       Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                       Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                            Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })
    
  describe('Kitter', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_kitter@wrap-it.com', password: 'Mumvez-caxpe2-wapviv' })
  
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('not.contain', 'Picklists')
        .and('not.contain', 'Plans')
        .and('not.contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('not.contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        
    }),
    it("Non accessible url's", () => {

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                        Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                      Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                        Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                        Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                      Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                          Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                         Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                        Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')
    })
  })
    
  describe('Picker', () => {

    beforeEach(() => {
      cy.login({ email: 'wrap-it_picker@wrap-it.com', password: 'picking' })
    
    })
    
    it('Views', () => {
      
      cy.visit('/')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      // #3394
      cy.get('.sts-sidebar-menu-item__label')
        .should('exist')
        .and('be.visible')

        // Home
        .and('contain', 'Home')

        // Orders
        .and('contain', 'Orders')

        // Picklists
        .and('contain', 'Picklists')
        .and('contain', 'Plans')
        .and('contain', 'Wave')

        // Shipments
        .and('contain', 'Shipments')
      
        // Inventory
        .and('contain', 'Inventory')

        // Container
        .and('contain', 'Container')
      
        // Products
        .and('contain', 'Products')
        .and('contain', 'Product categories')
      
        // Customers
        .and('contain', 'Customer')

        // Vendors
        .and('contain', 'Vendors')

        // Reporting
        .and('not.contain', 'Reporting')
        .and('not.contain', 'Inbounded inventory items')
        .and('not.contain', 'Open sales orders')
        .and('not.contain', 'Open receives')
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
        .and('not.contain', 'Billing')                       // This should refer to Billing
        .and('not.contain', 'Events')                        // This should refer to Billing > Events

        // Transaction logs
        .and('not.contain', 'Transaction logs')

        // Mobile apps
        .and('contain', 'Mobile apps')
      
        // Admin
        .and('not.contain', 'Admin')

        // Users & Accounts
        .and('not.contain', 'Users & Accounts')
        .and('not.contain', 'Accounts')
        .and('not.contain', 'Users')
      
        // Carriers & Services
        .and('not.contain', 'Carriers & Services')
        .and('not.contain', 'Carriers')
        .and('not.contain', 'Channels')
        .and('not.contain', 'Service types')
        .and('not.contain', 'Shipping methods')
        .and('not.contain', 'Holidays')
        .and('not.contain', 'Reasons')

        // Warehousing
        .and('not.contain', 'Warehousing')
        .and('not.contain', 'Locations')
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Totes')
        .and('not.contain', 'Packing materials')

        // Settings
        .and('not.contain', 'Settings')

        // Integration
        .and('not.contain', 'Integration')
        .and('not.contain', 'Flows')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Credentials')
        .and('not.contain', 'Authorized')
        .and('not.contain', 'Applications')
        .and('not.contain', 'Third party')

        // Admin > Imports
        .and('not.contain', 'Imports')                // this should refer to Admin > Imports
        .and('not.contain', 'Bin-locations')
        .and('not.contain', 'Packing materials')
        .and('contain', 'Products')               // this should refer to Admin Imports > Product
        .and('not.contain', 'Totes')
        .and('not.contain', 'Users')
        .and('contain', 'Orders')                 // this should refer to Admin > Imports > Order

        // Admin > Messaging
        .and('not.contain', 'Messaging')
        .and('not.contain', 'Messages')
        .and('not.contain', 'Templates')              // this should refer to Messaging Template
        .and('not.contain', 'Layouts')
        .and('not.contain', 'Locales')                // this should refer to Messaging Locales
        .and('not.contain', 'Campaigns')
        .and('not.contain', 'Lists')

        // Admin > Papers
        .and('not.contain', 'Papers')
        .and('not.contain', 'Templates')              // this should refer to Papers Template
        .and('not.contain', 'Locales')                // this should refer to Papers Locales

        // Admin > Sites
        .and('not.contain', 'Sites')

        // Mobile apps
        .and('contain', 'Mobile apps')

        // Admin > Billing
        .and('not.contain', 'Billing')                // this should refer to Admin > Billing
        .and('not.contain', 'Sources')
        .and('not.contain', 'Event-types')
        .and('not.contain', 'Rate-groups')
        .and('not.contain', 'Rate-types')
        .and('not.contain', 'Rates')

        // Admin > Exceptions
        .and('not.contain', 'Exceptions')
      
    }),
    
    it('Actions', () => {
      
      cy.visit('/orders')
      cy.url().should('eq', 'https://oms.staging.boxture.com/orders')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'New Purchase order')
        .and('not.contain', 'New Transfer order')
        .and('contain', 'New Sales order')
        .and('contain', 'New Return order')
        .and('contain', 'New Scrap order')
        .and('contain', 'New Kit order')
        .and('not.contain', 'Import')
              
      cy.visit('/pick_list_plans')
      cy.url().should('eq', 'https://oms.staging.boxture.com/pick_list_plans')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/inventories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/inventories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Consolidated')
        .and('contain', 'Kits')
        .and('not.contain', 'Adjust')
        .and('not.contain', 'Import')
        .and('contain', 'License Plates')
        .and('contain', 'Move')

      cy.visit('/containers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/containers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/products')
      cy.url().should('eq', 'https://oms.staging.boxture.com/products')
      cy.get('.sts-menu__items')
        .should('not.be.visible')
        .and('not.contain', 'Create')
        .and('not.contain', 'Import')

      cy.visit('/product_categories')
      cy.url().should('eq', 'https://oms.staging.boxture.com/product_categories')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/customers')
      cy.url().should('eq', 'https://oms.staging.boxture.com/customers')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
  
      cy.visit('/vendors')
      cy.url().should('eq', 'https://oms.staging.boxture.com/vendors')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=manual')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=manual')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/tickets?kind=automated')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/tickets?kind=automated')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/groups')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/agent/contacts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/contacts')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')
        .and('contain', 'My contact')

      cy.visit('/agent/organizations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/agent/organizations')
      cy.get('.sts-menu__items')
        .should('exist')
        .and('contain', 'Create')

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                   Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                                  Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                                Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')
        
    })
    it("Non accessible url's", () => {

      cy.visit('/admin/accounts')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/users')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/shipping_methods')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/holidays')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/reasons')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/bin_locations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/totes')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/packing_materials')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/flows')                                   Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/integration/credentials')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/oauth/applications')                                  Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/integrations')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/templates')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/layouts')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/locales')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/campaigns')                           Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/messaging/admin/lists')                               Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/templates')                              Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/papers/admin/locales')                                Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      //cy.visit('/distribution/admin/apps')                             Page crash!
      //cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/sources')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/event_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_groups')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rate_types')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

      cy.visit('/admin/billing/rates')
      cy.url().should('eq', 'https://oms.staging.boxture.com/')

    })
  })
})

