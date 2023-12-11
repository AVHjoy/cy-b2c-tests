const element = require('../../support/elements').ELEMENTSPADRAO;
const element = require('../../support/elements').ELEMENTSRECUPERARSENHA;


class RecuperarSenhaPage {

    acessarRecuperarSenha() {
        cy.visit(element.baseURL + '/forget-password')
    }


}

export default new RecuperarSenhaPage();
