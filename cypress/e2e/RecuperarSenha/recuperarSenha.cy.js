describe('Recuperação de senha', () => {

  beforeEach(() => {
    cy.visit('https://b2clubwebhomolog.azurewebsites.net/login')
    cy.contains(/Esqueceu sua senha?|Forgot your password?|Mot de passe oublié?/).click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://b2clubwebhomolog.azurewebsites.net/forget-password')
    })
  })

    it('T001 - Validar Layout da Tela', () => {
      // Sistema deve apresentar: Botão 'Enviar' | Link 'Fazer login' | Links das redes sociais.
      cy.get('button').contains(/Enviar|Send|Envoyer/).should('exist')  
      cy.get('a > .text-nivello-secondary').contains(/Fazer Login|Login|Se connecter/).should('exist')  
      cy.validarLinksRedesSociais();

      // Sistema deve apresentar campo e-mail
      cy.get('#input').should('exist')

    })
      
    it('T002 - Validar funcionalidade dos botões/links', () => {
      // Sistema deve realizar processo de 'Enviar' com sucesso.
      cy.get('#input').click().type('jamilto@mailinator.com')
      cy.get('button').contains(/Enviar|Send|Envoyer/).click()  
      cy.contains(/E-mail Enviado!|Email Sent!|Email envoyé!/)

      // Sistema deve redirecionar usuário para a página de login ao clicar em 'Fazer login'
      cy.get('a > .text-nivello-secondary').contains(/Fazer Login|Login|Se connecter/).click()
      cy.location().should((loc) => {
        expect(loc.href).to.eq('https://b2clubwebhomolog.azurewebsites.net/login')
      })
      cy.validarLinksRedesSociais();
    })
  
    it('[Deve falhar] T003 - Validar campo obrigatório - Não preencher campo e-mail, clicar em Enviar', () => {
      // Sistema deve exibir mensagem solicitando preenchimento do campo  / informando que o campo "E-mail" está vazio.
        // O botão Enviar existe, porém não é clicável e não há mensagem solicitando o preenchimento do campo.
      cy.get('#input').should('exist')
      cy.get('button').contains(/Enviar|Send|Envoyer/).click()
      // O design não apresenta cenário onde o usuário não preenche o e-mail, por isso utilizei uma mensagem genérica.
      cy.contains('Insira seu e-mail').should('exist')

    })

    it('T004 - Validar layout da tela - Email enviado!', () => {
      // Sistema deve apresentar: Botão 'Reenviar e-mail' | Link 'Fazer login' | Links das redes sociais.
      cy.get('#input').type('jamilto@mailinator.com')
      cy.get('button').contains(/Enviar|Send|Envoyer/).click()
      cy.contains(/Reenviar E-mail|Resend Email|Ré-envoyer l'email/).should('exist')
      cy.get('a > .text-nivello-secondary').contains(/Fazer Login|Login|Se connecter/).should('exist')
      cy.validarLinksRedesSociais();
    })

    it('T005 - Validar Funcionalidade dos Botões/Links - Tela E-mail Enviado!', () => {
      // Validar link 'Reenviar E-mail' | Link 'Fazer login' | Links das redes sociais.
      cy.get('#input').type('jamilto@mailinator.com')
      cy.get('button').contains(/Enviar|Send|Envoyer/).click()
      cy.contains(/Reenviar E-mail|Resend Email|Ré-envoyer l'email/).click()
      cy.location().should((loc) => {
        expect(loc.href).to.eq('https://b2clubwebhomolog.azurewebsites.net/forget-password')
        })
      cy.validarLinksRedesSociais();
    })
    
    it('T006 - Validar layout da tela - Tela nova senha', () => {
      // Sistema deve apresentar: Botão 'Cadastrar' | Links das redes sociais.
      cy.visit('https://b2clubwebhomolog.azurewebsites.net/password-recovery/0844d903-916d-4746-b011-a9eb303e03d8')
      cy.contains(/Cadastrar|Register|Registre/).should('exist')
      cy.validarLinksRedesSociais();
      // Sistema deve apresentar campo 'Código' preenchido | campo 'nova senha' | campo 'Confirme a nova senha'.
      cy.get('#input').should('exist')
      cy.get(':nth-child(2) > .relative > #password').should('exist')
      cy.get(':nth-child(3) > .relative > #password').should('exist')

    })

    it('T007 - Validar Funcionalidade dos Botões/Links – Tela Nova Senha', () => {
      cy.visit('https://b2clubwebhomolog.azurewebsites.net/password-recovery/cf022fd8-b325-4371-85f2-78140445382c')

      cy.validarLinksRedesSociais();

      cy.get(':nth-child(2) > .relative > #password').type('123456')
      cy.get(':nth-child(3) > .relative > #password').type('123456')
      cy.contains(/Cadastrar|Register|Registre/).click()

    });
    
    it.only('[Deve falhar] T008 - Validar Campos Obrigatórios – Tela Nova Senha', () => {
      cy.visit('https://b2clubwebhomolog.azurewebsites.net/password-recovery/cf022fd8-b325-4371-85f2-78140445382c')

      cy.get(':nth-child(2) > .relative > #password').should('exist')
      cy.get(':nth-child(3) > .relative > #password').should('exist')

      cy.contains(/Cadastrar|Register|Registre/).click()

    });

})