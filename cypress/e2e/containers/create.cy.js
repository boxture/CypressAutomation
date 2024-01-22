let container
let packing_material = 'Box 1'
let bin_location='picking'

beforeEach(() => {
    cy.login({ email: 'acceptance-test+oms@boxture.com', password: 'xudrah-zygJa2-topbib'})
  })

  describe('Container', () => {
    it('Create container', () => {

    // 1. Navigate to Containers
    cy.visit('/containers')
    cy.url().should('include', '/containers')

    // 2. Click Create
    cy.get('[href="/containers/new"]').click({force: true})

    // 3. Fill in Packing Material
    cy.get('[placeholder="Packing material"]').type(packing_material, {delay:200})

    // 4. Fill in bin location
    cy.get('[placeholder="Bin location"]').type(bin_location,{delay:200})
    cy.get('[data-satis-dropdown-item-text="PICKING"]').click()

    // 5. Click Create Container
    cy.get('[type="submit"]').click()
    // cy.get('.signum-notification-body').then(e1 =>{
    //     container = e1.text().substring(11,19)
    //     cy.log(container)
    // })
    cy.get('.signum-notification-drawer-tray .py-1').first().find('a').click({force:true})
    cy.wait(5000)
    cy.url().then(($url) => {
    const url = $url.split('/')
    container = url[4]
    cy.log(container)

    })

    })


})