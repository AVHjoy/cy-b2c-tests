import { ELEMENTSLOGIN as elementLogin } from './elements';

Cypress.Commands.add('validarLinksRedesSociais', () => {
    cy.get('a[href="https://www.instagram.com/b2club.oficial"]').should('exist') 
    cy.get('a[href="https://br.pinterest.com/B2Clube"]').should('exist') 
    cy.get('a[href="https://www.b2cstore.com.br"]').should('exist')     
})

Cypress.Commands.add('trocarIdioma', (idioma) => {
  cy.get(elementLogin.buttonIdioma).click()

  switch (idioma) {
      case 'PT':
          cy.get(elementLogin.optionPt).click()
          break;
      case 'EN': 
      cy.get(elementLogin.optionEn).click()
          break;
      case 'FR':
      cy.get(elementLogin.optionFr).click()
      default:
          break;
  }
})

Cypress.Commands.add('validarIdioma', (idioma) => {
  switch (idioma) {
    case 'PT':
        cy.contains('Português')
        break;
    case 'EN': 
        cy.contains('English')
        break;
    case 'FR':
        cy.contains('Français')
        break;
    default:
        break;
  }
})