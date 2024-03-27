// Improvements

// 1. Why is the global variable not working

// ISSUE
// 1. container with inventory items that are expired are still availbe?
// 2. container 5322a522 canot be moved, reason unknown
// 3. https://github.com/boxture/oms/issues/3608 - Make Container show broadcastable


let container
let from_bin_location

beforeEach(() => {
    cy.login({ email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})
  })

  describe('Container', () => {
    it('move container', () => {

    // Find container
    cy.visit('/containers')
    cy.url().should('include', '/containers')
    cy.get('[data-action="click->satis-menu#show"]').first().click()
    cy.resetView()

    // Get container from URL
    cy.get('[data-column="state"] [data-action="click->satis-menu#show"]').scrollIntoView().should('be.visible').click()
    cy.get('[placeholder="State"]').type('avail')
    cy.get('[data-column="created_at"] [data-icon="ellipsis"] ').scrollIntoView().should('be.visible').click()
    cy.get('[data-column="created_at"]').find('li').contains('Sort descending').should('be.visible').click()
    cy.get('[id*="sort_icon_created_at"]').scrollIntoView().should('be.visible')

    cy.get('tr').last().click({force: true})
    cy.contains('Contents')
    cy.contains('Warehousing')
    cy.contains('Others')

    cy.url().then(($url) => {
      const url = $url.split('/')
      container = url[4]
      cy.log(container)
      cy.visit(`/containers/${container}`)
      cy.url().should('include', `/containers/${container}`)


    // Get from bin location
    cy.get('.bin-location-info-item a').then($bin => {
        let from_bin_location = $bin.text()
        cy.log(from_bin_location)

    // Move container
    cy.visit('/inventory_moves/new')
    cy.url().should('include', '/inventory_moves/new')
    cy.get('[placeholder="Container"]').type(`${container}`.substring(0,8), {delay:200})

    cy.get('[placeholder="From bin location"]').type(`${from_bin_location}`, {delay:200})
    cy.get(`[data-satis-dropdown-item-text="${from_bin_location}"]`).click({force:true})

    if (`${from_bin_location}`.includes('RECEIVING')) {
      cy.get('[placeholder="To bin location"]').type('PICKING', {delay:200})
      cy.get(`[data-satis-dropdown-item-text="PICKING"]`).click({force:true})
    } else {
      cy.get('[placeholder="To bin location"]').type('RECEIVING', {delay:200})
      cy.get(`[data-satis-dropdown-item-text="RECEIVING"]`).click({force:true})
    }

    cy.get('.primary').contains('Move').click()
    cy.wait(1000)
    cy.get('.signum-notification-body__mb').should('be.visible').contains('Moving inventory')
    cy.get('.signum-notification-body__mb').should('be.visible').contains('Inventory has been moved')

    cy.wait(2000) // #3608

    cy.visit(`/containers/${container}`)
    cy.reload()
    cy.get('.bin-location-info-item a').should('not.include.text', `${from_bin_location}`)
    })
    })
  })
})