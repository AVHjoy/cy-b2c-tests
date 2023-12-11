const elementLogin = require('../../support/elements').ELEMENTSLOGIN;
const element = require('../../support/elements').ELEMENTSPADRAO;

class LoginPage {

   acessarLogin() {
        cy.visit(element.baseURL + '/login')
    }

    preencherLogin(tipoUsuario) {
        switch(tipoUsuario) {
            case 'InfluencerBR':
                cy.get(elementLogin.user).click().type('vinijr')
                break;
            case 'GestorBR':
                cy.get(elementLogin.user).click().type('george')
                break;
            case 'AdminBR':
                cy.get(elementLogin.user).click().type('admin')
                break;    
            case 'InfluencerUSA':
                cy.get(elementLogin.user).click().type('bilbob')
                break;
            case 'GestorUSA':
                cy.get(elementLogin.user).click().type('tolkien_USA')
                break;
            case 'AdminUSA':
                cy.get(elementLogin.user).click().type('admin.usa')
                break;
            case 'InfluencerFRA':
                cy.get(elementLogin.user).click().type('Adirley_FRA')
                break;
            case 'GestorFRA':
                cy.get(elementLogin.user).click().type('equpeFrancaA2')
                break;
            case 'AdminFRA':
                cy.get(elementLogin.user).click().type('b2cfrance.admin')
                break;
        }

    cy.get(elementLogin.senha).type(elementLogin.senhaPadrao)
    cy.get(elementLogin.buttonEntrar).click()

    }

    trocarIdioma(idioma) {
        cy.get(elementLogin.buttonIdioma).click()

        switch (idioma) {
            case 'PT':
                cy.get(elementLogin.optionPt).click()
                break;
            case 'EN': 
            cy.get(elementLogin.optionEn).click()
                break;
            case 'FR':
            cy.get(elementLogin.optionFr).click()
            default:
            cy.get(elementLogin.optionPt).click()
                break;
        }
    }
    verificarIdioma() {
        cy.contains('Entrar');
    }

}

export default new LoginPage();