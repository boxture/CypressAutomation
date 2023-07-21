export class PickListPage {
	getToteButton() {
		return cy
			.get(
				'.border-r > .mt-5 > .flex-1 > :nth-child(15) > :nth-child(2) > :nth-child(3) > :nth-child(2) > :nth-child(3) > [href="/admin/totes"]'
			)
			.dblclick()
	}

	getPackingMaterial() {
		return cy.get('[placeholder="Packing material"]').type('box')
	}
	getTote() {
		return cy.get('[placeholder = "Tote"]')
	}

	enterTote() {
		return cy.get('.border-none').clear().type('001{enter}')
	}
	getOrderNum() {
		cy.get('.cursor-pointer > :nth-child(6)').then(ele => {
			let number = ele.text()
			cy.log(number)

			cy.get(
				'.border-r > .mt-5 > .flex-1 > :nth-child(2) > [href="/orders"] > .fa-angle-right > path'
			)
				.scrollIntoView()
				.dblclick({ force: true })
			cy.wait(5000)
			cy.get('.border-none').clear().type(number).type('{enter}')
		})
	}
	getOrderNumPlist() {
		cy.get('tr:nth-child(1) td:nth-child(6)').then(ele => {
			let number = ele.text()
			cy.log(number)

			cy.get(
				'.border-r > .mt-5 > .flex-1 > :nth-child(2) > [href="/orders"] > .fa-angle-right > path'
			)
				.scrollIntoView()
				.dblclick({ force: true })
			cy.wait(5000)
			cy.get('.border-none').clear().type(number).type('{enter}')
		})
	}

	getOrderDetails() {
		cy.wait(2000)
		return cy.get('.cursor-pointer > :nth-child(7)').click()
	}
	getfirstrowplist() {
		this.getOrderNumPlist()
		this.getOrderDetails()
		cy.contains('Pricing and values')
		cy.get('.mt-2 > .sts-menu > .sts-menu__button > .font-semibold').trigger(
			'mouseover'
		)
		cy.wait(2000)
		cy.get(
			'.mt-2 > .sts-menu > .sts-menu__items > :nth-child(2) > .cursor-pointer > .flex-1'
		).click({ force: true })
		cy.get('.button').click()
		for (let i = 0; i < 100; i++) {
			cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
				statusElement => {
					let status00 = statusElement.text()
					if (status00 === 'processing') {
						cy.wait(11000)
					}
					for (let i = 0; i < 1; i++) {
						if (status00 === 'cancelled') {
							break
						}
					}
				}
			)
		}
	}
	getsecondrowplist() {
		this.getOrderNumPlist()
		this.getOrderDetails()
		cy.contains('Pricing and values')
		cy.get('.mt-2 > .sts-menu > .sts-menu__button > .font-semibold').trigger(
			'mouseover'
		)
		cy.wait(2000)
		cy.get(
			'.mt-2 > .sts-menu > .sts-menu__items > :nth-child(2) > .cursor-pointer > .flex-1'
		).click({ force: true })
		cy.get('.button').click()
		for (let i = 0; i < 100; i++) {
			cy.get('#basic-content > .grid > :nth-child(1) > .text-sm').then(
				statusElement => {
					let status00 = statusElement.text()
					if (status00 === 'processing') {
						cy.wait(11000)
					}
					for (let i = 0; i < 1; i++) {
						if (status00 === 'cancelled') {
							break
						}
					}
				}
			)
		}
	}
}

export const plist = new PickListPage()
