describe('Recuperar senha', () => {
    it('passes', () => {
      cy.visit('https://b2clubwebhomolog.azurewebsites.net/login')
    
      //Redireciona corretamente para a página de recuperação de senha
      cy.contains('Forgot your password?').click()
      cy.location().should((loc) => {
        expect(loc.href).to.eq('https://b2clubwebhomolog.azurewebsites.net/forget-password')
        })
    //Caminho feliz, com estrutura do e-mail correto
    cy.get('#input').click().type('fulano@malinator.com')
    
    // Testar com estrutura de e-mail incorreta
    // Testar com e-mail válido
    // Testar com e-mail inválido
    })

})