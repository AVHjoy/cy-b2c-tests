const element = require('../../support/elements').ELEMENTSPADRAO;
const elementRecuperarSenha = require('../../support/elements').ELEMENTSRECUPERARSENHA;
import '../../support/commands';


class RecuperarSenhaPage {

    acessarRecuperarSenha() {
        cy.visit(element.baseURL + '/forget-password')
    }

    preencherEmailRecuperacaoSenha(email) {
        cy.get(elementRecuperarSenha.email).should('exist')
        cy.get(elementRecuperarSenha.email).should('have.value', '')
        cy.get(elementRecuperarSenha.email).type(email)
    }

    enviarEmailRecuperacaoSenha() {
        cy.get(elementRecuperarSenha.buttonEnviar)
        .should('not.have.value', 'disabled')
        .click()
    }
    validarMensagemSucesso() {
        cy.get(elementRecuperarSenha.pngEmailEnviado).should('exist')
    }

    validarFazerLogin() {
        cy.get(elementRecuperarSenha.buttonLogin).click()
        cy.location().should((loc) => {
            expect(loc.href).to.eq(element.baseURL + '/login')
        }
    )}
}


export default new RecuperarSenhaPage();
