/* eslint-disable no-undef */
describe('Form test', () => {
  it('Should return no errors', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=input-name-login-form]').type("teste");
    cy.get('[data-cy=input-email-login-form]').type("teste@teste.com");
    cy.get('[data-cy=input-phone-login-form]').type("123456789");
    cy.get('[data-cy=input-submit-login-form]').click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Seja Bem-vindo(a)")
    })
  
  })

   it('Should return email format error', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=input-name-login-form]').type("teste");
    cy.get('[data-cy=input-email-login-form]').type("teste.teste.com");
    cy.get('[data-cy=input-phone-login-form]').type("123456789");
    cy.get('[data-cy=input-submit-login-form]').click();
    cy.get('[data-cy=input-email-login-form]').then(($input) => {
      expect($input[0].validationMessage).to.exist
    })
  
  })
})