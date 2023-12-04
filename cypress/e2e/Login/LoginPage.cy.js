const element = require('../../support/elements').ELEMENTSLOGIN;
const element = require('../../support/elements').ELEMENTSPADRAO;

class LoginPage {

    acessarLogin() {
        cy.visit(element.baseURL + '/login')
    }

    preencherLogin(tipoUsuario) {
        switch(tipoUsuario) {
            case 'InfluencerBR':
                cy.get(element.user).click().type('vinijr')
                break;
            case 'GestorBR':
                cy.get(element.user).click().type('george')
                break;
            case 'AdminBR':
                cy.get(element.user).click().type('admin')
                break;    
            case 'InfluencerUSA':
                cy.get(element.user).click().type('bilbob')
                break;
            case 'GestorUSA':
                cy.get(element.user).click().type('tolkien_USA')
                break;
            case 'AdminUSA':
                cy.get(element.user).click().type('admin.usa')
                break;
            case 'InfluencerFRA':
                cy.get(element.user).click().type('Adirley_FRA')
                break;
            case 'GestorFRA':
                cy.get(element.user).click().type('equpeFrancaA2')
                break;
            case 'AdminFRA':
                cy.get(element.user).click().type('b2cfrance.admin')
                break;
        }

    cy.get(element.password).type(element.senhaPadrao)
    cy.get(element.buttonEntrar).click()

    }

}

export default new LoginPage();