/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe("Form test", () => {
  it("Should return no errors", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=input-name-login-form]").type("teste");
    cy.get("[data-cy=input-email-login-form]").type("teste");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Seja Bem-vindo(a)");
    });
  });
});
