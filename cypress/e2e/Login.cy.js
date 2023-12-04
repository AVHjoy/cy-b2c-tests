const element = require('../support/elements').ELEMENTS;


class Login {

    acessarLogin() {
        cy.visit('https://b2clubwebhomolog.azurewebsites.net/login')
    }

    preencherLogin() {
    cy.get(element.user).click().type('vinijr')
    cy.get(element.password).type('123456')
    cy.get(element.buttonEntrar).click()

    }

}

export default new Login();