describe('Fazer login como Influencer', () => {
  it('passes', () => {
    cy.visit('https://b2clubwebhomolog.azurewebsites.net/login')
  
    cy.get('#user').click()
    cy.get('#user').type('vinijr')
    cy.get('#password').type('123456')
    cy.contains('Log in').click()

  })
})