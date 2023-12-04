const element = require('../../support/elements').ELEMENTS;

class RecuperarSenhaPage {

    acessarRecuperarSenha() {
        cy.visit(element.baseURL + '/forget-password')
    }

}

export default new RecuperarSenhaPage();
