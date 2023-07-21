export class AdmainPage {
	getAdminButton() {
		return cy
			.get(
				'.border-r > .mt-5 > .flex-1 > :nth-child(15) > :nth-child(1) > .sts-sidebar-menu-item__label'
			)
			.click()
	}
	getWarehouseButton() {
		cy.get(
			'.border-r > .mt-5 > .flex-1 > :nth-child(15) > :nth-child(2) > :nth-child(3) > :nth-child(1) > .sts-sidebar-menu-item__label'
		)
			.scrollIntoView()
			.click({ force: true })
	}
	getToteButton() {
		return cy
			.get(
				'.border-r > .mt-5 > .flex-1 > :nth-child(15) > :nth-child(2) > :nth-child(3) > :nth-child(2) > :nth-child(3) > [href="/admin/totes"]'
			)
			.dblclick()
	}

	enterTote() {
		return cy.get('.border-none').clear()
	}
	clickOnPage() {
		return cy.get('.text-lg').click()
	}

	getOrderNum() {
		let number
		cy.get(
			'#rows_5e895a63-f657-42fe-937c-ba6e02ffbb8c > .cursor-pointer > :nth-child(4)'
		).then(ele => {
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
		cy.log(number) // no output
	}

	getOrderDetails() {
		cy.wait(2000)
		return cy.get('.cursor-pointer > :nth-child(7)').click()
	}
	getCreateOrder() {
		return cy.get(
			'.border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .sts-sidebar-menu-item__label'
		)
	}
	getcreateSales() {
		return cy.get(
			'.border-r > .mt-5 > .flex-1 > :nth-child(2) > :nth-child(2) > :nth-child(1) > [data-satis-sidebar-menu-item-target="submenu"] > :nth-child(3) > .sts-sidebar-menu-item__link > .sts-sidebar-menu-item__label'
		)
	}

	getCustomer() {
		return cy.get('[placeholder="Customer"]')
	}
	getProduct() {
		return cy.get('[placeholder="Product"]')
	}

	getsubmit() {
		return cy.get('.secondary').scrollIntoView()
	}
	getAction1() {
		return cy.get('.font-semibold').trigger('mouseover')
	}
	getConfirm() {
		return cy.contains('Confirm').click({ force: true })
	}

	getAction2() {
		return cy.get('.font-semibold')
	}

	getPickClick() {
		return cy.get('[placeholder="Customer"]')
	}
	getProduct() {
		return cy.get('[placeholder="Product"]')
	}
	getPackButton() {
		return cy.get('[type="submit"]')
	}
	// orderNum() {
	// 	cy.get('.text-lg.leading-6.font-medium.text-gray-900 satis-copyable').then(
	// 		element => {
	// 			let orderNum = element.text()
	// 			let k = orderNum.split('#')
	// 			let number = k[1].trim()
	// 			return number
	// 		}
	// 	)
	// }
	orderNum() {
		cy.get('.text-lg.leading-6.font-medium.text-gray-900 satis-copyable').then(
			element => {
				let orderNum = element.text()
				let k = orderNum.split('#')
				let number = k[1].trim()
				cy.wait(2000)
				cy.contains('.px-6', 'Order #' + number).click()
				// return number
			}
		)
	}
	getPicker() {
		cy.wait(2000) //needed
		cy.get('.-ml-4 div:nth-child(3)').trigger('mouseover')
		cy.contains('.pr-1', 'Assign').click()
		cy.wait(2000)
		cy.get('[placeholder="User"]').type('Aviraj')
		cy.wait(2000)
		cy.contains('.translation_missing', 'Assign').click()
		cy.wait(2000)
	}
}

export const admin = new AdmainPage()
