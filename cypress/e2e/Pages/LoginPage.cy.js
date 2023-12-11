const elementLogin = require('../../support/elements').ELEMENTSLOGIN;
const element = require('../../support/elements').ELEMENTSPADRAO;
import '../../support/commands';

class LoginPage {

    acessarPaginaLogin() {
        cy.visit(element.baseURL + '/login')
    }

    preencherLogin(tipoUsuario) {
        switch(tipoUsuario) {
            case 'InfluencerBRA':
                cy.get(elementLogin.user).click().type('vinijr')
                break;
            case 'GestorBRA':
                cy.get(elementLogin.user).click().type('george')
                break;
            case 'AdminBRA':
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
    }

    realizarLogin() {
        cy.get(elementLogin.buttonEntrar).click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(element.baseURL + '/dashboard')
          })
    }

    validarTrocarIdioma(idioma) {
    cy.trocarIdioma(idioma)
    }

    validarIdioma(idioma) {
    cy.validarIdioma()
    }
    
    validarLinkEsqueceuSenha() {
        cy.contains(/Esqueceu sua senha?|Forgot your password?|Mot de passe oublié?/).click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(element.baseURL + '/forget-password')
          })
    }

    validarBotaoMostrarSenha() {
        cy.get(elementLogin.buttonMostrarEsconderPassword).click()
        cy.get(elementLogin.senha).should('have.attr', 'type', 'text');

    }

    validarBotaoEsconderSenha() {
        cy.get(elementLogin.buttonMostrarEsconderPassword).click()
        cy.get(elementLogin.senha).should('have.attr', 'type', 'password');
    }
}

export default new LoginPage();