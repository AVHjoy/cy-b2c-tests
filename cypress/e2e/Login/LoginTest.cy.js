import LoginPage from '../Pages/LoginPage.cy.js';
import '../../support/commands';
describe('Fazer login', () => {
  it('Fazer login como influencer BR', () => {
    
    LoginPage.acessarLogin();
    LoginPage.preencherLogin('InfluencerBR');
    LoginPage.fazerLogin();
    
  })

  it('Fazer login como admin BR', () => {
    LoginPage.acessarLogin();
    LoginPage.preencherLogin('AdminBR'); 
    LoginPage.fazerLogin();

  });

  it('Fazer login como influencer USA', () => {
    LoginPage.acessarLogin();
    LoginPage.preencherLogin('InfluencerUSA');
    LoginPage.fazerLogin();
  });

  it('Trocar idioma da página', () => {
    LoginPage.acessarLogin();
    LoginPage.trocarIdioma('PT');
    LoginPage.verificarIdioma('PT');
  });

  it('Clicar em "Esqueceu sua senha"?', () => {
    LoginPage.acessarLogin();
    LoginPage.linkEsqueceuSenha();
  });

  it('Validar links das redes sociais', () => {
    LoginPage.acessarLogin();
    cy.validarLinksRedesSociais();
  });

  it('Validar botão de esconder/mostrar senha', () => {
  LoginPage.acessarLogin();
  LoginPage.preencherLogin('AdminBR'); 
  LoginPage.verificaBotaoMostrarSenha();
  LoginPage.verificaBotaoEsconderSenha();

  });

})