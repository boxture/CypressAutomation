// Improvements

// 1. Why is the global variable not working
// 2. Select bin location from the dropdown-list
// 3. from_bin_location cannot be the same as to_bin_location


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
    cy.get('[data-action="click->satis-menu#show mouseleave->satis-menu#hide"]').first().click()
    cy.resetView()

    // Get container from URL
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

    cy.pause()

    cy.get('[placeholder="From bin location"]').type(`${from_bin_location}`, {delay:200})


    //cy.get('[data-satis-dropdown-item-text="RECEIVING"]').click(`${from_bin_location}`)
        
    cy.get('[placeholder="To bin location"]').type('PICKING BIN', {delay:200})

    // cy.get('[name^="inventory_put_away[from_bin_location]"]').select('[data-satis-dropdown-item-text="RECEIVING"]')
    cy.get('.satis-dropdown [name^="inventory_put_away[from_bin_location]"]').select('RECEIVING', {force:true})

    })
    })
  })
})