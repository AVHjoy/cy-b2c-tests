const element = require('../../support/elements').ELEMENTSPADRAO;
const elementRecuperarSenha = require('../../support/elements').ELEMENTSRECUPERARSENHA;
import '../../support/commands';


class RecuperarSenhaPage {

    acessarRecuperarSenha() {
        cy.visit(element.baseURL + '/forget-password')
    }

    preencherEmailRecuperacaoSenha(email) {
        cy.get(elementRecuperarSenha.email).should('be-')
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
    }


    

// Importar funções para checar links das redes sociais e troca e verificação de idioma no arquivo de teste, não no POM.

}

export default new RecuperarSenhaPage();
