describe('Recuperação de senha', () => {

    beforeEach(() => {
      cy.visit('https://b2clubwebhomolog.azurewebsites.net/login')
      cy.contains(/Esqueceu sua senha?|Forgot your password?|Mot de passe oublié?/).click()
      cy.location().should((loc) => {
        expect(loc.href).to.eq('https://b2clubwebhomolog.azurewebsites.net/forget-password')
      })
    })

    it('E-mail de recuperação', () => {
        cy.get('#input').click().type('jamilto@mailinator.com')
        cy.get('button').contains(/Enviar|Send|Envoyer/).should('exist')  
        
        cy.acessarMailinator()
            cy.wait(120000)
            cy.get('tr.ng-scope').first().then(($element) => {
                cy.wrap($element).click();
            })
            cy.contains('Redefinir senha!').click()
        }) 
         
    })
