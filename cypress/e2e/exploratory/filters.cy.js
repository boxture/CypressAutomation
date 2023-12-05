// TEST CASES:
// 1. Verify the layout and behaviour of all filters in Orders overview [DONE]
// 2. Partial search [PENDING]
// 3. Auto-Select [DONE]

// KNOWN ISSUES:
// https://github.com/boxture/oms/issues/3131 Consistency in Filter behaviour
// https://github.com/boxture/oms/issues/3157 Test cases for filters
// https://github.com/boxture/oms/issues/3562 Dropdown auto-select not working





// test
let id
beforeEach(() => {
  cy.login({
    email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})

  })
  describe('Filters Orders overview', () => {

    it('Account', () => {

      cy.visit('/orders')
      cy.url().should('include', '/orders')
      cy.resetView()

      cy.get('[data-column="account"] [data-icon="ellipsis"]').should('be.visible').click()
      cy.get('[data-column="account"] [data-satis-dropdown-target="searchInput"]').should('be.visible')
      cy.get('[data-column="account"] [data-satis-dropdown-target="resetButton"]').should('be.visible')
      cy.get('[data-column="account"] [data-satis-dropdown-target="toggleButton"]').should('be.visible')
      cy.get('[data-column="account"] [data-satis-dropdown-target="toggleButton"]').click()
      cy.get('[data-column="account"] [data-action="click->satis-dropdown#select"]').should('have.length',3)
      cy.get('[data-column="account"] [data-satis-dropdown-target="resetButton"]').should('be.visible').click()
      cy.get('[data-column="account"]').find('li').should('have.length', '6')
      cy.get('[data-column="account"]').find('li').contains('Filter values').should('be.visible')

    })
    it('ID Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="id"]').find('[type="button"]').should('be.visible').click()
      cy.get('[data-column="id"]').find('li').should('have.length', '5')
      cy.get('[data-column="id"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="id"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="id"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="id"]').find('li').contains('Hide column').should('be.visible')
      cy.get('tr:nth-child(1) td:nth-child(4)').then($id1=>{
        id = $id1.text()
        cy.log(id)
        cy.wrap(id).as('id12')
      })
      cy.get('[data-column="id"]').find('[type="button"]').should('be.visible').click({force:true})
      cy.get('@id12').then($id1=>{
      cy.get('[data-column="id"] [data-controller=" form"]').type(`${$id1}`)
      cy.get('.border-r > .items-center > img').click()
      cy.get('[class="overflow-hidden tbdy"] tr').its('length').should('eq', 1)
      })

    })
    it('TYPE Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="type"] [data-icon="ellipsis"]').should('be.visible').click()
      cy.get('ul').find('[data-satis-dropdown-target="searchInput"]').should('be.visible')
      cy.get('[data-column="type"]').find('li').should('have.length', '4')
      cy.get('[data-column="type"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="type"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="type"]').find('li').contains('Group by').should('be.visible')
      cy.get('[data-column="type"] [data-satis-dropdown-target="searchInput"]').should('be.visible').clear().type('sal',{ delay: 200 })
      cy.get('.border-r > .items-center > img').click()
      cy.get('tr:nth-child(2) td:nth-child(5)').should('have.visible.text', 'Sales order')

    })
    it('STATE Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="state"] [data-icon="ellipsis"]').should('be.visible').click()
      cy.get('ul').find('[data-satis-dropdown-target="searchInput"]').should('be.visible', {force:true})
      cy.get('[data-column="state"]').find('li').should('have.length', '6')
      cy.get('[data-column="state"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="state"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="state"]').find('li').contains('Group by').should('be.visible')
      cy.get('[data-column="state"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="state"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="state"] [data-satis-dropdown-target="searchInput"]').should('be.visible').clear().type('can',{ delay: 200 })
      cy.get('.border-r > .items-center > img').click()
      cy.get('tr:nth-child(2) td:nth-child(6)').should('have.visible.text', 'cancelled')

    })
    it('Channel Filter', () => {

      //Consistency in Filter behaviour #3562
      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="channel"] [data-icon="ellipsis"] ').should('be.visible').click()
      cy.get('ul').find('[data-satis-dropdown-target="searchInput"]').should('be.visible')
      cy.get('[data-column="channel"]').find('li').should('have.length', '6')
      cy.get('[data-column="channel"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="channel"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="channel"]').find('li').contains('Group by').should('be.visible')
      cy.get('[data-column="channel"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="channel"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="channel"] [data-satis-dropdown-target="searchInput"]').should('be.visible').clear().type('ebay')
      cy.get('tr:nth-child(2) td:nth-child(7)').should('have.text', 'eBay')
      cy.contains('.translation_missing', 'Orders').click()

    })
    it('Business Model Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="business_model"] [data-icon="ellipsis"] ').should('be.visible').click()
      cy.get('ul').find('[data-satis-dropdown-target="searchInput"]').should('be.visible')
      cy.get('[data-column="business_model"]').find('li').should('have.length', '6')
      cy.get('[data-column="business_model"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="business_model"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="business_model"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="business_model"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="business_model"]').find('li').contains('Group by').should('be.visible')
      cy.get('[data-column="business_model"] [data-satis-dropdown-target="searchInput"]').should('be.visible').clear().type('Business to consumer')
      cy.get('tr:nth-child(2) td:nth-child(8)').should('have.text', 'Business to consumer')

    })
    it('Ship At Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="ship_at"] [data-icon="ellipsis"] ').should('be.visible').click()
      cy.get('[data-column="ship_at"] [data-satis-date-time-picker-target="input"]').should('be.visible')
      cy.get('[data-column="ship_at"]').find('li').should('have.length', '5')
      cy.get('[data-column="ship_at"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="ship_at"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="ship_at"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="ship_at"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="ship_at"] [data-satis-date-time-picker-target="input"]').should('be.visible').click()
      cy.contains('.block', '1').click()
      cy.contains('.block', '20').click()
      cy.get('tr:nth-child(2) td:nth-child(4)').should('be.visible')

      cy.get('[data-column="ship_at"] [data-satis-date-time-picker-target="input"]').should('be.visible').click()
      cy.get('[data-column="ship_at"] [data-satis-date-time-picker-target="month"]').then((e1) => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const d = new Date()
        const currentMonth = monthNames[d.getMonth()]
        cy.log(currentMonth)
        const actualText = e1.text()
        expect(actualText).to.eq(currentMonth)
      })
      cy.resetView()
      cy.get('[data-column="ship_at"] [data-icon="ellipsis"] ').should('be.visible').click()
      cy.get('[data-column="ship_at"] [data-satis-date-time-picker-target="input"]').should('be.visible').click()

      cy.get('[data-satis-date-time-picker-target="calendarView"]')
        .eq(0)
        .then((e1) => {
          cy.wrap(e1).find('[data-action="satis-date-time-picker#nextMonth"]')
        })
        .click().as('clickNext')
        cy.get('[data-column="ship_at"] [data-satis-date-time-picker-target="month"]').then((e1) => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        const d = new Date()
          if(d.getMonth()+1 == 12){
              cy.get('@clickNext')
              expect(e1.text()).to.eq('January')

          }
          else{
        let currentMonth = monthNames[d.getMonth() + 1]
        const actualMonth = e1.text()
        cy.pause()
        console.log(currentMonth)
        console.log(actualMonth)
        expect(actualMonth).to.eq(currentMonth)
          }

      })

    })
    it('Customer Reference Number Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="customer_reference_number"] [data-icon="ellipsis"]').scrollIntoView().should('be.visible').click()
      cy.get('ul').find('[data-filter="customer_reference_number"]').should('be.visible')
      cy.get('[data-column="customer_reference_number"]').find('li').should('have.length', '5')
      cy.get('[data-column="customer_reference_number"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="customer_reference_number"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="customer_reference_number"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="customer_reference_number"]').find('li').contains('Hide column').should('be.visible')
      cy.get('tr:nth-child(1) td:nth-child(10)').then($id1=>{
        id = $id1.text()
        cy.log(id)
        cy.wrap(id).as('id12')
      })
      cy.get('[data-column="customer_reference_number"]').find('[type="button"]').should('be.visible').click()
      cy.get('@id12').then($id1=>{
      cy.get('[data-column="customer_reference_number"] [data-controller=" form"]').type(`${$id1}`)
      cy.get('.border-r > .items-center > img').click()
      cy.get('[class="overflow-hidden tbdy"] tr').its('length').should('eq', 1)
      })

    })
    it('Purchase Order Number Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="purchase_order_number"] [data-icon="ellipsis"]').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="purchase_order_number"]').find('li').should('have.length', '3')
      cy.get('[data-column="purchase_order_number"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="purchase_order_number"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="purchase_order_number"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Expected Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="expected"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="expected"]').find('li').should('have.length', '3')
      cy.get('[data-column="expected"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="expected"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="expected"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Pending Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="pending"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="pending"]').find('li').should('have.length', '3')
      cy.get('[data-column="pending"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="pending"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="pending"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Received Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="received"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="received"]').find('li').should('have.length', '3')
      cy.get('[data-column="received"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="received"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="received"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Backordered Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="backordered"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="backordered"]').find('li').should('have.length', '3')
      cy.get('[data-column="backordered"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="backordered"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="backordered"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Allocated Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="allocated"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="allocated"]').find('li').should('have.length', '3')
      cy.get('[data-column="allocated"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="allocated"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="allocated"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Picking Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="picking"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="picking"]').find('li').should('have.length', '3')
      cy.get('[data-column="picking"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="picking"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="picking"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Picked Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="picked"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="picked"]').find('li').should('have.length', '3')
      cy.get('[data-column="picked"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="picked"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="picked"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Packed Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="packed"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="packed"]').find('li').should('have.length', '3')
      cy.get('[data-column="packed"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="packed"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="packed"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Shipped Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="shipped"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="shipped"]').find('li').should('have.length', '3')
      cy.get('[data-column="shipped"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="shipped"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="shipped"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Hold Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="hold"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="hold"]').find('li').should('have.length', '3')
      cy.get('[data-column="hold"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="hold"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="hold"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Cancelled Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="cancelled"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="cancelled"]').find('li').should('have.length', '3')
      cy.get('[data-column="cancelled"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="cancelled"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="cancelled"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Customer Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="customer"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-filter="customer"]').should('be.visible')
      cy.get('[data-column="customer"]').find('li').should('have.length', '3')
      cy.get('[data-column="customer"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="customer"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="customer"] [data-filter="customer"]').should('be.visible').clear().type('Boxture')
      cy.get('.border-r > .items-center > img').click()
      cy.get('tr:nth-child(2) td:nth-child(23)').should('have.text', 'Boxture BV')

    })
    it('Vendor Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('.title').contains('Vendor')
      cy.get('[data-column="vendor"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="vendor"]').find('li').should('have.length', '1')
      cy.get('[data-column="vendor"]').find('li').contains('Hide column').should('be.visible')

    })
    it('Origin Locations Filter', () => {

      // Consistency in Filter behaviour #3562
      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="origin_locations"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="origin_locations"]').find('li').should('have.length', '3')
      cy.get('[data-column="origin_locations"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="origin_locations"]').find('li').contains('Hide column').should('be.visible')
      // cy.get('[data-column="origin_locations"]').find('li').contains('Group by').should('be.visible')
      cy.get('[placeholder="Origin locations"]').scrollIntoView().should('be.visible').clear().type('btx-alm-new')
      cy.get('.border-r > .items-center > img').click()
      cy.get('tr:nth-child(1) td:nth-child(24)').should('have.text', 'BTX-ALM-NEW')
      cy.get('tr:nth-child(2) td:nth-child(24)').should('have.text', 'BTX-ALM-NEW')
      cy.get('tr:nth-child(3) td:nth-child(24)').should('have.text', 'BTX-ALM-NEW')
      cy.get('tr:nth-child(4) td:nth-child(24)').should('have.text', 'BTX-ALM-NEW')

    })
    it('Destination Locations Filter', () => {

      // Consistency in Filter behaviour #3562
      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="destination_location"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="destination_location"]').find('li').should('have.length', '3')
      cy.get('[data-column="destination_location"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="destination_location"]').find('li').contains('Hide column').should('be.visible')
      // cy.get('[data-column="destination_location"]').find('li').contains('Group by').should('be.visible')
      cy.get('[placeholder="Destination location"]').scrollIntoView().should('be.visible').clear().type('btx-alm-new')
      cy.get('.border-r > .items-center > img').click()
      cy.get('tr:nth-child(1) td:nth-child(25)').should('have.text', 'BTX-ALM-NEW')
      cy.get('tr:nth-child(2) td:nth-child(25)').should('have.text', 'BTX-ALM-NEW')
      cy.get('tr:nth-child(3) td:nth-child(25)').should('have.text', 'BTX-ALM-NEW')
      cy.get('tr:nth-child(4) td:nth-child(25)').should('have.text', 'BTX-ALM-NEW')

    })
    it('Created At Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="created_at"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="created_at"] [data-satis-date-time-picker-target="input"]').should('be.visible')
      cy.get('[data-column="created_at"]').find('li').should('have.length', '5')
      cy.get('[data-column="created_at"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="created_at"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="created_at"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="created_at"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="created_at"] [data-satis-date-time-picker-target="input"]').should('be.visible').click()
      cy.contains("[data-column='created_at'] .grid-cols-7 .block", '1').click({force:true})
      cy.contains("[data-column='created_at'] .grid-cols-7 .block", '20').click({force:true})
      cy.get('tr:nth-child(1) td:nth-child(26)').should('be.visible').should('not.be.empty')


    })
    it('Received At Filter', () => {

      cy.visit('/orders')
      cy.resetView()

      cy.get('[data-column="received_at"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
      cy.get('[data-column="received_at"] [data-satis-date-time-picker-target="input"]').should('be.visible')
      cy.get('[data-column="received_at"]').find('li').should('have.length', '5')
      cy.get('[data-column="received_at"]').find('li').contains('Filter values').should('be.visible')
      cy.get('[data-column="received_at"]').find('li').contains('Sort ascending').should('be.visible')
      cy.get('[data-column="received_at"]').find('li').contains('Sort descending').should('be.visible')
      cy.get('[data-column="received_at"]').find('li').contains('Hide column').should('be.visible')
      cy.get('[data-column="received_at"] [data-satis-date-time-picker-target="input"]').should('be.visible').click()
      cy.contains("[data-column='received_at'] .grid-cols-7 .block", '1').click({force:true})
      cy.contains("[data-column='received_at'] .grid-cols-7 .block", '20').click({force:true})

    })
  })
