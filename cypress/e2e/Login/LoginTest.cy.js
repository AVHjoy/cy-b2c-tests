import LoginPage from '../Pages/LoginPage.cy.js';
import '../../support/commands';

describe('Cenários da Página de Login', () => {

  beforeEach(() => {
  LoginPage.acessarPaginaLogin();
  });

  it('Fazer login como <Influencer, Gestor, Admin - BRA, USA, FRA>', () => {
    LoginPage.preencherLogin('AdminBRA');
    LoginPage.realizarLogin();
    
  })

  it('Trocar idioma da página', () => {
    cy.trocarIdioma('PT')
    cy.validarIdioma('PT');
  });

  it.only('Clicar em "Esqueceu sua senha?"', () => {
    LoginPage.validarLinkEsqueceuSenha();
  });

  it('Validar links das redes sociais', () => {
    cy.validarLinksRedesSociais();
  });

  it('Validar botão de esconder/mostrar senha', () => {
  LoginPage.preencherLogin('AdminBR'); 
  LoginPage.validarBotaoMostrarSenha();
  LoginPage.validarBotaoEsconderSenha();

  });

})