export class ContainerPage {
	getContainerField() {
		return cy.get(
			'.border-r > .mt-5 > .flex-1 > :nth-child(6) > [href="/containers"] > .sts-sidebar-menu-item__label'
		)
	}
	getCreateContainer() {
		return cy.get(
			'.border-r > .mt-5 > .flex-1 > :nth-child(6) > :nth-child(2) > :nth-child(1) > .sts-sidebar-menu-item__link > .sts-sidebar-menu-item__label'
		)
	}
	getPackingMaterial() {
		return cy.get(
			'.grid > :nth-child(1) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1'
		)
	}
	getParentContainer() {
		return cy.get('[placeholder="Parent"]')
	}
	getBinLoc() {
		return cy.get(
			':nth-child(2) > .form-group > .satis-dropdown > :nth-child(2) > .flex-col.items-center > div.w-full > .h-12 > .flex-auto > .p-1'
		)
	}
	getSubmitButton() {
		return cy.get('.button').click()
	}

	getParentContainerNum() {
		cy.get('.signum-notification-drawer-tray div div p')
			.first()
			.then(element => {
				const container = element.text()
				let k = container.split(' ')
				let number = k[1].trim()
				cy.log(number.substring(0, 8))
				return number
			})
	}
	getChildContainerNum() {
		cy.get('.signum-notification-drawer-tray div div p')
			.first()
			.then(element => {
				const container = element.text()
				let k = container.split(' ')
				let number = k[1].trim()
				cy.log(number.substring(0, 8))
			})
	}
}
export const container = new ContainerPage()
