let container
let packing_material = 'Box 1'
let bin_location='picking'

beforeEach(() => {
    cy.login({ email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})
  })

  describe('Container', () => {
    it('Create container', () => {

    // visit container
    cy.visit('/containers')
    cy.url().should('include', '/containers')

    // create container
    cy.get('[href="/containers/new"]').click({force: true})

    // fill in packing material
    cy.get('[placeholder="Packing material"]').type(packing_material, {delay:200})

    // fill in bin location
    cy.get('[placeholder="Bin location"]').type(bin_location,{delay:200})
    cy.get('[data-satis-dropdown-item-text="PICKING"]').click()

    // click on create conatainer
    cy.get('[type="submit"]').click()

    cy.get('.signum-notification-body').then(e1 =>{
        container = e1.text().substring(11,19)
        cy.log(container)
    })

    // assert container name

    })


})