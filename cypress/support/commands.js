Cypress.Commands.add('validarLinksRedesSociais', () => {
    cy.get('a[href="https://www.instagram.com/b2club.oficial"]').should('exist') 
    cy.get('a[href="https://br.pinterest.com/B2Clube"]').should('exist') 
    cy.get('a[href="https://www.b2cstore.com.br"]').should('exist')     
})

Cypress.Commands.add('acessarMailinator', () => {
    cy.visit('https://www.mailinator.com/v4/public/inboxes.jsp?to=testeb2c');
  });

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })