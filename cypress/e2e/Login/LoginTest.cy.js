import LoginPage from '../Pages/LoginPage.cy.js';

describe('Fazer login', () => {
  it('Fazer login como influencer', () => {
    
    LoginPage.acessarLogin();
    LoginPage.preencherLogin('InfluencerBR');
    
  })
  it.only('Trocar idioma da página', () => {
    LoginPage.acessarLogin();
    LoginPage.trocarIdioma('PT');
    LoginPage.verificarIdioma('PT')
  });
})