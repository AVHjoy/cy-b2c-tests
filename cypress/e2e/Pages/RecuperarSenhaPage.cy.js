const element = require('../../support/elements').ELEMENTSPADRAO;
const element = require('../../support/elements').ELEMENTSRECUPERARSENHA;


class RecuperarSenhaPage {

    acessarRecuperarSenha() {
        cy.visit(element.baseURL + '/forget-password')
    }

    
    
// Importar funções para checar links das redes sociais e troca e verificação de idioma no final.

}

export default new RecuperarSenhaPage();
