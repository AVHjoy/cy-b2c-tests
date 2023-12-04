const element = require('../support/elements').ELEMENTS;


class Login {

    acessarLogin() {
        cy.visit('https://b2clubwebhomolog.azurewebsites.net/login')
    }

    preencherLogin(tipoUsuario) {
        switch(tipoUsuario) {
            case 'InfluencerBR':
                cy.get(element.user).click().type('vinijr')
                cy.get(element.password).type('123456')
                break;
            case 'GestorBR':
                cy.get(element.user).click().type('####')
                cy.get(element.password).type('123456')
                break;
            case 'AdminBR':
                cy.get(element.user).click().type('admin')
                cy.get(element.password).type('123456')
                break;    
            case 'InfluencerUSA':
                cy.get(element.user).click().type('eduteste')
                cy.get(element.password).type('123456')
                break;
            case 'GestorUSA':
                cy.get(element.user).click().type('keila')
                cy.get(element.password).type('123456')
                break;
            case 'AdminUSA':
                cy.get(element.user).click().type('#####')
                cy.get(element.password).type('123456')
                break;
            case 'InfluencerFRA':
                cy.get(element.user).click().type('####')
                cy.get(element.password).type('123456')
                break;
            case 'GestorFRA':
                cy.get(element.user).click().type('equpeFrancaA2')
                cy.get(element.password).type('123456')
                break;
            case 'AdminFRA':
                cy.get(element.user).click().type('b2cfrance')
                cy.get(element.password).type('123456')
                break;
        }

    cy.get(element.buttonEntrar).click()

    }

}

export default new Login();