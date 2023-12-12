import RecuperarSenhaPage from '../Pages/RecuperarSenhaPage.cy.js';
import '../../support/commands';

describe('Cenários da Página de Recuperação de senha', () => {

    beforeEach(() => {
    RecuperarSenhaPage.acessarRecuperarSenha();
    });
  
    it('Enviar formulário de recuperação de senha e receber a confirmação', () => {
    RecuperarSenhaPage.preencherEmailRecuperacaoSenha('abluble@mailinator.com.br')
    RecuperarSenhaPage.enviarEmailRecuperacaoSenha()
    RecuperarSenhaPage.validarMensagemSucesso()

    });

    it('Clicar em Fazer Login', () => {
    RecuperarSenhaPage.validarFazerLogin()
      
    })
  
})