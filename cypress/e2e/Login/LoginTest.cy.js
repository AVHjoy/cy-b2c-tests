import LoginPage from './LoginPage.cy';

describe('Fazer login', () => {
  it('Fazer login como influencer', () => {
    
    LoginPage.acessarLogin();
    LoginPage.preencherLogin('InfluencerBR');
    
  })
})