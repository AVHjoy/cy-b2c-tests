describe('Fazer cadastro através de link de Influencer', () => {
    it('passes', () => {
      cy.visit('https://b2clubwebhomolog.azurewebsites.net/login')
    
      cy.get('#user').click()
      cy.get('#user').type('marlahonorato')
      cy.get('#password').type('123456')
      cy.contains('Log in').click()

        // Não consigo selecionar o link para indicação por falta de ID ou outro jeito de selecionar o campo

    cy.visit('https://b2clubwebhomolog.azurewebsites.net/register/marlahonorato')


    //Seria legal cofirmar se a tela apresenta o respectivo influencer
    // Caminho feliz, com todos os campos válidos
    
    cy.get('#firstName').click().type('Jorge')
    cy.get('#lastName').click().type('Valdivia')
    cy.get('#user').click().type('jorgitovaldivia')
    cy.get('#email').click().type('jorgitovaldivia@mailnator.com')
    cy.get('#password').click().type('123456')
    cy.get('#passwordConfirm').click().type('123456')




    })
  })